import { useCvStore } from "@/hooks/useCvStore";
import React from "react";

const TitleComponent = () => {
  const {cvData, updateField} = useCvStore()
  return (
    <h2
    className="text-xl font-bold bg-customGray mt-1"
      contentEditable
      suppressContentEditableWarning
      onBlur={(e) => updateField("title", e.currentTarget.innerText)}
    >
      {cvData.title}
    </h2>
  );
};

export { TitleComponent };
