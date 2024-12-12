export interface ProfileAPIResponse {
  image: string;
  user: User;
  stats: Stats;
}

export interface Stats {
  period: number;
  semester: number;
  average: number;
  totalCredits: number;
  approvedCredits: number;
  progress: number;
}

export interface User {
  id: number;
  name: string;
  carrer: string;
  email: string;
  location: string;
}
