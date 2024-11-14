import { useCvStore } from "@/hooks/useCvStore";
import { ISkill } from "@/interfaces/interface";
import { useState } from "react";
import { DeleteIcon, PlusIcon } from "../common/Icons";

const SkillComponent = () => {
  const { cvData, updateSkill, setCvData } = useCvStore();
  const [localSkill, setLocalSkill] = useState<ISkill[]>(cvData.skill);

  const addSkill = () => {
    const newSkill: ISkill = {
      title: "Nueva habilidad",
      content: "Descripción de la habilidad",
    };
    const updatedLocalSkills = [...localSkill, newSkill];
    setLocalSkill(updatedLocalSkills);
    setCvData({ skill: updatedLocalSkills });
  };
  const removeSkill = (index: number) => {
    const updatedLocalSkill = [...localSkill];
    updatedLocalSkill.splice(index, 1);
    setLocalSkill(updatedLocalSkill);
    setCvData({ skill: updatedLocalSkill });
  };
  const handleUpdate = (index: number, field: keyof ISkill, value: string) => {
    updateSkill(index, field, value);
    const updatedSkill = [...localSkill];
    updatedSkill[index][field] = value;
    setLocalSkill(updatedSkill);
  };

  return (
    <div className="relative">
      <h3
        className={`font-bold ${
          localSkill.length > 0 ? "text-cumstonBlue" : "text-gray-300"
        }`}
      >
        HABILIDADES
      </h3>

      <ul className="list-disc pl-6 space-y-[2px]">
        {localSkill.map((skill, index) => (
          <li key={index}>
            <div className="flex">
              <div
                contentEditable
                suppressContentEditableWarning
                className="font-bold bg-customGray"
                onBlur={(e) =>
                  handleUpdate(index, "title", e.currentTarget.innerText)
                }
              >
                {skill.title}
              </div>
              <b className="mr-[2px]">:</b>
              <div
              className="bg-customGray"
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) =>
                  handleUpdate(index, "content", e.currentTarget.innerText)
                }
              >
                {skill.content}
              </div>
              <button
                className="absolute -left-8 bg-customRed text-white p-1 rounded-md text-sm"
                onClick={() => removeSkill(index)}
              >
                <span>
                  <DeleteIcon />
                </span>
              </button>
            </div>
          </li>
        ))}
      </ul>
      <button
        className="absolute top-0 -left-8 bg-customGreen text-white p-1 text-sm rounded-md"
        onClick={addSkill}
      >
        <PlusIcon />
      </button>
    </div>
  );
};

export { SkillComponent };
