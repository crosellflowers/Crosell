/* ==========================================================
   ✿  EDIT YOUR SHOP HERE  ✿
   Everything you'll usually change lives in this block.
   ========================================================== */
const SHOP = {
  name: "Crosell",
  // WhatsApp number with country code, digits only (no +, spaces or dashes).
  // Example: +91 98765 43210  ->  "919876543210"
  whatsapp: "917204989869",
  // Phone number for calls, as you'd like it shown. "" to hide.
  phone: "+91 72049 89869",
  address: "Bangalore, India", // shown in the footer, or "" to hide
  instagram: "crosell.in", // username without @, or "" to hide
  facebook: "crosell.in", // page name from facebook.com/<name>, or "" to hide
  email: "info@crosell.in", // or "" to hide
  currency: "INR",
  // Default offer for any product without its own "discount". Each product sets its own below.
  // The crossed-out price is worked out automatically, so the % shown is always correct. 0 = no offer.
  discount: 0,
  locale: "en-IN", // controls number formatting
};

// To add a product: copy one { ... } block, give it a new id, and add photos to /images.
const PRODUCTS = [
  {
    id: "bluebell-basket",
    category: "hanging-baskets",
    name: "Bluebell Hanging Basket",
    price: 1699, // ₹
    discount: 45, // % off shown (crossed-out price is worked out from this)
    badge: "Signature",
    tagline: "Sky-blue bells tumbling from a cozy rope basket.",
    description:
      "A cream crochet basket brimming with curly green vines and puffy sky-blue bluebells that spill over the edge. Hang it by a window, over a desk or on a covered balcony for a little garden that never needs watering.",
    colors: ["#8DB4EA", "#5E9A35", "#E6DAC3"],
    details: [
      "Hand-crocheted, made to order",
      "Rope hanger included",
      "Best indoors or on a covered balcony",
      "Total height 23.5 inch (strap 13 + pot 2.5 + flowers 10)",
      "Pot 13 inch wide",
    ],
    images: [
      { src: "images/bluebell-room.jpg", alt: "Crochet hanging basket with trailing green vines and sky-blue bluebells" },
      { src: "images/bluebell-closeup.jpg", alt: "Close-up of puffy blue crochet bluebells and green vines" },
      { src: "images/bluebell-balcony.jpg", alt: "Bluebell basket hanging on a sunny balcony" },
      { src: "images/bluebell-top.jpg", alt: "Top view of the basket filled with curly crochet vines" },
      { src: "images/bluebell-basket-specs-in.jpg", alt: "Bluebell hanging basket specifications: total height 23.5 inch, strap 13 inch, pot 2.5 inch high and 13 inch wide, hanging flowers 10 inch", fit: "contain" },
    ],
  },
  {
    id: "pink-blossom-basket",
    category: "hanging-baskets",
    name: "Pink Blossom Hanging Basket",
    price: 1699,
    discount: 45, // % off shown (crossed-out price is worked out from this)
    tagline: "Blush-pink blooms on long trailing vines.",
    description:
      "Soft, puffy pink blossoms cascade down trailing green vines from a natural-toned basket. Sweet in a bedroom, nursery or sunny corner, and it stays in full bloom all year round.",
    colors: ["#F2A7C3", "#5E9A35", "#E6DAC3"],
    details: [
      "Hand-crocheted, made to order",
      "Rope hanger included",
      "Best indoors or on a covered balcony",
      "Total height 24.5 inch (strap 13 + pot 2.5 + flowers 11)",
      "Pot 13 inch wide",
    ],
    images: [
      { src: "images/pink-room.jpg", alt: "Crochet hanging basket with trailing vines and pink blossoms" },
      { src: "images/pink-closeup.jpg", alt: "Close-up of soft pink crochet blossoms on green vines" },
      { src: "images/pink-balcony.jpg", alt: "Pink blossom basket hanging on a sunny balcony" },
      { src: "images/pink-blossom-basket-specs-in.jpg", alt: "Pink blossom hanging basket specifications: total height 24.5 inch, strap 13 inch, pot 2.5 inch high and 13 inch wide, hanging flowers 11 inch", fit: "contain" },
    ],
  },
  {
    id: "rose-pink-basket",
    category: "hanging-baskets",
    name: "Rose Pink Blossom Hanging Basket",
    price: 1699,
    discount: 45, // % off shown (crossed-out price is worked out from this)
    tagline: "Bright pink blossoms in a sky-blue basket.",
    description:
      "A soft sky-blue crochet basket overflowing with curly green vines and bright rose-pink blossoms that tumble down on long trailing stems. A bold pop of colour for a window, balcony or bedroom, and it never needs watering.",
    colors: ["#FF3EA5", "#BFD9F2", "#4E9A2E"],
    details: [
      "Hand-crocheted, made to order",
      "Rope hanger included",
      "Best indoors or on a covered balcony",
      "Total height 24.5 inch (strap 13 + pot 2.5 + flowers 11)",
      "Pot 13 inch wide",
    ],
    images: [
      { src: "images/rose-pink-basket-room.jpg", alt: "Sky-blue crochet basket with bright pink blossoms on trailing vines" },
      { src: "images/rose-pink-basket-closeup.jpg", alt: "Close-up of the sky-blue basket with curly green vines and pink blossoms" },
      { src: "images/rose-pink-basket-balcony.jpg", alt: "Rose pink blossom hanging basket on a sunny balcony" },
      { src: "images/rose-pink-basket-specs-in.jpg", alt: "Rose pink blossom hanging basket specifications: total height 24.5 inch, strap 13 inch, pot 2.5 inch high and 13 inch wide, hanging flowers 11 inch", fit: "contain" },
    ],
  },
  {
    id: "red-tulip-pot",
    category: "potted-flowers",
    name: "Red Tulip Pot",
    price: 1599,
    discount: 33, // % off shown (crossed-out price is worked out from this)
    badge: "Perfect gift",
    tagline: "Five bold tulips in a scalloped crochet pot.",
    description:
      "Five plump red tulips with bright green leaves, nestled in a scalloped tan basket. A birthday, anniversary or just-because gift that won't droop by the weekend.",
    colors: ["#D0202E", "#7DC242", "#D9B07A"],
    details: [
      "Hand-crocheted, made to order",
      "5 red tulips with 5 green leaves",
      "Total height 7 inch · pot 3.5 inch high, 17 inch wide",
      "Lovely as home décor, table décor or a gift",
    ],
    images: [
      { src: "images/tulip-front.jpg", alt: "Five red crochet tulips in a tan crochet pot on a wooden table" },
      { src: "images/tulip-handheld.jpg", alt: "Hand holding the red crochet tulip pot on a sunny balcony" },
      { src: "images/red-tulip-specs-in.jpg", alt: "Red tulip pot specifications: total height 7 inch, pot height 3.5 inch, pot width 17 inch, 5 red tulips", fit: "contain" },
    ],
  },
  {
    id: "magenta-tulip-pot",
    category: "potted-flowers",
    name: "Pink Tulip Pot",
    price: 1399,
    discount: 55, // % off shown (crossed-out price is worked out from this)
    tagline: "Five pink tulips in a cozy brown pot.",
    description:
      "Five plump pink tulips with soft green leaves, tucked into a round chocolate-brown crochet pot with a scalloped rim. A cheerful pop of colour for a desk, shelf or bedside table, and a sweet gift that never wilts.",
    colors: ["#D94FC8", "#6FBF73", "#7A4424"],
    details: [
      "Hand-crocheted, made to order",
      "5 tulips with leaves in a crochet pot",
      "Total height 7 inch · pot 3.5 inch high, 15 inch wide",
      "Lovely as home décor, table décor or a gift",
    ],
    images: [
      { src: "images/magenta-tulip-room.jpg", alt: "Pink crochet tulips in a round brown crochet pot on a linen-covered table", position: "50% 55%" },
      { src: "images/magenta-tulip-garden.jpg", alt: "Pink crochet tulip pot on a sunny garden table", position: "50% 55%" },
      { src: "images/pink-tulip-specs-in.jpg", alt: "Pink tulip pot specifications: total height 7 inch, pot height 3.5 inch, pot width 15 inch, 5 tulips", fit: "contain" },
    ],
  },
  {
    id: "pink-white-tulip-pot",
    category: "potted-flowers",
    name: "Pink & White Tulip Pot",
    price: 1399, // placeholder price, change to yours
    discount: 55, // % off shown (crossed-out price is worked out from this)
    tagline: "Pink and white tulips in a sleek black pot.",
    description:
      "Two soft pink and three snowy white crochet tulips with bright green leaves, set in a sleek black crochet pot. A fresh, modern touch for a desk, shelf or bedside table, and a sweet gift that never wilts.",
    colors: ["#F59BB8", "#FFFFFF", "#7FD45A", "#1A1A1A"],
    details: [
      "Hand-crocheted, made to order",
      "5 tulips (2 pink, 3 white) with 5 leaves",
      "Total height 7 inch · pot 3.5 inch high, 15 inch wide",
      "Lovely as home décor, table décor or a gift",
    ],
    images: [
      { src: "images/pink-white-tulip-room.jpg", alt: "Pink and white crochet tulips in a black crochet pot on a wooden table", position: "50% 55%" },
      { src: "images/pink-white-tulip-handheld.jpg", alt: "Hands holding the pink and white crochet tulip pot at sunset", position: "50% 55%" },
      { src: "images/pink-white-tulip-specs-in.jpg", alt: "Pink and white tulip pot specifications: total height 7 inch, pot height 3.5 inch, pot width 15 inch, 2 pink and 3 white tulips", fit: "contain" },
    ],
  },
  {
    id: "lily-tulip-bouquet",
    category: "bouquets",
    name: "Pink Lily & Yellow Tulip Bouquet",
    price: 799,
    discount: 30, // % off shown (crossed-out price is worked out from this)
    badge: "Gift ready",
    tagline: "A pink lily and two sunny tulips, wrapped with a ribbon.",
    description:
      "A big pink crochet lily with golden stamens and two bright yellow tulips on velvet-green leaves, wrapped in soft blush paper and tied with a \"Just for you\" satin ribbon. A gift that stays in full bloom forever.",
    colors: ["#F28DB2", "#F5C518", "#2F5D2A", "#F6DCD6"],
    details: [
      "Hand-crocheted, made to order",
      "1 lily and 2 tulips with leaves",
      "Gift-wrapped with a satin ribbon",
      "Dust or gently spot-clean",
    ],
    images: [
      { src: "images/lily-bouquet.jpg", alt: "Crochet bouquet with a pink lily and two yellow tulips, wrapped in blush paper with a ribbon" },
      { src: "images/lily-bouquet-handheld.jpg", alt: "Hand holding the pink lily and yellow tulip crochet bouquet" },
    ],
  },
  {
    id: "lily-trio-bouquet",
    category: "bouquets",
    name: "Lily Trio Bouquet",
    price: 1199,
    discount: 45, // % off shown (crossed-out price is worked out from this)
    tagline: "Blue, white and pink lilies with baby's breath.",
    description:
      "Three hand-crocheted lilies in sky blue, soft white and bright pink with golden stamens, surrounded by sprigs of baby's breath. Wrapped in blush paper with gold edges and finished with a \"Just for you\" satin ribbon. A bouquet that stays beautiful forever.",
    colors: ["#2F7CC9", "#F4F4F2", "#F28DB2", "#D4A53C"],
    details: [
      "Hand-crocheted, made to order",
      "3 lilies with baby's breath",
      "Gift-wrapped with a satin ribbon",
      "Dust or gently spot-clean",
    ],
    images: [
      { src: "images/lily-trio-bouquet.jpg", alt: "Crochet bouquet with blue, white and pink lilies, wrapped in blush and gold paper" },
      { src: "images/lily-trio-bouquet-handheld.jpg", alt: "Hand holding the blue, white and pink crochet lily bouquet" },
    ],
  },
  {
    id: "blush-lily-bouquet",
    category: "bouquets",
    name: "Blush Lily & Pink Tulip Bouquet",
    price: 799,
    discount: 35, // % off shown (crossed-out price is worked out from this)
    tagline: "A soft blush lily between two pink tulips.",
    description:
      "A white crochet lily with a soft pink blush and golden stamens, framed by two pink tulips on bright green leaves. Wrapped in pale pink paper and tied with a \"Just for you\" satin ribbon. Sweet, soft and made to last forever.",
    colors: ["#FFFFFF", "#F4A3BD", "#A6D63A", "#F6DCD6"],
    details: [
      "Hand-crocheted, made to order",
      "1 lily and 2 tulips with leaves",
      "Gift-wrapped with a satin ribbon",
      "Dust or gently spot-clean",
    ],
    images: [
      { src: "images/blush-lily-bouquet.jpg", alt: "Crochet bouquet with a white and pink lily and two pink tulips, wrapped in pale pink paper" },
      { src: "images/blush-lily-bouquet-handheld.jpg", alt: "Hand holding the blush lily and pink tulip crochet bouquet" },
    ],
  },
  {
    id: "sunflower-rose-bouquet",
    category: "bouquets",
    name: "Sunflower & Rose Bouquet",
    price: 1299,
    discount: 33, // % off shown (crossed-out price is worked out from this)
    tagline: "A sunflower, red roses and two tulips in one bunch.",
    description:
      "A cheerful mix of hand-crocheted blooms: a bright sunflower in the centre, two red roses, a lavender tulip and a cream tulip on velvet-green leaves. Wrapped in blush paper with gold edges and tied with a \"Just for you\" satin ribbon.",
    colors: ["#F5C518", "#D0202E", "#9C8FE0", "#F3ECD6"],
    details: [
      "Hand-crocheted, made to order",
      "1 sunflower, 2 roses and 2 tulips",
      "Gift-wrapped with a satin ribbon",
      "Dust or gently spot-clean",
    ],
    images: [
      { src: "images/sunflower-rose-bouquet.jpg", alt: "Crochet bouquet with a sunflower, two red roses, a lavender tulip and a cream tulip, wrapped in blush and gold paper" },
      { src: "images/sunflower-rose-bouquet-handheld.jpg", alt: "Hand holding the sunflower and rose crochet bouquet" },
    ],
  },
  {
    id: "pearl-nylon-bag",
    category: "bags",
    name: "Caramel Pearl Nylon Bag",
    price: 2499,
    discount: 30, // % off shown (crossed-out price is worked out from this)
    tagline: "A caramel nylon-cord bag with a pearl chain.",
    description:
      "A structured little bag handmade from caramel-brown nylon cord in neat ribbed rows, finished with a pearl chain across the front, a gold kangaroo charm and a braided nylon shoulder strap. Elegant enough for dinners and brunches, sturdy enough for everyday.",
    colors: ["#A8662E", "#F4EEDF", "#C9A24A"],
    details: [
      "Handmade from nylon cord, made to order",
      "Size: 8.5 inch high × 9 inch wide",
      "Braided shoulder strap, 18 inch total length",
      "Pearl chain and gold kangaroo charm",
    ],
    images: [
      { src: "images/pearl-nylon-bag-table.jpg", alt: "Caramel nylon-cord bag with a pearl chain on a marble table", position: "50% 55%" },
      { src: "images/pearl-nylon-bag-poolside.jpg", alt: "Caramel pearl nylon bag on a poolside table next to a woman in a floral dress", position: "30% 70%" },
      { src: "images/pearl-nylon-bag-specs-in.jpg", alt: "Caramel pearl nylon bag specifications: 8.5 inch high, 9 inch wide, 18 inch braided shoulder strap", fit: "contain" },
    ],
  },
  {
    id: "rose-bag",
    category: "bags",
    name: "Pink Rose Crochet Bag",
    price: 1799,
    discount: 35, // % off shown (crossed-out price is worked out from this)
    tagline: "A rose-shaped bag in bright pink and white.",
    description:
      "A round crochet bag shaped like a blooming rose, with layered petals in bright pink edged in white. Finished with gold-tone rings, a braided pink shoulder strap and a soft white tassel. A sweet statement piece for cafe dates, college days and gifting.",
    colors: ["#FF2E8C", "#FFFFFF", "#D4A53C"],
    details: [
      "Hand-crocheted, made to order",
      "Size: 9 inch high × 9 inch wide",
      "Braided shoulder strap, 43 inch total length",
      "Gold-tone rings and white tassel",
    ],
    images: [
      { src: "images/rose-bag-cafe.jpg", alt: "Pink and white rose-shaped crochet bag on a cafe table", position: "50% 55%" },
      { src: "images/rose-bag-worn.jpg", alt: "Woman wearing the pink rose crochet bag on her shoulder", position: "50% 60%" },
      { src: "images/rose-bag-specs-in.jpg", alt: "Pink rose crochet bag specifications: 9 inch high, 9 inch wide, 43 inch braided shoulder strap", fit: "contain" },
    ],
  },
  {
    id: "red-sunflower-bag",
    category: "bags",
    name: "Red Sunflower Shoulder Bag",
    price: 1799,
    discount: 33, // % off shown (crossed-out price is worked out from this)
    tagline: "A bold red bag with a band of crochet sunflowers.",
    description:
      "A rich red crochet shoulder bag with a cheerful band of sunflower granny squares in yellow, white and brown across the front, finished with a little crochet strawberry charm. The chunky braided strap sits comfortably on the shoulder for college, cafe days and weekends out.",
    colors: ["#D3121F", "#F7C51E", "#FFFFFF", "#4A1E12"],
    details: [
      "Hand-crocheted, made to order",
      "Size: 10 inch high × 11 inch wide",
      "Braided shoulder strap, 25 inch total length",
      "Sunflower granny-square band and strawberry charm",
    ],
    images: [
      { src: "images/red-sunflower-bag-table.jpg", alt: "Red crochet shoulder bag with a band of sunflower squares on a cafe table", position: "50% 62%" },
      { src: "images/red-sunflower-bag-worn.jpg", alt: "Woman carrying the red sunflower crochet bag on her shoulder", position: "50% 55%" },
      { src: "images/red-sunflower-bag-specs-in.jpg", alt: "Red sunflower bag specifications: 10 inch high, 11 inch wide, 25 inch braided shoulder strap", fit: "contain" },
    ],
  },
  {
    id: "blue-tote",
    category: "bags",
    name: "Ocean Blue Crochet Tote",
    price: 1999,
    discount: 45, // % off shown (crossed-out price is worked out from this)
    tagline: "A roomy blue tote with a white blossom charm.",
    description:
      "A bright ocean-blue crochet tote in a textured open-weave stitch, with sturdy shoulder handles and a little white blossom charm clipped to the side. Light, roomy and easy to carry for college, cafe days and weekend outings.",
    colors: ["#1E8BE0", "#FFFFFF", "#1F8A3A"],
    details: [
      "Hand-crocheted, made to order",
      "Size: 11 inch high × 15 inch wide",
      "Shoulder strap, 17 inch total length",
      "White blossom bag charm",
    ],
    images: [
      { src: "images/blue-tote-chair.jpg", alt: "Blue crochet tote with a white blossom charm on a cane chair", position: "50% 55%" },
      { src: "images/blue-tote-worn.jpg", alt: "Woman carrying the blue crochet tote on her shoulder outside a cafe", position: "50% 55%" },
      { src: "images/blue-tote-specs-in.jpg", alt: "Ocean blue crochet tote specifications: 11 inch high, 15 inch wide, 17 inch shoulder strap", fit: "contain" },
    ],
  },
  {
    id: "green-tote",
    category: "bags",
    name: "Emerald Flower Crochet Tote",
    price: 1599,
    discount: 33, // % off shown (crossed-out price is worked out from this)
    tagline: "A vivid green tote with a crochet flower charm.",
    description:
      "A vivid emerald-green crochet tote in a textured open-weave stitch, with two braided shoulder straps and a matching crochet flower charm with a white centre. A fresh, easy everyday bag for college, the library or a day out.",
    colors: ["#11A84E", "#FFFFFF"],
    details: [
      "Hand-crocheted, made to order",
      "Size: 10 inch high × 11 inch wide",
      "Braided shoulder straps, 20 inch total length",
      "Crochet flower bag charm",
    ],
    images: [
      { src: "images/green-tote-sofa.jpg", alt: "Green crochet tote with a flower charm on a cream sofa", position: "50% 55%" },
      { src: "images/green-tote-worn.jpg", alt: "Woman carrying the green crochet tote on her shoulder outside a library", position: "45% 60%" },
      { src: "images/green-tote-specs-in.jpg", alt: "Emerald flower crochet tote specifications: 10 inch high, 11 inch wide, 20 inch braided shoulder straps", fit: "contain" },
    ],
  },
  {
    id: "strawberry-bag",
    category: "bags",
    name: "Strawberry Puff Crochet Bag",
    price: 1899,
    discount: 35, // % off shown (crossed-out price is worked out from this)
    tagline: "Puffy strawberry stitches in red and green.",
    description:
      "A playful crochet bag covered in puffy strawberry stitches in deep green and bright red, with a scalloped red top, sturdy red handles and a crochet flower with a white centre. A cheerful, eye-catching bag for cafe dates and days out.",
    colors: ["#E8231A", "#0F6B4F", "#FFFFFF"],
    details: [
      "Hand-crocheted, made to order",
      "Size: 10 inch high × 14 inch wide",
      "Shoulder strap, 13 inch total length",
      "Crochet flower detail",
    ],
    images: [
      { src: "images/strawberry-bag-cafe.jpg", alt: "Red and green strawberry-stitch crochet bag on a cafe table", position: "50% 55%" },
      { src: "images/strawberry-bag-worn.jpg", alt: "Woman carrying the strawberry puff crochet bag on her shoulder", position: "50% 55%" },
      { src: "images/strawberry-bag-specs-in.jpg", alt: "Strawberry puff crochet bag specifications: 10 inch high, 14 inch wide, 13 inch shoulder strap", fit: "contain" },
    ],
  },
  {
    id: "sunflower-bag",
    category: "bags",
    name: "Sunflower Granny Square Bag",
    price: 800,
    discount: 55, // % off shown (crossed-out price is worked out from this)
    tagline: "Bright sunflowers on a cream bag with a long strap.",
    description:
      "A cream crochet bag made from granny squares, with bright yellow sunflowers, soft green leaves and a little flower on the front. The long crochet strap goes over your shoulder, so it's ready for every sunny day out.",
    colors: ["#F3ECD6", "#F5A31A", "#7FA548", "#5A2E1E"],
    details: [
      "Hand-crocheted, made to order",
      "Long crochet shoulder strap",
      "Available in your own colors",
      "Spot-clean gently",
    ],
    images: [
      { src: "images/sunflower-bag.jpg", alt: "Cream crochet bag with sunflower granny squares and a long strap, on green grass", position: "50% 22%" },
    ],
  },
];

