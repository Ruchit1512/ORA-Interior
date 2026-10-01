export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  features: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: "Living Room" | "Bedroom" | "Kitchen" | "TV Unit" | "Renovation";
  location: string;
  image: string;
  description: string;
  scope: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  duration?: string;
}

export interface FeatureItem {
  number: string;
  title: string;
  description: string;
  highlight: string;
}

export interface HomeTypeItem {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  features: string[];
}

export interface TestimonialItem {
  id: string;
  quote: string;
  name: string;
  projectType: string;
  location: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const COMPANY_INFO = {
  name: "ORA INTERIOR & CONSTRUCTION SOLUTIONS",
  shortName: "ORA",
  tagline: "One Stop Solutions for Your Dream Work",
  subTagline: "Complete Interior Design, Renovation & Execution in Bhopal",
  phone: "8435983078",
  phoneFormatted: "+91 84359 83078",
  phoneTel: "+918435983078",
  whatsappUrl: "https://wa.me/918435983078?text=Hello%20ORA%20Interior%20%26%20Construction%20Solutions%2C%20I%20would%20like%20to%20discuss%20my%20home%20interior%20project.",
  email: "orainter24@gmail.com",
  location: "Bhopal, Madhya Pradesh, India",
  city: "Bhopal",
  state: "Madhya Pradesh",
  country: "India",
  pincode: "462001",
  address: "Bhopal, Madhya Pradesh 462001, India",
  googleMapsUrl: "https://maps.google.com/?q=Bhopal+Madhya+Pradesh",
  instagramUrl: "https://instagram.com",
  openingHours: "Mon - Sat: 9:30 AM - 8:00 PM",
  badges: [
    "On-Time Project Delivery",
    "Complete Interior & Renovation Work",
    "Labour + Materials Included",
    "2D & 3D Design Support",
  ],
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Why Us", href: "/#why-us" },
  { label: "Contact", href: "/contact" },
];

export const HERO_DATA = {
  eyebrow: "ORA INTERIOR & CONSTRUCTION SOLUTIONS",
  headline: "Transform Your Space.\nMake It Truly Yours.",
  supportingLine: "Complete interior design, renovation and execution solutions for modern homes in Bhopal.",
  description: "From concept and 2D/3D design to materials, labour and final execution — we handle your complete interior project with precision and dedicated craftsmanship.",
  primaryCta: "Start Your Project",
  secondaryCta: "Explore Our Work",
  highlights: [
    "On-Time Project Delivery",
    "Complete Interior & Renovation Work",
    "End-to-End Design & Build",
  ],
  backgroundImage: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=85",
};

export const ABOUT_DATA = {
  eyebrow: "ABOUT ORA INTERIORS",
  title: "INTERIORS THAT FEEL LIKE HOME",
  subtitle: "One Stop Solutions for Your Dream Work",
  description: "ORA Interior & Construction Solutions provides complete interior and renovation services for homes in Bhopal. We bring design, materials, craftsmanship and execution together under one roof.",
  secondaryText: "Instead of dealing with separate carpenters, painters, electricians, and material suppliers, ORA manages the entire lifecycle of your residential project. From initial 2D layout planning and photorealistic 3D renders to curated premium hardware and on-site finishing, our unified approach guarantees consistency, cost transparency, and on-time completion.",
  badge: "On-Time Project Delivery",
  images: {
    main: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=85",
    secondary: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=85",
  },
  points: [
    "Integrated Labour + Materials single-point accountability",
    "Photorealistic 3D visualization before construction starts",
    "Curated quality laminates, acrylics, hardware & fittings",
    "Structured project milestone scheduling in Bhopal",
  ],
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "modular-kitchen",
    number: "01",
    title: "MODULAR KITCHEN",
    tagline: "Ergonomic & Durable",
    description: "Custom modular kitchens designed for Indian cooking habits. High-moisture resistant carcasses, tandem drawers, soft-close hardware, acrylic & laminate finishes.",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=80",
    features: ["BWP Marine Ply Carcasses", "Soft-Close German Fittings", "Pantry Units & Corner Carousels", "Granite & Quartz Countertops"],
  },
  {
    id: "modern-bedroom-wardrobe",
    number: "02",
    title: "MODERN BEDROOM & WARDROBE",
    tagline: "Functional Sanctuary",
    description: "Floor-to-ceiling sliding & hinged wardrobes, ergonomic headboards, integrated bedside lighting, and organized internal drawer compartments.",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1000&q=80",
    features: ["Sliding & Openable Wardrobes", "Profile Glass & Fluted Panels", "Concealed Warm Lighting", "Custom Bed Bases & Dressers"],
  },
  {
    id: "tv-unit-temple",
    number: "03",
    title: "TV UNIT & TEMPLE",
    tagline: "Aesthetic Centerpieces",
    description: "Modern floating entertainment consoles with acoustic fluted panelling, paired with sacred, Vastu-compliant Mandir designs with intricate CNC jali work.",
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1000&q=80",
    features: ["Floating TV Consoles", "Acoustic Fluted Wall Panels", "CNC Cut Jali Mandir Panels", "Concealed Cable Routing"],
  },
  {
    id: "sofa-cum-bed-sofa",
    number: "04",
    title: "SOFA CUM BED & SOFA",
    tagline: "Space-Saving Comfort",
    description: "Custom-built modular sofas, L-shaped sectionals, and high-density foam sofa-cum-beds tailored to your exact living room dimensions and fabric preferences.",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1000&q=80",
    features: ["Heavy-Duty Mechanism", "Premium Stain-Resistant Fabrics", "High-Resilience Foam Cushions", "Made to Room Measurement"],
  },
  {
    id: "complete-home-renovation",
    number: "05",
    title: "COMPLETE HOME RENOVATION",
    tagline: "Full Structural Revamp",
    description: "Civil restructuring, false ceiling, tile replacement, electrical rewiring, plumbing upgrades, and painting for older homes and newly purchased properties in Bhopal.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1000&q=80",
    features: ["Civil Demolition & Masonry", "Gypsum Designer False Ceilings", "Complete Electrical & Lighting", "Full Wall Texture & Painting"],
  },
  {
    id: "2d-3d-design",
    number: "06",
    title: "2D & 3D DESIGN",
    tagline: "Virtual Space Walkthrough",
    description: "Accurate architectural floor plans, furniture layouts, electrical drawings, and high-resolution 3D photorealistic renders before on-site work begins.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80",
    features: ["Detailed 2D Furniture Layout", "3D Photorealistic Views", "Detailed Electrical & Plumbing Plans", "Accurate Material Estimates"],
  },
  {
    id: "home-interior",
    number: "07",
    title: "HOME INTERIOR",
    tagline: "Harmonious Aesthetics",
    description: "Complete styling and joinery for living, dining, foyer, and passages. Thoughtfully selected color palettes, curtains, wall panelling, and bespoke millwork.",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=80",
    features: ["Foyer Partitions & Shoe Racks", "Dining Consoles & Panelling", "Designer Lighting Concepts", "Full Living Area Integration"],
  },
  {
    id: "apartment-duplex-solutions",
    number: "08",
    title: "1 BHK / 2 BHK / 3 BHK & DUPLEX",
    tagline: "Tailored Packages",
    description: "Optimized, turnkey interior packages designed specifically for Bhopal apartment complexes and independent duplex bungalows.",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=80",
    features: ["1 BHK Budget Turnkey", "2 BHK Standard & Premium", "3 BHK Luxury Family Solutions", "Duplex Double-Height Living"],
  },
  {
    id: "labour-materials",
    number: "09",
    title: "LABOUR + MATERIALS",
    tagline: "Zero Coordination Hassle",
    description: "Transparent combined contracts covering verified skilled carpenters, painters, plumbers, alongside brand-verified ply, hardware, and finishes.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1000&q=80",
    features: ["Unified Single Contract", "Direct Material Sourcing", "Strict Quality Supervision", "No Surprise Hidden Costs"],
  },
];

