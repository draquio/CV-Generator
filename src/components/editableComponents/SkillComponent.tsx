import { useCvStore } from "@/hooks/useCvStore";
import { ISkill } from "@/interfaces/interface";
import { DeleteIcon, PlusIcon, MoveIcon } from "../common/Icons";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "@hello-pangea/dnd";

const SkillComponent = () => {
  const { cvData, setCvData } = useCvStore();
  const skills = cvData.skill;

  const addSkill = () => {
    const newSkill: ISkill = {
      id: crypto.randomUUID(),
      title: "Nueva habilidad",
      content: "Descripción de la habilidad",
    };
    setCvData({ skill: [...skills, newSkill] });
  };
  const removeSkill = (index: number) => {
    const updated = [...skills];
    updated.splice(index, 1);
    setCvData({ skill: updated });
  };
  const handleUpdate = (index: number, field: keyof ISkill, value: string) => {
    const updated = [...skills];
    updated[index] = { ...updated[index], [field]: value };
    setCvData({ skill: updated });
  };
  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return;
    const reordered = [...skills];
    const [moved] = reordered.splice(result.source.index, 1);
    reordered.splice(result.destination.index, 0, moved);
    setCvData({ skill: reordered });
  };
  return (
    <div className="relative">
      <h3
        className={`font-bold ${
          skills.length > 0 ? "text-cumstonBlue" : "text-gray-300"
        }`}
      >
        HABILIDADES
      </h3>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="skill">
          {(provided) => (
            <ul
              className="list-disc pl-6 space-y-[2px] outline-customColor"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {skills.map((skill, index) => (
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
