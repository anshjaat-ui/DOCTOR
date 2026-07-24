import { Course, Testimonial, Faculty, CampusFacility } from "../types";

export const COLLEGE_INFO = {
  name: "AIIMS Care College",
  tagline: "Excellence in Medical Science, Compassionate Patient Care & Innovation",
  shortName: "AIIMS Care",
  established: 2008,
  accreditation: "NAAC A++ Grade | Approved by NMC & DCI | NIRF Top 10 Medical Institute",
  address: "AIIMS Medical Enclave, Sector 18, Healthcare Knowledge Park, New Delhi - 110029",
  emergencyHelpline: "+91 11 2658 8888",
  admissionsHotline: "+91 1800 11 2026",
  email: "admissions@aiimscare.edu.in",
  hospitalBeds: "1,200+ Bed Multi-Specialty Tertiary Care Hospital",
  campusSize: "150 Acres Eco-Friendly Campus",
  stats: [
    { label: "NAAC Grade", value: "A++", subtext: "Highest Accreditation" },
    { label: "Hospital Beds", value: "1,200+", subtext: "Super-Specialty Wing" },
    { label: "Placement Rate", value: "98.6%", subtext: "Top Hospitals & Global Residency" },
    { label: "Research Papers", value: "2,500+", subtext: "Published in International Journals" },
    { label: "Alumni Doctors", value: "12,000+", subtext: "Serving Worldwide" },
  ]
};

