export const siteConfig = {
  name: "DCIP Malappuram",
  description: "District Collector’s Internship Programme – Malappuram. An official initiative of the District Administration.",
  url: "https://dcip.malappuram.info",
  ogImage: "https://dcip.malappuram.info/og.jpg",
  links: {
    twitter: "https://twitter.com/malappuram",
    facebook: "https://facebook.com/malappuram",
  },
  navItems: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Programme", href: "/programme" },
    { name: "Impact", href: "/impact" },
    { name: "Alumni", href: "/alumni" },
    { name: "Blog", href: "/blog" },
    { name: "FAQ", href: "/faq" },
  ]
};

export type SiteConfig = typeof siteConfig;