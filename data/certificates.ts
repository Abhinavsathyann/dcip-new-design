
export interface Certificate {
  certificateId: string;
  fullName: string;
  photoUrl: string;
  batchNumber: string;
  internshipProgramme: string;
  internshipType: string;
  districtName: string;
  departmentWorked: string;
  projectAreas: string[];
  duration: string;
  startDate: string;
  endDate: string;
  issueDate: string;
  certificateStatus: 'Verified' | 'Revoked' | 'Expired';
  verificationHash: string;
  certificateSerialNumber: string;
}

export const CERTIFICATES: Certificate[] = [
  {
    certificateId: "DCIP-2023-B6-042",
    fullName: "Arjun Krishnan",
    photoUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500&auto=format&fit=crop",
    batchNumber: "Batch 6 (2023)",
    internshipProgramme: "District Collector’s Internship Programme",
    internshipType: "Public Administration Internship (Non-Stipendiary)",
    districtName: "District Administration Malappuram",
    departmentWorked: "District Planning Office",
    projectAreas: ["Decentralized Planning", "Data Analysis", "Field Survey"],
    duration: "4 Months",
    startDate: "01 June 2023",
    endDate: "30 September 2023",
    issueDate: "15 October 2023",
    certificateStatus: "Verified",
    verificationHash: "8f4b2e9a-7c1d-4b5a-9e8f-2a3b4c5d6e7f",
    certificateSerialNumber: "0042"
  },
  {
    certificateId: "DCIP-2024-B7-011",
    fullName: "Fathima R.",
    photoUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=500&auto=format&fit=crop",
    batchNumber: "Batch 7 (2024)",
    internshipProgramme: "District Collector’s Internship Programme",
    internshipType: "Public Administration Internship (Non-Stipendiary)",
    districtName: "District Administration Malappuram",
    departmentWorked: "Women & Child Development",
    projectAreas: ["Anganwadi Audit", "Nutritional Survey", "Scheme Implementation"],
    duration: "4 Months",
    startDate: "01 January 2024",
    endDate: "30 April 2024",
    issueDate: "02 May 2024",
    certificateStatus: "Verified",
    verificationHash: "a1b2c3d4-e5f6-7890-1234-567890abcdef",
    certificateSerialNumber: "0011"
  },
  {
    certificateId: "DCIP-2022-B4-088",
    fullName: "Rahul Vijay",
    photoUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=500&auto=format&fit=crop",
    batchNumber: "Batch 4 (2022)",
    internshipProgramme: "District Collector’s Internship Programme",
    internshipType: "Public Administration Internship (Non-Stipendiary)",
    districtName: "District Administration Malappuram",
    departmentWorked: "National Informatics Centre (NIC)",
    projectAreas: ["E-Office Migration", "Network Troubleshooting", "Digital Literacy"],
    duration: "3 Months",
    startDate: "01 August 2022",
    endDate: "30 November 2022",
    issueDate: "10 December 2022",
    certificateStatus: "Verified",
    verificationHash: "beef-dead-cafe-babe-0000-1111-2222",
    certificateSerialNumber: "0088"
  }
];

export function getCertificate(id: string): Certificate | undefined {
  return CERTIFICATES.find(cert => cert.certificateId === id);
}
