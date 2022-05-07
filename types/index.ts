export interface Education {
  name: string;
  info: string;
  institution: string;
  place: string;
  timespan: string;
}

export interface Job {
  type: string;
  title: string;
  company: string;
  place: string;
  timespan: string;
}

export interface Technology {
  title: string;
  items: {
    name: string;
    image: string;
  }[];
}
