export interface Profile {
  name: string;
  title: string;
  tagline: string;
  location: string;
  graduationYear: string;
  targetRoles: string[];
  email: string;
  phone?: string;
  github: string;
  linkedin: string;
  leetcode?: string;
  resume?: string;
  available: boolean;
}

export interface Skill {
  name: string;
  category: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  category: "AI/ML" | "Backend/Cloud" | "Full Stack";
  links: {
    live?: string;
    github: string;
    caseStudy?: string;
  };
  keyFeatures: string[];
  architecture?: string;
}

export interface BuildLog {
  date: string;
  title: string;
  description: string;
  category: "Development" | "Learning" | "Deployment" | "Problem Solving";
}

export interface DSAStats {
  leetCode: {
    solved: number;
    profile: string;
  };
  geeksForGeeks: {
    status: string;
    profile?: string;
    focus: string[];
  };
  coreTopics: string[];
}

export interface Achievement {
  title: string;
  issuer: string;
  date: string;
  link?: string;
  type: "Certification" | "Hackathon" | "Open Source" | "Academic";
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}