export const EDITORIAL_SERVICES = [
  {
    id: "ed-kitchen",
    title: "MODULAR KITCHEN",
    subtitle: "Precision joinery meets culinary functionality",
    description: "Engineered specifically for everyday Indian cooking with moisture-proof materials, heavy-duty tandem runners, and elegant quartz surfaces.",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1400&q=85",
    aspect: "landscape",
  },
  {
    id: "ed-bedroom",
    title: "BEDROOM & WARDROBE",
    subtitle: "Quiet luxury and clutter-free living",
    description: "Seamless floor-to-ceiling profiles, soft-touch matte laminates, fluted headboard accents, and discreet concealed warm illumination.",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=85",
    aspect: "portrait",
  },
  {
    id: "ed-living",
    title: "LIVING ROOM",
    subtitle: "The architectural centerpiece of your home",
    description: "Sophisticated fluted wall panelling, floating media consoles, ambient cove lighting, and balanced spatial flow that welcomes family and guests.",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85",
    aspect: "landscape",
  },
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "modern-3bhk-residence",
    title: "Modern 3BHK Residence",
    category: "Living Room",
    location: "Arera Colony, Bhopal",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
    description: "A complete contemporary interior with warm charcoal panelling, bronze metal inlays, and customized modular furniture.",
    scope: "Complete Living, Dining & Foyer",
  },
  {
    id: "luxury-modular-kitchen",
    title: "Luxury Modular Kitchen",
    category: "Kitchen",
    location: "Kolar Road, Bhopal",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80",
    description: "High-gloss acrylic overheads with matte slate grey base cabinets, integrated appliances, and quartz countertop.",
    scope: "Modular Kitchen & Utility",
  },
  {
    id: "minimal-master-bedroom",
    title: "Minimal Bedroom Retreat",
    category: "Bedroom",
    location: "Hoshangabad Road, Bhopal",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80",
    description: "Floor-to-ceiling sliding wardrobe with tinted mirror inserts, textured fabric headboard, and ambient cove lighting.",
    scope: "Master Bedroom & Wardrobe",
  },
  {
    id: "contemporary-living-room",
    title: "Contemporary Living Room",
    category: "Living Room",
    location: "Bawadiya Kalan, Bhopal",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    description: "Open-plan double height living lounge featuring bespoke acoustic fluted panels and brass profile accent lines.",
    scope: "Living Lounge & False Ceiling",
  },
  {
    id: "elegant-tv-mandir",
    title: "Elegant TV Unit & Mandir",
    category: "TV Unit",
    location: "Ayodhya Bypass, Bhopal",
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1200&q=80",
    description: "Seamlessly conjoined entertainment console with dedicated backlit CNC jaali prayer sanctuary.",
    scope: "TV Console & Pooja Unit",
  },
  {
    id: "duplex-interior-revamp",
    title: "Duplex Interior Renovation",
    category: "Renovation",
    location: "MP Nagar, Bhopal",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
    description: "Complete civil and carpentry overhaul of a 2-storey bungalow with modernized electrical, ceilings, and custom woodwork.",
    scope: "Full Duplex Turnkey Work",
  },
];

