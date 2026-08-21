/**
 * ============================================================
 * NCDC WEBSITE CONTENT — EDIT THIS FILE TO UPDATE THE WEBSITE
 * ============================================================
 *
 * This file is intentionally kept separate from the page/layout code.
 * As the NCDC website grows, most routine content updates should only
 * require editing this file.
 *
 * QUICK GUIDE
 * 1. Images     -> edit the `images` object below.
 * 2. Team       -> edit `team` / `advisors`.
 * 3. Projects   -> add/edit objects in `projects`.
 * 4. Stories    -> add/edit objects in `stories`.
 * 5. Resources  -> add/edit objects in `resources`.
 * 6. Impact     -> edit `stats`.
 * 7. Home copy  -> edit `siteContent`.
 *
 * TIP: To add a new item, copy an existing object and change its values.
 * You normally do NOT need to edit App.jsx for content-only changes.
 * ============================================================
 */

export const images = {
  // NCDC's own photographs stored locally in public/images.
  hero: "/images/hero-community.jpeg",
  farming: "/images/farming.jpeg",
  community: "/images/community.jpeg",
  crops: "/images/crops.jpeg",
  field: "/images/field.jpeg"
};

export const siteContent = {
  name: "Namuna Community Development Center",
  shortName: "NCDC",
  tagline: "Community • Resilience • Opportunity",
  phone: "+977 9858021979",
  email: "namunancdc@gmail.com",
  address: "Baijanath – Banke, Nepal",
  founded: "2066 B.S.",
  heroTitle: "Building stronger communities for a sustainable future.",
  heroText: "NCDC works alongside vulnerable communities in Nepal to strengthen livelihoods, promote health awareness, advance inclusion and support sustainable agricultural development.",
  introTitle: "Development that starts with people.",
  introParagraphs: [
    "Namuna Community Development Center (NCDC) is a community-based organization established in 2066 B.S. and based in Baijanath, Banke, Nepal.",
    "NCDC is committed to uplifting vulnerable communities through agricultural innovation, healthcare awareness, gender equality and community development initiatives."
  ],
  vision: "To create a just and equitable society where marginalized communities have equal access to resources, opportunities, and rights.",
  missionTitle: "Empowering vulnerable groups through sustainable development.",
  missionText: "We focus particularly on tribals and women through sustainable development practices, health education and agricultural innovation.",
  footerDescription: "Working with vulnerable communities to advance sustainable development, health awareness, agricultural innovation and gender equality."
};

// ============================================================
// TEAM / BOARD
// Add a person by copying one of the objects below.
// Optional: add `photo: "/images/person.jpg"` to use a photo.
// ============================================================
export const team = [
  { name: "Tikaram Upadhya", role: "Chairperson" },
  { name: "Dhana Ras Chaudhary", role: "Vice Chairman" },
  { name: "Prem Khatri", role: "Secretary" },
  { name: "Pratima Chaydhary", role: "Treasurer" },
  { name: "Bishnu Bhandari", role: "Co-Secretary" },
  { name: "Sudip Sedhai", role: "Member" },
  { name: "Jyoti Sunar", role: "Member" },
  { name: "Asha Chaudhary", role: "Member" },
  { name: "Nita Chaudhary", role: "Member" }
];

export const advisors = [
  { name: "Dr.Chandra Prasad Rijal", role: "Advisor" },
  { name: "Kumar Khativada", role: "Advisor" },
  { name: "Kapil Dev Sharma", role: "Advisor" }
];

// ============================================================
// PROJECTS
// HOW TO ADD A PROJECT:
// Copy an object, change the fields, and save.
// Required: title, status, location, image, text
// Optional: link, featured, tags
// ============================================================
export const projects = [
  {
    title: "Resilient Ecosystems – Riverbed Farming",
    status: "Featured Project",
    location: "Rajapur Municipality, Nepal",
    image: images.hero,
    text: "A climate-resilient agriculture initiative supporting vulnerable indigenous communities through riverbed vegetable farming, compost production, reforestation, wildlife management and innovative agricultural seed capital.",
    featured: true,
    tags: ["Climate resilience", "Agriculture", "Livelihoods"]
  },
  {
    title: "Sustainable Farming & Livelihoods",
    status: "Agriculture",
    location: "Banke and Bardiya",
    image: images.farming,
    text: "Training and support for improved seeds, water-efficient techniques, organic farming, pest management, market access and livelihood diversification.",
    tags: ["Agriculture", "Skills", "Markets"]
  },
  {
    title: "Health Awareness & Community Wellbeing",
    status: "Health",
    location: "Baijanath Rural Municipality",
    image: images.community,
    text: "Community health awareness activities, including education on sickle cell anemia and initiatives delivered with local stakeholders.",
    tags: ["Health", "Awareness", "Community"]
  }
];

