export interface Job {
  title: string;
  company: string;
  companyUrl?: string;
  period: string;
  achievements: string[];
}

export interface Translation {
  name: string;
  title: string;
  summary: string;
  interests: string;
  experience: string;
  education: string;
  skills: string;
  certifications: string;
  about: string;
  seeMore: string;
  jobs: Job[];
} 