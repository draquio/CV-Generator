import { useCvStore } from "@/hooks/useCvStore";
import { IExperience } from "@/interfaces/interface";
import React, { useState } from "react";
import { DeleteIcon, PlusIcon } from "../common/Icons";

const ExperienceComponent = () => {
  const { cvData, updateExperience, setCvData } = useCvStore();
  const [localExperience, setLocalExperience] = useState<IExperience[]>(
    cvData.experience
  );

  const addExperience = () => {
    const newExperience: IExperience = {
      title: "Título de la experiencia que desea agregar",
      content: "Contenido de la experiencia que desea agregar ..",
      technologies: "Tecnologia 1, tecnologia 2, tecnologia 3 ..",
    };
    const updatedLocalExperience = [...localExperience, newExperience];
    setLocalExperience(updatedLocalExperience);
    setCvData({ experience: updatedLocalExperience });
  };

  const removeExperience = (index: number) => {
    const updatedLocalExperience = [...localExperience];
    updatedLocalExperience.splice(index, 1);
    setLocalExperience(updatedLocalExperience);
    setCvData({ experience: updatedLocalExperience });
  };

  const handleUpdate = (
    index: number,
    field: keyof IExperience,
    value: string
  ) => {
    updateExperience(index, field, value);
    const updatedExperience = [...localExperience];
    updatedExperience[index][field] = value;
    setLocalExperience(updatedExperience);
  };
  return (
    <div className="relative">
      <h3 className={`font-bold ${localExperience.length > 0 ? "text-cumstonBlue" : "text-gray-300"}`}>EXPERIENCIA PROFESIONAL</h3>
      {localExperience.map((item, index) => (
        <div key={index} className="relative mb-1">
          <div
            contentEditable
            suppressContentEditableWarning
            onBlur={(e) =>
              handleUpdate(index, "title", e.currentTarget.innerText)
            }
            className="font-semibold bg-customGray"
          >
            {item.title}
          </div>
          <div
            contentEditable
            suppressContentEditableWarning
            className="bg-customGray"
            onBlur={(e) =>
              handleUpdate(index, "content", e.currentTarget.innerText)
            }
          >
            {item.content}
          </div>
          <div className="flex items-center italic text-xs">
            <b className="mr-[2px]">Tecnologías:</b>
            <div
              contentEditable
              suppressContentEditableWarning
              onBlur={(e) =>
                handleUpdate(index, "technologies", e.currentTarget.innerText)
              }
              className="italic text-gray-800 bg-customGray"
            >
              {item.technologies}
            </div>
          </div>
          <button className="absolute -left-8 top-0 bg-customRed text-white p-1 rounded-md text-sm" onClick={() => removeExperience(index)}>
            <span>
              <DeleteIcon />
            </span>
          </button>
        </div>
      ))}
      <button className="absolute top-0 -left-8 bg-customGreen text-white p-1 text-sm rounded-md" onClick={addExperience}>
        <PlusIcon />
      </button>
    </div>
  );
};

export { ExperienceComponent };
