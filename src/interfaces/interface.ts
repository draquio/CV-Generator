export interface ICVData {
  name: string;
  title: string;
  contact: IContact;
  experience: IExperience[];
  education: IEducation[];
  skill: ISkill[];
  project: IProject[];
  profile: string;
}
export interface IContact {
  email: string;
  number: string;
  city: string;
  web: IWeb[];
}

export interface IWeb{
  title: string;
  link?: string;
}

export interface IEducation {
  title: string;
  years?: string;
}

export interface IExperience {
  title: string;
  content: string;
  technologies?: string;
}

export interface ISkill {
  title: string;
  content: string;
}

export interface IProject {
  title: string;
  link?: string;
  content: string;
}