// ============================================================
// SUCCESS STORIES
// Add one object per published story.
// Optional: date, category, link, featured
// ============================================================
export const stories = [
  {
    title: "From riverbed to resilient livelihood",
    excerpt: "How climate-smart vegetable farming can turn underused land into an opportunity for food security and income.",
    image: images.hero,
    category: "Community story",
    featured: true
  },
  {
    title: "Growing skills alongside crops",
    excerpt: "Practical training, community groups and market connections help local farmers make informed decisions.",
    image: images.farming,
    category: "Community story"
  },
  {
    title: "Building inclusion into local action",
    excerpt: "Women, youth, marginalized communities and local institutions are brought into planning and implementation.",
    image: images.community,
    category: "Community story"
  }
];

// ============================================================
// RESOURCES
// `type` controls the icon. Supported values are:
// leaf, book, learning, tree, file, report, guide
//
// To make a resource downloadable, add:
// file: "/resources/your-document.pdf"
//
// To open an external resource, use:
// url: "https://example.com"
// ============================================================
export const resources = [
  {
    type: "leaf",
    category: "Project Profile",
    title: "Resilient Ecosystems – Riverbed Farming",
    description: "Project information",
    file: ""
  },
  {
    type: "book",
    category: "Organization Profile",
    title: "Namuna Community Development Center (NCDC)",
    description: "Organization information",
    file: ""
  },
  {
    type: "learning",
    category: "Program Learning",
    title: "Agriculture, health, inclusion and community development",
    description: "Knowledge area",
    file: ""
  },
  {
    type: "tree",
    category: "Sustainability",
    title: "Market assurance, eco-farming and community ownership",
    description: "Approach",
    file: ""
  }
];

// ============================================================
// HOME PAGE IMPACT NUMBERS
// Change the values here whenever the organization's figures change.
// ============================================================
export const stats = [
  { number: "75", label: "Target households", detail: "identified for the riverbed farming project" },
  { number: "10", label: "Wards", detail: "covered within Rajapur Municipality" },
  { number: "9", label: "Board members", detail: "with inclusive community representation" },
  { number: "5", label: "Women", detail: "on the nine-member special committee" }
];

// ============================================================
// HOME PAGE FOCUS AREAS
// ============================================================
export const focusAreas = [
  { icon: "wheat", title: "Agriculture & Livelihoods", text: "Sustainable farming, improved seeds, water-efficient techniques, skills, market links and livelihood diversification." },
  { icon: "health", title: "Health Awareness", text: "Community awareness and education that help people make informed health decisions." },
  { icon: "users", title: "Gender & Inclusion", text: "Inclusive governance and programs that strengthen the participation and rights of marginalized groups." },
  { icon: "tree", title: "Climate & Environment", text: "Riverbed farming, composting, reforestation, wildlife coexistence and climate resilience." }
];

// ============================================================
// ABOUT PAGE PRINCIPLES
// ============================================================
export const values = [
  { icon: "users", title: "Inclusion", text: "Meaningful participation of marginalized, indigenous and vulnerable groups." },
  { icon: "hand", title: "Empowerment", text: "Building skills, livelihoods, confidence and local decision-making capacity." },
  { icon: "leaf", title: "Sustainability", text: "Promoting practices that can continue beyond individual project cycles." },
  { icon: "health", title: "Equity", text: "Advancing gender equality and fair access to resources and opportunities." },
  { icon: "sprout", title: "Community Ownership", text: "Working with local groups, partners and institutions around community priorities." },
  { icon: "shield", title: "Resilience", text: "Strengthening communities' capacity to respond to climate and livelihood challenges." }
];

// ============================================================
// SOCIAL LINKS
// Replace # with the organization's real social-media URLs.
// ============================================================
export const socialLinks = {
  facebook: "#",
  instagram: "#",
  youtube: "#"
};
