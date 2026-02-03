
// =================================================================================================
//  BLOG CONTENT MANAGEMENT
// =================================================================================================
//  HOW TO ADD A NEW POST:
//  1. Copy the "TEMPLATE" object below.
//  2. Paste it at the TOP of the 'BLOG_POSTS' array (immediately after the opening '[').
//  3. Update the fields (title, content, image, etc.).
//
//  IMPORTANT RULES:
//  - The First 3 Posts in this list will appear on the Home Page "Latest Insights" section.
//  - To make a post the BIG Hero image on the Blog Page, set 'featured: true'.
//  - 'id' must be unique (this is the URL, e.g., /blog/my-new-post).
//  - 'content' is a list of paragraphs. Each new paragraph is a new string in the [ ] list.
// =================================================================================================

export interface BlogPost {
  id: string;        // URL slug (e.g., 'field-visit-2024')
  title: string;     // Main Headline
  excerpt: string;   // Short summary for the card view
  content: string[]; // Article body (each string is a paragraph)
  date: string;      // e.g., "May 20, 2024"
  category: string;  // e.g., "Field Work", "Update", "Story"
  author: string;    // Author Name
  image: string;     // Image URL (Unsplash or /public/images/...)
  featured?: boolean;// Set to true for the Main Highlight post
}