export const WHY_CHOOSE_US_DATA: FeatureItem[] = [
  {
    number: "01",
    title: "PREMIUM MATERIAL QUALITY",
    highlight: "Lasting Durability & Finish",
    description: "Carefully selected materials and finishes designed for lasting beauty and performance. We use boiling waterproof (BWP) ply, certified hardware, and scratch-resistant laminates.",
  },
  {
    number: "02",
    title: "EXPERIENCED TEAM",
    highlight: "Quality Craftsmanship",
    description: "Skilled professionals focused on quality craftsmanship and clean execution. Our experienced team handles carpentry, electrical, civil, and painting with meticulous oversight.",
  },
  {
    number: "03",
    title: "AFFORDABLE PRICING",
    highlight: "Honest & Value Driven",
    description: "Thoughtfully planned solutions that balance quality, design and budget. We provide clear, itemized quotes with no unexpected cost escalations.",
  },
];

export const PROCESS_DATA: ProcessStep[] = [
  {
    step: "01",
    title: "CONSULTATION",
    description: "Understand the space, requirements and budget through a detailed personal consultation and site measurement in Bhopal.",
    duration: "Step 1",
  },
  {
    step: "02",
    title: "2D & 3D DESIGN",
    description: "Visualize the proposed interior before execution with 2D space planning and photorealistic 3D perspectives.",
    duration: "Step 2",
  },
  {
    step: "03",
    title: "MATERIAL SELECTION",
    description: "Select finishes, furniture, fixtures and materials guided by physical samples for laminates, quartz, and hardware.",
    duration: "Step 3",
  },
  {
    step: "04",
    title: "EXECUTION",
    description: "Our team manages the on-site work — civil, carpentry, electrical, ceiling, and painting — with regular progress check-ins.",
    duration: "Step 4",
  },
  {
    step: "05",
    title: "FINAL HANDOVER",
    description: "Complete the project with attention to detail, thorough quality inspections, and a pristine walk-in ready home.",
    duration: "Step 5",
  },
];

