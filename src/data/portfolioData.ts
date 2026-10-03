import asFitnessImg from '../assets/images/as_fitness_gym_hero_1791020755105.jpg';
import brewBloomImg from '../assets/images/brew_bloom_cafe_1791020778094.jpg';
import rewearImg from '../assets/images/rewear_fashion_thrift_1791020798347.jpg';
import combatDistrictImg from '../assets/images/combat_district_gym_1791022113187.jpg';
import apexAutoImg from '../assets/images/apex_auto_luxury_1791020812079.jpg';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  filterCategory: 'web' | 'dev' | 'fitness' | 'fashion' | 'fnb' | 'marketing' | 'concept';
  projectType: 'CLIENT PROJECT' | 'SELF-INITIATED CONCEPT PROJECT';
  featured?: boolean;
  location?: string;
  image: string;
  shortDescription: string;
  technologies: string[];
  clientOrContext: string;
  brief: string;
  problem: string;
  strategy: string;
  designHighlights: string[];
  devHighlights: string[];
  finalExperience: string;
  deliverables: string[];
  previewSpecs?: {
    accentColor: string;
    highlights: { label: string; value: string }[];
    interactiveDetails: string;
  };
}

export interface ServiceItem {
  number: string;
  title: string;
  description: string;
  items: string[];
  ctaText: string;
  accent: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  summary: string;
  details: string;
  deliverable: string;
}

