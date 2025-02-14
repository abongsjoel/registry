import type { PackageDetials } from "../types/PackageDetails";

const FEATURED_PACKAGES = ["react", "typescript", "esbuild", "vite"];

export async function getFeaturedPackages(): Promise<PackageDetials[]> {
  const promises = FEATURED_PACKAGES.map(async (name) => {
    const rest = await fetch(`https://registry.npmjs.org/${name}`);
    return rest.json();
  });

  const data = await Promise.all(promises);

  return data as PackageDetials[];
}
