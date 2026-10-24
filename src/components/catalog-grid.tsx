"use client";

import React, { useState } from "react";
import Container from "./container";
import AnimeCard from "./anime-card";
import { ROUTES } from "@/constants/routes";
import { useGetSearchAnimeResults } from "@/query/get-search-results";
import Pagination from "@/components/common/pagination";

type Props = {
  title: string;
  type?: string;
  subtitle?: string;
};

const CatalogGrid = ({ title, type = "", subtitle }: Props) => {
  const [page, setPage] = useState(1);
  const { data, isLoading } = useGetSearchAnimeResults({
    q: "",
    page,
    type,
    status: "",
    rated: "",
    season: "",
    language: "",
    sort: "most-watched",
    genres: "",
  });

  const animes = data?.animes || [];

  return (
    <Container className="pt-10 pb-20 min-h-[80vh]">
      <p className="text-[11px] uppercase tracking-[0.3em] text-white/40 mb-2">Konime</p>
      <h1 className="font-display text-[18vw] leading-[0.8] sm:text-8xl md:text-9xl text-konime-red uppercase tracking-tight">
        {title}
      </h1>
      {subtitle && (
        <p className="mt-4 max-w-xl text-sm text-white/50">{subtitle}</p>
      )}

      <div className="flex flex-wrap gap-2 mt-8 mb-10">
        {[
          { label: "All", href: ROUTES.CATALOG },
          { label: "Movies", href: ROUTES.MOVIES },
          { label: "Series", href: ROUTES.SERIES },
        ].map((tab) => {
          const active =
            (tab.label === "All" && !type) ||
            (tab.label === "Movies" && type === "movie") ||
            (tab.label === "Series" && type === "tv");
          return (
            <a
              key={tab.href}
              href={tab.href}
              className={`px-4 py-1.5 text-[11px] uppercase tracking-widest border ${
                active
                  ? "bg-konime-red border-konime-red text-white"
                  : "border-white/15 text-white/60 hover:border-white hover:text-white"
              }`}
            >
              {tab.label}
            </a>
          );
        })}
      </div>

      {isLoading ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-4 gap-y-8">
          {Array.from({ length: 18 }).map((_, idx) => (
            <div key={idx} className="aspect-[2/3] bg-white/5 animate-pulse" />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-4 gap-y-8">
          {animes.map((anime) => (
            <AnimeCard
              key={anime.id}
              title={anime.name}
              poster={anime.poster}
              format={anime.type}
              animeId={anime.id}
              href={`${ROUTES.ANIME_DETAILS}/${anime.id}`}
            />
          ))}
        </div>
      )}

      {data && data.totalPages > 1 && (
        <Pagination
          totalPages={data.totalPages}
          currentPage={page}
          handleNextPage={() => data.hasNextPage && setPage((p) => p + 1)}
          handlePageChange={(n) => setPage(n)}
          handlePreviousPage={() => page > 1 && setPage((p) => p - 1)}
        />
      )}
    </Container>
  );
};

export default CatalogGrid;