export const PROFILE_INFO = {
  name: 'Tanishq Anilkumar Shukla',
  role: 'Independent Freelancer · Digital Creator · Web Developer',
  eyebrow: 'INDEPENDENT FREELANCER · DIGITAL CREATOR',
  headline: 'I build digital experiences that make businesses look better, work smarter and grow online.',
  subheadline: 'I design and develop modern websites, digital experiences and marketing solutions for ambitious businesses and brands.',
  studioName: 'ig ascend1apex',
  studioRole: 'Creative studio / co-name',
  instagramPersonal: '@tanishq.shukla5',
  instagramPersonalUrl: 'https://instagram.com/tanishq.shukla5',
  instagramStudioUrl: 'https://instagram.com/ascend1apex',
  phone: '+91 99871 15811',
  phoneClean: '919987115811',
  email: 'tanishqqshukla@gmail.com',
  location: 'Akola / Mumbai, Maharashtra, India',
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    number: '01',
    title: 'Website Design & Development',
    description: 'Bespoke, high-performance web solutions built with modern front-end technology, pixel perfection, and rock-solid responsiveness.',
    items: [
      'Business websites',
      'High-converting landing pages',
      'Portfolio & creative showcases',
      'Café & restaurant websites',
      'Gym & fitness studio websites',
      'E-commerce & retail concepts',
      'Service-business websites',
      'Mobile-first responsive architecture',
      'Interactive web interfaces',
      'Website redesigns & modernization',
    ],
    ctaText: 'Explore Web Projects',
    accent: '#f59e0b',
  },
  {
    number: '02',
    title: 'UI/UX & Digital Experience',
    description: 'Human-centered interfaces crafted to minimize friction, communicate brand authority, and turn casual visitors into loyal customers.',
    items: [
      'Website layouts & wireframing',
      'User experience architecture',
      'Mobile-first design systems',
      'Conversion-focused landing page design',
      'Interactive interface micro-interactions',
      'Scalable design systems & tokens',
      'Responsive UI component libraries',
      'Visual hierarchy optimization',
    ],
    ctaText: 'View UX Systems',
    accent: '#3b82f6',
  },
  {
    number: '03',
    title: 'Social Media Management',
    description: 'Cohesive visual identity and structured content frameworks that present your business consistently across modern social platforms.',
    items: [
      'Instagram visual & content strategy',
      'Monthly content planning & roadmaps',
      'Editorial post concepts & carousels',
      'Short-form Reel & video storyboards',
      'Daily story engagement concepts',
      'On-brand captions & copy direction',
      'Targeted hashtag & discoverability strategy',
      'Content calendars & workflow planning',
      'Community engagement principles',
      'Bio & profile architecture optimization',
    ],
    ctaText: 'Discuss Social Strategy',
    accent: '#ec4899',
  },
  {
    number: '04',
    title: 'Digital Marketing',
    description: 'Strategic audience-aligned marketing frameworks connecting organic creative content with conversion funnels and focused landing pages.',
    items: [
      'Holistic digital marketing strategy',
      'Multi-touch campaign concepts',
      'Organic social media marketing',
      'Ad creative concepts & copywriting',
      'Campaign-specific landing pages',
      'Target audience research & personas',
      'Content distribution strategy',
      'Marketing conversion funnels',
    ],
    ctaText: 'Plan a Campaign',
    accent: '#10b981',
  },
  {
    number: '05',
    title: 'Brand & Creative Design',
    description: 'Distinctive visual identities and promotional creative assets that establish immediate recognition and trust for your business.',
    items: [
      'Brand identity concepts & typography',
      'Social media creative templates',
      'Promotional launch graphics',
      'Digital marketing campaign banners',
      'Art direction & color systems',
      'Marketing print & digital collateral',
    ],
    ctaText: 'Craft Your Brand',
    accent: '#8b5cf6',
  },
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'as-fitness-fusion',
    title: 'AS Fitness Fusion',
    subtitle: 'A prominent fitness project from Akola',
    category: 'Fitness · Gym · Digital Presence',
    filterCategory: 'fitness',
    projectType: 'CLIENT PROJECT',
    featured: true,
    location: 'Akola, Maharashtra',
    image: asFitnessImg,
    shortDescription:
      'A comprehensive digital presence showcase for a prominent fitness brand in Akola, featuring training programs, facility zones, trainer profiles, and instant WhatsApp onboarding.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'WhatsApp API'],
    clientOrContext: 'AS Fitness Fusion (Akola, Maharashtra)',
    brief:
      'To build a commanding digital experience that reflects the energy, state-of-the-art strength training environment, and community atmosphere of AS Fitness Fusion in Akola.',
    problem:
      'Fitness brands often rely solely on fragmented Instagram posts without a centralized platform where prospective members can explore training disciplines, see real facility equipment, understand membership options, and connect directly with trainers.',
    strategy:
      'Develop an editorial, dark-mode fitness portal structured around three core pillars: visual proof of the training floor, transparent program curriculum, and frictionless one-tap WhatsApp contact for trial bookings.',
    designHighlights: [
      'Atmospheric high-contrast dark aesthetic echoing the gym interior lighting',
      'Modular program cards spanning Strength, Functional Training, Cross-training, and Personal Coaching',
      'Facility gallery highlighting heavy free-weight racks and cardio zones',
      'Trainer spotlight cards outlining coaching credentials and specialties',
      'Prominent WhatsApp quick-action buttons for membership inquiries',
    ],
    devHighlights: [
      'Mobile-first responsive navigation optimized for local mobile browsing',
      'Zero-latency interactive timetable view with day-by-day workout schedules',
      'Direct WhatsApp click-to-chat integration with pre-filled trial session message',
      'Fast-loading lazy imagery with clean blur placeholders',
    ],
    finalExperience:
      'A digital experience that positions AS Fitness Fusion as an authoritative fitness destination in Akola, enabling prospective members to tour the space online and message the gym in seconds.',
    deliverables: [
      'Full Digital Experience Architecture',
      'Mobile-First Responsive Website',
      'Facility & Training Zone Showcase',
      'Trainer Directory System',
      'Direct WhatsApp Inquiry Flow',
      'Google Maps Location Integration',
    ],
    previewSpecs: {
      accentColor: '#f59e0b',
      highlights: [
        { label: 'Location', value: 'Akola, Maharashtra' },
        { label: 'Category', value: 'Fitness & Gym' },
        { label: 'Focus', value: 'Facilities & Onboarding' },
        { label: 'Channel', value: 'WhatsApp Direct' },
      ],
      interactiveDetails: 'Complete interactive gym portal with workout zones, trainer bios, and class schedules.',
    },
  },
  {
    id: 'brew-and-bloom',
    title: 'Brew & Bloom',
    subtitle: 'Artisanal Botanical Café & Roastery',
    category: 'Food & Beverage · Café',
    filterCategory: 'fnb',
    projectType: 'SELF-INITIATED CONCEPT PROJECT',
    featured: false,
    image: brewBloomImg,
    shortDescription:
      'A warm, botanical café website concept featuring an interactive seasonal coffee menu, table reservation flows, roastery origins, and Instagram integration.',
    technologies: ['React', 'Tailwind CSS', 'UI/UX Design', 'Interaction Design'],
    clientOrContext: 'Self-Initiated Concept for Specialty Cafés',
    brief:
      'Create an inviting, organic digital home for a modern third-wave coffee brand that blends botanical aesthetics with seamless table booking and menu browsing.',
    problem:
      'Many café websites are static PDF menus that frustrate mobile customers looking for today’s roasts, dietary filters, or quick reservation bookings.',
    strategy:
      'Build a lightweight, mobile-optimized experience with interactive categorized coffee tabs, botanical storytelling, and direct table inquiry workflows.',
    designHighlights: [
      'Warm earthy palette with forest greens, oat milk tones, and rich espresso accents',
      'Interactive categorized coffee menu with flavor notes and brewing methods',
      'Minimalist reservation form with date/guest picker',
      'Botanical photo gallery showcasing the serene interior ambience',
    ],
    devHighlights: [
      'Client-side filterable menu by brew method (Pour Over, Espresso, Cold Drip)',
      'Smooth micro-interactions on drink cards revealing origin notes',
      'Responsive reservation modal with instant client feedback',
    ],
    finalExperience:
      'An elegant digital café storefront that transforms casual passersby into café regulars by capturing the physical ambiance online.',
    deliverables: [
      'Café Brand & UI Design System',
      'Filterable Coffee & Pastry Menu',
      'Table Reservation Interface',
      'Roastery Origin Story Section',
      'Curated Instagram Feed Grid',
    ],
    previewSpecs: {
      accentColor: '#10b981',
      highlights: [
        { label: 'Concept', value: 'Specialty Café' },
        { label: 'Menu Items', value: '18 Handcrafted' },
        { label: 'Features', value: 'Booking + Menu' },
        { label: 'Vibe', value: 'Botanical & Warm' },
      ],
      interactiveDetails: 'Interactive menu filters, espresso notes, and reservation workflow.',
    },
  },
  {
    id: 'rewear-studio',
    title: 'Rewear Studio',
    subtitle: 'Curated Vintage & Upcycled Streetwear',
    category: 'Fashion · E-Commerce Concept',
    filterCategory: 'fashion',
    projectType: 'SELF-INITIATED CONCEPT PROJECT',
    featured: false,
    image: rewearImg,
    shortDescription:
      'A high-contrast editorial e-commerce concept for circular fashion, curated vintage drops, and sustainable streetwear collections.',
    technologies: ['Next.js Architecture', 'React', 'Tailwind CSS', 'Cart State'],
    clientOrContext: 'Self-Initiated Concept for Circular Fashion',
    brief:
      'Design a drop-based shopping experience for a modern thrift brand that feels like a luxury streetwear house rather than a messy second-hand bazaar.',
    problem:
      'Thrift and vintage stores struggle to communicate quality and exclusivity online because conventional thrift sites look cluttered and uncurated.',
    strategy:
      'Structure the store around limited weekly drops, oversized typography, high-definition condition tags, and streamlined single-piece inventory indicators.',
    designHighlights: [
      'Monochrome brutalist layout with high-impact product photography',
      'Condition scale indicators (Pristine, Gently Worn, Upcycled)',
      'Editorial lookbook slider highlighting styled outfits',
      'One-of-one item badge discipline without visual clutter',
    ],
    devHighlights: [
      'Instant search and tag filtering (Jackets, Denim, Hoodies, Accessories)',
      'Interactive product drawer modal with fabric composition details',
      'Dynamic size guide and one-tap checkout simulation',
    ],
    finalExperience:
      'A punchy, tactile online retail storefront that elevates vintage fashion into a desirable, collector-grade experience.',
    deliverables: [
      'E-commerce UI & Design System',
      'Drop Countdown & Stock Status',
      'Interactive Product Grid & Filters',
      'Editorial Lookbook Component',
      'Mobile-Optimized Checkout Flow',
    ],
    previewSpecs: {
      accentColor: '#e11d48',
      highlights: [
        { label: 'Niche', value: 'Vintage & Thrift' },
        { label: 'Drop Model', value: 'Weekly 1-of-1' },
        { label: 'Style', value: 'Editorial Brutalist' },
        { label: 'Flow', value: 'Quick Drawer Cart' },
      ],
      interactiveDetails: 'Filterable product catalog, condition verification, and drop previews.',
    },
  },
  {
    id: 'combat-district',
    title: 'Combat District',
    subtitle: 'xtrem9 Combat Sports, Boxing Ring & MMA Academy',
    category: 'Fitness · MMA & Combat Sports',
    filterCategory: 'fitness',
    projectType: 'SELF-INITIATED CONCEPT PROJECT',
    featured: false,
    image: combatDistrictImg,
    shortDescription:
      'An intense, modern combat gym portal highlighting Boxing, Muay Thai, BJJ, coach credentials, and an interactive class timetable.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Schedule Engine'],
    clientOrContext: 'Self-Initiated Concept for Martial Arts Academies',
    brief:
      'Build an energetic combat sports platform that balances technical credibility with approachable entry points for beginner fighters.',
    problem:
      'MMA gyms often intimidate first-timers with aggressive messaging or confuse them with unstructured class schedules.',
    strategy:
      'Organize training by skill level (Beginner Fundamentals to Advanced Sparring), display coaches’ fight resumes, and provide an interactive weekly schedule.',
    designHighlights: [
      'Stark black, gunmetal, and crimson palette with bold sports typography',
      'Interactive discipline switcher (Boxing / Muay Thai / Brazilian Jiu-Jitsu / S&C)',
      'Coach roster with fighting disciplines and certifications',
      'One-click trial pass booking for first-time attendees',
    ],
    devHighlights: [
      'Dynamic 7-day schedule filtering by discipline and instructor',
      'Beginner onboarding assessment quiz concept',
      'Fast responsive layout with zero layout shifts',
    ],
    finalExperience:
      'A commanding, disciplined digital gym presence that turns martial arts curiosity into in-gym class reservations.',
    deliverables: [
      'Academy Brand Direction',
      'Weekly Interactive Timetable',
      'Coach Roster Showcase',
      'Disciplines Breakdown',
      'Trial Pass Booking Workflow',
    ],
    previewSpecs: {
      accentColor: '#ef4444',
      highlights: [
        { label: 'Disciplines', value: 'MMA, BJJ, Boxing' },
        { label: 'Schedule', value: 'Interactive Weekly' },
        { label: 'Target', value: 'Beginners & Fighters' },
        { label: 'Tone', value: 'Disciplined & Raw' },
      ],
      interactiveDetails: 'Class schedule switcher, coach bios, and trial pass registration.',
    },
  },
  {
    id: 'apex-auto',
    title: 'Apex Auto',
    subtitle: 'High-Performance & Luxury Automotive Gallery',
    category: 'Automotive · Retail Showcase',
    filterCategory: 'dev',
    projectType: 'SELF-INITIATED CONCEPT PROJECT',
    featured: false,
    image: apexAutoImg,
    shortDescription:
      'A luxury automotive gallery featuring precision vehicle specification matrices, immersive gallery views, and bespoke test-drive booking flows.',
    technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Spec Engine'],
    clientOrContext: 'Self-Initiated Concept for Automotive Dealers',
    brief:
      'Craft a top-tier automotive showroom website that communicates engineering precision, performance specifications, and exclusivity.',
    problem:
      'Automotive dealership websites are frequently sluggish, bloated with third-party popups, and difficult to navigate on mobile devices.',
    strategy:
      'Streamline the vehicle inspection process into full-width cinematic showcases with tabular performance stats and direct concierge contact.',
    designHighlights: [
      'Obsidian-black interface with architectural line reflections',
      'Key specification counters: 0-100 km/h, horsepower, torque, and top speed',
      'Interactive 360-degree viewpoint mockup with ambient lighting',
      'VIP test-drive reservation form with preferred track/road selection',
    ],
    devHighlights: [
      'Smooth gallery transitions with keyboard and swipe support',
      'Tabular spec comparison engine between vehicle trims',
      'Optimized media delivery for high-DPI displays',
    ],
    finalExperience:
      'A digital showroom experience on par with high-end European manufacturers, giving prospective buyers complete confidence.',
    deliverables: [
      'Automotive Showcase Architecture',
      'Vehicle Spec Comparison Matrix',
      'VIP Test-Drive Booking System',
      'Finance Estimation Module',
      'High-Definition Media Gallery',
    ],
    previewSpecs: {
      accentColor: '#38bdf8',
      highlights: [
        { label: 'Segment', value: 'Performance Luxury' },
        { label: 'Specs', value: 'Detailed Tabular' },
        { label: 'Media', value: 'Cinematic Framing' },
        { label: 'Inquiry', value: 'Concierge Booking' },
      ],
      interactiveDetails: 'Performance metric comparisons, vehicle gallery, and test-drive form.',
    },
  },
  {
    id: 'urban-cuts',
    title: 'Urban Cuts',
    subtitle: 'Modern Grooming & Artisanal Barbershop',
    category: 'Barbershop · Grooming',
    filterCategory: 'web',
    projectType: 'SELF-INITIATED CONCEPT PROJECT',
    featured: false,
    image: '/src/assets/images/rewear_fashion_thrift_1791020798347.jpg',
    shortDescription:
      'A sharp grooming studio website with transparent pricing tiers, master barber profiles, live chair availability status, and easy online appointment booking.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Booking State'],
    clientOrContext: 'Self-Initiated Concept for Men’s Grooming Studios',
    brief:
      'Design a modern, stylish website for an upscale barbershop that makes booking appointments simple and highlights artisanal craft.',
    problem:
      'Walk-in barbershops face unpredictable queues, while their online presence is often an outdated Facebook page without clear pricing or service breakdowns.',
    strategy:
      'Create a clear, single-page flow with categorized grooming menus (Hair, Beard, Hot Towel Treatments), barber profiles, and instant time-slot picking.',
    designHighlights: [
      'Classic heritage barbershop aesthetic reimagined with sleek modern minimalism',
      'Transparent service rate card with service duration indicators',
      'Barber portfolio showcase featuring actual cut styles',
      'Real-time shop status badge (e.g., Open Today · Walk-ins Welcome)',
    ],
    devHighlights: [
      'Step-by-step appointment booking wizard with service multi-select',
      'Direct SMS / WhatsApp appointment confirmation ping simulation',
      'Lightweight bundle size with rapid initial paint time',
    ],
    finalExperience:
      'A refined, masculine grooming experience that removes friction from haircut scheduling and elevates the barbershop brand.',
    deliverables: [
      'Grooming Studio UI System',
      'Interactive Service & Price List',
      'Barber Profile & Portfolio Cards',
      'Online Appointment Wizard',
      'Google Maps & Location Widget',
    ],
    previewSpecs: {
      accentColor: '#d97706',
      highlights: [
        { label: 'Craft', value: 'Master Grooming' },
        { label: 'Booking', value: '3-Step Wizard' },
        { label: 'Pricing', value: '100% Transparent' },
        { label: 'Status', value: 'Live Availability' },
      ],
      interactiveDetails: 'Haircut service selector, barber picker, and appointment confirmation.',
    },
  },
  {
    id: 'luxestay-resort',
    title: 'LuxeStay',
    subtitle: 'Boutique Coastal Retreat & Eco-Resort',
    category: 'Hospitality · Hotel Experience',
    filterCategory: 'web',
    projectType: 'SELF-INITIATED CONCEPT PROJECT',
    featured: false,
    image: '/src/assets/images/brew_bloom_cafe_1791020778094.jpg',
    shortDescription:
      'An immersive hospitality platform showcasing boutique villas, curated local dining, wellness spa experiences, and direct dates-and-guests booking.',
    technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Calendar State'],
    clientOrContext: 'Self-Initiated Concept for Boutique Hotels',
    brief:
      'Create a tranquil, high-end digital sanctuary for a boutique resort that inspires travelers and maximizes direct bookings.',
    problem:
      'Hotels lose substantial revenue to third-party travel agencies (OTAs) because their direct website booking experience is cumbersome and uninspiring.',
    strategy:
      'Combine serene editorial photography with an intuitive sticky date bar, comprehensive room comparison features, and curated guest experience packages.',
    designHighlights: [
      'Airy coastal luxury palette with muted sand, slate, and sea salt accents',
      'Villa showcase with room capacity, square footage, and ocean view highlights',
      'Interactive amenities checklist (Infinity Pool, Organic Spa, Farm-to-Table)',
      'Guest journey testimonials and local destination guides',
    ],
    devHighlights: [
      'Interactive date range & guest selector header widget',
      'Villa card slider with instant room configuration previews',
      'Accessible focus rings and keyboard-friendly booking steps',
    ],
    finalExperience:
      'A digital experience that conveys relaxation and hospitality before the guest even sets foot on the property.',
    deliverables: [
      'Boutique Hotel Web Architecture',
      'Villa & Suite Interactive Showcase',
      'Direct Booking Inquiry Engine',
      'Dining & Wellness Spa Showcase',
      'Destination Experience Guide',
    ],
    previewSpecs: {
      accentColor: '#06b6d4',
      highlights: [
        { label: 'Type', value: 'Boutique Hotel' },
        { label: 'Villas', value: 'Ocean & Garden' },
        { label: 'Booking', value: 'Direct Commission-Free' },
        { label: 'Mood', value: 'Tranquil & Coastal' },
      ],
      interactiveDetails: 'Suite comparison viewer, amenity filter, and booking calculation.',
    },
  },
  {
    id: 'local-growth',
    title: 'Local Growth',
    subtitle: 'Multi-Channel Hyperlocal Digital Marketing Framework',
    category: 'Digital Marketing · Campaign Architecture',
    filterCategory: 'marketing',
    projectType: 'SELF-INITIATED CONCEPT PROJECT',
    featured: false,
    image: '/src/assets/images/as_fitness_gym_hero_1791020755105.jpg',
    shortDescription:
      'A structured marketing campaign blueprint demonstrating how local businesses can align organic social media, targeted landing pages, and conversion funnels.',
    technologies: ['Digital Strategy', 'Audience Research', 'Funnels', 'Ad Concepts'],
    clientOrContext: 'Self-Initiated Marketing Framework for Local Businesses',
    brief:
      'Demonstrate a systematic, multi-stage marketing roadmap tailored to local brick-and-mortar brands seeking online discoverability without wasting advertising budget.',
    problem:
      'Local businesses frequently boost random social posts without an overarching strategy, clear customer persona, or dedicated landing page to capture interest.',
    strategy:
      'Map out a 4-tier funnel: 1) Geo-targeted brand awareness reels, 2) Educational carousel posts, 3) Dedicated mobile landing page, 4) WhatsApp/Call conversion point.',
    designHighlights: [
      'Visual campaign roadmap showing customer lifecycle from discovery to sale',
      'Creative ad mockups demonstrating clear value propositions and strong CTAs',
      'Landing page wireframes optimized for sub-2-second mobile load times',
      'Community engagement checklist for local referral generation',
    ],
    devHighlights: [
      'Interactive campaign funnel explorer with step-by-step tactics',
      'Audience persona cards outlining pain points and behavioral triggers',
      'Conversion tracking blueprint for WhatsApp and telephone lead generation',
    ],
    finalExperience:
      'A clear, actionable digital marketing framework demonstrating how thoughtful strategy outpaces aimless advertising spend.',
    deliverables: [
      'Hyperlocal Audience Persona Blueprint',
      '12-Week Social Media Content Roadmap',
      'Ad Creative Direction & Copywriting',
      'Conversion Landing Page Layouts',
      'Lead Qualification & WhatsApp Flow',
    ],
    previewSpecs: {
      accentColor: '#10b981',
      highlights: [
        { label: 'Method', value: 'Multi-Touch Funnel' },
        { label: 'Channels', value: 'Instagram + Web + WA' },
        { label: 'Approach', value: 'Zero-Waste Strategy' },
        { label: 'Outcome', value: 'Qualified Local Leads' },
      ],
      interactiveDetails: 'Campaign funnel stages, ad creative concepts, and persona roadmap.',
    },
  },
  {
    id: 'fitfuel-nutrition',
    title: 'FitFuel',
    subtitle: 'Clean Sports Nutrition & Daily Wellness Brand',
    category: 'Nutrition · Fitness Brand Concept',
    filterCategory: 'fitness',
    projectType: 'SELF-INITIATED CONCEPT PROJECT',
    featured: false,
    image: '/src/assets/images/rewear_fashion_thrift_1791020798347.jpg',
    shortDescription:
      'A transparent sports nutrition brand concept with verified ingredient breakdowns, third-party lab results, and recurring monthly subscription options.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'E-Commerce UI'],
    clientOrContext: 'Self-Initiated Concept for Health & Wellness Brands',
    brief:
      'Create a trustworthy, clean digital storefront for a premium sports supplement brand that eliminates proprietary blends and emphasizes scientific formulation.',
    problem:
      'The fitness supplement industry is flooded with exaggerated claims, proprietary blends, and low-trust branding that repels informed athletes.',
    strategy:
      'Center the user experience around 100% label transparency, interactive nutritional panels, batch lab test verification, and convenient monthly delivery.',
    designHighlights: [
      'Clean clinical-grade typography with energizing amber and matte slate accents',
      'Macro breakdown per serving (Protein, BCAAs, Glutamine, Calories)',
      'Flavor switcher with instant scoop-to-shaker preview',
      'Flexible subscription toggle offering 15% recurring savings',
    ],
    devHighlights: [
      'Real-time nutritional facts modal with allergen filtering',
      'Interactive serving calculator based on individual training volume',
      'Streamlined cart drawer with free shaker progress meter',
    ],
    finalExperience:
      'A credible, modern nutritional e-commerce experience that builds long-term customer trust through honesty and scientific rigor.',
    deliverables: [
      'Sports Nutrition Brand Identity',
      'Transparent Nutritional Matrix UI',
      'Interactive Subscription Flow',
      'Batch Certificate Verification Page',
      'Mobile-First Cart Drawer',
    ],
    previewSpecs: {
      accentColor: '#f97316',
      highlights: [
        { label: 'Formula', value: 'Zero Proprietary Blends' },
        { label: 'Model', value: 'Direct-to-Consumer' },
        { label: 'Features', value: 'Macro Calculator' },
        { label: 'Retention', value: 'Monthly Subscription' },
      ],
      interactiveDetails: 'Macro nutrient breakdown, flavor selector, and subscription simulator.',
    },
  },
  {
    id: 'codeforge-saas',
    title: 'CodeForge',
    subtitle: 'Next-Generation Cloud Workspace for Developers',
    category: 'Technology · SaaS Web App Concept',
    filterCategory: 'dev',
    projectType: 'SELF-INITIATED CONCEPT PROJECT',
    featured: false,
    image: '/src/assets/images/apex_auto_luxury_1791020812079.jpg',
    shortDescription:
      'A futuristic SaaS landing page concept featuring an interactive cloud IDE mockup, instant deployment pipeline previews, and transparent pricing.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'SaaS Architecture'],
    clientOrContext: 'Self-Initiated Concept for Developer Productivity Platforms',
    brief:
      'Design a developer-first SaaS platform that conveys speed, security, and developer ergonomics through high-density interactive mockups.',
    problem:
      'Developer tools often present complex features in walls of confusing text, failing to demonstrate the actual daily workflow in the interface.',
    strategy:
      'Show, don’t just tell: create an interactive sandbox mockup where users can toggle through code syntax, preview terminal build logs, and see CI/CD pipelines.',
    designHighlights: [
      'Deep dark IDE interface with syntax highlighting and sleek tab bars',
      'Live terminal preview showing sub-second build times',
      'Tiered pricing cards with monthly/annual billing switcher',
      'Feature matrix comparing Cloud vs Local developer environments',
    ],
    devHighlights: [
      'Interactive simulated terminal with command switcher',
      'Accessible pricing comparison table with responsive horizontal scroll',
      'Zero external font bloat with ultra-crisp monospace elements',
    ],
    finalExperience:
      'A sleek, high-retention SaaS landing page that commands immediate respect from software engineers and technical decision-makers.',
    deliverables: [
      'SaaS Landing Page Architecture',
      'Interactive Workspace Mockup',
      'Dynamic Feature Matrix',
      'Tiered Pricing Switcher',
      'Developer Documentation Layout',
    ],
    previewSpecs: {
      accentColor: '#6366f1',
      highlights: [
        { label: 'Audience', value: 'Software Engineers' },
        { label: 'Interface', value: 'Interactive Cloud IDE' },
        { label: 'Billing', value: 'Monthly & Annual' },
        { label: 'Performance', value: 'Sub-Second Builds' },
      ],
      interactiveDetails: 'Simulated terminal execution, pricing calculator, and feature matrix.',
    },
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Discover',
    summary: 'Understand the business, audience and goals.',
    details:
      'Every successful project starts with listening. We analyze your brand, your ideal customers, your competitors, and the exact business outcome you need this digital presence to achieve.',
    deliverable: 'Project scope & objectives brief',
  },
  {
    step: '02',
    title: 'Strategy',
    summary: 'Plan the website, content and digital direction.',
    details:
      'We map out the user journey, page hierarchy, content roadmap, and call-to-action touchpoints so every section guides visitors toward taking real action.',
    deliverable: 'Information architecture & content structure',
  },
  {
    step: '03',
    title: 'Design',
    summary: 'Create the visual identity and user experience.',
    details:
      'I craft custom, high-fidelity UI layouts with thoughtful typography, responsive layouts, and modern aesthetics tailored specifically to your industry.',
    deliverable: 'Interactive responsive design systems',
  },
  {
    step: '04',
    title: 'Build',
    summary: 'Develop the responsive digital experience.',
    details:
      'Transforming designs into clean, accessible, and lightning-fast frontend code. Every button works, pages load smoothly, and mobile touch targets are meticulously tuned.',
    deliverable: 'Production-ready responsive web application',
  },
  {
    step: '05',
    title: 'Refine',
    summary: 'Test, optimize and polish.',
    details:
      'Rigorous cross-device testing across smartphones, tablets, laptops, and large monitors. Fine-tuning SEO metadata, performance scores, and user interaction feedback.',
    deliverable: 'Audited performance & QA testing report',
  },
  {
    step: '06',
    title: 'Launch',
    summary: 'Deliver the final project and help the client move forward.',
    details:
      'Deploying the project to live production hosting with proper social cards, Google verification, and direct handover. Ensuring you are confident managing your digital presence.',
    deliverable: 'Live deployed website & handover assets',
  },
];

export const WHY_WORK_CARDS = [
  {
    number: '01',
    title: 'Business-first thinking',
    description:
      'I don’t just focus on how something looks. I focus on what the digital experience needs to accomplish — whether that is driving WhatsApp inquiries, showcasing gym facilities, or securing café reservations.',
  },
  {
    number: '02',
    title: 'Modern design',
    description:
      'Clean, responsive and visually strong experiences designed for today’s users. No clunky templates or generic designs — every element is tailored for your brand.',
  },
  {
    number: '03',
    title: 'Personal communication',
    description:
      'Clients work directly with me instead of being passed between multiple account managers or departments. You get fast answers, direct accountability, and personal dedication.',
  },
  {
    number: '04',
    title: 'Built to grow',
    description:
      'Design systems and digital experiences should be able to evolve as the business grows. Clean code and modular layouts ensure your website can scale alongside your brand.',
  },
];
