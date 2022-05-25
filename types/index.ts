export interface Job {
  type: string;
  title: string;
  company: string;
  place: string;
  timespan: string;
}

export interface Technology {
  title: string;
  items: TechnologyItem[];
}

export interface TechnologyItem {
  name: string;
  image: string;
  description: string;
}
