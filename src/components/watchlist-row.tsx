"use client";

import React from "react";
import Container from "./container";
import AnimeCard from "./anime-card";
import SectionHeading from "./section-heading";
import { ROUTES } from "@/constants/routes";
import { useWatchlistStore } from "@/store/watchlist-store";

const WatchlistRow = () => {
  const items = useWatchlistStore((s) => s.items);

  if (!items.length) return null;

  return (
    <Container className="py-6 flex flex-col gap-5">
      <SectionHeading title="Watchlist" href={ROUTES.WATCHLIST} />
      <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-1">
        {items.slice(0, 16).map((item) => (
          <div key={item.id} className="w-[148px] sm:w-[168px] shrink-0">
            <AnimeCard
              title={item.title}
              poster={item.poster}
              animeId={item.id}
              href={`${ROUTES.ANIME_DETAILS}/${item.id}`}
            />
          </div>
        ))}
      </div>
    </Container>
  );
};

export default WatchlistRow;