// Categories shown in "Shop by category". Each product's `category` must match an id here.
const CATEGORIES = [
  {
    id: "hanging-baskets",
    name: "Hanging Baskets",
    blurb: "Trailing vines and tumbling blooms to hang by a window or balcony.",
    image: { src: "images/pink-balcony.jpg", alt: "Pink crochet blossom basket hanging on a sunny balcony" },
  },
  {
    id: "potted-flowers",
    name: "Potted Flowers",
    blurb: "Cheerful blooms in cozy crochet pots for a shelf, desk or table.",
    image: { src: "images/tulip-top.jpg", alt: "Red crochet tulips in a crochet pot" },
  },
  {
    id: "bouquets",
    name: "Bouquets",
    blurb: "Hand-crocheted bouquets that stay fresh forever, made for gifting.",
    image: { src: "images/lily-bouquet.jpg", alt: "Crochet bouquet with a pink lily and two yellow tulips", position: "50% 35%" },
  },
  {
    id: "bags",
    name: "Bags",
    blurb: "Hand-crocheted bags covered in blooms, made to carry every day.",
    image: { src: "images/sunflower-bag.jpg", alt: "Cream crochet bag with sunflower granny squares on green grass", position: "50% 18%" },
  },
];

// Pre-filled WhatsApp messages for the buttons around the site.
const MESSAGES = {
  hello: () => `Hi ${SHOP.name}! I have a question.`,
  custom: () => `Hi ${SHOP.name}! I'd love a custom crochet piece. Here's what I have in mind:\n\nColors: \nFlowers: \nOccasion: `,
  gift: () => `Hi ${SHOP.name}! I'm looking for a gift. Could you help me choose?`,
};

