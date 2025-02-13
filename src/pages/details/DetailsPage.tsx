import type { DetailsLoaderResults } from "./detailsLoader";
import { useLoaderData } from "react-router-dom";

export default function DetailsPage() {
  const { details } = useLoaderData() as DetailsLoaderResults;

  return (
    <div>
      {details.name} - {details.description}
    </div>
  );
}
