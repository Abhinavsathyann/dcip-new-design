
export interface Certificate {
  id: string;
  name: string;
  photo: string;
  batch: string;
  role: string;
  department: string;
  duration: string;
  issueDate: string;
  status: 'valid' | 'revoked' | 'expired';
  hash: string; // Simulation of a blockchain/crypto hash
}

export const CERTIFICATES: Certificate[] = [
  {
    id: "DCIP-2023-B6-042",
    name: "Arjun Krishnan",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500&auto=format&fit=crop",
    batch: "Batch 6 (2023)",
    role: "Research Intern",
    department: "District Planning Office",
    duration: "June 2023 - September 2023",
    issueDate: "2023-10-15",
    status: "valid",
    hash: "8f4b2e9a-7c1d-4b5a-9e8f-2a3b4c5d6e7f"
  },
  {
    id: "DCIP-2024-B7-011",
    name: "Fathima R.",
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=500&auto=format&fit=crop",
    batch: "Batch 7 (2024)",
    role: "Field Coordinator",
    department: "Women & Child Development",
    duration: "January 2024 - April 2024",
    issueDate: "2024-05-02",
    status: "valid",
    hash: "a1b2c3d4-e5f6-7890-1234-567890abcdef"
  },
  {
    id: "DCIP-2022-B4-088",
    name: "Rahul Vijay",
    photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=500&auto=format&fit=crop",
    batch: "Batch 4 (2022)",
    role: "Technical Intern",
    department: "National Informatics Centre (NIC)",
    duration: "August 2022 - November 2022",
    issueDate: "2022-12-10",
    status: "valid",
    hash: "beef-dead-cafe-babe-0000-1111-2222"
  }
];

export function getCertificate(id: string): Certificate | undefined {
  return CERTIFICATES.find(cert => cert.id === id);
}