/* ==========================================================
   You don't need to edit anything below this line.
   ========================================================== */
const $ = (sel, el = document) => el.querySelector(sel);
const $$ = (sel, el = document) => [...el.querySelectorAll(sel)];
const byId = Object.fromEntries(PRODUCTS.map((p) => [p.id, p]));
const money = new Intl.NumberFormat(SHOP.locale, {
  style: "currency", currency: SHOP.currency, minimumFractionDigits: 0, maximumFractionDigits: 2,
});
const fmt = (n) => money.format(n);

// Crossed-out regular price, so the selling price is the product's discount % off (rounded to end in 9).
// The selling price itself never changes.
const discountOf = (p) => (p.discount ?? SHOP.discount) || 0;
const mrpOf = (p) => (discountOf(p) > 0 ? Math.round(p.price / (1 - discountOf(p) / 100) / 10) * 10 - 1 : 0);
// The % off actually shown, worked out from the two prices so it is always true
const offOf = (p) => { const m = mrpOf(p); return m > p.price ? Math.round((1 - p.price / m) * 100) : 0; };
const priceHtml = (p) => {
  const off = offOf(p);
  return `<span class="price-now">${fmt(p.price)}</span>` +
    (off ? `<s class="price-mrp">${fmt(mrpOf(p))}</s><span class="price-off">${off}% OFF</span>` : "");
};

