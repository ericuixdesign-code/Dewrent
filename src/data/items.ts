export type RentalItem = {
  id: string;
  slug: string;
  name: string;
  category: string; // category slug
  categoryName: string;
  pricePerDay: number;
  deposit: number;
  bestseller?: boolean;
  newDrop?: boolean;
  images: string[];
  short: string;
  spec: { label: string; value: string }[];
  cities: string[];
};

const img = (path: string, w = 1200) =>
  `https://images.unsplash.com/${path}?auto=format&fit=crop&w=${w}&q=80`;

export const items: RentalItem[] = [
  // 01 Camping & Hiking
  {
    id: "camp-tent-4p",
    slug: "tenda-dome-4p",
    name: "Tenda Dome 4 Person",
    category: "camping-hiking",
    categoryName: "Camping & Hiking",
    pricePerDay: 75000,
    deposit: 500000,
    newDrop: true,
    bestseller: true,
    images: [
      img("photo-1504280390367-361c6d9f38f4"),
      img("photo-1476820865390-c52aeebb9891"),
      img("photo-1533873984035-25970ab07461"),
    ],
    short:
      "Tenda 4 orang tahan air, ringan untuk trekking. Isi paket lengkap dengan flysheet, frame, dan pasak.",
    spec: [
      { label: "Merek", value: "Eiger Aventura" },
      { label: "Kapasitas", value: "4 orang" },
      { label: "Berat", value: "3.2 kg" },
      { label: "Isi paket", value: "Tenda, flysheet, pasak, tas" },
    ],
    cities: ["Jakarta", "Bandung", "Yogyakarta", "Bali"],
  },
  {
    id: "camp-carrier-60l",
    slug: "carrier-60l",
    name: "Carrier 60L",
    category: "camping-hiking",
    categoryName: "Camping & Hiking",
    pricePerDay: 45000,
    deposit: 300000,
    images: [
      img("photo-1533873984035-25970ab07461"),
      img("photo-1508928061906-59a6dcffe8bd"),
    ],
    short: "Carrier 60L dengan frame internal, cocok untuk pendakian 3-5 hari.",
    spec: [
      { label: "Merek", value: "Consina" },
      { label: "Kapasitas", value: "60L" },
      { label: "Berat kosong", value: "1.8 kg" },
      { label: "Fitur", value: "Rain cover included" },
    ],
    cities: ["Jakarta", "Bandung", "Yogyakarta"],
  },
  {
    id: "camp-stove-set",
    slug: "kompor-portable-set",
    name: "Kompor Portable + Nesting",
    category: "camping-hiking",
    categoryName: "Camping & Hiking",
    pricePerDay: 25000,
    deposit: 200000,
    images: [
      img("photo-1445308394109-4ec2920981b1"),
      img("photo-1519643225200-94e79e383724"),
    ],
    short: "Set kompor gas portable dengan alat masak nesting stainless.",
    spec: [
      { label: "Tipe", value: "Butane cartridge" },
      { label: "Isi paket", value: "Kompor, panci, wajan, gelas" },
      { label: "Nesting", value: "4 pcs" },
      { label: "Catatan", value: "Gas tidak termasuk" },
    ],
    cities: ["Jakarta", "Bandung"],
  },

  // 02 Kamera & Video
  {
    id: "cam-sony-a7iii",
    slug: "sony-a7iii-body",
    name: "Sony A7 III (Body)",
    category: "kamera-video",
    categoryName: "Kamera & Video",
    pricePerDay: 350000,
    deposit: 5000000,
    bestseller: true,
    images: [
      img("photo-1502920917128-1aa500764cbd"),
      img("photo-1516035069371-29a1b244cc32"),
    ],
    short:
      "Mirrorless full-frame 24MP. Cocok untuk wedding, event, dan sinematik.",
    spec: [
      { label: "Sensor", value: "Full-frame 24MP" },
      { label: "Video", value: "4K 30p" },
      { label: "Isi paket", value: "Body, battery 2x, charger, strap" },
      { label: "Lensa", value: "Sewa terpisah" },
    ],
    cities: ["Jakarta", "Bandung", "Surabaya"],
  },
  {
    id: "cam-drone-air3",
    slug: "dji-air-3",
    name: "DJI Air 3",
    category: "kamera-video",
    categoryName: "Kamera & Video",
    pricePerDay: 275000,
    deposit: 4000000,
    newDrop: true,
    images: [
      img("photo-1508614589041-895b88991e3e"),
      img("photo-1527977966376-1c8408f9f108"),
    ],
    short:
      "Drone dual kamera dengan sensor 1/1.3\". Rekam 4K/60p HDR yang smooth.",
    spec: [
      { label: "Kamera", value: "Wide 24mm + Tele 70mm" },
      { label: "Video", value: "4K 60p HDR" },
      { label: "Flight time", value: "46 menit" },
      { label: "Isi paket", value: "Drone, 3x battery, RC 2, kabel" },
    ],
    cities: ["Jakarta", "Bali", "Yogyakarta"],
  },
  {
    id: "cam-gimbal-rs4",
    slug: "dji-rs4",
    name: "DJI RS 4 Gimbal",
    category: "kamera-video",
    categoryName: "Kamera & Video",
    pricePerDay: 150000,
    deposit: 3000000,
    images: [
      img("photo-1567443024551-f3e3cc2be870"),
      img("photo-1613141412079-e6ce07b1ea25"),
    ],
    short: "Gimbal 3-axis untuk kamera mirrorless hingga 3kg.",
    spec: [
      { label: "Payload", value: "3 kg" },
      { label: "Battery", value: "12 jam" },
      { label: "Feature", value: "Automated axis lock" },
      { label: "Isi paket", value: "Gimbal, quick plate, cable" },
    ],
    cities: ["Jakarta", "Bandung"],
  },

  // 03 Alat Musik
  {
    id: "music-guitar-electric",
    slug: "fender-stratocaster",
    name: "Fender Stratocaster",
    category: "alat-musik",
    categoryName: "Alat Musik",
    pricePerDay: 120000,
    deposit: 2000000,
    bestseller: true,
    images: [
      img("photo-1550985616-10810253b84d"),
      img("photo-1519892300165-cb5542fb47c7"),
    ],
    short: "Gitar listrik klasik Stratocaster dengan 3 single-coil pickup.",
    spec: [
      { label: "Series", value: "Player Series MX" },
      { label: "Body", value: "Alder" },
      { label: "Pickup", value: "3x Single-coil" },
      { label: "Isi paket", value: "Gitar, gigbag, kabel jack" },
    ],
    cities: ["Jakarta", "Bandung", "Yogyakarta"],
  },
  {
    id: "music-keyboard-yamaha",
    slug: "yamaha-psr-e463",
    name: "Yamaha PSR-E463",
    category: "alat-musik",
    categoryName: "Alat Musik",
    pricePerDay: 95000,
    deposit: 1500000,
    images: [
      img("photo-1520523839897-bd0b52f945a0"),
      img("photo-1571974599782-87624638275f"),
    ],
    short: "Keyboard 61-key dengan 758 voices dan 235 accompaniment styles.",
    spec: [
      { label: "Keys", value: "61 touch-sensitive" },
      { label: "Voices", value: "758" },
      { label: "Styles", value: "235" },
      { label: "Isi paket", value: "Keyboard, adapter, stand" },
    ],
    cities: ["Jakarta", "Bandung"],
  },
  {
    id: "music-drum-electric",
    slug: "roland-td-1k",
    name: "Roland TD-1K Drum Kit",
    category: "alat-musik",
    categoryName: "Alat Musik",
    pricePerDay: 180000,
    deposit: 3000000,
    images: [
      img("photo-1524230572899-a752b3835840"),
      img("photo-1519892300165-cb5542fb47c7"),
    ],
    short:
      "Drum elektrik kompak dengan 15 kit preset dan latihan coach built-in.",
    spec: [
      { label: "Modul", value: "TD-1" },
      { label: "Pads", value: "Rubber x5" },
      { label: "Kit", value: "15 preset" },
      { label: "Isi paket", value: "Drum module, pad set, stand" },
    ],
    cities: ["Jakarta", "Bandung"],
  },

  // 04 Sound System
  {
    id: "sound-jbl-eon715",
    slug: "jbl-eon715",
    name: "JBL EON715 Speaker",
    category: "sound-system",
    categoryName: "Sound System",
    pricePerDay: 250000,
    deposit: 3500000,
    bestseller: true,
    images: [
      img("photo-1518972559570-7cc1309f3229"),
      img("photo-1493225458393-73a76b7c7c8b"),
    ],
    short: "Speaker aktif 15\" 1300W dengan Bluetooth dan DSP built-in.",
    spec: [
      { label: "Power", value: "1300W peak" },
      { label: "Driver", value: '15" LF + 1" HF' },
      { label: "Fitur", value: "Bluetooth, DSP, EQ presets" },
      { label: "Isi paket", value: "Speaker, kabel power, cover" },
    ],
    cities: ["Jakarta", "Bandung", "Surabaya"],
  },
  {
    id: "sound-mixer-yamaha",
    slug: "yamaha-mg10xu",
    name: "Yamaha MG10XU Mixer",
    category: "sound-system",
    categoryName: "Sound System",
    pricePerDay: 175000,
    deposit: 2000000,
    images: [
      img("photo-1571974599782-87624638275f"),
      img("photo-1520523839897-bd0b52f945a0"),
    ],
    short: "Mixer 10-channel dengan SPX efek dan USB audio interface.",
    spec: [
      { label: "Channel", value: "10 input" },
      { label: "Effects", value: "24 SPX" },
      { label: "USB", value: "2-in/2-out" },
      { label: "Isi paket", value: "Mixer, adapter, USB cable" },
    ],
    cities: ["Jakarta", "Bandung"],
  },
  {
    id: "sound-mic-shure",
    slug: "shure-blx24-sm58",
    name: "Shure BLX24/SM58 Wireless",
    category: "sound-system",
    categoryName: "Sound System",
    pricePerDay: 145000,
    deposit: 2500000,
    images: [
      img("photo-1618609378039-b572f64c5b42"),
      img("photo-1607145781215-c99f28f4dc1a"),
    ],
    short: "Mic wireless handheld SM58 dengan receiver BLX4 rack-mountable.",
    spec: [
      { label: "Type", value: "Handheld wireless" },
      { label: "Freq range", value: "H10 band" },
      { label: "Battery", value: "AA x2 (14 jam)" },
      { label: "Isi paket", value: "Mic, receiver, antenna, clip" },
    ],
    cities: ["Jakarta", "Bandung", "Yogyakarta"],
  },

  // 05 Gaming
  {
    id: "game-ps5",
    slug: "playstation-5",
    name: "PlayStation 5 Disc Edition",
    category: "gaming-konsol",
    categoryName: "Gaming & Konsol",
    pricePerDay: 165000,
    deposit: 4500000,
    bestseller: true,
    images: [
      img("photo-1606318313846-ce9e39b3d3b7"),
      img("photo-1622297845775-5ff3fef71d13"),
    ],
    short:
      "PS5 Disc dengan 2 stick DualSense. Bebas pilih 3 game dari koleksi kami.",
    spec: [
      { label: "Model", value: "Disc Edition" },
      { label: "Storage", value: "825 GB SSD" },
      { label: "Isi paket", value: "Console, 2x DualSense, HDMI, adapter" },
      { label: "Game", value: "3 game pilihan bebas" },
    ],
    cities: ["Jakarta", "Bandung", "Yogyakarta", "Surabaya"],
  },
  {
    id: "game-nintendo-switch",
    slug: "nintendo-switch-oled",
    name: "Nintendo Switch OLED",
    category: "gaming-konsol",
    categoryName: "Gaming & Konsol",
    pricePerDay: 125000,
    deposit: 3500000,
    images: [
      img("photo-1587202372775-e229f172b9d7"),
      img("photo-1585857188823-c56d2e4c1a4c"),
    ],
    short:
      "Switch OLED 7-inch dengan dock, 4 Joy-Con, dan 5 game party pilihan.",
    spec: [
      { label: "Screen", value: "7\" OLED" },
      { label: "Storage", value: "64 GB" },
      { label: "Isi paket", value: "Console, dock, 4x Joy-Con, grip" },
      { label: "Game", value: "5 party game" },
    ],
    cities: ["Jakarta", "Bandung"],
  },
  {
    id: "game-vr-quest3",
    slug: "meta-quest-3",
    name: "Meta Quest 3",
    category: "gaming-konsol",
    categoryName: "Gaming & Konsol",
    pricePerDay: 195000,
    deposit: 5000000,
    newDrop: true,
    images: [
      img("photo-1622979135225-d2ba269cf1ac"),
      img("photo-1592478411213-6153e4ebc07d"),
    ],
    short: "VR headset standalone dengan mixed-reality passthrough color.",
    spec: [
      { label: "Storage", value: "128 GB" },
      { label: "Resolution", value: "2064 x 2208 per mata" },
      { label: "Isi paket", value: "Headset, 2 controller, charger" },
      { label: "Game", value: "5 game favorit" },
    ],
    cities: ["Jakarta", "Bandung"],
  },

  // 06 Sepeda
  {
    id: "bike-mtb-polygon",
    slug: "polygon-siskiu-t7",
    name: "Polygon Siskiu T7 MTB",
    category: "sepeda",
    categoryName: "Sepeda",
    pricePerDay: 95000,
    deposit: 2500000,
    images: [
      img("photo-1485965120184-e220f721d03e"),
      img("photo-1502744688674-c619d1586c9e"),
    ],
    short: "Full-suspension MTB dengan frame ALX dan shock RockShox.",
    spec: [
      { label: "Frame", value: "ALX Trail" },
      { label: "Suspension", value: "RockShox 130mm" },
      { label: "Drivetrain", value: "Shimano Deore 12-speed" },
      { label: "Wheel", value: "27.5\" tubeless-ready" },
    ],
    cities: ["Jakarta", "Bandung", "Bali"],
  },
  {
    id: "bike-road-cannondale",
    slug: "cannondale-caad13",
    name: "Cannondale CAAD13",
    category: "sepeda",
    categoryName: "Sepeda",
    pricePerDay: 130000,
    deposit: 4000000,
    images: [
      img("photo-1502161254066-6c74afbf07aa"),
      img("photo-1517649763962-0c623066013b"),
    ],
    short: "Road bike aluminium ringan dengan groupset Shimano 105.",
    spec: [
      { label: "Frame", value: "SmartForm C1 Alloy" },
      { label: "Groupset", value: "Shimano 105 R7000" },
      { label: "Wheel", value: '700c Fulcrum Racing 900' },
      { label: "Weight", value: "8.5 kg" },
    ],
    cities: ["Jakarta", "Bandung"],
  },
  {
    id: "bike-ebike-brompton",
    slug: "brompton-electric",
    name: "Brompton Electric C-Line",
    category: "sepeda",
    categoryName: "Sepeda",
    pricePerDay: 175000,
    deposit: 5500000,
    newDrop: true,
    images: [
      img("photo-1571188654248-7a89213915f7"),
      img("photo-1517649763962-0c623066013b"),
    ],
    short: "Folding e-bike ikonik dengan motor 250W dan battery 300Wh.",
    spec: [
      { label: "Motor", value: "250W front hub" },
      { label: "Battery", value: "300Wh detachable" },
      { label: "Range", value: "40-70 km" },
      { label: "Weight", value: "17.4 kg" },
    ],
    cities: ["Jakarta", "Bandung"],
  },

  // 07 Kendaraan
  {
    id: "vehicle-motor-nmax",
    slug: "yamaha-nmax-155",
    name: "Yamaha NMAX 155",
    category: "kendaraan",
    categoryName: "Motor & Mobil",
    pricePerDay: 150000,
    deposit: 1000000,
    bestseller: true,
    images: [
      img("photo-1558981806-ec527fa84c39"),
      img("photo-1568772585407-9361f9bf3a87"),
    ],
    short:
      "Matic 155cc dengan ABS dan smart key. Include helm 2 dan jas hujan.",
    spec: [
      { label: "Engine", value: "155cc Blue Core VVA" },
      { label: "Transmission", value: "CVT" },
      { label: "Fuel tank", value: "7.1 L" },
      { label: "Include", value: "2 helm, jas hujan" },
    ],
    cities: ["Bali", "Yogyakarta", "Bandung"],
  },
  {
    id: "vehicle-mobil-brio",
    slug: "honda-brio",
    name: "Honda Brio RS",
    category: "kendaraan",
    categoryName: "Motor & Mobil",
    pricePerDay: 385000,
    deposit: 3000000,
    images: [
      img("photo-1583121274602-3e2820c69888"),
      img("photo-1503376780353-7e6692767b70"),
    ],
    short: "City car 1200cc automatic. Muat 5 orang dengan bagasi cukup.",
    spec: [
      { label: "Engine", value: "1200cc i-VTEC" },
      { label: "Transmission", value: "CVT" },
      { label: "Seats", value: "5" },
      { label: "Include", value: "Full tank, dokumen lengkap" },
    ],
    cities: ["Bali", "Jakarta", "Yogyakarta"],
  },
  {
    id: "vehicle-motor-vespa",
    slug: "vespa-primavera-150",
    name: "Vespa Primavera 150",
    category: "kendaraan",
    categoryName: "Motor & Mobil",
    pricePerDay: 285000,
    deposit: 2000000,
    images: [
      img("photo-1580310614729-ccd69652491d"),
      img("photo-1591637333184-19aa84b3e01f"),
    ],
    short: "Scooter Italy klasik 150cc. Cocok buat foto-foto di Bali & Jogja.",
    spec: [
      { label: "Engine", value: "150cc i-Get" },
      { label: "Body", value: "Steel monocoque" },
      { label: "Fuel tank", value: "8 L" },
      { label: "Include", value: "2 helm, tas" },
    ],
    cities: ["Bali", "Yogyakarta"],
  },

  // 08 Peralatan Bayi
  {
    id: "baby-stroller",
    slug: "cybex-eezy-s-twist",
    name: "Cybex Eezy S Twist+2",
    category: "peralatan-bayi",
    categoryName: "Peralatan Bayi",
    pricePerDay: 85000,
    deposit: 1500000,
    images: [
      img("photo-1519689680058-324335c77eba"),
      img("photo-1515488042361-ee00e0ddd4e4"),
    ],
    short: "Stroller compact yang bisa lipat satu tangan dengan seat swivel 360°.",
    spec: [
      { label: "Age", value: "6 bulan - 4 tahun" },
      { label: "Weight limit", value: "22 kg" },
      { label: "Folded", value: "Bagasi cabin friendly" },
      { label: "Include", value: "Rain cover, sun canopy" },
    ],
    cities: ["Jakarta", "Bandung"],
  },
  {
    id: "baby-carseat",
    slug: "maxi-cosi-pebble-360",
    name: "Maxi-Cosi Pebble 360",
    category: "peralatan-bayi",
    categoryName: "Peralatan Bayi",
    pricePerDay: 75000,
    deposit: 1200000,
    images: [
      img("photo-1594736797933-d0501ba2fe65"),
      img("photo-1618232324348-e18d6efce7f5"),
    ],
    short: "Car seat i-Size 0-15 bulan dengan rotasi 360° untuk kemudahan naik-turun.",
    spec: [
      { label: "Rating", value: "i-Size R129" },
      { label: "Age", value: "0-15 bulan" },
      { label: "Rotation", value: "360°" },
      { label: "Base", value: "Isofix" },
    ],
    cities: ["Jakarta", "Bandung"],
  },
  {
    id: "baby-crib",
    slug: "graco-pack-n-play",
    name: "Graco Pack 'n Play",
    category: "peralatan-bayi",
    categoryName: "Peralatan Bayi",
    pricePerDay: 55000,
    deposit: 700000,
    images: [
      img("photo-1522771930-78848d9293e8"),
      img("photo-1515488042361-ee00e0ddd4e4"),
    ],
    short: "Box bayi portable dengan changing table dan bassinet.",
    spec: [
      { label: "Include", value: "Bassinet, changing table" },
      { label: "Weight limit", value: "13.6 kg" },
      { label: "Folded", value: "Compact travel bag" },
      { label: "Setup", value: "One-hand" },
    ],
    cities: ["Jakarta", "Bandung"],
  },

  // 09 Outfit Kondangan
  {
    id: "outfit-jas-armani",
    slug: "jas-armani-slim",
    name: "Jas Armani Slim (Navy)",
    category: "outfit-kondangan",
    categoryName: "Outfit Kondangan",
    pricePerDay: 225000,
    deposit: 2500000,
    bestseller: true,
    images: [
      img("photo-1490481651871-ab68de25d43d"),
      img("photo-1594938298603-c8148c4dae35"),
    ],
    short: "Jas 2-piece slim fit navy dengan bahan Italian wool.",
    spec: [
      { label: "Ukuran", value: "S, M, L, XL, XXL" },
      { label: "Bahan", value: "Italian wool" },
      { label: "Style", value: "Slim fit 2-piece" },
      { label: "Include", value: "Dry clean setelah pakai" },
    ],
    cities: ["Jakarta", "Bandung", "Surabaya"],
  },
  {
    id: "outfit-kebaya-modern",
    slug: "kebaya-modern-brokat",
    name: "Kebaya Modern Brokat",
    category: "outfit-kondangan",
    categoryName: "Outfit Kondangan",
    pricePerDay: 275000,
    deposit: 3000000,
    images: [
      img("photo-1583391733956-6c78276477e2"),
      img("photo-1483985988355-763728e1935b"),
    ],
    short:
      "Kebaya modern brokat halus dengan payet handmade. Tersedia banyak warna.",
    spec: [
      { label: "Ukuran", value: "S, M, L, XL" },
      { label: "Warna", value: "Broken white, dusty, sage" },
      { label: "Bahan", value: "Brokat + tulle" },
      { label: "Include", value: "Kain batik + selendang" },
    ],
    cities: ["Jakarta", "Bandung", "Yogyakarta"],
  },
  {
    id: "outfit-gown-evening",
    slug: "gown-evening-silk",
    name: "Evening Gown Silk Merlot",
    category: "outfit-kondangan",
    categoryName: "Outfit Kondangan",
    pricePerDay: 395000,
    deposit: 3500000,
    newDrop: true,
    images: [
      img("photo-1566174053879-31528523f8ae"),
      img("photo-1596993100471-c3905dafa78e"),
    ],
    short: "Long dress silk warna merlot dengan detail slit dan open back.",
    spec: [
      { label: "Ukuran", value: "S, M, L" },
      { label: "Warna", value: "Merlot deep red" },
      { label: "Bahan", value: "Silk crepe" },
      { label: "Include", value: "Steaming sebelum pickup" },
    ],
    cities: ["Jakarta", "Bandung"],
  },

  // 10 Kostum
  {
    id: "kostum-halloween",
    slug: "kostum-vampire-classic",
    name: "Kostum Vampire Classic",
    category: "kostum",
    categoryName: "Kostum & Cosplay",
    pricePerDay: 125000,
    deposit: 800000,
    images: [
      img("photo-1509909756405-be0199881695"),
      img("photo-1509978778156-518eea30166b"),
    ],
    short:
      "Set kostum vampire lengkap dengan jubah, taring, dan makeup kit.",
    spec: [
      { label: "Ukuran", value: "One size (M-XL)" },
      { label: "Isi", value: "Jubah, kemeja, taring, makeup" },
      { label: "Aksesori", value: "Wig hitam optional" },
      { label: "Cocok", value: "Halloween, tema party" },
    ],
    cities: ["Jakarta", "Bandung"],
  },
  {
    id: "kostum-cosplay-samurai",
    slug: "cosplay-samurai",
    name: "Cosplay Samurai Set",
    category: "kostum",
    categoryName: "Kostum & Cosplay",
    pricePerDay: 195000,
    deposit: 1500000,
    images: [
      img("photo-1520175480921-4edfa2983e0f"),
      img("photo-1560306843-6c0f5bd25e70"),
    ],
    short: "Kostum samurai lengkap dengan armor, katana replika, dan hakama.",
    spec: [
      { label: "Ukuran", value: "M, L, XL" },
      { label: "Isi", value: "Armor, hakama, kimono, katana replika" },
      { label: "Bahan armor", value: "PU leather + fabric" },
      { label: "Note", value: "Katana bukan tajam" },
    ],
    cities: ["Jakarta", "Bandung"],
  },
  {
    id: "kostum-mascot",
    slug: "mascot-panda-jumbo",
    name: "Mascot Panda Jumbo",
    category: "kostum",
    categoryName: "Kostum & Cosplay",
    pricePerDay: 155000,
    deposit: 1000000,
    images: [
      img("photo-1601758228041-f3b2795255f1"),
      img("photo-1573497019940-1c28c88b4f3e"),
    ],
    short:
      "Kostum maskot panda ukuran dewasa dengan ventilasi kipas built-in.",
    spec: [
      { label: "Ukuran", value: "Fits 160-180cm" },
      { label: "Fitur", value: "Kipas ventilasi 2 pcs" },
      { label: "Bahan", value: "Plush + foam" },
      { label: "Include", value: "Cooling vest opsional" },
    ],
    cities: ["Jakarta", "Bandung"],
  },

  // 11 Olahraga Outdoor
  {
    id: "sport-surfboard",
    slug: "surfboard-longboard",
    name: "Longboard Surfboard 9'0\"",
    category: "olahraga-outdoor",
    categoryName: "Olahraga Outdoor",
    pricePerDay: 145000,
    deposit: 2000000,
    images: [
      img("photo-1502680390469-be75c86b636f"),
      img("photo-1502933691298-84fc14542831"),
    ],
    short:
      "Longboard 9'0\" cocok untuk beginner-intermediate. Include leash dan wax.",
    spec: [
      { label: "Length", value: "9'0\"" },
      { label: "Volume", value: "72L" },
      { label: "Fin setup", value: "Single fin" },
      { label: "Include", value: "Leash, wax, board bag" },
    ],
    cities: ["Bali"],
  },
  {
    id: "sport-paddleboard",
    slug: "paddleboard-inflatable",
    name: "Paddle Board Inflatable",
    category: "olahraga-outdoor",
    categoryName: "Olahraga Outdoor",
    pricePerDay: 165000,
    deposit: 2500000,
    images: [
      img("photo-1502920917128-1aa500764cbd"),
      img("photo-1522093007474-d86e9bf7ba6f"),
    ],
    short:
      "Paddle board 10'6\" inflatable dengan pompa elektrik dan tas travel.",
    spec: [
      { label: "Length", value: "10'6\"" },
      { label: "Weight limit", value: "150 kg" },
      { label: "Include", value: "Paddle, pompa, tas, leash" },
      { label: "Packed", value: "Backpack ukuran cabin" },
    ],
    cities: ["Bali", "Yogyakarta"],
  },
  {
    id: "sport-snorkel-set",
    slug: "snorkel-set-premium",
    name: "Snorkel Set Premium",
    category: "olahraga-outdoor",
    categoryName: "Olahraga Outdoor",
    pricePerDay: 45000,
    deposit: 500000,
    images: [
      img("photo-1518729571365-83d18b5ba48e"),
      img("photo-1544551763-46a013bb70d5"),
    ],
    short:
      "Set snorkel full-face + fins ergonomis, tersedia 3 ukuran.",
    spec: [
      { label: "Mask type", value: "Full-face" },
      { label: "Size", value: "S, M, L" },
      { label: "Include", value: "Mask, fins, dry bag" },
      { label: "Anti-fog", value: "Ya" },
    ],
    cities: ["Bali"],
  },

  // 12 Alat Pesta & Dekorasi
  {
    id: "party-photobooth",
    slug: "photobooth-set",
    name: "Photobooth Set 360°",
    category: "alat-pesta",
    categoryName: "Alat Pesta & Dekorasi",
    pricePerDay: 850000,
    deposit: 3000000,
    bestseller: true,
    images: [
      img("photo-1519671482749-fd09be7ccebf"),
      img("photo-1478147427282-58a87a120781"),
    ],
    short:
      "Photobooth 360° dengan operator, backdrop custom, dan cetak instant.",
    spec: [
      { label: "Fitur", value: "360° video + instant print" },
      { label: "Cetak", value: "Unlimited 4R" },
      { label: "Operator", value: "2 orang selama event" },
      { label: "Backdrop", value: "Custom sesuai tema" },
    ],
    cities: ["Jakarta", "Bandung"],
  },
  {
    id: "party-backdrop",
    slug: "backdrop-flower-wall",
    name: "Flower Wall Backdrop 3x2m",
    category: "alat-pesta",
    categoryName: "Alat Pesta & Dekorasi",
    pricePerDay: 495000,
    deposit: 1500000,
    images: [
      img("photo-1509927083803-4bd519298ac4"),
      img("photo-1519741497674-611481863552"),
    ],
    short:
      "Backdrop bunga artificial 3x2m untuk photobooth atau wedding decor.",
    spec: [
      { label: "Ukuran", value: "3m x 2m" },
      { label: "Warna", value: "White, dusty pink, sage" },
      { label: "Setup", value: "Include dalam paket" },
      { label: "Note", value: "Non-flammable material" },
    ],
    cities: ["Jakarta", "Bandung", "Yogyakarta"],
  },
  {
    id: "party-table-vip",
    slug: "meja-kursi-vip-set",
    name: "Set Meja & Kursi VIP (10 pax)",
    category: "alat-pesta",
    categoryName: "Alat Pesta & Dekorasi",
    pricePerDay: 375000,
    deposit: 1200000,
    images: [
      img("photo-1519741497674-611481863552"),
      img("photo-1478147427282-58a87a120781"),
    ],
    short:
      "1 meja bulat + 10 kursi Tiffany putih dengan sarung dan taplak premium.",
    spec: [
      { label: "Isi", value: "1 meja + 10 kursi Tiffany" },
      { label: "Setup", value: "Include" },
      { label: "Taplak", value: "Premium linen putih" },
      { label: "Note", value: "Sesuai untuk indoor & outdoor" },
    ],
    cities: ["Jakarta", "Bandung", "Yogyakarta"],
  },

  // 13 Elektronik
  {
    id: "elec-projector",
    slug: "epson-eb-e01",
    name: "Epson EB-E01 Proyektor",
    category: "elektronik",
    categoryName: "Elektronik & Proyektor",
    pricePerDay: 175000,
    deposit: 2500000,
    bestseller: true,
    images: [
      img("photo-1626544827763-d516dce335e2"),
      img("photo-1541428229580-c8fd80eff5b6"),
    ],
    short: "Proyektor 3300 lumens dengan HDMI dan VGA. Cocok untuk meeting.",
    spec: [
      { label: "Brightness", value: "3300 lumens" },
      { label: "Resolution", value: "XGA 1024x768" },
      { label: "Lamp life", value: "12000 jam" },
      { label: "Isi paket", value: "Proyektor, remote, kabel, tas" },
    ],
    cities: ["Jakarta", "Bandung", "Surabaya"],
  },
  {
    id: "elec-laptop",
    slug: "macbook-pro-14",
    name: "MacBook Pro 14\" M3",
    category: "elektronik",
    categoryName: "Elektronik & Proyektor",
    pricePerDay: 350000,
    deposit: 8000000,
    images: [
      img("photo-1517336714731-489689fd1ca8"),
      img("photo-1611186871348-b1ce696e52c9"),
    ],
    short:
      "MacBook Pro 14\" M3 dengan 16GB RAM dan 512GB SSD untuk video editing.",
    spec: [
      { label: "Chip", value: "Apple M3 Pro" },
      { label: "RAM", value: "16 GB" },
      { label: "Storage", value: "512 GB SSD" },
      { label: "Isi paket", value: "Laptop, charger, tas" },
    ],
    cities: ["Jakarta", "Bandung"],
  },
  {
    id: "elec-tv",
    slug: "samsung-uhd-55",
    name: "Samsung UHD 55\" TV",
    category: "elektronik",
    categoryName: "Elektronik & Proyektor",
    pricePerDay: 225000,
    deposit: 3000000,
    images: [
      img("photo-1593359677879-a4bb92f829d1"),
      img("photo-1461151304267-38535e780c79"),
    ],
    short:
      "TV Samsung Crystal UHD 55\" untuk nobar, presentasi, atau screening.",
    spec: [
      { label: "Ukuran", value: "55 inch" },
      { label: "Resolusi", value: "4K UHD" },
      { label: "Fitur", value: "Smart TV, YouTube, Netflix" },
      { label: "Isi paket", value: "TV, remote, kabel HDMI" },
    ],
    cities: ["Jakarta", "Bandung"],
  },

  // 14 Studio F/V
  {
    id: "studio-lighting-godox",
    slug: "godox-sl-60-set",
    name: "Godox SL-60W Set (3-point)",
    category: "studio-foto-video",
    categoryName: "Studio Foto & Video",
    pricePerDay: 195000,
    deposit: 2500000,
    images: [
      img("photo-1533450718592-29d45a68af71"),
      img("photo-1616432043562-3671ea2e5242"),
    ],
    short:
      "3-point lighting set continuous LED dengan softbox 90cm dan stand.",
    spec: [
      { label: "Power", value: "3x 60W LED" },
      { label: "Modifier", value: "Softbox 90cm x2, reflector" },
      { label: "Stand", value: "Heavy-duty x3" },
      { label: "Include", value: "Kabel, tas travel" },
    ],
    cities: ["Jakarta", "Bandung"],
  },
  {
    id: "studio-backdrop-stand",
    slug: "backdrop-stand-3m",
    name: "Backdrop Stand 3m + Kain",
    category: "studio-foto-video",
    categoryName: "Studio Foto & Video",
    pricePerDay: 85000,
    deposit: 800000,
    images: [
      img("photo-1554941829-202a0b2403b8"),
      img("photo-1610194352361-4c81a6a8967e"),
    ],
    short:
      "Backdrop stand 3x2.5m dengan pilihan kain putih, hitam, atau greenscreen.",
    spec: [
      { label: "Ukuran", value: "3m x 2.5m adjustable" },
      { label: "Kain", value: "Cotton muslin (3 warna)" },
      { label: "Bahan stand", value: "Aluminium" },
      { label: "Include", value: "Clamp x4, tas" },
    ],
    cities: ["Jakarta", "Bandung"],
  },
  {
    id: "studio-teleprompter",
    slug: "teleprompter-tablet",
    name: "Teleprompter Tablet",
    category: "studio-foto-video",
    categoryName: "Studio Foto & Video",
    pricePerDay: 145000,
    deposit: 1500000,
    images: [
      img("photo-1611926653458-09294b3142bf"),
      img("photo-1626387346567-68d0c1e0d54c"),
    ],
    short:
      "Teleprompter beam-splitter untuk tablet 10\" dengan aplikasi teleprompter.",
    spec: [
      { label: "Tablet size", value: "Fits 7-10 inch" },
      { label: "Beam-splitter", value: "70/30 optical glass" },
      { label: "Mount", value: "Bawa DSLR + lensa hingga 200mm" },
      { label: "App", value: "Include" },
    ],
    cities: ["Jakarta", "Bandung"],
  },

  // 15 Alat Pertukangan
  {
    id: "tools-drill-makita",
    slug: "makita-drill-set",
    name: "Makita Drill Set 18V",
    category: "pertukangan",
    categoryName: "Alat Pertukangan",
    pricePerDay: 85000,
    deposit: 1200000,
    images: [
      img("photo-1504148455328-c376907d081c"),
      img("photo-1572981779307-38b8cabb2407"),
    ],
    short:
      "Cordless drill Makita 18V dengan 2 baterai dan koper. Include mata bor set.",
    spec: [
      { label: "Voltage", value: "18V LXT" },
      { label: "Battery", value: "2x 3.0Ah" },
      { label: "Torque", value: "70 Nm" },
      { label: "Include", value: "Mata bor set 40 pcs, koper" },
    ],
    cities: ["Jakarta", "Bandung", "Surabaya"],
  },
  {
    id: "tools-saw-circular",
    slug: "makita-circular-saw",
    name: "Makita Circular Saw",
    category: "pertukangan",
    categoryName: "Alat Pertukangan",
    pricePerDay: 115000,
    deposit: 1500000,
    images: [
      img("photo-1517420704952-d9f39e95b43e"),
      img("photo-1621905251189-08b45d6a269e"),
    ],
    short: "Circular saw 7-1/4\" 1200W untuk potong kayu atau MDF.",
    spec: [
      { label: "Blade", value: '7-1/4"' },
      { label: "Power", value: "1200W" },
      { label: "Depth", value: "66mm 90°" },
      { label: "Include", value: "Guide rail, blade cadangan" },
    ],
    cities: ["Jakarta", "Bandung"],
  },
  {
    id: "tools-ladder",
    slug: "tangga-lipat-6m",
    name: "Tangga Lipat 6m Aluminium",
    category: "pertukangan",
    categoryName: "Alat Pertukangan",
    pricePerDay: 65000,
    deposit: 900000,
    images: [
      img("photo-1581094794329-c8112a89af12"),
      img("photo-1622273319ceb-9e94b6b8bfa1"),
    ],
    short:
      "Tangga aluminium multi-purpose 6m. Bisa lipat jadi tangga A atau lurus.",
    spec: [
      { label: "Length", value: "6m extended / 1.5m folded" },
      { label: "Material", value: "Aluminium" },
      { label: "Weight", value: "12 kg" },
      { label: "Weight limit", value: "150 kg" },
    ],
    cities: ["Jakarta", "Bandung"],
  },
];

export const findItem = (slug: string) => items.find((i) => i.slug === slug);
export const itemsByCategory = (catSlug: string) =>
  items.filter((i) => i.category === catSlug);
export const featuredItems = () => items.filter((i) => i.bestseller || i.newDrop);
export const bestsellerItems = () => items.filter((i) => i.bestseller);
export const newDropItems = () => items.filter((i) => i.newDrop);
