import CatalogGrid from "@/components/catalog-grid";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Series",
};

export default function SeriesPage() {
  return (
    <CatalogGrid
      title="Series"
      type="tv"
      subtitle="TV anime you can binge, track, and keep on your watchlist."
    />
  );
}
