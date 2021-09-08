export interface Project {
  id: number;
  name: string;
  url: string;
  external_url: string | null;
  description: string;
  language: string;
  stars: number;
}

export interface Skill {
  name: string;
  image: string;
}
