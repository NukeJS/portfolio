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
  company: {
    name: string;
    url: string | null;
  };
  place: string;
  timespan: string;
}

export interface Technology {
  name: string;
  url: string;
  image: string;
}
