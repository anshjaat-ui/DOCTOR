export interface Course {
  id: string;
  name: string;
  shortCode: string;
  category: "Undergraduate" | "Postgraduate" | "Super-Specialty" | "Diploma & Allied";
  degree: string;
  duration: string;
  feesPerYear: string;
  totalFees: string;
  eligibility: string;
  neetRequired: boolean;
  minNeetScore: string;
  seats: number;
  seatsAvailable: number;
  badge?: string;
  description: string;
  keyHighlights: string[];
  careerOpportunities: string[];
  department: string;
  hospitalRotations: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  course: string;
  batch: string;
  hospital: string;
  avatar: string;
  quote: string;
  rating: number;
  achievement: string;
}

export interface Faculty {
  id: string;
  name: string;
  designation: string;
  department: string;
  qualification: string;
  experienceYears: number;
  image: string;
  specialty: string;
  researchPapers: number;
}

export interface CampusFacility {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  stats: string;
}

export interface AdmissionFormData {
  fullName: string;
  email: string;
  phone: string;
  dob: string;
  gender: string;
  category: string;
  course: string;
  pcbPercentage: string;
  neetRollNumber: string;
  neetScore: string;
  stateOfDomicile: string;
  guardianName: string;
  guardianPhone: string;
  address: string;
  hostelRequired: boolean;
}

export interface AIGuidanceInput {
  neetScore: string;
  pcbPercentage: string;
  interests: string;
  preferredStyle: string;
  careerGoal: string;
}

export interface AIGuidanceResult {
  recommendedCourse: string;
  matchConfidence: number;
  reasoning: string;
  alternativeCourses: {
    course: string;
    reason: string;
  }[];
  careerOutlook: string;
  neetCutoffAdvice: string;
  recommendedNextSteps: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}