function contactLink(text) {
  if (SHOP.whatsapp) return `https://wa.me/${SHOP.whatsapp}?text=${encodeURIComponent(text)}`;
  return `mailto:${SHOP.email}?subject=${encodeURIComponent(SHOP.name)}&body=${encodeURIComponent(text)}`;
}

/* ---------- Fill in shop details ---------- */
function applyShopDetails() {
  $$("[data-shop-name]").forEach((el) => (el.textContent = SHOP.name));
  $$("[data-wa]").forEach((el) => {
    const msg = MESSAGES[el.dataset.wa] || MESSAGES.hello;
    el.href = contactLink(msg());
    el.target = "_blank";
    el.rel = "noopener";
  });
  // Footer icons: hidden when the matching setting is empty
  const hide = (el) => (el.closest("li") || el).remove();
  $$("[data-ig]").forEach((el) => {
    if (!SHOP.instagram) return hide(el);
    el.href = `https://www.instagram.com/${SHOP.instagram}/`;
    el.target = "_blank";
    el.rel = "noopener";
  });
  $$("[data-fb]").forEach((el) => {
    if (!SHOP.facebook) return hide(el);
    el.href = `https://www.facebook.com/${SHOP.facebook}`;
    el.target = "_blank";
    el.rel = "noopener";
  });
  $$("[data-phone]").forEach((el) => {
    if (!SHOP.phone) return hide(el);
    el.href = `tel:${SHOP.phone.replace(/[^\d+]/g, "")}`;
    const label = `Call ${SHOP.phone}`;
    const text = $(".contact-text", el);
    if (text) { text.textContent = SHOP.phone; el.setAttribute("aria-label", label); }
    else if (el.classList.contains("social-btn")) { el.title = label; el.setAttribute("aria-label", label); }
    else el.textContent = label;
  });
  $$("[data-email]").forEach((el) => {
    if (!SHOP.email) return hide(el);
    el.href = `mailto:${SHOP.email}`;
    const text = $(".contact-text", el);
    if (text) text.textContent = SHOP.email;
  });
  $$("[data-address]").forEach((el) => {
    if (!SHOP.address) return hide(el);
    $(".contact-text", el).textContent = SHOP.address;
  });
  $("#year").textContent = new Date().getFullYear();
}

/* ---------- Products & categories ---------- */
let activeCategory = "all";
let productsShown = false;

// Optional focus point for a photo, e.g. position: "50% 20%" keeps the top of a tall photo in view
const focus = (img) => (img.position ? ` style="object-position:${img.position}"` : "");

