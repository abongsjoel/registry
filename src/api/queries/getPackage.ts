import type { PackageDetials } from "../types/PackageDetails";

export async function getPackage(name: string): Promise<PackageDetials> {
  const res = await fetch(`https://registry.npmjs.org/${name}`);
  const data = await res.json();

  return data as PackageDetials;
}