export const COURSES_DATA: Course[] = [
  {
    id: "mbbs",
    name: "MBBS (Bachelor of Medicine & Bachelor of Surgery)",
    shortCode: "MBBS",
    category: "Undergraduate",
    degree: "Degree (UG)",
    duration: "5.5 Years (4.5 Yrs Academic + 1 Yr Compulsory Rotating Internship)",
    feesPerYear: "₹1,35,000",
    totalFees: "₹7,42,500",
    eligibility: "10+2 with Physics, Chemistry, Biology & English (Min 60% aggregate) + Valid NEET UG Score",
    neetRequired: true,
    minNeetScore: "560+ (General Cutoff)",
    seats: 120,
    seatsAvailable: 18,
    badge: "Most Popular",
    description: "Premier medical degree providing rigorous clinical training, anatomy dissections, bedside clinical rotations, surgical exposure, and diagnostic skills at AIIMS Care 1200-bed hospital.",
    keyHighlights: [
      "1,000+ hours of bedside clinical rotations in Cardiology, Trauma, ICU & Surgery",
      "State-of-the-art Robotic Surgery Simulation & High-Fidelity Cadaveric Dissection Lab",
      "USMLE & PLAB preparatory mentoring integrated with standard curriculum",
      "Compulsory 12-month paid stipend internship at AIIMS Care Multi-Specialty Hospital"
    ],
    careerOpportunities: [
      "Resident Medical Officer / Surgeon at top government and private hospitals",
      "Eligible for NEET-PG, INI-CET, USMLE (USA), PLAB (UK), and AMC (Australia)",
      "Clinical Research Fellow & Healthcare Administrator"
    ],
    department: "Department of Clinical Medicine & Surgery",
    hospitalRotations: "Cardiology, Neurology, Emergency Trauma, General Surgery, Pediatrics, OBGYN"
  },
  {
    id: "bds",
    name: "BDS (Bachelor of Dental Surgery)",
    shortCode: "BDS",
    category: "Undergraduate",
    degree: "Degree (UG)",
    duration: "5 Years (4 Yrs Academic + 1 Yr Rotational Internship)",
    feesPerYear: "₹95,000",
    totalFees: "₹4,75,000",
    eligibility: "10+2 with Physics, Chemistry, Biology (Min 55% aggregate) + Valid NEET UG Score",
    neetRequired: true,
    minNeetScore: "440+ (General Cutoff)",
    seats: 60,
    seatsAvailable: 12,
    badge: "High Demand",
    description: "Advanced dental medicine program training surgeons in oral maxillofacial procedures, CAD/CAM prosthodontics, cosmetic dentistry, and dental implantology.",
    keyHighlights: [
      "Dedicated 50-Chair Dental Hospital OPD with digital intraoral scanners",
      "Hands-on CAD/CAM crown & bridge fabrication and 3D dental imaging",
      "Specialized rotatory modules in Oral & Maxillofacial Trauma Surgery",
      "Complete clinical practice management and clinic setup guidance"
    ],
    careerOpportunities: [
      "Consultant Dental Surgeon, Implantologist & Orthodontist",
      "MDS Specialization in Oral Surgery, Endodontics, Orthodontics",
      "Private Dental Clinic Entrepreneur & Hospital Consultant"
    ],
    department: "Department of Dental Sciences & Maxillofacial Surgery",
    hospitalRotations: "Oral Surgery, Conservative Dentistry, Periodontics, Pedodontics"
  },
  {
    id: "bsc-nursing",
    name: "B.Sc Nursing (Honours)",
    shortCode: "B.Sc Nursing",
    category: "Undergraduate",
    degree: "Degree (UG)",
    duration: "4 Years (8 Semesters including Clinical Rotations)",
    feesPerYear: "₹65,000",
    totalFees: "₹2,60,000",
    eligibility: "10+2 with PCB & English (Min 50% marks). Open to both female & male candidates.",
    neetRequired: false,
    minNeetScore: "AIIMS Entrance / NEET score preferred",
    seats: 100,
    seatsAvailable: 24,
    badge: "100% Placement",
    description: "Comprehensive professional nursing education focusing on critical patient care, ICU monitoring, neonatal nursing, operating room assistance, and healthcare ethics.",
    keyHighlights: [
      "100% placement assurance in leading multi-specialty hospital chains",
      "Simulation lab equipped with METI adult and pediatric patient simulators",
      "Clinical exposure across Critical Care Units, NICU, Dialysis & Operation Theatres",
      "International NCLEX-RN orientation for UK, USA, and Gulf nursing licensure"
    ],
    careerOpportunities: [
      "Critical Care Nursing Specialist, Nurse Practitioner, ICU In-charge",
      "M.Sc Nursing & Hospital Administration Specialist",
      "Overseas Nursing Officer (USA, UK, Canada, Australia, UAE)"
    ],
    department: "College of Nursing & Patient Care",
    hospitalRotations: "Medical ICU, Surgical ICU, NICU, Cardiac Care Unit, Emergency Ward"
  },
  {
    id: "bpharm",
    name: "B.Pharm (Bachelor of Pharmacy)",
    shortCode: "B.Pharm",
    category: "Undergraduate",
    degree: "Degree (UG)",
    duration: "4 Years (8 Semesters)",
    feesPerYear: "₹75,000",
    totalFees: "₹3,00,000",
    eligibility: "10+2 with Physics, Chemistry, Biology or Mathematics (Min 50% aggregate)",
    neetRequired: false,
    minNeetScore: "Merit Based / State Entrance",
    seats: 80,
    seatsAvailable: 15,
    badge: "Industry Linked",
    description: "Industry-aligned pharmaceutical science degree covering drug formulation, medicinal chemistry, clinical pharmacology, regulatory affairs, and quality assurance.",
    keyHighlights: [
      "PCI (Pharmacy Council of India) Approved Curriculum",
      "HPLC, Gas Chromatography, and Automated Tablet Compression Pilot Plant",
      "Industrial tie-ups with Top Pharma MNCs for 2-month summer internships",
      "Drug Discovery & Clinical Trial Data Management certification modules"
    ],
    careerOpportunities: [
      "Quality Assurance / Quality Control Officer in Pharma MNCs",
      "Clinical Research Associate (CRA) & Drug Inspector",
      "Pharm.D (PB), M.Pharm, or Regulatory Affairs Manager"
    ],
    department: "School of Pharmaceutical Sciences",
    hospitalRotations: "AIIMS Care Central Pharmacy, Clinical Pharmacology Research Wing"
  },
  {
    id: "pharm-d",
    name: "Pharm.D (Doctor of Pharmacy)",
    shortCode: "Pharm.D",
    category: "Undergraduate",
    degree: "Doctoral (UG+PG)",
    duration: "6 Years (5 Years Academic + 1 Year Clinical Residency)",
    feesPerYear: "₹1,15,000",
    totalFees: "₹6,90,000",
    eligibility: "10+2 PCB or PCM (Min 55%) or B.Pharm Graduate for Post-Baccalaureate",
    neetRequired: false,
    minNeetScore: "Merit / College Interview",
    seats: 30,
    seatsAvailable: 6,
    badge: "Doctoral Degree",
    description: "Clinical doctorate focusing on hospital ward rounds, prescription auditing, therapeutic drug monitoring, patient counseling, and clinical trial management.",
    keyHighlights: [
      "Doctoral designation (Dr.) upon graduation",
      "Daily physician ward rounds and patient medication chart review",
      "Adverse Drug Reaction (ADR) Monitoring Center recognized by IPC",
      "Direct pathway for clinical research careers in North America & Europe"
    ],
    careerOpportunities: [
      "Clinical Pharmacist in Super-Specialty Hospitals",
      "Medical Advisor & Medical Science Liaison (MSL) in Pharma",
      "Clinical Pharmacovigilance Specialist"
    ],
    department: "Department of Pharmacy Practice",
    hospitalRotations: "Oncology Ward, Nephrology Unit, Intensive Care Units, Pharmacovigilance Wing"
  },
  {
    id: "bsc-radiology",
    name: "B.Sc Medical Radiology & Imaging Technology",
    shortCode: "B.Sc Radiology",
    category: "Diploma & Allied",
    degree: "Degree (Allied Health)",
    duration: "3 Years + 1 Year Internship",
    feesPerYear: "₹55,000",
    totalFees: "₹2,20,000",
    eligibility: "10+2 with PCB (Min 50% aggregate)",
    neetRequired: false,
    minNeetScore: "Merit / Entrance",
    seats: 50,
    seatsAvailable: 10,
    badge: "High Tech",
    description: "Specialized allied medical program training diagnostic technologists in 3T MRI, 128-Slice CT Scan, Digital X-Ray, Mammography, and Nuclear Medicine.",
    keyHighlights: [
      "Hands-on training on 3T Digital MRI & 128-Slice Spiral CT Scanners",
      "AERB Radiation Safety certification training integrated",
      "Direct internship at AIIMS Care Advanced Radio-Diagnosis Center"
    ],
    careerOpportunities: [
      "Chief Radiology & MRI Technologist at Diagnostic Centers",
      "Application Specialist for Siemens, GE Healthcare, Philips",
      "Radiation Safety Officer (RSO)"
    ],
    department: "Department of Radio-Diagnosis & Imaging Sciences",
    hospitalRotations: "3T MRI Suite, CT Scan Bay, Cath Lab, Ultrasonography Wing"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Dr. Ananya Sharma",
    role: "Resident Surgeon (General Surgery)",
    course: "MBBS (Batch 2019-2024)",
    batch: "Rank 14 INI-CET 2025",
    hospital: "AIIMS New Delhi",
    avatar: "https://images.unsplash.com/photo-1594824813566-88855ce7894a?auto=format&fit=crop&q=80&w=250",
    quote: "The clinical exposure at AIIMS Care College is unmatched. From 2nd year onwards, we were in the trauma OT observing complex surgeries. The faculty mentored me step-by-step for my INI-CET exam.",
    rating: 5,
    achievement: "Secured All India Rank 14 in INI-CET PG Exam"
  },
  {
    id: "2",
    name: "Dr. Rohan Verma",
    role: "Consultant Dental Surgeon & Implantologist",
    course: "BDS (Batch 2018-2023)",
    batch: "Founder - Dental Care Studio",
    hospital: "Care Dental Clinic, Gurgaon",
    avatar: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=250",
    quote: "AIIMS Care BDS program provided us with 3D CAD/CAM dental technology and real patient flow. I started my own successful cosmetic dental clinic within 1 year of graduation.",
    rating: 5,
    achievement: "Best Young Dental Surgeon Award 2025"
  },
  {
    id: "3",
    name: "Priya S. Nair",
    role: "Senior ICU Nurse Practitioner",
    course: "B.Sc Nursing (Batch 2020-2024)",
    batch: "NCLEX-RN Qualified",
    hospital: "Apollo Hospitals & NHS UK Candidate",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=250",
    quote: "The simulation lab with patient mannequins made me extremely confident during emergency cardiac arrests. I received 3 job offers before my final semester result was declared!",
    rating: 5,
    achievement: "Cleared US NCLEX-RN in 1st attempt"
  },
  {
    id: "4",
    name: "Siddharth Malhotra",
    role: "Clinical Pharmacovigilance Scientist",
    course: "Pharm.D (Batch 2019-2025)",
    batch: "Lead Researcher",
    hospital: "Novartis Clinical Research",
    avatar: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=250",
    quote: "The hospital ward rotations during Pharm.D gave me real insight into drug interactions and patient safety. AIIMS Care gave me a launchpad into multinational pharma research.",
    rating: 5,
    achievement: "Published 4 research papers in PubMed indexed journals"
  }
];

