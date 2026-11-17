import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { ArrowLeft, ArrowRight, Clock, User, Bookmark } from "lucide-react";
import { JOURNAL_ARTICLES, getArticleBySlug } from "@/data/journal";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return JOURNAL_ARTICLES.map((a) => ({
    slug: a.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: "Article Not Found | Velours Noir",
    };
  }

  return {
    title: `${article.title} | Les Carnets Noirs`,
    description: article.excerpt,
  };
}

export default async function JournalArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const otherArticles = JOURNAL_ARTICLES.filter((a) => a.slug !== article.slug);

  return (
    <article className="min-h-screen bg-[#12041A] text-[#F4EAF2] pt-24 sm:pt-28 pb-16 sm:pb-24">
      {/* Background ambient radial glow */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#3B174D]/25 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-4xl mx-auto px-4 sm:px-8 lg:px-10 relative z-10">
        {/* Navigation back */}
        <div className="mb-8 sm:mb-10 pb-3 sm:pb-4 border-b border-[#B9955B]/15 flex items-center justify-between">
          <Link
            href="/journal"
            className="group inline-flex items-center space-x-2 text-[11px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#9B709F] hover:text-[#B9955B] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
            <span>Return to Journal</span>
          </Link>

          <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-[#B9955B] font-mono">
            {article.category}
          </span>
        </div>

        {/* Article Header */}
        <header className="mb-8 sm:mb-12 text-center space-y-3 sm:space-y-4">
          <div className="flex items-center justify-center space-x-3 text-xs text-[#9B709F] font-mono">
            <span className="flex items-center space-x-1">
              <Clock className="w-3.5 h-3.5 text-[#B9955B]" />
              <span>{article.readTime}</span>
            </span>
            <span>•</span>
            <span>{article.date}</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#F4EAF2] font-light leading-tight">
            {article.title}
          </h1>

          <p className="font-serif italic text-base sm:text-2xl text-[#9B709F] max-w-2xl mx-auto px-2">
            &ldquo;{article.subtitle}&rdquo;
          </p>

          <div className="pt-2 flex items-center justify-center space-x-2 text-xs text-[#B9955B] font-mono">
            <User className="w-3.5 h-3.5" />
            <span>
              {article.author} — {article.role}
            </span>
          </div>
        </header>

        {/* Lead Hero Image */}
        <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-xl overflow-hidden border border-[#B9955B]/30 shadow-2xl mb-10 sm:mb-14">
          <Image
            src={article.image}
            alt={article.title}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#12041A]/60 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Main Body Layout */}
        <div className="space-y-10 text-sm sm:text-base leading-relaxed text-[#F4EAF2]/85 font-sans font-light">
          {/* Introductory Dropcap Paragraph */}
          <p className="font-serif text-lg sm:text-xl text-[#F4EAF2] leading-relaxed first-letter:text-5xl first-letter:font-normal first-letter:text-[#B9955B] first-letter:mr-3 first-letter:float-left first-letter:font-serif">
            {article.content.intro}
          </p>

          <div className="w-20 h-[1px] bg-[#B9955B]/40 my-8" />

          {/* Core Sections */}
          {article.content.sections.map((section, idx) => (
            <section key={idx} className="space-y-6">
              <h2 className="font-serif text-2xl sm:text-3xl text-[#F4EAF2] font-light">
                {section.heading}
              </h2>

              {section.body.map((p, pIdx) => (
                <p key={pIdx} className="leading-relaxed">
                  {p}
                </p>
              ))}

              {section.quote && (
                <blockquote className="my-8 p-6 sm:p-8 bg-[#1D0A29]/60 border-l-2 border-[#B9955B] rounded-r-lg font-serif italic text-lg sm:text-xl text-[#F4EAF2]/95 leading-relaxed">
                  &ldquo;{section.quote}&rdquo;
                </blockquote>
              )}
            </section>
          ))}

          {/* Conclusion */}
          <div className="pt-6 border-t border-white/10">
            <p className="font-serif italic text-base sm:text-lg text-[#F4EAF2]/90 leading-relaxed">
              {article.content.conclusion}
            </p>
          </div>

          {/* Tags */}
          <div className="pt-8 border-t border-white/10 flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-[#1D0A29] rounded text-[10px] uppercase tracking-wider font-mono text-[#9B709F] border border-white/5"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Related Articles Navigation */}
        <div className="mt-20 pt-12 border-t border-[#B9955B]/20">
          <h3 className="font-serif text-2xl text-[#F4EAF2] mb-8">
            Further Olfactory Inquiries
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {otherArticles.slice(0, 2).map((other) => (
              <Link
                key={other.slug}
                href={`/journal/${other.slug}`}
                className="group p-6 rounded-lg bg-[#1D0A29]/50 border border-[#B9955B]/20 hover:border-[#B9955B] transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-[9px] uppercase tracking-widest text-[#B9955B] font-mono block mb-1">
                    {other.category}
                  </span>
                  <h4 className="font-serif text-xl text-[#F4EAF2] group-hover:text-[#B9955B] transition-colors line-clamp-2">
                    {other.title}
                  </h4>
                  <p className="text-xs text-[#9B709F] mt-2 line-clamp-2">
                    {other.excerpt}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-xs text-[#B9955B]">
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
