"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "./container";
import SectionHeading from "./section-heading";
import { MediaList } from "@/types/miruro-api";
import { ROUTES } from "@/constants/routes";
import { ArrowRight } from "lucide-react";

type Props = {
  title: string;
  animeList: MediaList[];
  loading?: boolean;
};

const NewsStrip = ({ title, animeList, loading }: Props) => {
  if (loading) {
    return (
      <Container className="py-10">
        <SectionHeading title={title} href={ROUTES.CATALOG} />
        <div className="grid md:grid-cols-3 gap-8 mt-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-24 bg-white/5 animate-pulse" />
          ))}
        </div>
      </Container>
    );
  }

  if (!animeList?.length) return null;

  return (
    <Container className="py-10">
      <SectionHeading title={title} href={ROUTES.CATALOG} />
      <div className="grid md:grid-cols-3 gap-x-10 gap-y-7 mt-6">
        {animeList.map((anime) => {
          const name =
            anime.title?.english || anime.title?.romaji || anime.title?.native || "Untitled";
          const poster = anime.coverImage?.extraLarge || anime.coverImage?.large || "";
          const desc = (anime as any).description
            ? String((anime as any).description).replace(/<[^>]*>?/gm, "")
            : "Watch now on Konime.";

          return (
            <div key={anime.id} className="flex gap-4">
              <Link
                href={`${ROUTES.ANIME_DETAILS}/${anime.id}`}
                className="relative h-[92px] w-[66px] shrink-0 overflow-hidden border border-white/10"
              >
                {poster && (
                  <Image src={poster} alt={name} fill className="object-cover" unoptimized />
                )}
              </Link>
              <div className="min-w-0">
                <Link
                  href={`${ROUTES.ANIME_DETAILS}/${anime.id}`}
                  className="block text-sm font-semibold uppercase tracking-wide text-white hover:text-konime-red line-clamp-1"
                >
                  {name}
                </Link>
                <p className="text-xs text-white/45 mt-1 line-clamp-2 leading-relaxed">{desc}</p>
                <Link
                  href={`${ROUTES.WATCH}?anime=${anime.id}&ep=1`}
                  className="inline-flex items-center gap-1 mt-2 text-[11px] uppercase tracking-widest text-konime-red"
                >
                  Watch now <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default NewsStrip;
