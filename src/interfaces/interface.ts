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
  id: string;
  title: string;
  link?: string;
}

export interface IEducation {
  id: string;
  title: string;
  years?: string;
}

export interface IExperience {
  id: string;
  title: string;
  content: string;
  technologies?: string;
}

export interface ISkill {
  id: string;
  title: string;
  content: string;
}

export interface IProject {
  id: string;
  title: string;
  link?: string;
  content: string;
}

