import CatalogGrid from "@/components/catalog-grid";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Movies",
};

export default function MoviesPage() {
  return (
    <CatalogGrid
      title="Movies"
      type="movie"
      subtitle="Feature-length anime films, collected as a flat cover wall."
    />
  );
}
