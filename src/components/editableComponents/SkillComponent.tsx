import { useCvStore } from "@/hooks/useCvStore";
import { ISkill } from "@/interfaces/interface";
import { useState } from "react";
import { DeleteIcon, PlusIcon, MoveIcon } from "../common/Icons";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "@hello-pangea/dnd";

const SkillComponent = () => {
  const { cvData, updateSkill, setCvData } = useCvStore();
  const [localSkill, setLocalSkill] = useState<ISkill[]>(cvData.skill);

  const addSkill = () => {
    const newSkill: ISkill = {
      id: crypto.randomUUID(),
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
  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return;
    const reordered = Array.from(localSkill);
    const [moved] = reordered.splice(result.source.index, 1);
    reordered.splice(result.destination.index, 0, moved);
    setLocalSkill(reordered);
    setCvData({ skill: reordered });
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

      {/* <ul className="list-disc pl-6 space-y-[2px]">
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
      </ul> */}
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="skill">
          {(provided) => (
            <ul
              className="list-disc pl-6 space-y-[2px] outline-customColor"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {localSkill.map((skill, index) => (
                <Draggable key={skill.id} draggableId={skill.id} index={index}>
                  {(provided, snapshot) => (
                    <li
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      className={`relative transition-opacity duration-100 ${
                        snapshot.isDragging ? "opacity-30" : "opacity-100"
                      }`}
                    >
                      <div className="flex">
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
                          {skill.title}
                        </div>
                        <b className="mr-[2px]">:</b>
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
                          {skill.content}
                        </div>
                        <span
                          {...provided.dragHandleProps}
                          className="absolute -left-14 p-1 cursor-grab bg-customOrange text-white rounded-md text-sm"
                        >
                          <MoveIcon />
                        </span>
                        <button
                          className="absolute -left-20 bg-customRed text-white p-1 rounded-md text-sm"
                          onClick={() => removeSkill(index)}
                        >
                          <DeleteIcon />
                        </button>
                      </div>
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
        onClick={addSkill}
      >
        <PlusIcon />
      </button>
    </div>
  );
};

export { SkillComponent };
