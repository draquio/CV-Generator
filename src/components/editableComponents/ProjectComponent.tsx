import { useCvStore } from "@/hooks/useCvStore";
import { IProject } from "@/interfaces/interface";
import React, { useState } from "react";
import { DeleteIcon, PlusIcon, MoveIcon } from "../common/Icons";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "@hello-pangea/dnd";

const ProjectComponent = () => {
  const { cvData, setCvData, updateProject } = useCvStore();
  const [localProjects, setLocalProjects] = useState<IProject[]>(
    cvData.project
  );

  const addProject = () => {
    const newProject: IProject = {
      id: crypto.randomUUID(),
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
  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return;
    const reordered = Array.from(localProjects);
    const [moved] = reordered.splice(result.source.index, 1);
    reordered.splice(result.destination.index, 0, moved);
    setLocalProjects(reordered);
    setCvData({ project: reordered });
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
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="project">
          {(provided) => (
            <ul
              ref={provided.innerRef}
              {...provided.droppableProps}
              className="space-y-[2px] outline-customColor"
            >
              {localProjects.map((project, index) => (
                <Draggable
                  key={project.id}
                  draggableId={project.id}
                  index={index}
                >
                  {(provided, snapshot) => (
                    <li
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      className={`relative transition-opacity duration-100 ${
                        snapshot.isDragging ? "opacity-30" : "opacity-100"
                      }`}
                    >
                      <div className="flex gap-x-2">
                        <div
                          contentEditable
                          suppressContentEditableWarning
                          className="font-bold bg-customGray"
                          onBlur={(e) =>
                            handleUpdate(
                              index,
                              "title",
                              e.currentTarget.innerText
                            )
                          }
                        >
                          {project.title}
                        </div>
                        {project.link && (
                          <div
                            contentEditable
                            suppressContentEditableWarning
                            className="bg-customGray px-1"
                            onBlur={(e) =>
                              handleUpdate(
                                index,
                                "link",
                                e.currentTarget.innerText
                              )
                            }
                          >
                            {project.link}
                          </div>
                        )}
                      </div>

                      <div
                        contentEditable
                        suppressContentEditableWarning
                        className="mb-2 bg-customGray"
                        onBlur={(e) =>
                          handleUpdate(
                            index,
                            "content",
                            e.currentTarget.innerText
                          )
                        }
                      >
                        {project.content}
                      </div>
                      <span
                        {...provided.dragHandleProps}
                        className="absolute -left-8 top-0 p-1 cursor-grab bg-customOrange text-white rounded-md text-sm"
                      >
                        <MoveIcon />
                      </span>
                      <button
                        className="absolute -left-14 top-0 bg-customRed text-white p-1 rounded-md text-sm"
                        onClick={() => removeProject(index)}
                      >
                        <DeleteIcon />
                      </button>
                    </li>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
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
