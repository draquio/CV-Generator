// import { useCvStore } from "@/hooks/useCvStore";
import { IWeb } from "@/interfaces/interface";
import { useState } from "react";
import { DeleteIcon } from "../common/Icons";

interface IProps {
  handleUpdate: (index: number, field: keyof IWeb, value: string) => void;
  removeWeb: (index: number) => void;
  web: IWeb;
  index: number;
}
const MenuWebComponent = (props: IProps) => {
  const { web, index, handleUpdate, removeWeb } = props;
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isHovering, setIsHovering] = useState<boolean>(false);

  const handleFocus = () => {
    setIsActive(true);
  };

  const handleBlur = () => {
    setTimeout(() => {
      if (!isHovering) {
        setIsActive(false);
      }
    }, 10);
  };

  const handleMouseEnter = (): void => {
    setIsHovering(true);
  };

  const handleMouseLeave = (): void => {
    setIsHovering(false);
    setTimeout(() => {
      if (!isHovering) {
        setIsActive(false);
      }
    }, 10);
  };
  return (
    <>
      <span>|</span>
      <span
        contentEditable
        suppressContentEditableWarning
        onFocus={handleFocus}
        onBlur={(e) => {
          handleUpdate(index, "title", e.currentTarget.innerText);
          handleBlur();
        }}
        className="mx-[6px] text-cumstonBlue border-b-cumstonBlue border-b bg-customGray"
      >
        {web.title}
      </span>
      {isActive && (
        <>
          <div
            className="absolute left-2 top-6 min-w-40 max-w-64 border border-borderGray overflow-hidden py-[1px] px-1 text-sm rounded-md bg-customGray"
            contentEditable
            suppressContentEditableWarning
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onBlur={(e) => {
              handleUpdate(index, "link", e.currentTarget.innerText);
              handleBlur();
            }}
          >
            {web.link}
          </div>
          <button
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="absolute -left-4 top-6 bg-customRed text-white p-1 text-sm rounded-md"
            onClick={() => removeWeb(index)}
          >
            <DeleteIcon />
          </button>
        </>
      )}
    </>
  );
};

export { MenuWebComponent };
