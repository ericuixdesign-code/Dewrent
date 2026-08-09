export type RentalItem = {
  id: string;
  slug: string;
  name: string;
  category: string;
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
    slug: "dome-tent-4p",
    name: "Dome Tent 4-Person",
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
      "Waterproof 4-person tent, lightweight for trekking. Full kit includes flysheet, poles, and pegs.",
    spec: [
      { label: "Brand", value: "Eiger Aventura" },
      { label: "Capacity", value: "4 person" },
      { label: "Weight", value: "3.2 kg" },
      { label: "Kit", value: "Tent, flysheet, pegs, carry bag" },
    ],
    cities: ["Jakarta", "Bandung", "Yogyakarta", "Bali"],
  },
  {
    id: "camp-carrier-60l",
    slug: "carrier-60l",
    name: "60L Backpack Carrier",
    category: "camping-hiking",
    categoryName: "Camping & Hiking",
    pricePerDay: 45000,
    deposit: 300000,
    images: [
      img("photo-1533873984035-25970ab07461"),
      img("photo-1508928061906-59a6dcffe8bd"),
    ],
    short:
      "60L carrier with internal frame, ideal for 3-5 day expeditions.",
    spec: [
      { label: "Brand", value: "Consina" },
      { label: "Capacity", value: "60L" },
      { label: "Empty weight", value: "1.8 kg" },
      { label: "Feature", value: "Rain cover included" },
    ],
    cities: ["Jakarta", "Bandung", "Yogyakarta"],
  },
  {
    id: "camp-stove-set",
    slug: "portable-stove-set",
    name: "Portable Stove + Cookware Set",
    category: "camping-hiking",
    categoryName: "Camping & Hiking",
    pricePerDay: 25000,
    deposit: 200000,
    images: [
      img("photo-1445308394109-4ec2920981b1"),
      img("photo-1519643225200-94e79e383724"),
    ],
    short:
      "Portable gas stove with nesting stainless cookware set.",
    spec: [
      { label: "Type", value: "Butane cartridge" },
      { label: "Kit", value: "Stove, pot, pan, cup" },
      { label: "Nesting", value: "4 pcs" },
      { label: "Note", value: "Gas not included" },
    ],
    cities: ["Jakarta", "Bandung"],
  },

  // 02 Camera & Video
  {
    id: "cam-sony-a7iii",
    slug: "sony-a7iii-body",
    name: "Sony A7 III (Body)",
    category: "camera-video",
    categoryName: "Camera & Video",
    pricePerDay: 350000,
    deposit: 5000000,
    bestseller: true,
    images: [
      img("photo-1502920917128-1aa500764cbd"),
      img("photo-1516035069371-29a1b244cc32"),
    ],
    short:
      "Full-frame 24MP mirrorless. Perfect for weddings, events, and cinematic shoots.",
    spec: [
      { label: "Sensor", value: "Full-frame 24MP" },
      { label: "Video", value: "4K 30p" },
      { label: "Kit", value: "Body, 2 batteries, charger, strap" },
      { label: "Lens", value: "Rented separately" },
    ],
    cities: ["Jakarta", "Bandung", "Surabaya"],
  },
  {
    id: "cam-drone-air3",
    slug: "dji-air-3",
    name: "DJI Air 3",
    category: "camera-video",
    categoryName: "Camera & Video",
    pricePerDay: 275000,
    deposit: 4000000,
    newDrop: true,
    images: [
      img("photo-1508614589041-895b88991e3e"),
      img("photo-1527977966376-1c8408f9f108"),
    ],
    short:
      "Dual-camera drone with 1/1.3\" sensors. Smooth 4K/60p HDR footage.",
    spec: [
      { label: "Camera", value: "Wide 24mm + Tele 70mm" },
      { label: "Video", value: "4K 60p HDR" },
      { label: "Flight time", value: "46 minutes" },
      { label: "Kit", value: "Drone, 3 batteries, RC 2, cables" },
    ],
    cities: ["Jakarta", "Bali", "Yogyakarta"],
  },
  {
    id: "cam-gimbal-rs4",
    slug: "dji-rs4",
    name: "DJI RS 4 Gimbal",
    category: "camera-video",
    categoryName: "Camera & Video",
    pricePerDay: 150000,
    deposit: 3000000,
    images: [
      img("photo-1567443024551-f3e3cc2be870"),
      img("photo-1613141412079-e6ce07b1ea25"),
    ],
    short:
      "3-axis gimbal for mirrorless cameras up to 3kg payload.",
    spec: [
      { label: "Payload", value: "3 kg" },
      { label: "Battery", value: "12 hours" },
      { label: "Feature", value: "Automated axis lock" },
      { label: "Kit", value: "Gimbal, quick plate, cable" },
    ],
    cities: ["Jakarta", "Bandung"],
  },

  // 03 Instruments
  {
    id: "music-guitar-electric",
    slug: "fender-stratocaster",
    name: "Fender Stratocaster",
    category: "instruments",
    categoryName: "Musical Instruments",
    pricePerDay: 120000,
    deposit: 2000000,
    bestseller: true,
    images: [
      img("photo-1550985616-10810253b84d"),
      img("photo-1519892300165-cb5542fb47c7"),
    ],
    short:
      "Classic Stratocaster electric guitar with 3 single-coil pickups.",
    spec: [
      { label: "Series", value: "Player Series MX" },
      { label: "Body", value: "Alder" },
      { label: "Pickup", value: "3x Single-coil" },
      { label: "Kit", value: "Guitar, gigbag, jack cable" },
    ],
    cities: ["Jakarta", "Bandung", "Yogyakarta"],
  },
  {
    id: "music-keyboard-yamaha",
    slug: "yamaha-psr-e463",
    name: "Yamaha PSR-E463",
    category: "instruments",
    categoryName: "Musical Instruments",
    pricePerDay: 95000,
    deposit: 1500000,
    images: [
      img("photo-1520523839897-bd0b52f945a0"),
      img("photo-1571974599782-87624638275f"),
    ],
    short:
      "61-key keyboard with 758 voices and 235 accompaniment styles.",
    spec: [
      { label: "Keys", value: "61 touch-sensitive" },
      { label: "Voices", value: "758" },
      { label: "Styles", value: "235" },
      { label: "Kit", value: "Keyboard, adapter, stand" },
    ],
    cities: ["Jakarta", "Bandung"],
  },
  {
    id: "music-drum-electric",
    slug: "roland-td-1k",
    name: "Roland TD-1K Drum Kit",
    category: "instruments",
    categoryName: "Musical Instruments",
    pricePerDay: 180000,
    deposit: 3000000,
    images: [
      img("photo-1524230572899-a752b3835840"),
      img("photo-1519892300165-cb5542fb47c7"),
    ],
    short:
      "Compact electric drum kit with 15 preset kits and built-in practice coach.",
    spec: [
      { label: "Module", value: "TD-1" },
      { label: "Pads", value: "Rubber x5" },
      { label: "Kits", value: "15 presets" },
      { label: "Kit", value: "Drum module, pad set, stand" },
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
    short:
      "Active 15-inch 1300W speaker with Bluetooth and built-in DSP.",
    spec: [
      { label: "Power", value: "1300W peak" },
      { label: "Driver", value: '15" LF + 1" HF' },
      { label: "Feature", value: "Bluetooth, DSP, EQ presets" },
      { label: "Kit", value: "Speaker, power cable, cover" },
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
    short:
      "10-channel mixer with SPX effects and USB audio interface.",
    spec: [
      { label: "Channels", value: "10 input" },
      { label: "Effects", value: "24 SPX" },
      { label: "USB", value: "2-in/2-out" },
      { label: "Kit", value: "Mixer, adapter, USB cable" },
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
    short:
      "Handheld wireless SM58 mic with rack-mountable BLX4 receiver.",
    spec: [
      { label: "Type", value: "Handheld wireless" },
      { label: "Freq range", value: "H10 band" },
      { label: "Battery", value: "2x AA (14 hours)" },
      { label: "Kit", value: "Mic, receiver, antenna, clip" },
    ],
    cities: ["Jakarta", "Bandung", "Yogyakarta"],
  },

  // 05 Gaming
  {
    id: "game-ps5",
    slug: "playstation-5",
    name: "PlayStation 5 Disc Edition",
    category: "gaming",
    categoryName: "Gaming & Console",
    pricePerDay: 165000,
    deposit: 4500000,
    bestseller: true,
    images: [
      img("photo-1606318313846-ce9e39b3d3b7"),
      img("photo-1622297845775-5ff3fef71d13"),
    ],
    short:
      "PS5 Disc with 2 DualSense controllers. Pick any 3 games from our library.",
    spec: [
      { label: "Model", value: "Disc Edition" },
      { label: "Storage", value: "825 GB SSD" },
      { label: "Kit", value: "Console, 2 DualSense, HDMI, adapter" },
      { label: "Games", value: "3 titles of your choice" },
    ],
    cities: ["Jakarta", "Bandung", "Yogyakarta", "Surabaya"],
  },
  {
    id: "game-nintendo-switch",
    slug: "nintendo-switch-oled",
    name: "Nintendo Switch OLED",
    category: "gaming",
    categoryName: "Gaming & Console",
    pricePerDay: 125000,
    deposit: 3500000,
    images: [
      img("photo-1587202372775-e229f172b9d7"),
      img("photo-1585857188823-c56d2e4c1a4c"),
    ],
    short:
      "7-inch OLED Switch with dock, 4 Joy-Cons, and 5 party games included.",
    spec: [
      { label: "Screen", value: "7\" OLED" },
      { label: "Storage", value: "64 GB" },
      { label: "Kit", value: "Console, dock, 4 Joy-Cons, grip" },
      { label: "Games", value: "5 party titles" },
    ],
    cities: ["Jakarta", "Bandung"],
  },
  {
    id: "game-vr-quest3",
    slug: "meta-quest-3",
    name: "Meta Quest 3",
    category: "gaming",
    categoryName: "Gaming & Console",
    pricePerDay: 195000,
    deposit: 5000000,
    newDrop: true,
    images: [
      img("photo-1622979135225-d2ba269cf1ac"),
      img("photo-1592478411213-6153e4ebc07d"),
    ],
    short:
      "Standalone VR headset with color mixed-reality passthrough.",
    spec: [
      { label: "Storage", value: "128 GB" },
      { label: "Resolution", value: "2064 x 2208 per eye" },
      { label: "Kit", value: "Headset, 2 controllers, charger" },
      { label: "Games", value: "5 favorites" },
    ],
    cities: ["Jakarta", "Bandung"],
  },

  // 06 Bikes
  {
    id: "bike-mtb-polygon",
    slug: "polygon-siskiu-t7",
    name: "Polygon Siskiu T7 MTB",
    category: "bikes",
    categoryName: "Bicycles",
    pricePerDay: 95000,
    deposit: 2500000,
    images: [
      img("photo-1485965120184-e220f721d03e"),
      img("photo-1502744688674-c619d1586c9e"),
    ],
    short:
      "Full-suspension MTB with ALX frame and RockShox fork.",
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
    category: "bikes",
    categoryName: "Bicycles",
    pricePerDay: 130000,
    deposit: 4000000,
    images: [
      img("photo-1502161254066-6c74afbf07aa"),
      img("photo-1517649763962-0c623066013b"),
    ],
    short:
      "Lightweight aluminum road bike with Shimano 105 groupset.",
    spec: [
      { label: "Frame", value: "SmartForm C1 Alloy" },
      { label: "Groupset", value: "Shimano 105 R7000" },
      { label: "Wheel", value: "700c Fulcrum Racing 900" },
      { label: "Weight", value: "8.5 kg" },
    ],
    cities: ["Jakarta", "Bandung"],
  },
  {
    id: "bike-ebike-brompton",
    slug: "brompton-electric",
    name: "Brompton Electric C-Line",
    category: "bikes",
    categoryName: "Bicycles",
    pricePerDay: 175000,
    deposit: 5500000,
    newDrop: true,
    images: [
      img("photo-1571188654248-7a89213915f7"),
      img("photo-1517649763962-0c623066013b"),
    ],
    short:
      "Iconic folding e-bike with 250W motor and 300Wh removable battery.",
    spec: [
      { label: "Motor", value: "250W front hub" },
      { label: "Battery", value: "300Wh detachable" },
      { label: "Range", value: "40-70 km" },
      { label: "Weight", value: "17.4 kg" },
    ],
    cities: ["Jakarta", "Bandung"],
  },

  // 07 Vehicles
  {
    id: "vehicle-motor-nmax",
    slug: "yamaha-nmax-155",
    name: "Yamaha NMAX 155",
    category: "vehicles",
    categoryName: "Motorbikes & Cars",
    pricePerDay: 150000,
    deposit: 1000000,
    bestseller: true,
    images: [
      img("photo-1558981806-ec527fa84c39"),
      img("photo-1568772585407-9361f9bf3a87"),
    ],
    short:
      "155cc automatic scooter with ABS and smart key. Two helmets and rain coat included.",
    spec: [
      { label: "Engine", value: "155cc Blue Core VVA" },
      { label: "Transmission", value: "CVT" },
      { label: "Fuel tank", value: "7.1 L" },
      { label: "Includes", value: "2 helmets, rain coat" },
    ],
    cities: ["Bali", "Yogyakarta", "Bandung"],
  },
  {
    id: "vehicle-mobil-brio",
    slug: "honda-brio",
    name: "Honda Brio RS",
    category: "vehicles",
    categoryName: "Motorbikes & Cars",
    pricePerDay: 385000,
    deposit: 3000000,
    images: [
      img("photo-1583121274602-3e2820c69888"),
      img("photo-1503376780353-7e6692767b70"),
    ],
    short:
      "1200cc automatic city car. Fits 5 with decent boot space.",
    spec: [
      { label: "Engine", value: "1200cc i-VTEC" },
      { label: "Transmission", value: "CVT" },
      { label: "Seats", value: "5" },
      { label: "Includes", value: "Full tank, complete papers" },
    ],
    cities: ["Bali", "Jakarta", "Yogyakarta"],
  },
  {
    id: "vehicle-motor-vespa",
    slug: "vespa-primavera-150",
    name: "Vespa Primavera 150",
    category: "vehicles",
    categoryName: "Motorbikes & Cars",
    pricePerDay: 285000,
    deposit: 2000000,
    images: [
      img("photo-1580310614729-ccd69652491d"),
      img("photo-1591637333184-19aa84b3e01f"),
    ],
    short:
      "Classic Italian 150cc scooter. Perfect for photo shoots in Bali or Yogya.",
    spec: [
      { label: "Engine", value: "150cc i-Get" },
      { label: "Body", value: "Steel monocoque" },
      { label: "Fuel tank", value: "8 L" },
      { label: "Includes", value: "2 helmets, bag" },
    ],
    cities: ["Bali", "Yogyakarta"],
  },

  // 08 Baby Gear
  {
    id: "baby-stroller",
    slug: "cybex-eezy-s-twist",
    name: "Cybex Eezy S Twist+2",
    category: "baby-gear",
    categoryName: "Baby Gear",
    pricePerDay: 85000,
    deposit: 1500000,
    images: [
      img("photo-1519689680058-324335c77eba"),
      img("photo-1515488042361-ee00e0ddd4e4"),
    ],
    short:
      "Compact stroller with one-hand fold and 360° swivel seat.",
    spec: [
      { label: "Age", value: "6 months - 4 years" },
      { label: "Weight limit", value: "22 kg" },
      { label: "Folded", value: "Cabin-friendly" },
      { label: "Includes", value: "Rain cover, sun canopy" },
    ],
    cities: ["Jakarta", "Bandung"],
  },
  {
    id: "baby-carseat",
    slug: "maxi-cosi-pebble-360",
    name: "Maxi-Cosi Pebble 360",
    category: "baby-gear",
    categoryName: "Baby Gear",
    pricePerDay: 75000,
    deposit: 1200000,
    images: [
      img("photo-1594736797933-d0501ba2fe65"),
      img("photo-1618232324348-e18d6efce7f5"),
    ],
    short:
      "i-Size 0-15 month car seat with 360° rotation for easy in-and-out.",
    spec: [
      { label: "Rating", value: "i-Size R129" },
      { label: "Age", value: "0-15 months" },
      { label: "Rotation", value: "360°" },
      { label: "Base", value: "Isofix" },
    ],
    cities: ["Jakarta", "Bandung"],
  },
  {
    id: "baby-crib",
    slug: "graco-pack-n-play",
    name: "Graco Pack 'n Play",
    category: "baby-gear",
    categoryName: "Baby Gear",
    pricePerDay: 55000,
    deposit: 700000,
    images: [
      img("photo-1522771930-78848d9293e8"),
      img("photo-1515488042361-ee00e0ddd4e4"),
    ],
    short:
      "Portable travel crib with bassinet and changing table.",
    spec: [
      { label: "Includes", value: "Bassinet, changing table" },
      { label: "Weight limit", value: "13.6 kg" },
      { label: "Folded", value: "Compact travel bag" },
      { label: "Setup", value: "One-hand" },
    ],
    cities: ["Jakarta", "Bandung"],
  },

  // 09 Formal Outfit
  {
    id: "outfit-jas-armani",
    slug: "armani-slim-suit",
    name: "Armani Slim Suit (Navy)",
    category: "formal-outfit",
    categoryName: "Formal Outfits",
    pricePerDay: 225000,
    deposit: 2500000,
    bestseller: true,
    images: [
      img("photo-1490481651871-ab68de25d43d"),
      img("photo-1594938298603-c8148c4dae35"),
    ],
    short:
      "Slim-fit 2-piece navy suit in Italian wool.",
    spec: [
      { label: "Sizes", value: "S, M, L, XL, XXL" },
      { label: "Fabric", value: "Italian wool" },
      { label: "Style", value: "Slim-fit 2-piece" },
      { label: "Includes", value: "Dry-clean after use" },
    ],
    cities: ["Jakarta", "Bandung", "Surabaya"],
  },
  {
    id: "outfit-kebaya-modern",
    slug: "modern-kebaya-brokat",
    name: "Modern Brokat Kebaya",
    category: "formal-outfit",
    categoryName: "Formal Outfits",
    pricePerDay: 275000,
    deposit: 3000000,
    images: [
      img("photo-1583391733956-6c78276477e2"),
      img("photo-1483985988355-763728e1935b"),
    ],
    short:
      "Modern kebaya with fine brocade and handmade beading. Multiple colorways.",
    spec: [
      { label: "Sizes", value: "S, M, L, XL" },
      { label: "Colors", value: "Broken white, dusty, sage" },
      { label: "Fabric", value: "Brocade + tulle" },
      { label: "Includes", value: "Batik skirt + shawl" },
    ],
    cities: ["Jakarta", "Bandung", "Yogyakarta"],
  },
  {
    id: "outfit-gown-evening",
    slug: "silk-evening-gown",
    name: "Silk Evening Gown (Merlot)",
    category: "formal-outfit",
    categoryName: "Formal Outfits",
    pricePerDay: 395000,
    deposit: 3500000,
    newDrop: true,
    images: [
      img("photo-1566174053879-31528523f8ae"),
      img("photo-1596993100471-c3905dafa78e"),
    ],
    short:
      "Silk long dress in deep merlot with side slit and open back.",
    spec: [
      { label: "Sizes", value: "S, M, L" },
      { label: "Color", value: "Merlot deep red" },
      { label: "Fabric", value: "Silk crepe" },
      { label: "Includes", value: "Pre-pickup steaming" },
    ],
    cities: ["Jakarta", "Bandung"],
  },

  // 10 Costumes
  {
    id: "kostum-halloween",
    slug: "classic-vampire-costume",
    name: "Classic Vampire Costume",
    category: "costumes",
    categoryName: "Costumes & Cosplay",
    pricePerDay: 125000,
    deposit: 800000,
    images: [
      img("photo-1509909756405-be0199881695"),
      img("photo-1509978778156-518eea30166b"),
    ],
    short:
      "Full vampire costume kit with cape, fangs, and makeup.",
    spec: [
      { label: "Size", value: "One size (M-XL)" },
      { label: "Kit", value: "Cape, shirt, fangs, makeup" },
      { label: "Accessory", value: "Black wig optional" },
      { label: "Best for", value: "Halloween, themed party" },
    ],
    cities: ["Jakarta", "Bandung"],
  },
  {
    id: "kostum-cosplay-samurai",
    slug: "samurai-cosplay-set",
    name: "Samurai Cosplay Set",
    category: "costumes",
    categoryName: "Costumes & Cosplay",
    pricePerDay: 195000,
    deposit: 1500000,
    images: [
      img("photo-1520175480921-4edfa2983e0f"),
      img("photo-1560306843-6c0f5bd25e70"),
    ],
    short:
      "Complete samurai costume with armor, replica katana, and hakama.",
    spec: [
      { label: "Sizes", value: "M, L, XL" },
      { label: "Kit", value: "Armor, hakama, kimono, replica katana" },
      { label: "Armor material", value: "PU leather + fabric" },
      { label: "Note", value: "Katana is not sharp" },
    ],
    cities: ["Jakarta", "Bandung"],
  },
  {
    id: "kostum-mascot",
    slug: "jumbo-panda-mascot",
    name: "Jumbo Panda Mascot",
    category: "costumes",
    categoryName: "Costumes & Cosplay",
    pricePerDay: 155000,
    deposit: 1000000,
    images: [
      img("photo-1601758228041-f3b2795255f1"),
      img("photo-1573497019940-1c28c88b4f3e"),
    ],
    short:
      "Adult-size panda mascot suit with built-in ventilation fans.",
    spec: [
      { label: "Size", value: "Fits 160-180cm" },
      { label: "Feature", value: "2x ventilation fans" },
      { label: "Material", value: "Plush + foam" },
      { label: "Includes", value: "Optional cooling vest" },
    ],
    cities: ["Jakarta", "Bandung"],
  },

  // 11 Outdoor Sport
  {
    id: "sport-surfboard",
    slug: "longboard-9ft",
    name: "9'0\" Longboard Surfboard",
    category: "outdoor-sport",
    categoryName: "Outdoor Sports",
    pricePerDay: 145000,
    deposit: 2000000,
    images: [
      img("photo-1502680390469-be75c86b636f"),
      img("photo-1502933691298-84fc14542831"),
    ],
    short:
      "9'0\" longboard for beginner-intermediate riders. Leash and wax included.",
    spec: [
      { label: "Length", value: "9'0\"" },
      { label: "Volume", value: "72L" },
      { label: "Fin setup", value: "Single fin" },
      { label: "Includes", value: "Leash, wax, board bag" },
    ],
    cities: ["Bali"],
  },
  {
    id: "sport-paddleboard",
    slug: "inflatable-paddleboard",
    name: "Inflatable Paddle Board",
    category: "outdoor-sport",
    categoryName: "Outdoor Sports",
    pricePerDay: 165000,
    deposit: 2500000,
    images: [
      img("photo-1502920917128-1aa500764cbd"),
      img("photo-1522093007474-d86e9bf7ba6f"),
    ],
    short:
      "10'6\" inflatable paddle board with electric pump and travel bag.",
    spec: [
      { label: "Length", value: "10'6\"" },
      { label: "Weight limit", value: "150 kg" },
      { label: "Includes", value: "Paddle, pump, bag, leash" },
      { label: "Packed", value: "Cabin-size backpack" },
    ],
    cities: ["Bali", "Yogyakarta"],
  },
  {
    id: "sport-snorkel-set",
    slug: "premium-snorkel-set",
    name: "Premium Snorkel Set",
    category: "outdoor-sport",
    categoryName: "Outdoor Sports",
    pricePerDay: 45000,
    deposit: 500000,
    images: [
      img("photo-1518729571365-83d18b5ba48e"),
      img("photo-1544551763-46a013bb70d5"),
    ],
    short:
      "Full-face snorkel and ergonomic fins, three sizes available.",
    spec: [
      { label: "Mask type", value: "Full-face" },
      { label: "Sizes", value: "S, M, L" },
      { label: "Includes", value: "Mask, fins, dry bag" },
      { label: "Anti-fog", value: "Yes" },
    ],
    cities: ["Bali"],
  },

  // 12 Party & Decor
  {
    id: "party-photobooth",
    slug: "360-photobooth",
    name: "360° Photobooth Set",
    category: "party-decor",
    categoryName: "Party & Decor",
    pricePerDay: 850000,
    deposit: 3000000,
    bestseller: true,
    images: [
      img("photo-1519671482749-fd09be7ccebf"),
      img("photo-1478147427282-58a87a120781"),
    ],
    short:
      "360° photobooth with operator, custom backdrop, and instant printing.",
    spec: [
      { label: "Feature", value: "360° video + instant print" },
      { label: "Prints", value: "Unlimited 4R" },
      { label: "Operator", value: "2 staff during event" },
      { label: "Backdrop", value: "Custom to your theme" },
    ],
    cities: ["Jakarta", "Bandung"],
  },
  {
    id: "party-backdrop",
    slug: "flower-wall-backdrop",
    name: "Flower Wall Backdrop 3x2m",
    category: "party-decor",
    categoryName: "Party & Decor",
    pricePerDay: 495000,
    deposit: 1500000,
    images: [
      img("photo-1509927083803-4bd519298ac4"),
      img("photo-1519741497674-611481863552"),
    ],
    short:
      "3x2m artificial flower wall for photobooth or wedding decor.",
    spec: [
      { label: "Size", value: "3m x 2m" },
      { label: "Colors", value: "White, dusty pink, sage" },
      { label: "Setup", value: "Included" },
      { label: "Note", value: "Non-flammable material" },
    ],
    cities: ["Jakarta", "Bandung", "Yogyakarta"],
  },
  {
    id: "party-table-vip",
    slug: "vip-table-chair-set",
    name: "VIP Table & Chair Set (10 pax)",
    category: "party-decor",
    categoryName: "Party & Decor",
    pricePerDay: 375000,
    deposit: 1200000,
    images: [
      img("photo-1519741497674-611481863552"),
      img("photo-1478147427282-58a87a120781"),
    ],
    short:
      "1 round table + 10 white Tiffany chairs with premium covers and linens.",
    spec: [
      { label: "Kit", value: "1 table + 10 Tiffany chairs" },
      { label: "Setup", value: "Included" },
      { label: "Linen", value: "Premium white linen" },
      { label: "Note", value: "Indoor & outdoor ready" },
    ],
    cities: ["Jakarta", "Bandung", "Yogyakarta"],
  },

  // 13 Electronics
  {
    id: "elec-projector",
    slug: "epson-eb-e01",
    name: "Epson EB-E01 Projector",
    category: "electronics",
    categoryName: "Electronics & Projector",
    pricePerDay: 175000,
    deposit: 2500000,
    bestseller: true,
    images: [
      img("photo-1626544827763-d516dce335e2"),
      img("photo-1541428229580-c8fd80eff5b6"),
    ],
    short:
      "3300-lumen projector with HDMI and VGA. Perfect for meetings.",
    spec: [
      { label: "Brightness", value: "3300 lumens" },
      { label: "Resolution", value: "XGA 1024x768" },
      { label: "Lamp life", value: "12000 hours" },
      { label: "Kit", value: "Projector, remote, cables, bag" },
    ],
    cities: ["Jakarta", "Bandung", "Surabaya"],
  },
  {
    id: "elec-laptop",
    slug: "macbook-pro-14",
    name: "MacBook Pro 14\" M3",
    category: "electronics",
    categoryName: "Electronics & Projector",
    pricePerDay: 350000,
    deposit: 8000000,
    images: [
      img("photo-1517336714731-489689fd1ca8"),
      img("photo-1611186871348-b1ce696e52c9"),
    ],
    short:
      "14-inch MacBook Pro M3 with 16GB RAM and 512GB SSD for video editing.",
    spec: [
      { label: "Chip", value: "Apple M3 Pro" },
      { label: "RAM", value: "16 GB" },
      { label: "Storage", value: "512 GB SSD" },
      { label: "Kit", value: "Laptop, charger, sleeve" },
    ],
    cities: ["Jakarta", "Bandung"],
  },
  {
    id: "elec-tv",
    slug: "samsung-uhd-55",
    name: "Samsung UHD 55\" TV",
    category: "electronics",
    categoryName: "Electronics & Projector",
    pricePerDay: 225000,
    deposit: 3000000,
    images: [
      img("photo-1593359677879-a4bb92f829d1"),
      img("photo-1461151304267-38535e780c79"),
    ],
    short:
      "55-inch Samsung Crystal UHD TV for movie nights, presentations, or screenings.",
    spec: [
      { label: "Size", value: "55 inch" },
      { label: "Resolution", value: "4K UHD" },
      { label: "Feature", value: "Smart TV, YouTube, Netflix" },
      { label: "Kit", value: "TV, remote, HDMI cable" },
    ],
    cities: ["Jakarta", "Bandung"],
  },

  // 14 Studio
  {
    id: "studio-lighting-godox",
    slug: "godox-sl-60-set",
    name: "Godox SL-60W Set (3-point)",
    category: "studio",
    categoryName: "Photo & Video Studio",
    pricePerDay: 195000,
    deposit: 2500000,
    images: [
      img("photo-1533450718592-29d45a68af71"),
      img("photo-1616432043562-3671ea2e5242"),
    ],
    short:
      "3-point continuous LED lighting set with 90cm softboxes and stands.",
    spec: [
      { label: "Power", value: "3x 60W LED" },
      { label: "Modifier", value: "2x 90cm softbox, reflector" },
      { label: "Stand", value: "3x heavy-duty" },
      { label: "Includes", value: "Cables, travel case" },
    ],
    cities: ["Jakarta", "Bandung"],
  },
  {
    id: "studio-backdrop-stand",
    slug: "backdrop-stand-3m",
    name: "Backdrop Stand 3m + Fabric",
    category: "studio",
    categoryName: "Photo & Video Studio",
    pricePerDay: 85000,
    deposit: 800000,
    images: [
      img("photo-1554941829-202a0b2403b8"),
      img("photo-1610194352361-4c81a6a8967e"),
    ],
    short:
      "3x2.5m backdrop stand with your choice of white, black, or greenscreen fabric.",
    spec: [
      { label: "Size", value: "3m x 2.5m adjustable" },
      { label: "Fabric", value: "Cotton muslin (3 colors)" },
      { label: "Stand material", value: "Aluminum" },
      { label: "Includes", value: "4 clamps, bag" },
    ],
    cities: ["Jakarta", "Bandung"],
  },
  {
    id: "studio-teleprompter",
    slug: "tablet-teleprompter",
    name: "Tablet Teleprompter",
    category: "studio",
    categoryName: "Photo & Video Studio",
    pricePerDay: 145000,
    deposit: 1500000,
    images: [
      img("photo-1611926653458-09294b3142bf"),
      img("photo-1626387346567-68d0c1e0d54c"),
    ],
    short:
      "Beam-splitter teleprompter for 10-inch tablet with teleprompter app.",
    spec: [
      { label: "Tablet size", value: "Fits 7-10 inch" },
      { label: "Beam-splitter", value: "70/30 optical glass" },
      { label: "Mount", value: "DSLR + lens up to 200mm" },
      { label: "App", value: "Included" },
    ],
    cities: ["Jakarta", "Bandung"],
  },

  // 15 Tools
  {
    id: "tools-drill-makita",
    slug: "makita-drill-set",
    name: "Makita Drill Set 18V",
    category: "tools",
    categoryName: "Power Tools",
    pricePerDay: 85000,
    deposit: 1200000,
    images: [
      img("photo-1504148455328-c376907d081c"),
      img("photo-1572981779307-38b8cabb2407"),
    ],
    short:
      "Cordless 18V Makita drill with 2 batteries and case. Bit set included.",
    spec: [
      { label: "Voltage", value: "18V LXT" },
      { label: "Battery", value: "2x 3.0Ah" },
      { label: "Torque", value: "70 Nm" },
      { label: "Includes", value: "40-pc bit set, case" },
    ],
    cities: ["Jakarta", "Bandung", "Surabaya"],
  },
  {
    id: "tools-saw-circular",
    slug: "makita-circular-saw",
    name: "Makita Circular Saw",
    category: "tools",
    categoryName: "Power Tools",
    pricePerDay: 115000,
    deposit: 1500000,
    images: [
      img("photo-1517420704952-d9f39e95b43e"),
      img("photo-1621905251189-08b45d6a269e"),
    ],
    short:
      "7-1/4\" 1200W circular saw for cutting wood or MDF.",
    spec: [
      { label: "Blade", value: '7-1/4"' },
      { label: "Power", value: "1200W" },
      { label: "Depth", value: "66mm at 90°" },
      { label: "Includes", value: "Guide rail, spare blade" },
    ],
    cities: ["Jakarta", "Bandung"],
  },
  {
    id: "tools-ladder",
    slug: "folding-ladder-6m",
    name: "6m Aluminum Folding Ladder",
    category: "tools",
    categoryName: "Power Tools",
    pricePerDay: 65000,
    deposit: 900000,
    images: [
      img("photo-1581094794329-c8112a89af12"),
      img("photo-1581094794329-c8112a89af12"),
    ],
    short:
      "6m multi-purpose aluminum ladder. Folds into an A-frame or straight ladder.",
    spec: [
      { label: "Length", value: "6m extended / 1.5m folded" },
      { label: "Material", value: "Aluminum" },
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
