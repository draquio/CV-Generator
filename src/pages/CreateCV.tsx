import { Loader } from "@/components/common/Loader";
import { EducationComponent } from "@/components/editableComponents/EducationComponent";
import { ExperienceComponent } from "@/components/editableComponents/ExperienceComponent";
import { MenuComponent } from "@/components/editableComponents/MenuComponent";
import { NameComponent } from "@/components/editableComponents/NameComponent";
import { ProfileComponent } from "@/components/editableComponents/ProfileComponent";
import { ProjectComponent } from "@/components/editableComponents/ProjectComponent";
import { SkillComponent } from "@/components/editableComponents/SkillComponent";
import { TitleComponent } from "@/components/editableComponents/TitleComponent";
import { useCvStore } from "@/hooks/useCvStore";
import { toast } from "sonner";
const CreateCV = () => {
  const { resetCvData, hasHydrated } = useCvStore();

  return (
    <>
      <div className="flex py-4 justify-between">
        <h2 className="text-3xl text-[rgb(66_67_69)] mb-3 text-center">
          Editar contenido
        </h2>
        <button
          className="py-2 px-7 rounded uppercase inline-block align-middle bg-[#ff850c] text-white font-bold hover:opacity-80 duration-500 "
          onClick={() => {
            resetCvData();
            toast.success('CV reseteado con éxito')
          }}
        >
          Resetear CV
        </button>
      </div>
      <div className="bg-white mx-auto rounded-xl shadow-lg py-4">
        {!hasHydrated ? (
          <Loader />
        ) : (
          <div className="w-[210mm] mx-auto flex flex-col gap-y-5 rounded-xl">
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
        )} 
      </div>
    </>
  );
};

export default CreateCV;
