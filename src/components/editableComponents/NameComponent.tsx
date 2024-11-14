"use client";

import { useCvStore } from "@/hooks/useCvStore";

const NameComponent = () => {
  const { cvData, updateField } = useCvStore();
  return (
    <h1
      className="text-5xl font-bold text-cumstonBlue bg-customGray"
      contentEditable
      suppressContentEditableWarning
      onBlur={(e) => updateField("name", e.currentTarget.innerText)}
    >
      {cvData.name}
    </h1>
  );
};

export { NameComponent };
