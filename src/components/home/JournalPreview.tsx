"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { JOURNAL_ARTICLES } from "@/data/journal";

export default function JournalPreview() {
  return (
    <section className="relative py-28 sm:py-36 bg-[#160620] text-[#F4EAF2] overflow-hidden border-t border-[#B9955B]/15">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-[#B9955B]/20">
          <div>
            <div className="flex items-center space-x-2 text-[#B9955B] mb-2">
              <BookOpen className="w-3.5 h-3.5" />
              <span className="text-[10px] uppercase tracking-[0.3em] font-mono">
                07 — Les Carnets Noirs
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-light text-[#F4EAF2] tracking-tight">
              NOTES FROM
              <br />
              <span className="italic font-normal gold-gradient-text">
                OUR WORLD.
              </span>
            </h2>
          </div>

          <div className="mt-6 md:mt-0">
            <Link
              href="/journal"
              className="group inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-[#B9955B] hover:text-[#F4EAF2] transition-colors py-2 px-4 rounded-full border border-[#B9955B]/30 hover:border-[#B9955B]"
            >
              <span>Explore All Essays</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* 3 Editorial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {JOURNAL_ARTICLES.map((article) => (
            <article
              key={article.slug}
              className="group flex flex-col justify-between bg-[#1D0A29]/60 border border-[#B9955B]/25 rounded overflow-hidden hover:border-[#B9955B] transition-all duration-500 shadow-xl"
            >
              <div>
                {/* Article Image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1D0A29] via-transparent to-transparent pointer-events-none" />

                  <span className="absolute top-3 left-3 px-2 py-0.5 bg-[#12041A]/80 backdrop-blur-md rounded text-[9px] uppercase tracking-widest text-[#B9955B] font-mono border border-white/10">
                    {article.category}
                  </span>
                </div>

                {/* Article Details */}
                <div className="p-6">
                  <div className="flex items-center justify-between text-[10px] text-[#9B709F] font-mono mb-2">
                    <span>{article.date}</span>
                    <span>{article.readTime}</span>
                  </div>

                  <h3 className="font-serif text-2xl text-[#F4EAF2] group-hover:text-[#B9955B] transition-colors line-clamp-2 leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-xs text-[#9B709F] mt-2 line-clamp-3 leading-relaxed font-sans">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              {/* Bottom Action */}
              <div className="p-6 pt-0 border-t border-white/5 flex items-center justify-between mt-4">
                <span className="text-[10px] uppercase tracking-wider text-[#9B709F] font-mono">
                  By {article.author}
                </span>

                <Link
                  href={`/journal/${article.slug}`}
                  className="inline-flex items-center text-xs uppercase tracking-wider text-[#B9955B] group-hover:text-[#F4EAF2] transition-colors"
                >
                  <span className="mr-1">Read Essay</span>
                  <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
