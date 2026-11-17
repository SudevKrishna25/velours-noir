import CinematicIntro from "@/components/home/CinematicIntro";
import HeroSection from "@/components/home/HeroSection";
import MaisonManifesto from "@/components/home/MaisonManifesto";
import FragranceShowcase from "@/components/home/FragranceShowcase";
import ScentExperiencePyramid from "@/components/home/ScentExperiencePyramid";
import ArtOfComposition from "@/components/home/ArtOfComposition";
import WorldOfVeloursNoir from "@/components/home/WorldOfVeloursNoir";
import MaisonStory from "@/components/home/MaisonStory";
import JournalPreview from "@/components/home/JournalPreview";
import FinalBrandExperience from "@/components/home/FinalBrandExperience";

export default function HomePage() {
  return (
    <>
      {/* 01. Opening Cinematic Sequence */}
      <CinematicIntro />

      {/* 02. The Hero Campaign Experience */}
      <HeroSection />

      {/* 03. The Maison Manifesto */}
      <MaisonManifesto />

      {/* 04. The Fragrance Collection Showcase */}
      <FragranceShowcase />

      {/* 05. The Scent Experience Pyramid */}
      <ScentExperiencePyramid />

      {/* 06. The Art of Composition */}
      <ArtOfComposition />

      {/* 07. The World of Velours Noir */}
      <WorldOfVeloursNoir />

      {/* 08. The Maison Story */}
      <MaisonStory />

      {/* 09. Notes From Our World (Journal) */}
      <JournalPreview />

      {/* 10. Final Brand Experience */}
      <FinalBrandExperience />
    </>
  );
}
