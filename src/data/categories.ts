export type Category = {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  cover: string;
  video?: string;
  count: number;
};

export const categories: Category[] = [
  {
    id: "01",
    slug: "camping-hiking",
    name: "Camping & Hiking",
    tagline: "For weekends that dare",
    cover:
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=1200&q=80",
    count: 3,
  },
  {
    id: "02",
    slug: "camera-video",
    name: "Camera & Video",
    tagline: "Capture every moment",
    cover:
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=1200&q=80",
    count: 3,
  },
  {
    id: "03",
    slug: "instruments",
    name: "Musical Instruments",
    tagline: "The stage is waiting",
    cover:
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=80",
    count: 3,
  },
  {
    id: "04",
    slug: "sound-system",
    name: "Sound System",
    tagline: "Turn up the volume",
    cover:
      "https://images.unsplash.com/photo-1518972559570-7cc1309f3229?auto=format&fit=crop&w=1200&q=80",
    count: 3,
  },
  {
    id: "05",
    slug: "gaming",
    name: "Gaming & Console",
    tagline: "Level up your weekend",
    cover:
      "https://images.unsplash.com/photo-1606318313846-ce9e39b3d3b7?auto=format&fit=crop&w=1200&q=80",
    count: 3,
  },
  {
    id: "06",
    slug: "bikes",
    name: "Bicycles",
    tagline: "Move lighter",
    cover:
      "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=1200&q=80",
    count: 3,
  },
  {
    id: "07",
    slug: "vehicles",
    name: "Motorbikes & Cars",
    tagline: "Get there faster",
    cover:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
    count: 3,
  },
  {
    id: "08",
    slug: "baby-gear",
    name: "Baby Gear",
    tagline: "Comfort for the little one",
    cover:
      "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=1200&q=80",
    count: 3,
  },
  {
    id: "09",
    slug: "formal-outfit",
    name: "Formal Outfits",
    tagline: "Elegant for every occasion",
    cover:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=80",
    count: 3,
  },
  {
    id: "10",
    slug: "costumes",
    name: "Costumes & Cosplay",
    tagline: "Be any character",
    cover:
      "https://images.unsplash.com/photo-1509909756405-be0199881695?auto=format&fit=crop&w=1200&q=80",
    count: 3,
  },
  {
    id: "11",
    slug: "outdoor-sport",
    name: "Outdoor Sports",
    tagline: "Play under open skies",
    cover:
      "https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=1200&q=80",
    count: 3,
  },
  {
    id: "12",
    slug: "party-decor",
    name: "Party & Decor",
    tagline: "Celebrate without stress",
    cover:
      "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=1200&q=80",
    count: 3,
  },
  {
    id: "13",
    slug: "electronics",
    name: "Electronics & Projector",
    tagline: "Bigger screens, faster work",
    cover:
      "https://images.unsplash.com/photo-1626544827763-d516dce335e2?auto=format&fit=crop&w=1200&q=80",
    count: 3,
  },
  {
    id: "14",
    slug: "studio",
    name: "Photo & Video Studio",
    tagline: "Pro setup in a day",
    cover:
      "https://images.unsplash.com/photo-1533450718592-29d45a68af71?auto=format&fit=crop&w=1200&q=80",
    count: 3,
  },
  {
    id: "15",
    slug: "tools",
    name: "Power Tools",
    tagline: "Tools for every project",
    cover:
      "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=1200&q=80",
    count: 3,
  },
];

export const findCategory = (slug: string) =>
  categories.find((c) => c.slug === slug);