export const HOME_TYPES_DATA: HomeTypeItem[] = [
  {
    title: "1 BHK",
    subtitle: "Compact & Space-Optimized",
    description: "Intelligent multifunctional furniture, sliding wardrobes, and concealed storage designed to maximize every square foot.",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
    features: ["Space-saving modular kitchen", "Compact TV & storage unit", "Sliding wardrobe with mirror", "False ceiling with LED spots"],
  },
  {
    title: "2 BHK",
    subtitle: "Modern Family Living",
    description: "Balanced aesthetic solutions for master and guest rooms, functional modular kitchen, and an inviting living-dining space.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80",
    features: ["Modular kitchen with chimney provision", "Master bedroom wardrobe & dresser", "Guest bedroom joinery", "Contemporary TV wall unit"],
  },
  {
    title: "3 BHK",
    subtitle: "Expansive & Premium Comfort",
    description: "Comprehensive home styling with custom Mandir, dedicated kids/study bedroom, luxury master suite, and statement living walls.",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
    features: ["Designer foyer & partition", "Full modular kitchen & tall pantry", "3 bespoke bedroom wardrobes", "Pooja unit & premium TV console"],
  },
  {
    title: "DUPLEX",
    subtitle: "Grand Scale & Architecture",
    description: "Double-height living room accents, staircase panelling, integrated private lounges, and cohesive material continuity across floors.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    features: ["Double height feature wall", "Custom wooden/metal staircase work", "Terrace lounge & upper family room", "Complete architectural millwork"],
  },
  {
    title: "COMPLETE HOME RENOVATION",
    subtitle: "End-to-End Revival",
    description: "Transform older flats and standalone bungalows into modern luxury spaces with full civil, electrical, plumbing, and aesthetic renewal.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
    features: ["Civil demolition & flooring replacement", "New electrical rewiring & plumbing", "All-new modular kitchen & wardrobes", "Designer false ceiling & premium paint"],
  },
];

export const QUALITATIVE_STATS = [
  {
    title: "ON-TIME",
    subtitle: "PROJECT DELIVERY",
    description: "Committed timeline schedules with milestone tracking.",
  },
  {
    title: "COMPLETE",
    subtitle: "INTERIOR SOLUTIONS",
    description: "Concept to handover with single-point accountability.",
  },
  {
    title: "2D + 3D",
    subtitle: "DESIGN SUPPORT",
    description: "Photorealistic visualization before any work begins.",
  },
  {
    title: "LABOUR +",
    subtitle: "MATERIALS",
    description: "Verified craftsmen and branded durable materials together.",
  },
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "1",
    quote: "ORA Interior took care of our entire 3BHK flat in Bhopal. From the 3D drawings to the modular kitchen and wardrobe finishes, the workmanship and timely execution were exceptional.",
    name: "Homeowner",
    projectType: "3 BHK Complete Interior",
    location: "Arera Colony, Bhopal",
  },
  {
    id: "2",
    quote: "Finding a reliable team in Bhopal that handles both labour and materials without regular site headaches is rare. ORA managed our kitchen and living room renovation seamlessly.",
    name: "Property Owner",
    projectType: "Modular Kitchen & Living Renovation",
    location: "Kolar Road, Bhopal",
  },
  {
    id: "3",
    quote: "The 3D design gave us complete confidence before any carpentry started. The finished master bedroom and modern TV unit look exactly as rendered in the initial plan.",
    name: "Resident",
    projectType: "Bedroom & TV Unit Design",
    location: "Bawadiya Kalan, Bhopal",
  },
];

export const FAQS_DATA: FAQItem[] = [
  {
    question: "What interior services do you provide?",
    answer: "ORA Interior & Construction Solutions provides comprehensive turnkey interior services in Bhopal, including modular kitchens, modern wardrobes, bedroom design, living room panelling, TV units & Mandir units, sofa cum beds, false ceilings, electrical, civil renovation, and 2D/3D design.",
  },
  {
    question: "Do you provide both labour and materials?",
    answer: "Yes, absolutely. We offer complete 'Labour + Materials' turnkey execution. You do not need to coordinate between multiple contractors or procure hardware separately — our team manages verified skilled labour and premium materials under one transparent contract.",
  },
  {
    question: "Do you provide 2D and 3D interior designs?",
    answer: "Yes. Every project begins with precise 2D space planning and detailed 3D photorealistic visualizations so you can see textures, lighting, and finishes before any physical construction begins.",
  },
  {
    question: "Do you work on 1 BHK, 2 BHK and 3 BHK homes?",
    answer: "Yes. We have optimized design and execution packages for 1 BHK, 2 BHK, and 3 BHK apartments across Bhopal, tailored specifically to your layout and budget requirements.",
  },
  {
    question: "Do you take complete home renovation projects?",
    answer: "Yes. We specialize in complete residential renovations — handling civil demolition, tile/flooring replacement, plumbing, electrical rewiring, false ceilings, modular carpentry, and premium painting.",
  },
  {
    question: "Do you work on duplex homes?",
    answer: "Yes, we design and execute high-end duplex bungalows, including double-height living room feature walls, custom staircase joinery, upper-level family lounges, and terrace integrations.",
  },
  {
    question: "How can I get a consultation?",
    answer: "You can reach us directly at 8435983078 via phone or WhatsApp, or email us at orainter24@gmail.com. We schedule an on-site visit or consultation at your convenience in Bhopal to evaluate your space and discuss your vision.",
  },
];