export const FACULTY_MEMBERS: Faculty[] = [
  {
    id: "1",
    name: "Prof. (Dr.) V. K. Deshmukh",
    designation: "Dean & Director, Academic Affairs",
    department: "Cardiothoracic & Vascular Surgery",
    qualification: "MBBS, MS (Surgery), M.Ch (CTVS), FACS",
    experienceYears: 28,
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=300",
    specialty: "Aortic Valve Replacement & Minimally Invasive Bypass",
    researchPapers: 120
  },
  {
    id: "2",
    name: "Dr. Meenakshi Sundaram",
    designation: "Head of Department & Professor",
    department: "Anatomy & Neurobiology",
    qualification: "MBBS, MD (Anatomy), Ph.D",
    experienceYears: 22,
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300",
    specialty: "Clinical Neuroanatomy & Virtual Cadaveric Simulation",
    researchPapers: 85
  },
  {
    id: "3",
    name: "Dr. Rajesh K. Grover",
    designation: "Professor & Chief Surgeon",
    department: "Maxillofacial & Dental Surgery",
    qualification: "BDS, MDS (Oral & Maxillofacial Surgery), FDSRCS (UK)",
    experienceYears: 19,
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&q=80&w=300",
    specialty: "Facial Trauma Reconstruction & Orthognathic Surgery",
    researchPapers: 64
  },
  {
    id: "4",
    name: "Prof. Shalini Kapoor",
    designation: "Principal & Professor",
    department: "College of Nursing Sciences",
    qualification: "M.Sc Nursing (Critical Care), Ph.D (Nursing Science)",
    experienceYears: 24,
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=300",
    specialty: "Emergency Triage & Cardiovascular Nursing",
    researchPapers: 42
  }
];

