import { useCvStore } from "@/hooks/useCvStore";
import { IProject } from "@/interfaces/interface";
import React, { useState } from "react";
import { DeleteIcon, PlusIcon } from "../common/Icons";

const ProjectComponent = () => {
  const { cvData, setCvData, updateProject } = useCvStore();
  const [localProjects, setLocalProjects] = useState<IProject[]>(
    cvData.project
  );

  const addProject = () => {
    const newProject: IProject = {
      title: "Nuevo proyecto",
      content: "Descripción del proyecto",
      link: "URL (opcional)",
    };
    const updatedLocalProjects = [...localProjects, newProject];
    setLocalProjects(updatedLocalProjects);
    setCvData({ project: updatedLocalProjects });
  };
  const removeProject = (index: number) => {
    const updatedLocalProjects = [...localProjects];
    updatedLocalProjects.splice(index, 1);
    setLocalProjects(updatedLocalProjects);
    setCvData({ project: updatedLocalProjects });
  };
  const handleUpdate = (
    index: number,
    field: keyof IProject,
    value: string
  ) => {
    updateProject(index, field, value);
    const updatedProjects = [...localProjects];
    updatedProjects[index][field] = value;
    setLocalProjects(updatedProjects);
  };

  return (
    <div className="relative">
      <h3
        className={`font-bold ${
          localProjects.length > 0 ? "text-cumstonBlue" : "text-gray-300"
        }`}
      >
        PROYECTOS
      </h3>
      {localProjects.map((project, index) => (
        <div key={index} className="flex flex-col items-start relative gap-y-[2px]">
          <div className="flex gap-x-2">
            <div
              contentEditable
              suppressContentEditableWarning
              className="font-bold bg-customGray"
              onBlur={(e) =>
                handleUpdate(index, "title", e.currentTarget.innerText)
              }
            >
              {project.title}
            </div>

            {project.link && (
              <div
                contentEditable
                suppressContentEditableWarning
                className=" bg-customGray px-1"
                onBlur={(e) =>
                  handleUpdate(index, "link", e.currentTarget.innerText)
                }
              >
                {project.link}
              </div>
            )}
          </div>
          <div
            className="mb-2 bg-customGray"
            contentEditable
            suppressContentEditableWarning
            onBlur={(e) =>
              handleUpdate(index, "content", e.currentTarget.innerText)
            }
          >
            {project.content}
          </div>

          <button
            className="absolute -left-8 bg-customRed text-white p-1 rounded-md text-sm"
            onClick={() => removeProject(index)}
          >
            <span>
              <DeleteIcon />
            </span>
          </button>
        </div>
      ))}

      <button
        className="absolute top-0 -left-8 bg-customGreen text-white p-1 text-sm rounded-md"
        onClick={addProject}
      >
        <PlusIcon />
      </button>
    </div>
  );
};

export { ProjectComponent };