export const BLOG_POSTS: BlogPost[] = [

  // --- ⬇️ PASTE NEW POSTS HERE (AT THE TOP) ⬇️ ---

  {
    id: "empowering-rural-youth",
    title: "Empowering Rural Youth: The 2024 Vision",
    excerpt: "A look into how the new cohort is focusing on skill development in the district's most remote panchayats.",
    content: [
      "The definition of governance is changing. It is no longer just about maintaining law and order; it is about enabling potential. This month, the DCIP team launched a targeted initiative focused on the district's rural youth.",
      "Our preliminary surveys in the Nilambur region showed a significant gap between educational qualifications and employability skills. While literacy rates are high, practical exposure to digital tools and professional etiquette was lacking.",
      "To address this, interns have partnered with the District Skill Development Centre to organize weekend bootcamps. These aren't typical classrooms. We simulate office environments, conduct mock interviews, and provide hands-on training with e-governance portals.",
      "The response has been overwhelming. Seeing a 20-year-old from a tribal hamlet confidently navigate a digital grievance portal is the kind of tangible impact DCIP strives for. This is just the beginning of a year-long roadmap to bridge the rural-urban skill divide."
    ],
    date: "May 15, 2024",
    category: "Impact Story",
    author: "Nandini S.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2000&auto=format&fit=crop",
    featured: false
  },

  // --- ⬆️ END OF NEW POSTS ⬆️ ---

  {
    id: "reimagining-public-spaces",
    title: "Reimagining Public Spaces: The Malappuram Urban Project",
    excerpt: "How intern-led design thinking workshops are reshaping the way citizens interact with public parks and libraries.",
    content: [
      "Public spaces are the heartbeat of any community. In Malappuram, however, we noticed a disconnect between the design of public parks and the needs of the people who use them. This observation sparked the 'Urban Reclaim' initiative, a project driven entirely by the current DCIP cohort.",
      "The process began not with blueprints, but with conversations. We organized design thinking workshops at three major town squares, inviting students, elderly citizens, and street vendors to share their vision. The insights were revealing. While the administration focused on aesthetics, the citizens wanted functionality—better lighting for safety, accessible seating for the elderly, and play areas for children.",
      "Armed with this feedback, we collaborated with municipal architects to draft a revitalization plan. The proposal wasn't just about beautification; it was about inclusivity. We incorporated ramps for wheelchair access, allocated spaces for street performers, and proposed a maintenance model involving local resident associations.",
      "Last week, the District Collector approved the pilot phase for the Kottakunnu Park extension. Seeing our report translate into government orders is a surreal experience. It proves that when governance listens, development becomes truly democratic."
    ],
    date: "Nov 10, 2023",
    category: "Featured",
    author: "DCIP Team",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2000&auto=format&fit=crop",
    featured: true
  },
  {
    id: "bridging-digital-divide",
    title: "Bridging the Digital Divide: Lessons from Rural Malappuram",
    excerpt: "How a simple survey transformed into a district-wide digital literacy campaign.",
    content: [
      "In the heart of rural Malappuram, the digital divide is not just a concept; it's a daily reality for many. Our internship cohort set out to quantify this gap, but we ended up doing much more.",
      "The initiative began with a simple mandate: assess the reach of e-governance services in tribal hamlets. Armed with tablets and survey forms, we visited over 50 households in the initial phase. The data was startling. While smartphone penetration was high, the ability to use it for constructive services—like applying for certificates or paying bills online—was minimal.",
      "We realized that infrastructure wasn't the only bottleneck; digital literacy was. This insight led to the formulation of 'Project E-Sakhi', a proposal we submitted to the District Collector. The idea was to train local Kudumbashree members as digital ambassadors.",
      "Today, seeing the pilot project roll out in two panchayats is incredibly fulfilling. It taught me that governance isn't just about administration; it's about empathy and observation."
    ],
    date: "Oct 12, 2023",
    category: "Field Notes",
    author: "Adithya N.",
    image: "https://images.unsplash.com/photo-1541872703-74c5963631df?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "art-of-listening",
    title: "The Art of Listening: Grievance Redressal in Local Governance",
    excerpt: "Understanding the importance of empathy when dealing with public petitions.",
    content: [
      "My first week at the Collectorate was assigned to the Public Grievance Redressal Cell. I expected stacks of files and bureaucratic jargon. What I encountered were stories of human struggle.",
      "One petitioner, an elderly woman named Leela, had been visiting the office for six months regarding a pension delay. Technically, her paperwork was incomplete. But administratively, sending her back again felt wrong. I took the initiative to coordinate with the local village officer directly.",
      "It turned out to be a minor data mismatch that could be resolved in minutes with the right authorization. The look of relief on Leela's face when she received her confirmation was worth more than any stipend.",
      "This experience taught me that the 'Iron Frame' of bureaucracy needs a human heart. As interns, our greatest contribution is often just the time and patience to listen to a petitioner's full story."
    ],
    date: "Sep 28, 2023",
    category: "Insights",
    author: "Fathima R.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "sustainable-tourism",
    title: "Sustainable Tourism: Mapping the Unexplored Trails",
    excerpt: "Developing a new tourism circuit plan for the eastern hill regions.",
    content: [
      "Malappuram is blessed with lush greenery and rolling hills, yet many of its scenic spots remain off the tourism map. Our project was to identify potential eco-tourism sites that could be developed without harming the environment.",
      "We spent weekends trekking through the eastern hill regions, documenting trails, waterfalls, and viewpoints. But mapping wasn't enough. We analyzed the carrying capacity of these locations to ensure sustainable footfall.",
      "Our final report proposed a 'Village Life Experience' circuit, connecting three lesser-known waterfalls with local homestays. This model ensures that tourism revenue flows directly into the local economy.",
      "The District Tourism Promotion Council has taken our proposal up for feasibility study. It’s exciting to think that a trail we mapped might soon welcome travelers from across the world."
    ],
    date: "Aug 15, 2023",
    category: "Projects",
    author: "Rahul V.",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "day-in-life",
    title: "A Day in the Life of a DCIP Intern",
    excerpt: "From morning briefings at the Collectorate to evening field visits.",
    content: [
      "09:00 AM: The day starts with a briefing at the Planning Section. We review the agenda for the upcoming District Development Committee meeting. The pace is fast, and accuracy is non-negotiable.",
      "11:30 AM: Field visit to a proposed waste management plant site. The sun is harsh, but seeing the ground reality is crucial. We take notes, click geotagged photos, and speak to local residents about their concerns.",
      "03:00 PM: Back at the Civil Station. It's time for data entry and report compilation. The glamorous part of fieldwork ends, and the rigorous part of documentation begins. This is where policy is actually made.",
      "05:30 PM: We wrap up with a debrief session among interns. We share our findings, debate solutions, and plan for tomorrow. It's exhausting, but knowing you played a tiny part in the district's machinery keeps you going."
    ],
    date: "Aug 02, 2023",
    category: "Experience",
    author: "Sneha P.",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800&auto=format&fit=crop"
  }
];
