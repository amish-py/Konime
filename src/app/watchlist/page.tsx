"use client";

import React from "react";
import Container from "@/components/container";
import AnimeCard from "@/components/anime-card";
import { ROUTES } from "@/constants/routes";
import { useWatchlistStore } from "@/store/watchlist-store";
import Link from "next/link";

export default function WatchlistPage() {
  const items = useWatchlistStore((s) => s.items);

  return (
    <Container className="pt-10 pb-20 min-h-[75vh]">
      <p className="text-[11px] uppercase tracking-[0.3em] text-white/40 mb-2">Library</p>
      <h1 className="font-display text-5xl sm:text-7xl text-white uppercase tracking-tight">
        Watchlist
      </h1>
      <p className="mt-3 text-sm text-white/50 max-w-lg">
        Titles you marked to watch later. Saved on this device.
      </p>

      {!items.length ? (
        <div className="mt-16 border border-white/10 p-10 text-center">
          <p className="text-white/60">Your watchlist is empty.</p>
          <Link
            href={ROUTES.CATALOG}
            className="inline-flex mt-5 px-6 py-2.5 bg-konime-red text-white text-xs uppercase tracking-widest"
          >
            Browse catalog
          </Link>
        </div>
      ) : (
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-4 gap-y-8">
          {items.map((item) => (
            <AnimeCard
              key={item.id}
              title={item.title}
              poster={item.poster}
              animeId={item.id}
              href={`${ROUTES.ANIME_DETAILS}/${item.id}`}
            />
          ))}
        </div>
      )}
    </Container>
  );
}
