import { create } from "zustand";
import { cvDataLocal } from "@/data/Data";
import { createJSONStorage, persist } from "zustand/middleware";
import {
  IContact,
  ICVData,
  IEducation,
  IExperience,
  IProject,
  ISkill,
  IWeb,
} from "@/interfaces/interface";

interface CvStore {
  cvData: ICVData;
  setCvData: (cvData: Partial<ICVData>) => void;
  updateField: (field: keyof ICVData, value: string) => void;
  updateExperience: (
    index: number,
    field: keyof IExperience,
    value: string
  ) => void;
  updateEducation: (
    index: number,
    field: keyof IEducation,
    value: string
  ) => void;
  updateContact: (field: keyof IContact, value: string) => void;
  updateSkill: (index: number, field: keyof ISkill, value: string) => void;
  updateProject: (index: number, field: keyof IProject, value: string) => void;
  updateWeb: (index: number, field: keyof IWeb, value: string) => void;
  resetCvData: () => void;

  setExperience: (experience: IExperience[]) => void;
  setEducation: (education: IEducation[]) => void;
  setSkill: (skill: ISkill[]) => void;
  setProject: (project: IProject[]) => void;

  hasHydrated: boolean;
  setHasHydrated: (value: boolean) => void;
}

export const useCvStore = create<CvStore>()(
  persist(
    (set) => ({
      cvData: cvDataLocal,
      hasHydrated: false,
      setHasHydrated: (value: boolean) => set({ hasHydrated: value }),

      setCvData: (newData) =>
        set((state) => ({ cvData: { ...state.cvData, ...newData } })),
      updateField: (field, value) =>
        set((state) => ({ cvData: { ...state.cvData, [field]: value } })),
      updateContact: (field, value) =>
        set((state) => ({
          cvData: {
            ...state.cvData,
            contact: { ...state.cvData.contact, [field]: value },
          },
        })),
      updateExperience: (index, field, value) =>
        set((state) => {
          const updatedExperience = [...state.cvData.experience];
          updatedExperience[index][field] = value;
          return { cvData: { ...state.cvData, experience: updatedExperience } };
        }),
      updateEducation: (index, field, value) =>
        set((state) => {
          const updatedEducation = [...state.cvData.education];
          updatedEducation[index][field] = value;
          return { cvData: { ...state.cvData, education: updatedEducation } };
        }),
      updateSkill: (index, field, value) =>
        set((state) => {
          const updatedSkills = [...state.cvData.skill];
          updatedSkills[index][field] = value;
          return { cvData: { ...state.cvData, skill: updatedSkills } };
        }),
      updateProject: (index, field, value) =>
        set((state) => {
          const updatedProjects = [...state.cvData.project];
          updatedProjects[index][field] = value;
          return { cvData: { ...state.cvData, project: updatedProjects } };
        }),
      updateWeb: (index, field, value) =>
        set((state) => {
          const updatedWeb = [...state.cvData.contact.web];
          updatedWeb[index][field] = value;
          return {
            cvData: {
              ...state.cvData,
              contact: { ...state.cvData.contact, web: updatedWeb },
            },
          };
        }),
      setExperience: (experience: IExperience[]) =>
        set((state) => ({ cvData: { ...state.cvData, experience } })),
      setEducation: (education: IEducation[]) =>
        set((state) => ({ cvData: { ...state.cvData, education } })),
      setSkill: (skill: ISkill[]) =>
        set((state) => ({ cvData: { ...state.cvData, skill } })),
      setProject: (project: IProject[]) =>
        set((state) => ({ cvData: { ...state.cvData, project } })),
      resetCvData: () => {
        localStorage.removeItem("cv-data");
        set(() => ({ cvData: cvDataLocal }));
      },
    }),
    {
      name: "cv-data",
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true);
      },
    }
  )
);
