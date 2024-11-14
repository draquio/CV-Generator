import { useCvStore } from "@/hooks/useCvStore";
import { IEducation } from "@/interfaces/interface";
import { useState } from "react";
import { DeleteIcon, PlusIcon } from "../common/Icons";

const EducationComponent = () => {
  const { cvData, updateEducation, setCvData } = useCvStore();
  const [localEducation, setLocalEducation] = useState<IEducation[]>(
    cvData.education
  );

  const addEducation = () => {
    const newEducation = {
      title: "Carrera, curso, certificación, etc.",
      years: "Desde - Hasta",
    };
    const updatedLocalEducation = [...localEducation, newEducation];
    setLocalEducation(updatedLocalEducation);
    setCvData({ education: updatedLocalEducation });
  };

  const removeEducation = (index: number) => {
    const updatedLocalEducation = [...localEducation];
    updatedLocalEducation.splice(index, 1);
    setLocalEducation(updatedLocalEducation);
    setCvData({ education: updatedLocalEducation });
  };

  const handleUpdate = (
    index: number,
    field: keyof IEducation,
    value: string
  ) => {
    updateEducation(index, field, value);
    const updatedEducation = [...localEducation];
    updatedEducation[index][field] = value;
    setLocalEducation(updatedEducation);
  };
  return (
    <div className="relative">
      <h3 className={`font-bold ${localEducation.length > 0 ? "text-cumstonBlue" : "text-gray-300"}`}>FORMACIÓN ACADÉMICA</h3>
      <ul className="list-disc pl-6 space-y-[2px]">
        {localEducation.map((item, index) => (
          <li key={index} className="relative">
            <span className="flex gap-x-1">
              <div
                contentEditable
                suppressContentEditableWarning
                className="bg-customGray"
                onBlur={(e) =>
                  handleUpdate(index, "title", e.currentTarget.innerText)
                }
              >
                {item.title}
              </div>
              <div
                contentEditable
                suppressContentEditableWarning
                className="bg-customGray"
                onBlur={(e) =>
                  handleUpdate(index, "years", e.currentTarget.innerText)
                }
              >
                {item.years}
              </div>
              <button
                className="absolute -left-14 bg-customRed text-white p-1 rounded-md text-sm"
                onClick={() => removeEducation(index)}
              >
                <span>
                  <DeleteIcon />
                </span>
              </button>
            </span>
          </li>
        ))}
      </ul>
      <button
        className="absolute top-0 -left-8 bg-customGreen text-white p-1 text-sm rounded-md"
        onClick={addEducation}
      >
        <PlusIcon />
      </button>
    </div>
  );
};

export { EducationComponent };
