import { useCvStore } from "@/hooks/useCvStore";
import { IEducation } from "@/interfaces/interface";
import React, { useState } from "react";
import { DeleteIcon, PlusIcon, MoveIcon } from "../common/Icons";

import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
  DraggableProvided,
  DroppableProvided,
} from "@hello-pangea/dnd";

const EducationComponent = () => {
  const { cvData, updateEducation, setCvData } = useCvStore();
  const [localEducation, setLocalEducation] = useState<IEducation[]>(
    cvData.education
  );
  const addEducation = () => {
    const newEducation = {
      id: crypto.randomUUID(),
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

  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return;
    const items = Array.from(localEducation);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setLocalEducation(items);
    setCvData({ education: items });
  };

  return (
    <div className="relative ">
      <h3
        className={`font-bold ${
          localEducation.length > 0 ? "text-cumstonBlue" : "text-gray-300"
        }`}
      >
        FORMACIÓN ACADÉMICA
      </h3>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="education">
          {(provided: DroppableProvided) => (
            <ul
              ref={provided.innerRef}
              {...provided.droppableProps}
              className="list-disc pl-6 space-y-[2px] outline-customColor"
            >
              {localEducation.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided: DraggableProvided, snapshot): React.ReactNode => (
                    <li
                      ref={provided.innerRef}
                      {...provided.draggableProps} 
                      className={`relative transition-opacity duration-100 ${
                        snapshot.isDragging ? "opacity-50" : "opacity-100"
                      }`}
                    >
                      <span className="flex gap-x-1">
                        <div
                          contentEditable
                          suppressContentEditableWarning
                          className="bg-customGray"
                          onBlur={(e) =>
                            handleUpdate(
                              index,
                              "title",
                              e.currentTarget.innerText
                            )
                          }
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
                              "years",
                              e.currentTarget.innerText
                            )
                          }
                        >
                          {item.years}
                        </div>
                        <button
                          className="absolute -left-20 bg-customRed text-white p-1 rounded-md text-sm"
                          onClick={() => removeEducation(index)}
                        >
                          <DeleteIcon />
                        </button>
                        <span
                          {...provided.dragHandleProps}
                          className="absolute -left-14 cursor-grab bg-customOrange text-white p-1 rounded-md text-sm"
                        >
                          <MoveIcon />
                        </span>
                      </span>
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
        onClick={addEducation}
      >
        <PlusIcon />
      </button>
    </div>
  );
};

export { EducationComponent };