const productCard = (p, revealClass = "reveal") => `
    <article class="card ${revealClass}">
      <button class="card-media" data-open="${p.id}" aria-label="View ${p.name}">
        ${p.badge ? `<span class="card-tag">${p.badge}</span>` : ""}
        <img src="${p.images[0].src}" alt="${p.images[0].alt}"${focus(p.images[0])} loading="lazy">
        ${p.images[1] ? `<img class="alt" src="${p.images[1].src}" alt=""${focus(p.images[1])} loading="lazy">` : ""}
        <span class="card-quick">Quick view</span>
      </button>
      <div class="card-body">
        <h3>${p.name}</h3>
        <p class="price">${priceHtml(p)}</p>
        <div class="card-actions">
          <button class="btn btn-primary" data-buy="${p.id}">Buy</button>
          <button class="btn btn-ghost" data-add="${p.id}">Add to bag</button>
        </div>
      </div>
    </article>`;

function renderProducts() {
  const grid = $("#productGrid");
  if (grid) {
    const list = PRODUCTS.filter((p) => activeCategory === "all" || p.category === activeCategory);
    // After the first render, show re-filtered cards straight away (no scroll-in animation)
    grid.innerHTML = list.map((p) => productCard(p, productsShown ? "reveal in" : "reveal")).join("");
    productsShown = true;
  }

  const footerList = $("#footerProducts");
  if (footerList) footerList.innerHTML = PRODUCTS.map(
    (p) => `<li><button data-open="${p.id}">${p.name}</button></li>`
  ).join("");
}

const countIn = (id) => PRODUCTS.filter((p) => p.category === id).length;
const pieces = (n) => `${n} ${n === 1 ? "piece" : "pieces"}`;
const countLabel = (id) => (countIn(id) ? pieces(countIn(id)) : "Made to order");
const categoryUrl = (id) => `category.html?c=${encodeURIComponent(id)}`;

function renderFilters() {
  const bar = $("#shopFilters");
  if (!bar) return;
  const chips = [{ id: "all", name: "All", count: PRODUCTS.length }, ...CATEGORIES.map((c) => ({ ...c, count: countIn(c.id) })).filter((c) => c.count > 0)];
  bar.innerHTML = chips.map(
    (c) => `<button class="chip" data-filter="${c.id}" aria-pressed="${c.id === activeCategory}">${c.name}<span>${c.count}</span></button>`
  ).join("");
}

// Category cards (home page and category page). Each opens its own category page.
function renderCategories(excludeId) {
  const grid = $("#categoryGrid");
  if (!grid) return;
  const list = CATEGORIES.filter((c) => c.id !== excludeId);
  grid.dataset.count = list.length + 1;
  grid.innerHTML = list.map(
    (c) => `
    <a class="cat-card reveal" href="${categoryUrl(c.id)}">
      <img src="${c.image.src}" alt="${c.image.alt}"${focus(c.image)} loading="lazy">
      <span class="cat-body">
        <span class="cat-count">${countLabel(c.id)}</span>
        <h3>${c.name}</h3>
        <span class="cat-cta">Shop ${c.name.toLowerCase()} →</span>
      </span>
    </a>`
  ).join("") + `
    <a class="cat-card reveal" href="custom-orders.html">
      <img src="images/bluebell-closeup.jpg" alt="Close-up of puffy blue crochet bluebells" loading="lazy">
      <span class="cat-body">
        <span class="cat-count">Made for you</span>
        <h3>Custom Pieces</h3>
        <span class="cat-cta">Request a custom piece →</span>
      </span>
    </a>`;
}

/* ---------- Category page (category.html?c=<id>) ---------- */
function renderCategoryPage() {
  if (!$("#categoryPage")) return;
  const id = new URLSearchParams(location.search).get("c");
  const cat = CATEGORIES.find((c) => c.id === id);

  // Buttons to switch between categories
  const current = (on) => (on ? ' aria-current="page"' : "");
  $("#catSwitch").innerHTML =
    `<a class="chip" href="category.html"${current(!cat)}>All categories</a>` +
    CATEGORIES.map(
      (c) => `<a class="chip" href="${categoryUrl(c.id)}"${current(c === cat)}>${c.name}${countIn(c.id) ? `<span>${countIn(c.id)}</span>` : ""}</a>`
    ).join("");

  if (!cat) {
    // No (or unknown) category: show all categories
    $("#catProductsSection").hidden = true;
    $("#catMoreHead").hidden = true;
    renderCategories();
    return;
  }

  document.title = `${cat.name} · ${SHOP.name}`;
  $("[data-back]").href = "category.html";
  $("#catEyebrow").textContent = "Category";
  $("#catTitle").textContent = cat.name;
  const items = PRODUCTS.filter((p) => p.category === cat.id);
  $("#categoryProducts").innerHTML = items.length
    ? items.map((p) => productCard(p)).join("")
    : `<div class="panel cat-empty">
        <span class="panel-icon">✿</span>
        <h2>${cat.name} are made to order</h2>
        <p>Nothing is listed here just yet, but we'd love to crochet one for you. Tell us the flowers, colors and occasion you have in mind.</p>
        <div class="panel-actions">
          <a class="btn btn-wa" href="${contactLink(`Hi ${SHOP.name}! I'd love a crochet ${cat.name.toLowerCase().replace(/s$/, "")}. Here's what I have in mind:\n\nFlowers: \nColors: \nOccasion: `)}" target="_blank" rel="noopener">Ask for ${cat.name.toLowerCase().replace(/s$/, "") === cat.name.toLowerCase() ? cat.name.toLowerCase() : "a " + cat.name.toLowerCase().replace(/s$/, "")}</a>
          <a class="btn btn-ghost" href="custom-orders.html">See custom orders</a>
        </div>
      </div>`;
  renderCategories(cat.id);
}

function setCategory(id, { scroll = false } = {}) {
  activeCategory = id;
  renderFilters();
  renderProducts();
  if (scroll) $("#shop")?.scrollIntoView({ behavior: "smooth" });
}

/* ---------- Bag (saved in this browser) ---------- */
const CART_KEY = "crochet-bag-v1";
let cart = {};
try { cart = JSON.parse(localStorage.getItem(CART_KEY)) || {}; } catch { cart = {}; }
for (const id in cart) if (!byId[id] || !(cart[id] > 0)) delete cart[id];

function saveCart() {
  try { localStorage.setItem(CART_KEY, JSON.stringify(cart)); } catch { /* private mode etc. */ }
}
const cartItems = () => Object.entries(cart).map(([id, qty]) => ({ ...byId[id], qty }));
const cartCount = () => Object.values(cart).reduce((a, b) => a + b, 0);
const cartTotal = () => cartItems().reduce((sum, i) => sum + i.price * i.qty, 0);

function addToCart(id, qty = 1) {
  cart[id] = (cart[id] || 0) + qty;
  saveCart();
  renderCart();
  const count = $("#bagCount");
  count.classList.remove("bump");
  void count.offsetWidth;
  count.classList.add("bump");
  toast(`✿ ${byId[id].name} added to your bag`);
}

