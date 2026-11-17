import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { JOURNAL_ARTICLES } from "@/data/journal";

export const metadata = {
  title: "Les Carnets Noirs | Journal Éditorial Velours Noir",
  description:
    "Essays on olfactory art, the psychology of sillage, and the philosophy of niche Parisian perfumery.",
};

export default function JournalPage() {
  const featured = JOURNAL_ARTICLES[0];
  const others = JOURNAL_ARTICLES.slice(1);

  return (
    <div className="min-h-screen bg-[#12041A] text-[#F4EAF2] pt-24 sm:pt-32 pb-16 sm:pb-24">
      {/* Background ambient glow */}
      <div className="absolute top-28 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#3B174D]/25 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-20">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-[#B9955B]/30 bg-[#3B174D]/30 mb-3 sm:mb-4">
            <BookOpen className="w-3.5 h-3.5 text-[#B9955B]" />
            <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[#B9955B] font-mono">
              Les Carnets Noirs • Revue Éditoriale
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-6xl md:text-7xl font-light text-[#F4EAF2] tracking-tight">
            NOTES FROM
            <br />
            <span className="italic font-normal gold-gradient-text">
              OUR WORLD
            </span>
          </h1>

          <p className="font-sans text-xs sm:text-sm text-[#9B709F] mt-3 sm:mt-4 max-w-xl mx-auto leading-relaxed px-2">
            Critical essays on olfactory architecture, the philosophy of
            invisible presence, and conversations with master perfumers in
            Paris and Grasse.
          </p>
        </div>

        {/* Featured Editorial Article */}
        <div className="mb-12 sm:mb-20">
          <Link
            href={`/journal/${featured.slug}`}
            className="group grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center bg-[#1D0A29]/60 border border-[#B9955B]/30 rounded-xl overflow-hidden hover:border-[#B9955B] transition-all duration-500 shadow-2xl p-5 sm:p-10"
          >
            <div className="lg:col-span-7 relative aspect-[16/10] w-full rounded overflow-hidden">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                priority
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1D0A29]/60 via-transparent to-transparent pointer-events-none" />
              <span className="absolute top-4 left-4 px-3 py-1 bg-[#12041A]/90 backdrop-blur-md rounded text-[9px] uppercase tracking-widest text-[#B9955B] font-mono border border-white/10">
                Featured Essay
              </span>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center space-x-3 text-[10px] text-[#9B709F] font-mono">
                <span>{featured.category}</span>
                <span>•</span>
                <span>{featured.readTime}</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl text-[#F4EAF2] group-hover:text-[#B9955B] transition-colors leading-snug">
                {featured.title}
              </h2>

              <p className="font-serif italic text-sm text-[#9B709F]">
                &ldquo;{featured.subtitle}&rdquo;
              </p>

              <p className="font-sans text-xs sm:text-sm text-[#F4EAF2]/80 leading-relaxed line-clamp-3">
                {featured.excerpt}
              </p>

              <div className="pt-4 flex items-center justify-between border-t border-white/5">
                <span className="text-[11px] text-[#9B709F] font-mono">
                  {featured.author}
                </span>
                <span className="inline-flex items-center text-xs uppercase tracking-wider text-[#B9955B] font-medium">
                  <span>Read Essay</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          </Link>
        </div>

        {/* Secondary Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {others.map((article) => (
            <article
              key={article.slug}
              className="group flex flex-col justify-between bg-[#1D0A29]/40 border border-[#B9955B]/20 rounded-lg overflow-hidden hover:border-[#B9955B] transition-all duration-500 shadow-xl"
            >
              <div>
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-0.5 bg-[#12041A]/85 backdrop-blur-md rounded text-[9px] uppercase tracking-widest text-[#B9955B] font-mono">
                    {article.category}
                  </span>
                </div>

                <div className="p-8 space-y-3">
                  <div className="flex items-center justify-between text-[10px] text-[#9B709F] font-mono">
                    <span>{article.date}</span>
                    <span>{article.readTime}</span>
                  </div>

                  <h3 className="font-serif text-2xl text-[#F4EAF2] group-hover:text-[#B9955B] transition-colors leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-xs text-[#9B709F] leading-relaxed line-clamp-3 font-sans">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-8 pt-0 border-t border-white/5 flex items-center justify-between mt-4">
                <span className="text-[11px] text-[#9B709F] font-mono">
                  By {article.author}
                </span>

                <Link
                  href={`/journal/${article.slug}`}
                  className="inline-flex items-center text-xs uppercase tracking-wider text-[#B9955B] group-hover:text-[#F4EAF2] transition-colors font-medium"
                >
                  <span className="mr-1">Read Essay</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
