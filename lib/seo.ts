export const SITE_NAME = "Silenceside Ecos";
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://silencesideecos.com"
).replace(/\/+$/, "");

export function absoluteUrl(path: string): string {
  if (/^https?:\/\//i.test(path)) {
    return path;
  }

  return new URL(path, SITE_URL).toString();
}
