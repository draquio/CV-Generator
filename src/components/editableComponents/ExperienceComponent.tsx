import { useCvStore } from "@/hooks/useCvStore";
import { IExperience } from "@/interfaces/interface";
import React from "react";
import { DeleteIcon, PlusIcon, MoveIcon } from "../common/Icons";

import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "@hello-pangea/dnd";

const ExperienceComponent = () => {
  const { cvData, setCvData } = useCvStore();
  const experience = cvData.experience;

  const addExperience = () => {
    const newExperience: IExperience = {
      id: crypto.randomUUID(),
      title: "Título de la experiencia que desea agregar",
      content: "Contenido de la experiencia que desea agregar ..",
      technologies: "Tecnologia 1, tecnologia 2, tecnologia 3 ..",
    };
    setCvData({ experience: [...experience, newExperience] });
  };

  const removeExperience = (index: number) => {
    const updated = [...experience];
    updated.splice(index, 1);
    setCvData({ experience: updated });
  };

  const handleUpdate = (
    index: number,
    field: keyof IExperience,
    value: string
  ) => {
    const updated = [...experience];
    updated[index][field] = value;
    setCvData({ experience: updated });
  };

  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return;
    const reordered = [...experience];
    const [moved] = reordered.splice(result.source.index, 1);
    reordered.splice(result.destination.index, 0, moved);
    setCvData({ experience: reordered });
  };
  return (
    <div className="relative">
      <h3
        className={`font-bold ${
          experience.length > 0 ? "text-cumstonBlue" : "text-gray-300"
        }`}
      >
        EXPERIENCIA PROFESIONAL
      </h3>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="experience">
          {(provided) => (
            <div className="outline-customColor" ref={provided.innerRef} {...provided.droppableProps}>
              {experience.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      className={`relative mb-1 transition-opacity duration-100 ${
                        snapshot.isDragging ? "opacity-30" : "opacity-100"
                      }`}
                    >
                      <div
                        contentEditable
                        suppressContentEditableWarning
                        onBlur={(e) =>
                          handleUpdate(
                            index,
                            "title",
                            e.currentTarget.innerText
                          )
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
                          handleUpdate(
                            index,
                            "content",
                            e.currentTarget.innerText
                          )
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
                            handleUpdate(
                              index,
                              "technologies",
                              e.currentTarget.innerText
                            )
                          }
                          className="italic text-gray-800 bg-customGray"
                        >
                          {item.technologies}
                        </div>

                        <button
                          className="absolute -left-14 top-0 bg-customRed text-white p-1 rounded-md text-sm"
                          onClick={() => removeExperience(index)}
                        >
                          <DeleteIcon />
                        </button>
                        <span
                          {...provided.dragHandleProps}
                          className="absolute top-0 -left-8 cursor-grab bg-customOrange text-white p-1 rounded-md text-sm"
                        >
                          <MoveIcon />
                        </span>
                      </div>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <button
        className="absolute top-0 -left-8 bg-customGreen text-white p-1 text-sm rounded-md"
        onClick={addExperience}
      >
        <PlusIcon />
      </button>
    </div>
  );
};

export { ExperienceComponent };
