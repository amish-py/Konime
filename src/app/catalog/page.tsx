import CatalogGrid from "@/components/catalog-grid";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Catalog",
};

export default function CatalogPage() {
  return (
    <CatalogGrid
      title="Catalog"
      subtitle="Every cover in one place. Browse popular anime, add titles to your watchlist, and pick up where you left off."
    />
  );
}