export const CAMPUS_FACILITIES: CampusFacility[] = [
  {
    id: "1",
    title: "1,200 Bed Super-Specialty Hospital Wing",
    category: "Clinical Infrastructure",
    description: "Fully functional tertiary hospital with 24/7 Level-1 Trauma Center, 16 Modular Operation Theatres, Robotic Surgery Unit, and Cath Lab.",
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&q=80&w=600",
    stats: "24/7 Emergency & ICU"
  },
  {
    id: "2",
    title: "High-Fidelity Medical Simulation Center",
    category: "Academic Tech",
    description: "Advanced simulation room equipped with computerized patient simulators, VR cadaver dissection tables, and laparoscopic training rigs.",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=600",
    stats: "VR Cadaveric Table"
  },
  {
    id: "3",
    title: "Central Digital Health Library",
    category: "Learning Resources",
    description: "24/7 air-conditioned library with 45,000+ medical books, direct access to PubMed, Scopus, ScienceDirect, and quiet study pods.",
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=600",
    stats: "100,000+ E-Journals"
  },
  {
    id: "4",
    title: "Residential Hostels & Sports Complex",
    category: "Student Life",
    description: "Air-conditioned single/twin sharing rooms, high-speed Wi-Fi, organic mess dining, gym, basketball courts, and 24/7 security.",
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80&w=600",
    stats: "In-Campus Accommodation"
  }
];

export const FAQS = [
  {
    question: "Is NEET UG mandatory for admission to MBBS and BDS at AIIMS Care College?",
    answer: "Yes, as per NMC and DCI guidelines, qualifying NEET-UG is mandatory for admission into MBBS and BDS courses. Admissions are conducted through MCC online counselling as well as state quota rounds."
  },
  {
    question: "Are B.Sc Nursing and B.Pharm admissions open without NEET?",
    answer: "Yes! While NEET score holders receive merit preference, candidates who have secured 50%+ in 10+2 with Physics, Chemistry, Biology/Mathematics can apply directly through AIIMS Care Institutional Merit Entrance Test."
  },
  {
    question: "Does the college offer hostel facilities and mess?",
    answer: "Yes, we have separate air-conditioned and non-AC residential hostels for male and female students with 24/7 security, Wi-Fi, study lounges, and hygienic multi-cuisine mess facilities."
  },
  {
    question: "How does the AI Career Guidance tool work?",
    answer: "Our AI Career Guidance uses Gemini 3.6 Flash AI model trained on NMC cutoffs, medical specialization career pathways, and academic performance data. By analyzing your NEET score, 10+2 marks, and clinical interests, it delivers personalized recommendations and strategic prep roadmaps."
  },
  {
    question: "What is the fee structure payment schedule and scholarship options?",
    answer: "Tuition fees can be paid annually or per semester. We offer Merit-cum-Means Scholarships covering up to 50% tuition fees for top entrance scorers and economically underprivileged candidates."
  }
];
