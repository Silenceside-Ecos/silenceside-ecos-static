export const SITE_NAME = "Silenceside Ecos";
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://silencesideecos.com"
).replace(/\/+$/, "");

type BreadcrumbItemInput = {
  name: string;
  path: string;
};

export function absoluteUrl(path: string): string {
  if (/^https?:\/\//i.test(path)) {
    return path;
  }

  return new URL(path, SITE_URL).toString();
}

export function buildBreadcrumbListJsonLd(
  items: BreadcrumbItemInput[],
  idPath?: string,
) {
  const fallbackPath = items.at(-1)?.path ?? "/";

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${absoluteUrl(idPath ?? fallbackPath)}#breadcrumb`,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