// "Buy": make sure the piece is in the bag, then go straight to checkout
function buyNow(id) {
  if (!cart[id]) {
    cart[id] = 1;
    saveCart();
  }
  location.href = "order.html";
}

function setQty(id, qty) {
  if (qty <= 0) delete cart[id];
  else cart[id] = qty;
  saveCart();
  renderCart();
}

function renderCart() {
  const items = cartItems();
  $("#bagCount").textContent = cartCount();
  $("#bagFoot").hidden = !items.length;
  $("#bagTotal").textContent = fmt(cartTotal());
  $("#bagBody").innerHTML = items.length
    ? items.map(
        (i) => `
      <div class="line-item">
        <img src="${i.images[0].src}" alt="">
        <div>
          <div class="li-name">${i.name}</div>
          <div class="li-price">${fmt(i.price)} each</div>
          <div class="qty" role="group" aria-label="Quantity for ${i.name}">
            <button data-dec="${i.id}" aria-label="Decrease">−</button>
            <span>${i.qty}</span>
            <button data-inc="${i.id}" aria-label="Increase">+</button>
          </div>
        </div>
        <div class="li-right">
          <strong>${fmt(i.price * i.qty)}</strong>
          <button class="li-remove" data-remove="${i.id}">Remove</button>
        </div>
      </div>`
      ).join("")
    : `<div class="empty">
        <span class="empty-flower">✿</span>
        <h3>Your bag is empty</h3>
        <p>Let's find you something that blooms forever.</p>
        <button class="btn btn-ghost" data-close data-goto="#shop">Browse the collection</button>
      </div>`;
  renderSummary();
}

const formatPhone = (p) => `+91 ${p.slice(0, 5)} ${p.slice(5)}`;

function orderMessage(items, { customer, note } = {}) {
  const total = items.reduce((sum, i) => sum + i.price * i.qty, 0);
  const lines = [
    `Hi ${SHOP.name}! I'd like to place an order:`,
    "",
    ...items.map((i) => `• ${i.qty} × ${i.name} (${fmt(i.price * i.qty)})`),
    `Total: ${fmt(total)}`,
  ];
  if (customer) {
    lines.push(
      "",
      "Delivery details:",
      `Name: ${customer.name}`,
      `Phone: ${formatPhone(customer.phone)}`,
      `Address: ${customer.address}`,
      `City: ${customer.city}`,
      `State: ${customer.state}`,
      `Pincode: ${customer.pincode}`
    );
  }
  if (note) lines.push("", `Note: ${note}`);
  return lines.join("\n");
}

/* ---------- Example form & chat (How to order page) ---------- */
function renderOrderExamples() {
  const preview = $("#chatPreview");
  if (!preview) return;
  const sample = [{ ...PRODUCTS[0], qty: 1 }];
  const customer = {
    name: "Priya Sharma",
    phone: "9876543210",
    address: "Flat 12, Rose Apartments, MG Road, Koramangala",
    city: "Bangalore",
    state: "Karnataka",
    pincode: "560034",
  };
  const set = (sel, text) => { const el = $(sel); if (el) el.textContent = text; };
  set("#mockName", customer.name);
  set("#mockPhone", formatPhone(customer.phone));
  set("#mockAddress", `${customer.address}, ${customer.city}, ${customer.state} ${customer.pincode}`);
  set("#mockTotal", fmt(sample[0].price));
  preview.textContent = orderMessage(sample, { customer });
}

/* ---------- Place your order page ---------- */
const orderForm = $("#orderForm");
const PHONE_RE = /^[6-9]\d{9}$/;
const PIN_RE = /^[1-9]\d{5}$/;
let orderSent = false;

const RULES = {
  fullName: (v) => (v.length < 2 ? "Please enter your full name" : ""),
  phone: (v) => (!v ? "Please enter your phone number" : !PHONE_RE.test(v) ? "Enter a valid 10-digit mobile number" : ""),
  pincode: (v) => (!v ? "Please enter your pincode" : !PIN_RE.test(v) ? "Enter a valid 6-digit pincode" : ""),
  city: (v) => (v ? "" : "Please enter your city"),
  state: (v) => (v ? "" : "Please enter your state"),
  house: (v) => (v ? "" : "Please enter your house or flat number"),
  area: (v) => (v ? "" : "Please enter your area"),
};

const formField = (name) => orderForm.elements[name];
const formValue = (name) => formField(name).value.trim();

function validateField(name) {
  const input = formField(name);
  const msg = RULES[name] ? RULES[name](input.value.trim()) : "";
  input.closest(".field").classList.toggle("invalid", !!msg);
  input.setAttribute("aria-invalid", String(!!msg));
  $(`#err-${name}`).textContent = msg;
  return !msg;
}

function renderSummary() {
  if (!orderForm || orderSent) return;
  const items = cartItems();
  $("#checkoutGrid").hidden = !items.length;
  $("#checkoutHead").hidden = !items.length;
  $("#checkoutEmpty").hidden = items.length > 0;
  $("#sumItems").innerHTML = items.map(
    (i) => `<div class="sum-item"><img src="${i.images[0].src}" alt=""><span><b>${i.name}</b><small>Qty ${i.qty} × ${fmt(i.price)}</small></span><strong>${fmt(i.price * i.qty)}</strong></div>`
  ).join("");
  $("#sumSubtotal").textContent = fmt(cartTotal());
  const saved = items.reduce((sum, i) => sum + (offOf(i) ? (mrpOf(i) - i.price) * i.qty : 0), 0);
  $("#sumSaveRow").hidden = !saved;
  $("#sumSave").textContent = fmt(saved);
  $("#sumTotal").textContent = fmt(cartTotal());
}

/* Pincode -> city & state, using India Post's free public lookup */
const pinCache = new Map();
let pinSeq = 0;

function autofill(name, value) {
  const input = formField(name);
  input.value = value;
  validateField(name);
  const wrap = input.closest(".field");
  wrap.classList.remove("autofilled");
  void wrap.offsetWidth;
  wrap.classList.add("autofilled");
}

async function lookupPincode(pin) {
  const seq = ++pinSeq;
  const status = $("#hint-pincode");
  const spinner = $(".pin-wrap");
  const say = (text, cls = "") => { status.textContent = text; status.className = `hint ${cls}`; };
  if (!PIN_RE.test(pin)) {
    spinner.classList.remove("loading");
    return say("We'll fill in your city and state");
  }
  say("Finding your city and state…");
  spinner.classList.add("loading");
  try {
    let place = pinCache.get(pin);
    if (place === undefined) {
      const ctrl = new AbortController();
      const timer = setTimeout(() => ctrl.abort(), 8000);
      const res = await fetch(`https://api.postalpincode.in/pincode/${pin}`, { signal: ctrl.signal });
      clearTimeout(timer);
      const data = await res.json();
      const offices = data?.[0]?.Status === "Success" ? data[0].PostOffice || [] : [];
      place = offices.length
        ? { city: offices[0].District, state: offices[0].State, areas: [...new Set(offices.map((o) => o.Name))] }
        : null;
      pinCache.set(pin, place);
    }
    if (seq !== pinSeq) return;
    if (!place) return say("We couldn't find this pincode. Please check it, or type your city and state.", "warn");
    autofill("city", place.city);
    autofill("state", place.state);
    $("#areaList").innerHTML = place.areas.map((a) => `<option value="${a.replace(/"/g, "&quot;")}"></option>`).join("");
    if (place.areas.length === 1 && !formValue("area")) autofill("area", place.areas[0]);
    say(`✓ ${place.city}, ${place.state}`, "ok");
  } catch {
    if (seq === pinSeq) say("Couldn't look up this pincode right now. Please type your city and state.", "warn");
  } finally {
    if (seq === pinSeq) spinner.classList.remove("loading");
  }
}

