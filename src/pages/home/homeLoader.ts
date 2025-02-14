import { getFeaturedPackages } from "../../api/queries/getFeaturedPackages";
import type { PackageDetials } from "../../api/types/PackageDetails";

export interface HomeLoaderResutls {
  featuredPackages: PackageDetials[];
}

export async function homeLoader(): Promise<HomeLoaderResutls> {
  const featuredPackages = await getFeaturedPackages();

  return {
    featuredPackages,
  };
}
