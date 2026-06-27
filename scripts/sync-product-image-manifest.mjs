import fs from "node:fs";
import path from "node:path";

const repoRoot = process.cwd();
const productsFilePath = path.join(repoRoot, "lib", "services", "productos.ts");
const manifestPath = path.join(repoRoot, "data", "product-image-routes.json");
const publicProductsDir = path.join(repoRoot, "public", "productos-media");
const legacyRoutePrefix = "/productos/";
const routePrefix = "/productos-media/";

function normalizeProductImageRoute(route) {
  return typeof route === "string" && route.startsWith(legacyRoutePrefix)
    ? route.replace(legacyRoutePrefix, routePrefix)
    : route;
}

const productsRaw = fs.readFileSync(productsFilePath, "utf8");
const productIds = [...productsRaw.matchAll(/id:\s*"([^"]+)"/g)].map(
  (m) => m[1],
);

if (productIds.length === 0) {
  throw new Error("No product ids found in lib/services/productos.ts");
}

let manifest = {};
if (fs.existsSync(manifestPath)) {
  try {
    manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
  } catch {
    throw new Error(
      `Failed to parse JSON manifest at ${manifestPath}. Ensure it contains valid JSON.`,
    );
  }
}

if (
  typeof manifest !== "object" ||
  manifest == null ||
  Array.isArray(manifest)
) {
  throw new Error(
    "data/product-image-routes.json must be an object keyed by product id",
  );
}

fs.mkdirSync(publicProductsDir, { recursive: true });

const nextManifest = {};
for (const id of productIds) {
  const existing = manifest[id];
  nextManifest[id] = Array.isArray(existing)
    ? existing.map(normalizeProductImageRoute)
    : [];

  const folderPath = path.join(publicProductsDir, id);
  fs.mkdirSync(folderPath, { recursive: true });
}

const productIdSet = new Set(productIds);
const unknownManifestIds = Object.keys(manifest).filter(
  (id) => !productIdSet.has(id),
);

fs.writeFileSync(
  manifestPath,
  `${JSON.stringify(nextManifest, null, 2)}\n`,
  "utf8",
);

console.log(`Products found: ${productIds.length}`);
console.log(`Folders ensured: public/productos-media/<id> for all products`);
console.log(`Manifest synced: ${manifestPath}`);
if (unknownManifestIds.length > 0) {
  console.log(
    `Dropped unknown manifest entries: ${unknownManifestIds.join(", ")}`,
  );
}
