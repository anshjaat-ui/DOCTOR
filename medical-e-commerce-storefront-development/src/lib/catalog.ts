export type Review = {
  name: string;
  initial: string;
  rating: number;
  date: string;
  title: string;
  body: string;
  verified?: boolean;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: "Wellness" | "Personal care" | "First aid" | "Nutrition" | "Family care";
  shortDescription: string;
  description: string;
  price: number;
  originalPrice?: number;
  size: string;
  rating: number;
  reviewCount: number;
  image: string;
  gallery: string[];
  badge?: string;
  accent: string;
  highlights: string[];
  directions: string;
  ingredients: string;
  reviews: Review[];
};

export const products: Product[] = [
  {
    id: "aiims-001",
    slug: "daily-defense-vitamin-c",
    name: "Daily Defense Vitamin C",
    category: "Wellness",
    shortDescription: "1000mg citrus bioflavonoid tablets",
    description: "A bright, everyday blend of vitamin C and citrus bioflavonoids designed to support your daily wellness routine. Thoughtfully formulated for a little more confidence in every season.",
    price: 18,
    originalPrice: 22,
    size: "60 tablets",
    rating: 4.9,
    reviewCount: 128,
    image: "https://images.pexels.com/photos/31251024/pexels-photo-31251024.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=950&w=950",
    gallery: [
      "https://images.pexels.com/photos/31251024/pexels-photo-31251024.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=950&w=950",
      "https://images.pexels.com/photos/13272754/pexels-photo-13272754.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=950&w=950",
      "https://images.pexels.com/photos/16329382/pexels-photo-16329382.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=950&w=950"
    ],
    badge: "Bestseller",
    accent: "#f3c957",
    highlights: ["High potency 1000mg", "With citrus bioflavonoids", "Vegan-friendly tablets"],
    directions: "Adults: take one tablet daily with food, or as directed by your healthcare professional.",
    ingredients: "Vitamin C (ascorbic acid), citrus bioflavonoids, cellulose, vegetable magnesium stearate.",
    reviews: [
      { name: "Maya R.", initial: "M", rating: 5, date: "2 weeks ago", title: "A cupboard staple", body: "Simple, effective, and gentle on my stomach. I have reordered twice already.", verified: true },
      { name: "Louis B.", initial: "L", rating: 5, date: "1 month ago", title: "Great value", body: "The tablets are easy to take and the delivery was so quick.", verified: true },
      { name: "Aisha K.", initial: "A", rating: 4, date: "1 month ago", title: "Reliable everyday choice", body: "Exactly what I was looking for for my daily routine.", verified: true }
    ]
  },
  {
    id: "aiims-002",
    slug: "calm-rest-magnesium-glycinate",
    name: "Calm & Rest Magnesium",
    category: "Wellness",
    shortDescription: "Magnesium glycinate for your evening ritual",
    description: "A carefully balanced magnesium glycinate supplement made for the slower moments of your day. A gentle way to support a considered wind-down routine.",
    price: 24,
    size: "90 capsules",
    rating: 4.8,
    reviewCount: 86,
    image: "https://images.pexels.com/photos/20382236/pexels-photo-20382236.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=950&w=950",
    gallery: [
      "https://images.pexels.com/photos/20382236/pexels-photo-20382236.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=950&w=950",
      "https://images.pexels.com/photos/31251024/pexels-photo-31251024.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=950&w=950",
      "https://images.pexels.com/photos/13272754/pexels-photo-13272754.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=950&w=950"
    ],
    badge: "New",
    accent: "#b8b2dd",
    highlights: ["Highly absorbable glycinate", "Made for evening routines", "No artificial colours"],
    directions: "Adults: take two capsules in the evening with water. Do not exceed the stated daily dose.",
    ingredients: "Magnesium bisglycinate, rice flour, hypromellose capsule, silicon dioxide.",
    reviews: [
      { name: "Nora P.", initial: "N", rating: 5, date: "3 weeks ago", title: "Part of my night routine", body: "I love the simple formula and the capsule size is just right.", verified: true },
      { name: "Chloe S.", initial: "C", rating: 5, date: "2 months ago", title: "Beautifully packaged", body: "The product arrived in perfect condition and feels genuinely premium.", verified: true }
    ]
  },
  {
    id: "aiims-003",
    slug: "mineral-sunscreen-spf50",
    name: "Mineral Sunscreen SPF 50",
    category: "Personal care",
    shortDescription: "Broad-spectrum, sheer daily protection",
    description: "A lightweight mineral sunscreen that layers beautifully into your morning care ritual. It is made to feel comfortable, leave a soft finish, and accompany your day.",
    price: 28,
    size: "50 ml",
    rating: 4.7,
    reviewCount: 63,
    image: "https://images.pexels.com/photos/7546589/pexels-photo-7546589.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=950&w=950",
    gallery: [
      "https://images.pexels.com/photos/7546589/pexels-photo-7546589.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=950&w=950",
      "https://images.pexels.com/photos/16329382/pexels-photo-16329382.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=950&w=950",
      "https://images.pexels.com/photos/20382236/pexels-photo-20382236.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=950&w=950"
    ],
    accent: "#e6b9a8",
    highlights: ["Broad spectrum SPF 50", "Mineral UV filters", "Fragrance-free"],
    directions: "Apply generously to dry skin 15 minutes before sun exposure. Reapply every two hours and after swimming.",
    ingredients: "Zinc oxide, caprylic triglyceride, glycerin, aloe leaf juice, vitamin E.",
    reviews: [
      { name: "Sofia T.", initial: "S", rating: 5, date: "2 weeks ago", title: "No heavy feeling", body: "Finally a daily SPF that feels comfortable under makeup.", verified: true },
      { name: "Priya D.", initial: "P", rating: 4, date: "6 weeks ago", title: "Lovely soft finish", body: "It blends in well and does not have that typical sunscreen smell.", verified: true }
    ]
  },
  {
    id: "aiims-004",
    slug: "recovery-care-first-aid-kit",
    name: "Recovery Care First Aid Kit",
    category: "First aid",
    shortDescription: "Prepared essentials for everyday bumps",
    description: "A thoughtfully edited home first aid kit in a durable, easy-to-find pouch. A practical collection of everyday care essentials for home, travel, or the car.",
    price: 32,
    originalPrice: 38,
    size: "42 essentials",
    rating: 4.9,
    reviewCount: 41,
    image: "https://images.pexels.com/photos/9230357/pexels-photo-9230357.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=950&w=950",
    gallery: [
      "https://images.pexels.com/photos/9230357/pexels-photo-9230357.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=950&w=950",
      "https://images.pexels.com/photos/9230441/pexels-photo-9230441.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=950&w=950",
      "https://images.pexels.com/photos/32532077/pexels-photo-32532077.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=950&w=950"
    ],
    badge: "Save 15%",
    accent: "#ecb18c",
    highlights: ["42 home essentials", "Water-resistant carry pouch", "Clear, replenishable layout"],
    directions: "Keep in a cool, dry place and check contents periodically. Replace items after use or after their expiry dates.",
    ingredients: "Contains assorted plasters, sterile dressings, cleansing wipes, tape, gauze, scissors and first-aid guide.",
    reviews: [
      { name: "Jasper H.", initial: "J", rating: 5, date: "1 week ago", title: "Every home needs one", body: "Everything has a place, so I can find what I need quickly.", verified: true },
      { name: "Grace W.", initial: "G", rating: 5, date: "1 month ago", title: "Excellent travel companion", body: "Bought one for our car too. Great quality and thoughtfully assembled.", verified: true }
    ]
  },
  {
    id: "aiims-005",
    slug: "tummy-ease-peppermint-capsules",
    name: "Tummy Ease Peppermint",
    category: "Nutrition",
    shortDescription: "Enteric-coated peppermint oil capsules",
    description: "A plant-forward peppermint oil capsule created to complement mindful mealtimes. The enteric-coated design is made for a calm, considered wellness routine.",
    price: 16,
    size: "30 capsules",
    rating: 4.6,
    reviewCount: 57,
    image: "https://images.pexels.com/photos/18066458/pexels-photo-18066458.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=950&w=950",
    gallery: [
      "https://images.pexels.com/photos/18066458/pexels-photo-18066458.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=950&w=950",
      "https://images.pexels.com/photos/16329382/pexels-photo-16329382.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=950&w=950",
      "https://images.pexels.com/photos/31251024/pexels-photo-31251024.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=950&w=950"
    ],
    accent: "#9bc9b4",
    highlights: ["Natural peppermint oil", "Enteric-coated capsules", "Plant-based shell"],
    directions: "Adults: take one capsule up to three times daily, preferably before meals. Swallow whole with water.",
    ingredients: "Peppermint oil, hypromellose capsule, gellan gum, glycerin.",
    reviews: [
      { name: "Thomas A.", initial: "T", rating: 5, date: "4 weeks ago", title: "Super convenient", body: "The packaging is beautiful and the formula suits my routine really well.", verified: true },
      { name: "Elena M.", initial: "E", rating: 4, date: "2 months ago", title: "Thoughtful product", body: "Great price and it arrived just two days after ordering.", verified: true }
    ]
  },
  {
    id: "aiims-006",
    slug: "little-ones-gentle-balm",
    name: "Little Ones Gentle Balm",
    category: "Family care",
    shortDescription: "A soothing multi-use botanical balm",
    description: "A gentle, fragrance-free balm for the tender, everyday moments of family care. Made with a short, comforting ingredient list and a soft, protective texture.",
    price: 14,
    size: "75 g",
    rating: 4.9,
    reviewCount: 94,
    image: "https://images.pexels.com/photos/16329382/pexels-photo-16329382.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=950&w=950",
    gallery: [
      "https://images.pexels.com/photos/16329382/pexels-photo-16329382.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=950&w=950",
      "https://images.pexels.com/photos/7546589/pexels-photo-7546589.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=950&w=950",
      "https://images.pexels.com/photos/20382236/pexels-photo-20382236.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=950&w=950"
    ],
    badge: "Family favourite",
    accent: "#d6c7e7",
    highlights: ["Dermatologically tested", "Fragrance-free formula", "Suitable from 3 months"],
    directions: "Apply a small amount to clean, dry skin as needed. For external use only.",
    ingredients: "Shea butter, sunflower seed oil, calendula extract, beeswax, vitamin E.",
    reviews: [
      { name: "Renee C.", initial: "R", rating: 5, date: "5 days ago", title: "So useful", body: "A real multitasker in our changing bag. It is lovely and rich without feeling sticky.", verified: true },
      { name: "Hannah J.", initial: "H", rating: 5, date: "3 weeks ago", title: "Our everyday balm", body: "The whole family uses this. Gentle and wonderfully simple.", verified: true }
    ]
  },
  {
    id: "aiims-007",
    slug: "omega-3-pure-fish-oil",
    name: "Omega-3 Pure Fish Oil",
    category: "Nutrition",
    shortDescription: "High-strength EPA & DHA softgels",
    description: "High-quality omega-3 fish oil softgels with a clean, streamlined formula. A simple addition to the routines that make you feel your best.",
    price: 21,
    size: "60 softgels",
    rating: 4.7,
    reviewCount: 73,
    image: "https://images.pexels.com/photos/13272754/pexels-photo-13272754.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=950&w=950",
    gallery: [
      "https://images.pexels.com/photos/13272754/pexels-photo-13272754.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=950&w=950",
      "https://images.pexels.com/photos/31251024/pexels-photo-31251024.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=950&w=950",
      "https://images.pexels.com/photos/20382236/pexels-photo-20382236.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=950&w=950"
    ],
    accent: "#9bb9dd",
    highlights: ["1000mg fish oil per serving", "Molecularly distilled", "Lemon-fresh softgels"],
    directions: "Adults: take one softgel daily with a main meal. Store in a cool, dry place.",
    ingredients: "Fish oil concentrate, gelatin, glycerol, natural lemon flavour, antioxidant (mixed tocopherols).",
    reviews: [
      { name: "Dylan S.", initial: "D", rating: 5, date: "2 weeks ago", title: "No aftertaste", body: "Finally an omega supplement that is easy to take. I am very happy with it.", verified: true },
      { name: "Nina F.", initial: "N", rating: 4, date: "2 months ago", title: "Smooth delivery experience", body: "Love the clean packaging and clear information provided.", verified: true }
    ]
  },
  {
    id: "aiims-008",
    slug: "daily-hydration-electrolytes",
    name: "Daily Hydration Electrolytes",
    category: "Wellness",
    shortDescription: "Citrus sachets with essential minerals",
    description: "Refreshing, low-sugar electrolyte sachets with a crisp citrus profile. Designed for busy days, thoughtful hydration, and effortless mixing on the go.",
    price: 19,
    size: "20 sachets",
    rating: 4.8,
    reviewCount: 104,
    image: "https://images.pexels.com/photos/36183642/pexels-photo-36183642.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=950&w=950",
    gallery: [
      "https://images.pexels.com/photos/36183642/pexels-photo-36183642.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=950&w=950",
      "https://images.pexels.com/photos/31251024/pexels-photo-31251024.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=950&w=950",
      "https://images.pexels.com/photos/18066458/pexels-photo-18066458.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=950&w=950"
    ],
    badge: "Popular",
    accent: "#f1d578",
    highlights: ["Essential electrolyte blend", "Low sugar", "Naturally flavoured"],
    directions: "Dissolve one sachet in 500ml of cold water. Enjoy whenever you need a refresh.",
    ingredients: "Sodium citrate, potassium chloride, magnesium citrate, citric acid, natural citrus flavours, stevia leaf extract.",
    reviews: [
      { name: "Sam G.", initial: "S", rating: 5, date: "1 week ago", title: "Fresh and not too sweet", body: "The citrus taste is clean and not overpowering. Great after a long walk.", verified: true },
      { name: "Kira W.", initial: "K", rating: 5, date: "3 weeks ago", title: "Always in my bag", body: "These have become a non-negotiable part of my day.", verified: true }
    ]
  }
];

export const categories = ["All products", "Wellness", "Nutrition", "Personal care", "First aid", "Family care"] as const;

export const formatPrice = (value: number) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(value);

export const findProduct = (slug: string) => products.find((product) => product.slug === slug);
