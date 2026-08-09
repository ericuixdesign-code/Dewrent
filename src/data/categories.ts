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
    tagline: "Untuk weekend yang berani",
    cover:
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=1200&q=80",
    count: 3,
  },
  {
    id: "02",
    slug: "kamera-video",
    name: "Kamera & Video",
    tagline: "Abadikan setiap momen",
    cover:
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=1200&q=80",
    count: 3,
  },
  {
    id: "03",
    slug: "alat-musik",
    name: "Alat Musik",
    tagline: "Panggung menunggu",
    cover:
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=80",
    count: 3,
  },
  {
    id: "04",
    slug: "sound-system",
    name: "Sound System",
    tagline: "Naikkan volume",
    cover:
      "https://images.unsplash.com/photo-1518972559570-7cc1309f3229?auto=format&fit=crop&w=1200&q=80",
    count: 3,
  },
  {
    id: "05",
    slug: "gaming-konsol",
    name: "Gaming & Konsol",
    tagline: "Level up akhir pekan",
    cover:
      "https://images.unsplash.com/photo-1606318313846-ce9e39b3d3b7?auto=format&fit=crop&w=1200&q=80",
    count: 3,
  },
  {
    id: "06",
    slug: "sepeda",
    name: "Sepeda",
    tagline: "Bergerak lebih ringan",
    cover:
      "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=1200&q=80",
    count: 3,
  },
  {
    id: "07",
    slug: "kendaraan",
    name: "Motor & Mobil",
    tagline: "Berpindah dengan cepat",
    cover:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
    count: 3,
  },
  {
    id: "08",
    slug: "peralatan-bayi",
    name: "Peralatan Bayi",
    tagline: "Nyaman untuk si kecil",
    cover:
      "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=1200&q=80",
    count: 3,
  },
  {
    id: "09",
    slug: "outfit-kondangan",
    name: "Outfit Kondangan",
    tagline: "Elegan di setiap acara",
    cover:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=80",
    count: 3,
  },
  {
    id: "10",
    slug: "kostum",
    name: "Kostum & Cosplay",
    tagline: "Jadi karakter apapun",
    cover:
      "https://images.unsplash.com/photo-1509909756405-be0199881695?auto=format&fit=crop&w=1200&q=80",
    count: 3,
  },
  {
    id: "11",
    slug: "olahraga-outdoor",
    name: "Olahraga Outdoor",
    tagline: "Aktif di alam terbuka",
    cover:
      "https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=1200&q=80",
    count: 3,
  },
  {
    id: "12",
    slug: "alat-pesta",
    name: "Alat Pesta & Dekorasi",
    tagline: "Rayakan tanpa ribet",
    cover:
      "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=1200&q=80",
    count: 3,
  },
  {
    id: "13",
    slug: "elektronik",
    name: "Elektronik & Proyektor",
    tagline: "Bekerja dan nonton lebih besar",
    cover:
      "https://images.unsplash.com/photo-1626544827763-d516dce335e2?auto=format&fit=crop&w=1200&q=80",
    count: 3,
  },
  {
    id: "14",
    slug: "studio-foto-video",
    name: "Studio Foto & Video",
    tagline: "Setup profesional dalam sehari",
    cover:
      "https://images.unsplash.com/photo-1533450718592-29d45a68af71?auto=format&fit=crop&w=1200&q=80",
    count: 3,
  },
  {
    id: "15",
    slug: "pertukangan",
    name: "Alat Pertukangan",
    tagline: "Tools untuk semua proyek",
    cover:
      "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=1200&q=80",
    count: 3,
  },
];

export const findCategory = (slug: string) =>
  categories.find((c) => c.slug === slug);
