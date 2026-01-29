export type NewsCategory = "Announcement" | "Notice" | "Update";

export interface NewsItem {
  id: string;
  title: string;
  slug: string;
  summary: string;
  content: string[]; // Array of paragraphs for simple rendering without HTML parser
  publishedDate: string;
  category: NewsCategory;
  coverImage: string;
}

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: "1",
    title: "Applications Invited for DCIP Batch of 2024",
    slug: "applications-invited-batch-2024",
    summary: "The District Administration invites applications from eligible graduates for the upcoming internship cohort starting June 2024.",
    content: [
      "The District Administration of Malappuram is pleased to announce that applications are now open for the District Collector’s Internship Programme (DCIP) for the Batch of 2024.",
      "This rigorous 4-month programme offers selected interns a unique opportunity to work closely with district officials on various governance and development initiatives. The programme focuses on bridging the gap between academic learning and practical public administration.",
      "Eligible candidates must be graduates in any discipline with a strong passion for public service. The selection process will involve an initial screening of applications followed by a personal interview.",
      "Interested candidates can apply through the official portal before May 15, 2024. For more details regarding eligibility and the application process, please visit the Programme section of our website."
    ],
    publishedDate: "2024-04-10",
    category: "Announcement",
    coverImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: "2",
    title: "Orientation Programme Conducted for New Interns",
    slug: "orientation-programme-2023",
    summary: "A comprehensive orientation session was held at the Collectorate Conference Hall to welcome the new batch of interns.",
    content: [
      "The newly inducted batch of DCIP interns underwent a one-day intensive orientation programme at the Collectorate Conference Hall yesterday.",
      "The session was inaugurated by the District Collector, who emphasized the importance of youth participation in governance. He highlighted the key focus areas for this cohort, including waste management solutions, digital literacy campaigns, and tribal welfare impact assessment.",
      "Senior officials from various departments conducted technical sessions on administrative procedures, field survey methodologies, and project documentation. The interns were also briefed on the code of conduct and reporting hierarchy.",
      "The orientation concluded with an interactive Q&A session, allowing interns to clarify their doubts regarding their roles and responsibilities."
    ],
    publishedDate: "2023-11-20",
    category: "Update",
    coverImage: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: "3",
    title: "Important Notice: Interview Schedule Rescheduled",
    slug: "interview-schedule-rescheduled",
    summary: "The personal interviews scheduled for October 12th have been postponed due to administrative reasons.",
    content: [
      "This is to inform all shortlisted candidates that the personal interviews for the DCIP selection process, originally scheduled for October 12, 2023, have been postponed due to unavoidable administrative reasons.",
      "The interviews will now be conducted on October 18, 2023, at the same venue. Individual emails containing the updated time slots have been sent to all affected candidates.",
      "We regret the inconvenience caused and request all candidates to check their registered email addresses for further instructions.",
      "For any urgent queries, candidates may contact the DCIP helpdesk during office hours."
    ],
    publishedDate: "2023-10-10",
    category: "Notice",
    coverImage: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: "4",
    title: "Field Survey on Digital Literacy Completed",
    slug: "field-survey-digital-literacy",
    summary: "Interns have successfully completed a district-wide survey assessing digital literacy levels in rural panchayats.",
    content: [
      "A team of DCIP interns has successfully completed a comprehensive field survey assessing digital literacy levels across 15 rural panchayats in the district.",
      "The survey, conducted over a period of three weeks, aimed to identify gaps in digital infrastructure and usage among rural households. The data collected will be instrumental in formulating targeted digital empowerment schemes.",
      "Preliminary findings suggest a significant increase in smartphone penetration but a need for more formal training in accessing e-governance services.",
      "The final report, including policy recommendations, will be submitted to the District Planning Committee next week."
    ],
    publishedDate: "2023-09-05",
    category: "Update",
    coverImage: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: "5",
    title: "District Collector Reviews Intern Projects",
    slug: "collector-reviews-projects",
    summary: "A monthly review meeting was chaired by the District Collector to evaluate the progress of ongoing internship projects.",
    content: [
      "The District Collector chaired a review meeting yesterday to evaluate the progress of various projects undertaken by the current batch of DCIP interns.",
      "Projects related to waste management, tourism promotion, and public grievance redressal were presented by the respective intern teams. The Collector appreciated the innovative approaches adopted by the interns and provided critical feedback for improvement.",
      "He urged the interns to focus on sustainable and scalable solutions that can be practically implemented within the district's administrative framework.",
      "Such review meetings are held monthly to ensure that the internship programme remains aligned with the district's development goals."
    ],
    publishedDate: "2023-08-15",
    category: "Update",
    coverImage: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1000"
  }
];