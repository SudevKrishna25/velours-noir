export interface JournalArticle {
  id: string;
  slug: string;
  title: string;
  category: string;
  subtitle: string;
  excerpt: string;
  author: string;
  role: string;
  date: string;
  readTime: string;
  image: string;
  content: {
    intro: string;
    sections: {
      heading: string;
      body: string[];
      quote?: string;
    }[];
    conclusion: string;
  };
  tags: string[];
}

export const JOURNAL_ARTICLES: JournalArticle[] = [
  {
    id: "J-01",
    slug: "the-language-of-fragrance",
    title: "The Language of Fragrance",
    category: "OLFACTORY ESSAY",
    subtitle: "How scent bypasses the intellect to speak directly to the soul.",
    excerpt:
      "Unlike spoken words or visual symbols, an olfactory molecule requires no translation. It strikes the limbic system first, stirring dormant memory before conscious thought can intervene.",
    author: "Éléonore de Saint-Germain",
    role: "Head of Olfactory Creation",
    date: "Hiver 2026",
    readTime: "6 min read",
    image: "/images/journal_1.jpg",
    content: {
      intro:
        "In the quiet alcoves of our Parisian atelier on Place Vendôme, silence reigns supreme. Not because words are forbidden, but because the medium we sculpt exists in a realm where vocabulary continually falls short. A fragrance is a dialogue conducted without sound—an unspoken language whose grammar is composed of molecular weights, volatility curves, and primal human resonance.",
      sections: [
        {
          heading: "The Architecture of Invisibility",
          body: [
            "We live in an optical society, besieged by screens, images, and relentless visual declarations. In this relentless saturation of the visible, fragrance emerges as the ultimate rebellion: it is entirely invisible, yet undeniably commanding.",
            "When someone enters a salon wearing a masterfully formulated extrait, the air shifts. The room does not merely acknowledge their presence; it accepts their atmosphere. This is not volume—cheap fragrances shout with synthetic musk; haute perfumerie whispers with gravitational authority.",
          ],
          quote: "To wear a fragrance is to commission an invisible portrait of oneself painted upon the passing air.",
        },
        {
          heading: "Memory as the Ultimate Raw Material",
          body: [
            "The olfactory bulb in the human brain connects without detour to the amygdala and hippocampus—the ancient seats of raw emotion and episodic memory. When you inhale the cold, powdery iris of Fleur d'Ombre or the smoked dark vanilla of Nuit de Velours, you are not merely evaluating a chemical formula.",
            "You are unlocking a doorway to an evening in Saint-Germain you had long forgotten, or the specific touch of a velvet coat brushed against your arm a decade ago. Perfumers are not chemists; we are chroniclers of the unseen.",
          ],
        },
      ],
      conclusion:
        "As the world accelerates into digital abstraction, the physical ritual of applying fine perfume becomes an anchor to sensory reality. An invisible signature that lingers long after you have departed the room.",
    },
    tags: ["Olfactory Art", "Philosophy", "Parisian Atelier", "Memory"],
  },
  {
    id: "J-02",
    slug: "the-beauty-of-a-lasting-impression",
    title: "The Beauty of a Lasting Impression",
    category: "AESTHETICS & SILLAGE",
    subtitle: "Why true luxury whispers while mediocrity screams.",
    excerpt:
      "Sillage is neither projection nor power; it is the spectral trace left in empty rooms. The art of creating an impression that refuses to fade.",
    author: "Jean-Philippe Moreau",
    role: "Senior Formulation Archivist",
    date: "Automne 2026",
    readTime: "8 min read",
    image: "/images/journal_2.jpg",
    content: {
      intro:
        "The French word 'sillage' has its roots in maritime navigation. It denotes the wake carved by a vessel through still water—the rippling testament to a presence that has already moved beyond the horizon. In perfumery, this concept is both technical benchmark and spiritual aspiration.",
      sections: [
        {
          heading: "Restraint as the Mark of Mastery",
          body: [
            "Modern commercial fragrance has fallen into the trap of brute-force projection. Heavy doses of synthetic fixatives are engineered to assault elevators and overpower dinner tables. But excess projection is the antithesis of distinction.",
            "At Velours Noir, we adhere to the classic Parisian discipline: a fragrance should invite closer inspection, not demand it. The sillage must exist within the personal aura—a radius of intimacy that reveals itself only when one steps within your sphere.",
          ],
          quote: "Luxury is the art of leaving an indelible impression through the quietest possible gesture.",
        },
        {
          heading: "The Chemistry of the Dry-Down",
          body: [
            "A fragrance's greatness is judged not in the first five minutes on paper, but seven hours later on warm skin. What remains when the glittering top notes of bergamot and pink pepper have dissolved into night?",
            "In Éclat d'Or and L'Heure Violette, our base accords are anchored by natural botanical resins: benzoin tears from Siam, aged Mysore sandalwood, and fractionated dark patchouli. These molecules do not dissipate; they fuse with your sebum, becoming uniquely and irrevocably yours.",
          ],
        },
      ],
      conclusion:
        "The person who understands sillage understands time. They know that what people remember is not what you wore, but how the space felt after you walked away.",
    },
    tags: ["Sillage", "Haute Parfumerie", "Craftsmanship", "Formulation"],
  },
  {
    id: "J-03",
    slug: "the-art-of-personal-scent",
    title: "The Art of Personal Scent",
    category: "MAISON PHILOSOPHY",
    subtitle: "Finding an invisible signature that becomes inseparable from your presence.",
    excerpt:
      "A fragrance is never complete in the bottle. It requires the warmth, the chemistry, and the spirit of the wearer to achieve its intended masterpiece.",
    author: "Camille Laurent",
    role: "Brand Creative Director",
    date: "Printemps 2026",
    readTime: "5 min read",
    image: "/images/journal_3.jpg",
    content: {
      intro:
        "We are frequently asked: 'How should one choose a signature scent?' The question reveals a fundamental misunderstanding of the relationship between fragrance and identity. One does not choose a fragrance as one chooses a necktie or a handbag. A fragrance is a companion that selects you through resonance.",
      sections: [
        {
          heading: "The Skin as Canvas",
          body: [
            "In our private appointments on Place Vendôme, we never allow clients to evaluate perfumes solely on blotter strips. Paper is neutral, cold, and dead. Human skin is alive—it possesses temperature, pH balance, moisture, and emotional state.",
            "The same drop of Nuit de Velours will turn darkly smoky on one individual, while blossoming with velvety plum and honeyed amber on another. This metamorphosis is not an inconsistency; it is the poetic triumph of bespoke niche perfumery.",
          ],
          quote: "The final ingredient of any Velours Noir flacon is the pulse of the person who wears it.",
        },
        {
          heading: "The Olfactory Wardrobe",
          body: [
            "While the romantic ideal of a single lifetime signature endures, contemporary sophistication embraces nuance. One may wear Fleur d'Ombre for moments of contemplative focus, and yield to L'Heure Violette when the evening demands magnetic mystery.",
            "Your scent is the invisible architecture of your mood. Wear it with intention.",
          ],
        },
      ],
      conclusion:
        "To find your fragrance is to discover how you wish to be remembered. Not loudly, not briefly, but forever.",
    },
    tags: ["Personal Scent", "Rituals", "Identity", "Place Vendôme"],
  },
];

export function getArticleBySlug(slug: string): JournalArticle | undefined {
  return JOURNAL_ARTICLES.find((a) => a.slug === slug);
}
