import { EducationComponent } from "@/components/editableComponents/EducationComponent";
import { ExperienceComponent } from "@/components/editableComponents/ExperienceComponent";
import { MenuComponent } from "@/components/editableComponents/MenuComponent";
import { NameComponent } from "@/components/editableComponents/NameComponent";
import { ProfileComponent } from "@/components/editableComponents/ProfileComponent";
import { ProjectComponent } from "@/components/editableComponents/ProjectComponent";
import { SkillComponent } from "@/components/editableComponents/SkillComponent";
import { TitleComponent } from "@/components/editableComponents/TitleComponent";
const CreateCV = () => {
  return (
    <div className="bg-white w-[260mm] mx-auto rounded-xl shadow-lg py-10"
    >
    <div className="w-[210mm] min-h-[297mm] p-2 mx-auto flex flex-col gap-y-5 rounded-xl">
        <section className="text-center flex flex-col">
          <NameComponent />
          <TitleComponent />
          <hr className="border my-1"></hr>
          <MenuComponent />
        </section>
        <ProfileComponent />
        <EducationComponent />
        <ExperienceComponent />
        <SkillComponent />
        <ProjectComponent />
      </div>
    </div>
  );
};

export default CreateCV ;
