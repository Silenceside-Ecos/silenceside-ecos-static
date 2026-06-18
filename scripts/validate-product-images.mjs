import fs from "node:fs";
import path from "node:path";

const repoRoot = process.cwd();
const manifestPath = path.join(repoRoot, "data", "product-image-routes.json");
const productsFilePath = path.join(repoRoot, "lib", "services", "productos.ts");
const publicDir = path.join(repoRoot, "public");

function fail(message) {
  console.error(`ERROR: ${message}`);
  process.exitCode = 1;
}

function info(message) {
  console.log(message);
}

if (!fs.existsSync(manifestPath)) {
  fail(`Manifest file not found at ${manifestPath}`);
  process.exit();
}

if (!fs.existsSync(productsFilePath)) {
  fail(`Products source file not found at ${productsFilePath}`);
  process.exit();
}

const manifestRaw = fs.readFileSync(manifestPath, "utf8");
const productsRaw = fs.readFileSync(productsFilePath, "utf8");

let manifest;
try {
  manifest = JSON.parse(manifestRaw);
} catch {
  fail("Manifest is not valid JSON.");
  process.exit();
}

if (
  typeof manifest !== "object" ||
  manifest == null ||
  Array.isArray(manifest)
) {
  fail("Manifest must be a JSON object keyed by product id.");
  process.exit();
}

const productIds = new Set();
for (const match of productsRaw.matchAll(/id:\s*"([^"]+)"/g)) {
  productIds.add(match[1]);
}

if (productIds.size === 0) {
  fail("No product IDs were detected in lib/services/productos.ts.");
  process.exit();
}

let totalImageRoutes = 0;
const missingManifestIds = [];
const invalidManifestIds = [];
const invalidRoutes = [];
const missingFiles = [];

for (const [productId, routes] of Object.entries(manifest)) {
  if (!productIds.has(productId)) {
    invalidManifestIds.push(productId);
    continue;
  }

  if (!Array.isArray(routes)) {
    invalidRoutes.push({ productId, route: "<empty>" });
    continue;
  }

  for (const route of routes) {
    totalImageRoutes += 1;

    if (typeof route !== "string" || route.trim().length === 0) {
      invalidRoutes.push({ productId, route: String(route) });
      continue;
    }

    const normalizedRoute = route.trim();

    if (
      !normalizedRoute.startsWith("/") ||
      normalizedRoute === "/" ||
      normalizedRoute.startsWith("//")
    ) {
      invalidRoutes.push({ productId, route: normalizedRoute });
      continue;
    }

    const filePath = path.resolve(publicDir, normalizedRoute.replace(/^\//, ""));
    if (!filePath.startsWith(publicDir + path.sep) && filePath !== publicDir) {
      invalidRoutes.push({ productId, route: normalizedRoute });
      continue;
    }

    if (filePath === publicDir) {
      invalidRoutes.push({ productId, route: normalizedRoute });
      continue;
    }

    if (!fs.existsSync(filePath)) {
      missingFiles.push({ productId, route: normalizedRoute, filePath });
      continue;
    }

    if (!fs.statSync(filePath).isFile()) {
      invalidRoutes.push({ productId, route: normalizedRoute });
    }
  }
}

for (const productId of productIds) {
  if (!(productId in manifest)) {
    missingManifestIds.push(productId);
  }
}

if (invalidManifestIds.length > 0) {
  fail(`Manifest has unknown product ids: ${invalidManifestIds.join(", ")}`);
}

if (invalidRoutes.length > 0) {
  for (const item of invalidRoutes) {
    fail(`Invalid route for ${item.productId}: ${item.route}`);
  }
}

if (missingFiles.length > 0) {
  for (const item of missingFiles) {
    fail(
      `Missing file for ${item.productId}: ${item.route} -> ${item.filePath}`,
    );
  }
}

info(
  `Validated ${Object.keys(manifest).length} manifest entries and ${totalImageRoutes} image routes.`,
);

if (missingManifestIds.length > 0) {
  info(
    `Warning: ${missingManifestIds.length} products do not yet have image routes in manifest.`,
  );
}

if (process.exitCode && process.exitCode !== 0) {
  process.exit(process.exitCode);
}