function setupOrderForm() {
  if (!orderForm) return;

  // Digits only for phone & pincode (also handles pasted "+91 98765-43210")
  formField("phone").addEventListener("input", (e) => {
    let d = e.target.value.replace(/\D/g, "");
    if (d.length > 10 && d.startsWith("91")) d = d.slice(2);
    if (d.length > 10 && d.startsWith("0")) d = d.slice(1);
    e.target.value = d.slice(0, 10);
  });
  formField("pincode").addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/\D/g, "").slice(0, 6);
    lookupPincode(e.target.value);
  });

  // Check a field when you leave it; re-check as you fix it
  orderForm.addEventListener("focusout", (e) => {
    if (e.target.name in RULES && e.target.value) validateField(e.target.name);
  });
  orderForm.addEventListener("input", (e) => {
    if (e.target.closest(".field.invalid")) validateField(e.target.name);
  });

  orderForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const items = cartItems();
    if (!items.length) return;
    const invalid = Object.keys(RULES).filter((name) => !validateField(name));
    if (invalid.length) {
      formField(invalid[0]).focus();
      return toast("Please check the highlighted fields");
    }
    const customer = {
      name: formValue("fullName"),
      phone: formValue("phone"),
      address: ["house", "building", "road", "area", "colony"].map(formValue).filter(Boolean).join(", "),
      city: formValue("city"),
      state: formValue("state"),
      pincode: formValue("pincode"),
    };
    const link = contactLink(orderMessage(items, { customer, note: formValue("note") }));
    const win = window.open(link, "_blank");
    if (win) win.opener = null;
    else location.href = link;

    orderSent = true;
    $("#checkoutGrid").hidden = true;
    $("#checkoutHead").hidden = true;
    $("#orderSent").hidden = false;
    $("#sentAgain").href = link;
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  $("#editBag").addEventListener("click", () => drawer.showModal());
  $("#clearBag").addEventListener("click", () => {
    cart = {};
    saveCart();
    location.href = "index.html";
  });
}

/* ---------- Product modal ---------- */
const modal = $("#productModal");
const drawer = $("#drawer");
let current = null;
let modalQty = 1;

function showImage(index) {
  const img = current.images[index];
  $("#mImage").src = img.src;
  $("#mImage").alt = img.alt;
  $("#mImage").style.objectPosition = img.position || "";
  // Images with text (like a size chart) are shown whole, never cropped
  $("#mImage").style.objectFit = img.fit || "";
  $$("#mThumbs button").forEach((b, i) => b.setAttribute("aria-current", String(i === index)));
}

function openProduct(id) {
  const p = byId[id];
  if (!p) return;
  current = p;
  modalQty = 1;
  $("#mName").textContent = p.name;
  $("#mPrice").innerHTML = priceHtml(p);
  $("#mDesc").textContent = p.description;
  $("#mDetails").innerHTML = p.details.map((d) => `<li>${d}</li>`).join("");
  $("#mQty").textContent = modalQty;
  $("#mThumbs").innerHTML = p.images.map(
    (im, i) => `<button data-thumb="${i}" aria-label="Show photo ${i + 1}"><img src="${im.src}" alt=""></button>`
  ).join("");
  $("#mThumbs").hidden = p.images.length < 2;
  $("#mAsk").href = contactLink(`Hi ${SHOP.name}! I have a question about the ${p.name}.`);
  showImage(0);
  if (drawer.open) drawer.close();
  if (searchDlg?.open) searchDlg.close();
  if (!modal.open) modal.showModal();
}

/* ---------- Search ---------- */
const searchDlg = $("#searchDialog");
const searchInput = $("#searchInput");
const catName = (id) => CATEGORIES.find((c) => c.id === id)?.name || "";
const norm = (t) => t.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
const escapeHtml = (t) => t.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const searchWords = (q) => norm(q).split(/\s+/).filter(Boolean);

function searchProducts(words) {
  if (!words.length) return PRODUCTS;
  return PRODUCTS.map((p) => {
    const text = norm([p.name, p.tagline, p.description, catName(p.category), ...p.details].join(" "));
    if (!words.every((w) => text.includes(w))) return null;
    const name = norm(p.name);
    return { p, score: words.reduce((sum, w) => sum + (name.includes(w) ? 2 : 1), 0) };
  }).filter(Boolean).sort((a, b) => b.score - a.score).map((r) => r.p);
}

