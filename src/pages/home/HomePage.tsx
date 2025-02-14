import type { HomeLoaderResutls } from "./homeLoader";
import { useLoaderData } from "react-router-dom";

export default function HomePage() {
  const { featuredPackages } = useLoaderData() as HomeLoaderResutls;

  console.log({ featuredPackages });
  return <div>HomePage</div>;
}
