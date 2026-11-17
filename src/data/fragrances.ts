export interface ScentNote {
  name: string;
  category: "top" | "heart" | "base";
  description: string;
}

export interface Fragrance {
  id: string;
  slug: string;
  name: string;
  frenchTitle: string;
  tagline: string;
  personality: string;
  concentration: string;
  volume: string;
  year: string;
  dominantColor: string;
  accentColor: string;
  image: string;
  detailImage: string;
  atmosphereImage: string;
  headlineQuote: string;
  shortDescription: string;
  longDescription: string;
  sensoryProfile: {
    intensity: number; // 1-100
    sillage: number;
    longevity: number;
    mystery: number;
    warmth: number;
  };
  notes: {
    top: ScentNote[];
    heart: ScentNote[];
    base: ScentNote[];
  };
  keyAccords: string[];
  olfactiveFamily: string;
  ritualOfApplication: string;
  relatedSlugs: string[];
}

export const FRAGRANCES: Fragrance[] = [
  {
    id: "VN-01",
    slug: "nuit-de-velours",
    name: "NUIT DE VELOURS",
    frenchTitle: "Nuit de Velours",
    tagline: "Mysterious, sensual, deep.",
    personality: "Enigmatic & Sensual",
    concentration: "Extrait de Parfum (32% Concentration)",
    volume: "100ml / 3.4 FL. OZ.",
    year: "Collection Privée",
    dominantColor: "#3B174D",
    accentColor: "#B9955B",
    image: "/images/fragrance_nuit.jpg",
    detailImage: "/images/hero_bottle.jpg",
    atmosphereImage: "/images/art_signature.jpg",
    headlineQuote: "A scent of twilight whispers and velvet shadows.",
    shortDescription:
      "A deep immersion into nocturnal luxury. Velvety black vanilla wrapped in smoldering amber and dark smoked woods.",
    longDescription:
      "Nuit de Velours is an olfactory study in contrast: the tactile richness of heavy black velvet juxtaposed against the warmth of human skin. Opening with an arresting flourish of saffron noir and smoked bergamot, the fragrance descends into an opulent heart of dark Bulgarian rose and black plum. In the dry-down, precious Madagascan vanilla pods meet sacred cistus amber and smoked cedarwood, leaving a lingering trail that commands silence in crowded rooms.",
    sensoryProfile: {
      intensity: 95,
      sillage: 92,
      longevity: 98,
      mystery: 96,
      warmth: 88,
    },
    notes: {
      top: [
        { name: "Saffron Noir", category: "top", description: "Rich, bittersweet metallic warmth from Persian stamens." },
        { name: "Smoked Bergamot", category: "top", description: "Crisp Italian citrus touched by subtle chimney smoke." },
        { name: "Violet Leaf", category: "top", description: "Green, ozonic crispness that cuts through shadow." },
      ],
      heart: [
        { name: "Black Plum Accord", category: "heart", description: "Lush, dark fruit liqueur steeped in shadow." },
        { name: "Bulgarian Damascena Rose", category: "heart", description: "Velvety petals harvested at 4 AM before sunrise." },
        { name: "Midnight Orchid", category: "heart", description: "Sensual floral magnetism that blooms only after dusk." },
      ],
      base: [
        { name: "Madagascan Black Vanilla", category: "base", description: "Rare Bourbon vanilla aged in charred oak casks." },
        { name: "Cistus Amber Tears", category: "base", description: "Golden resinous resin conferring ancient depth." },
        { name: "Smoked Cedarwood", category: "base", description: "Architectural wood grain soaked in balsamic incense." },
      ],
    },
    keyAccords: ["Smoked Woods", "Black Vanilla", "Dark Plum", "Resinous Amber", "Violet Velvet"],
    olfactiveFamily: "Woody Ambery Oriental",
    ritualOfApplication:
      "Mist onto pulse points—the warm hollow of the collarbone and inner wrists—allowing body heat to slowly awaken the velvet sillage. Never rub the wrists together, preserving the structural integrity of the delicate top notes.",
    relatedSlugs: ["fleur-dombre", "lheure-violette"],
  },
  {
    id: "VN-02",
    slug: "fleur-dombre",
    name: "FLEUR D'OMBRE",
    frenchTitle: "Fleur d'Ombre",
    tagline: "Floral, delicate, sophisticated.",
    personality: "Poetic & Ethereal",
    concentration: "Eau de Parfum Intense (26% Concentration)",
    volume: "100ml / 3.4 FL. OZ.",
    year: "Collection Privée",
    dominantColor: "#9B709F",
    accentColor: "#F4EAF2",
    image: "/images/fragrance_fleur.jpg",
    detailImage: "/images/manifesto_orchid.jpg",
    atmosphereImage: "/images/art_inspiration.jpg",
    headlineQuote: "Flowers blooming under moonlit glass in an enchanted Parisian conservatory.",
    shortDescription:
      "A poetic study in botanical shadows. Powdery French violet and Florentine orris butter draped in misty white suede.",
    longDescription:
      "Fleur d'Ombre captures the elusive scent of petals exhaling in cool shade. Abandoning traditional sweet floral tropes, this composition treats violet and iris as sculptural materials. Dewy mauve petals and crisp angelica lead into the majestic heart of rare Florentine iris butter—aged for five years in our Grasse vaults—before melting into an intimate skin-scent of soft white suede and ambrette.",
    sensoryProfile: {
      intensity: 80,
      sillage: 82,
      longevity: 89,
      mystery: 90,
      warmth: 75,
    },
    notes: {
      top: [
        { name: "Dewy Mauve Petals", category: "top", description: "Aqueous morning dew clinging to nocturnal petals." },
        { name: "Pink Peppercorn", category: "top", description: "Vibrant, sparkling sparkle with rosy nuances." },
        { name: "Angelica Seed", category: "top", description: "Herbal, crystalline architecture providing lift." },
      ],
      heart: [
        { name: "French Violet Petals", category: "heart", description: "Soft, melancholic floral with delicate powdery elegance." },
        { name: "Florentine Orris Butter", category: "heart", description: "The crown jewel of perfumery, rich and buttery soft." },
        { name: "Grasse May Rose", category: "heart", description: "Subtle honeyed rose giving fullness to the heart." },
      ],
      base: [
        { name: "White Suede", category: "base", description: "Supple, tactile leather finish like glove-soft kidskin." },
        { name: "Ambrette Seed", category: "base", description: "Natural botanical musk with pear-like undertones." },
        { name: "Vetiver Bourbon", category: "base", description: "Earthy, smoky roots grounding the celestial florals." },
      ],
    },
    keyAccords: ["Florentine Orris", "French Violet", "Dewy Florals", "White Suede", "Powdery Woods"],
    olfactiveFamily: "Floral Woody Powdery",
    ritualOfApplication:
      "Spray in a gentle arc above the hair and shoulders, allowing an ephemeral cloud of botanical mist to settle seamlessly like a second skin.",
    relatedSlugs: ["lheure-violette", "eclat-dor"],
  },
  {
    id: "VN-03",
    slug: "eclat-dor",
    name: "ÉCLAT D'OR",
    frenchTitle: "Éclat d'Or",
    tagline: "Radiant, refined, warm.",
    personality: "Luminous & Aristocratic",
    concentration: "Extrait de Parfum (30% Concentration)",
    volume: "100ml / 3.4 FL. OZ.",
    year: "Collection Privée",
    dominantColor: "#B9955B",
    accentColor: "#3B174D",
    image: "/images/fragrance_eclat.jpg",
    detailImage: "/images/art_composition.jpg",
    atmosphereImage: "/images/campaign_2.jpg",
    headlineQuote: "The lingering aura of liquid sunlight caught in heavy hand-cut crystal.",
    shortDescription:
      "A radiant symphony of warm luxury. Precious golden saffron and resinous benzoin wrapped in sun-drenched sandalwood.",
    longDescription:
      "Éclat d'Or is warmth elevated to pure art. Inspired by the golden light filtering through gilded Parisian salon windows at dusk, it opens with pure Persian saffron, sparkling bitter orange, and aromatic green cardamom. The heart unfolds like melted gold: honeyed osmanthus and everlasting immortelle flowers, anchored by ancient sandalwood album and warm benzoin tears.",
    sensoryProfile: {
      intensity: 90,
      sillage: 88,
      longevity: 94,
      mystery: 84,
      warmth: 98,
    },
    notes: {
      top: [
        { name: "Persian Saffron", category: "top", description: "Fiery, golden threads offering aristocratic warmth." },
        { name: "Bitter Orange Peel", category: "top", description: "Sun-drenched citrus providing bright golden radiance." },
        { name: "Green Cardamom", category: "top", description: "Cool-spicy camphoric sparkle." },
      ],
      heart: [
        { name: "Liquid Golden Amber", category: "heart", description: "Molten solar nectar creating enveloping comfort." },
        { name: "Chinese Osmanthus", category: "heart", description: "Golden apricot blossom with delicate leather facets." },
        { name: "Corsican Immortelle", category: "heart", description: "Sun-baked golden flower with maple and honey hints." },
      ],
      base: [
        { name: "Sandalwood Album", category: "base", description: "Creamy, sacred wood distilled from mature Mysore logs." },
        { name: "Benzoin Tears", category: "base", description: "Golden Siamese resin with balsamic vanilla sweetness." },
        { name: "Golden Patchouli", category: "base", description: "Clean, fractionated patchouli stripped of earthy dampness." },
      ],
    },
    keyAccords: ["Golden Amber", "Mysore Sandalwood", "Persian Saffron", "Solar Osmanthus", "Warm Spices"],
    olfactiveFamily: "Solar Amber Woody",
    ritualOfApplication:
      "Press gently onto the warm nape of the neck and chest as evening approaches to unlock the luminous golden sillage as shadows lengthen.",
    relatedSlugs: ["nuit-de-velours", "fleur-dombre"],
  },
  {
    id: "VN-04",
    slug: "lheure-violette",
    name: "L'HEURE VIOLETTE",
    frenchTitle: "L'Heure Violette",
    tagline: "Artistic, enigmatic, romantic.",
    personality: "Avant-Garde & Romantic",
    concentration: "Extrait de Parfum (28% Concentration)",
    volume: "100ml / 3.4 FL. OZ.",
    year: "Collection Privée",
    dominantColor: "#633A78",
    accentColor: "#9B709F",
    image: "/images/fragrance_violette.jpg",
    detailImage: "/images/campaign_3.jpg",
    atmosphereImage: "/images/manifesto_orchid.jpg",
    headlineQuote: "Between day and night lies the violet hour—where secrets are spoken in scent.",
    shortDescription:
      "A cinematic exploration of the Parisian dusk. Dark blackcurrant liqueur, royal violet flower, and velvety patchouli musk.",
    longDescription:
      "L'Heure Violette pays homage to that fleeting moment in Paris when the sky turns from deep mauve to royal violet. It begins with the intoxicating bite of tart blackcurrant nectar and sparkling bergamot, leading effortlessly into a heart of rare royal violet petals and nocturnal heliotrope. The dry-down settles into an addictive embrace of dark velvet musk and oakmoss, creating an aura of timeless romantic allure.",
    sensoryProfile: {
      intensity: 88,
      sillage: 90,
      longevity: 93,
      mystery: 95,
      warmth: 82,
    },
    notes: {
      top: [
        { name: "Blackcurrant Nectar", category: "top", description: "Rich, tart berry cordial steeped in dark liqueur." },
        { name: "Wild Blackberry", category: "top", description: "Sun-ripened briar fruit with juicy sweetness." },
        { name: "Calabrian Bergamot", category: "top", description: "Refined citrus sparkle opening the twilight portal." },
      ],
      heart: [
        { name: "Royal Violet Flower", category: "heart", description: "The maison's signature emblem: dark, regal and melancholic." },
        { name: "Night Jasmine", category: "heart", description: "Indolic, intoxicating blossoms gathered under moonlight." },
        { name: "Purple Heliotrope", category: "heart", description: "Almond-marzipan floral whispers of classic vintage Paris." },
      ],
      base: [
        { name: "Dark Velvet Musk", category: "base", description: "Sensual, clean-animalic aura that hugs the skin." },
        { name: "Patchouli Cœur", category: "base", description: "Noble heart cut of Indonesian patchouli, dark and velvety." },
        { name: "French Oakmoss", category: "base", description: "Dusk-forest floor accord that imparts chypre sophistication." },
      ],
    },
    keyAccords: ["Dark Berries", "Royal Violet", "Velvet Musk", "Chypre Rose", "Nocturnal Woods"],
    olfactiveFamily: "Chypre Fruity Floral",
    ritualOfApplication:
      "Anoint the hollow behind each ear and the inside of the wrists during the twilight hour to embody Parisian romantic enigma as you move into the night.",
    relatedSlugs: ["nuit-de-velours", "fleur-dombre"],
  },
];

export function getFragranceBySlug(slug: string): Fragrance | undefined {
  return FRAGRANCES.find((f) => f.slug === slug);
}