// Wrap the typed words in <mark> so they stand out in results
function highlight(text, words) {
  let html = escapeHtml(text);
  words.forEach((w) => {
    const re = new RegExp(`(${w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi");
    html = html.replace(re, "<mark>$1</mark>");
  });
  return html;
}

let searchActive = 0;
function renderSearch() {
  const q = searchInput.value.trim();
  const words = searchWords(q);
  const list = searchProducts(words);
  const cats = words.length ? CATEGORIES.filter((c) => words.every((w) => norm(c.name).includes(w))) : [];
  searchActive = 0;
  const catHtml = cats.length
    ? `<p class="search-label">Categories</p><div class="search-cats">${cats.map((c) => `<a class="chip" href="${categoryUrl(c.id)}">${highlight(c.name, words)}</a>`).join("")}</div>`
    : "";
  if (!list.length) {
    $("#searchResults").innerHTML = catHtml + `
      <div class="search-empty">
        <span class="panel-icon">✿</span>
        <p><strong>No pieces match “${escapeHtml(q)}”.</strong><br>We can crochet it just for you.</p>
        <a class="btn btn-ghost" href="custom-orders.html">Request a custom piece</a>
      </div>`;
    return;
  }
  const label = q ? `${list.length} ${list.length === 1 ? "piece" : "pieces"} found` : "All pieces";
  $("#searchResults").innerHTML = catHtml + `<p class="search-label">${label}</p>` + list.map(
    (p, i) => `
    <button class="search-item${i === 0 ? " active" : ""}" data-open="${p.id}">
      <img src="${p.images[0].src}" alt="">
      <span><b>${highlight(p.name, words)}</b><small>${catName(p.category)}</small></span>
      <strong class="search-price">${priceHtml(p)}</strong>
    </button>`
  ).join("");
}

function openSearch() {
  if (drawer.open) drawer.close();
  renderSearch();
  searchDlg.showModal();
  searchInput.focus();
  searchInput.select();
}

function setupSearch() {
  if (!searchDlg) return;
  $("#searchOpen").addEventListener("click", openSearch);
  searchInput.addEventListener("input", renderSearch);
  // ↑ ↓ to move through results, Enter to open one
  searchInput.addEventListener("keydown", (e) => {
    const items = $$(".search-item", searchDlg);
    if (!items.length) return;
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      searchActive = (searchActive + (e.key === "ArrowDown" ? 1 : -1) + items.length) % items.length;
      items.forEach((el, i) => el.classList.toggle("active", i === searchActive));
      items[searchActive].scrollIntoView({ block: "nearest" });
    } else if (e.key === "Enter") {
      e.preventDefault();
      openProduct(items[searchActive].dataset.open);
    }
  });
  // Press "/" anywhere to start searching
  document.addEventListener("keydown", (e) => {
    if (e.key !== "/" || e.metaKey || e.ctrlKey || e.altKey) return;
    if (e.target.closest("input, textarea, [contenteditable]") || document.querySelector("dialog[open]")) return;
    e.preventDefault();
    openSearch();
  });
}

/* ---------- Toast ---------- */
let toastTimer;
function toast(msg) {
  const t = $("#toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("show"), 2400);
}

/* ---------- Events ---------- */
document.addEventListener("click", (e) => {
  const t = e.target.closest("[data-buy],[data-add],[data-open],[data-inc],[data-dec],[data-remove],[data-thumb],[data-mqty],[data-close],[data-filter],[data-category]");
  if (!t) return;
  const d = t.dataset;
  if (d.filter) setCategory(d.filter);
  else if (d.category) setCategory(d.category, { scroll: true });
  else if (d.buy) buyNow(d.buy);
  else if (d.add) addToCart(d.add);
  else if (d.open) openProduct(d.open);
  else if (d.inc) setQty(d.inc, cart[d.inc] + 1);
  else if (d.dec) setQty(d.dec, cart[d.dec] - 1);
  else if (d.remove) setQty(d.remove, 0);
  else if (d.thumb) showImage(Number(d.thumb));
  else if (d.mqty) {
    modalQty = Math.max(1, modalQty + Number(d.mqty));
    $("#mQty").textContent = modalQty;
  } else if ("close" in d) {
    t.closest("dialog")?.close();
    if (d.goto) {
      const target = document.querySelector(d.goto);
      if (target) target.scrollIntoView({ behavior: "smooth" });
      else location.href = `index.html${d.goto}`;
    }
  }
});

// "Buy" in the product popup: put the chosen quantity in the bag, then go to checkout
$("#mBuy")?.addEventListener("click", () => {
  cart[current.id] = Math.max(cart[current.id] || 0, modalQty);
  saveCart();
  location.href = "order.html";
});
$("#mAdd")?.addEventListener("click", () => {
  addToCart(current.id, modalQty);
  modal.close();
});
$("#bagOpen").addEventListener("click", () => drawer.showModal());
// On the order page itself, "Place your order" just closes the bag
$("#checkout").addEventListener("click", (e) => {
  if (orderForm) { e.preventDefault(); drawer.close(); }
});

// Back button: return to the previous page on this site, otherwise go to its fallback link
$$("[data-back]").forEach((btn) =>
  btn.addEventListener("click", (e) => {
    let cameFromHere = false;
    try { cameFromHere = !!document.referrer && new URL(document.referrer).origin === location.origin; } catch {}
    if (cameFromHere && history.length > 1) {
      e.preventDefault();
      history.back();
    }
  })
);

// Click on the dark backdrop closes dialogs
$$("dialog").forEach((dlg) =>
  dlg.addEventListener("click", (e) => { if (e.target === dlg) dlg.close(); })
);

// On small screens the menu scrolls sideways: bring the current page's button into view
const navLinks = $(".nav-links");
const currentLink = navLinks && $("[aria-current='page']", navLinks);
if (currentLink && navLinks.scrollWidth > navLinks.clientWidth) {
  navLinks.scrollLeft = currentLink.offsetLeft - navLinks.offsetLeft - (navLinks.clientWidth - currentLink.offsetWidth) / 2;
}

// Header border once you scroll
const nav = $("#nav");
const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 8);
window.addEventListener("scroll", onScroll, { passive: true });

/* ---------- Hero slider (home page) ---------- */
const SLIDE_SECONDS = 4; // how long each photo shows

function setupHeroSlider() {
  const track = $("#heroSlides");
  if (!track) return;
  const count = track.children.length;
  track.appendChild(track.children[0].cloneNode(true)); // copy of slide 1 for a seamless loop
  const dots = $("#slideDots");
  dots.innerHTML = Array.from({ length: count }, (_, i) => `<button aria-label="Show photo ${i + 1}"></button>`).join("");
  let index = 0;
  let timer;

  const render = (animate = true) => {
    track.classList.toggle("no-anim", !animate);
    track.style.transform = `translateX(-${index * 100}%)`;
    $$("button", dots).forEach((d, i) => d.setAttribute("aria-current", String(i === index % count)));
    // Show the text block that belongs to this slide
    const copy = track.children[index % count].dataset.copy;
    $$(".hero-copy").forEach((el) => {
      const on = el.dataset.copy === copy;
      el.classList.toggle("is-active", on);
      el.setAttribute("aria-hidden", String(!on));
    });
  };
  // After sliding onto the copy of slide 1, jump back to the real slide 1 without animation
  const snapBack = () => {
    if (index < count) return;
    index = 0;
    render(false);
    void track.offsetWidth;
  };
  track.addEventListener("transitionend", snapBack);

  const go = (i) => {
    snapBack();
    if (i < 0) { index = count; render(false); void track.offsetWidth; i = count - 1; }
    index = i;
    render(true);
  };
  const restart = () => {
    clearInterval(timer);
    timer = setInterval(() => go(index + 1), SLIDE_SECONDS * 1000);
  };

  $("#slideNext").addEventListener("click", () => { go(index + 1); restart(); });
  $("#slidePrev").addEventListener("click", () => { go(index - 1); restart(); });
  dots.addEventListener("click", (e) => {
    const b = e.target.closest("button");
    if (!b) return;
    go($$("button", dots).indexOf(b));
    restart();
  });
  // Swipe on phones
  let startX = null;
  track.addEventListener("touchstart", (e) => { startX = e.touches[0].clientX; }, { passive: true });
  track.addEventListener("touchend", (e) => {
    if (startX === null) return;
    const dx = e.changedTouches[0].clientX - startX;
    if (Math.abs(dx) > 40) { go(index + (dx < 0 ? 1 : -1)); restart(); }
    startX = null;
  });
  // Pause while the tab is hidden
  document.addEventListener("visibilitychange", () => (document.hidden ? clearInterval(timer) : restart()));

  render(false);
  restart();
}

/* ---------- Scroll reveal ---------- */
function setupReveal() {
  const els = $$(".reveal");
  if (!("IntersectionObserver" in window)) return els.forEach((el) => el.classList.add("in"));
  const io = new IntersectionObserver(
    (entries) => entries.forEach((en) => {
      if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
    }),
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  els.forEach((el) => io.observe(el));
}

/* ---------- Go ---------- */
renderProducts();
renderFilters();
renderCategories();
renderCategoryPage();
renderOrderExamples();
setupOrderForm();
setupHeroSlider();
setupSearch();
applyShopDetails();
renderCart();
onScroll();
setupReveal();
