├── app/                              # Next.js App Router (Routes & Pages)
│   ├── about/
│   │   └── page.tsx                  # "Mission / Our Philosophy" Page
│   ├── alumni/
│   │   └── page.tsx                  # "Participants / Alumni Network" Page
│   ├── apply/
│   │   └── page.tsx                  # "Apply Now" Page (Status check)
│   ├── blog/
│   │   ├── [id]/                     # Dynamic Route for specific blog posts
│   │   │   └── page.tsx              # Single Blog Post layout
│   │   └── page.tsx                  # "Insights" Listing Page
│   ├── faq/
│   │   └── page.tsx                  # "Information / FAQ" Page
│   ├── gallery/
│   │   └── page.tsx                  # "Gallery" Page
│   ├── impact/
│   │   └── page.tsx                  # "Impact / Metrics" Page
│   ├── news/
│   │   ├── [slug]/                   # Dynamic Route for specific news items
│   │   │   └── page.tsx              # Single News Article layout
│   │   └── page.tsx                  # "Updates / News" Listing Page
│   ├── privacy/
│   │   └── page.tsx                  # Privacy Policy
│   ├── terms/
│   │   └── page.tsx                  # Terms & Conditions
│   ├── programme/
│   │   └── page.tsx                  # "Programme Structure / Roadmap" Page
│   ├── error.tsx                     # Global Error UI
│   ├── globals.css                   # Global styles & Tailwind directives
│   ├── layout.tsx                    # Root Layout (HTML/Body wrapper, Fonts, Navbar, Footer)
│   ├── manifest.ts                   # PWA Manifest generator
│   ├── metadata.ts                   # Base Metadata configuration
│   ├── not-found.tsx                 # 404 Page UI
│   ├── page.tsx                      # Homepage (Landing Page)
│   ├── robots.ts                     # SEO Robots.txt generator
│   └── sitemap.ts                    # SEO Sitemap generator
│
├── components/                       # React Components
│   ├── gallery/
│   │   └── GalleryGrid.tsx           # Interactive Image Grid & Lightbox
│   ├── home/                         # Homepage-specific sections
│   │   ├── Hero.tsx                  # Main entry banner (Governance Reimagined)
│   │   ├── Impact.tsx                # Impact summary section
│   │   ├── LatestInsights.tsx        # Recent blog posts preview
│   │   ├── Mission.tsx               # Mission statement section
│   │   └── VisualBreak.tsx           # Parallax visual break section
│   ├── layout/                       # Structural components
│   │   ├── Container.tsx             # Standard width constraint wrapper
│   │   ├── Footer.tsx                # Site footer
│   │   ├── Navbar.tsx                # Responsive navigation bar
│   │   └── SmoothScroll.tsx          # Lenis smooth scrolling integration
│   ├── sections/
│   │   └── Testimonials.tsx          # Reusable testimonials slider/grid
│   └── ui/                           # Reusable UI Primitives (Design System)
│       ├── Accordion.tsx             # Collapsible content (used in FAQ)
│       ├── Badge.tsx                 # Status/Category tags
│       ├── Button.tsx                # Interactive buttons
│       ├── Input.tsx                 # Form inputs
│       ├── Label.tsx                 # Form labels
│       ├── Modal.tsx                 # Pop-up dialogs
│       ├── Motion.tsx                # Animation library (TextReveal, Parallax, FadeIn)
│       ├── PageHeader.tsx            # Standard top header for sub-pages
│       ├── SectionHeading.tsx        # Standard headings for sections
│       ├── Select.tsx                # Dropdown inputs
│       └── Textarea.tsx              # Multi-line text inputs
│
├── config/
│   └── site.ts                       # Global constants (Site Name, Nav Links, URLs)
│
├── data/                             # Static Data Files (Simulating CMS)
│   ├── blog.ts                       # Blog posts data array
│   └── news.ts                       # News articles data array
│
├── lib/
│   └── utils.ts                      # Helper functions (CN/Tailwind merge)
│
└── public/
    └── logo.svg                      # Govt Logo Asset
