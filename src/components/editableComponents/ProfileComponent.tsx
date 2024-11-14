import { useCvStore } from "@/hooks/useCvStore";
import React from "react";

const ProfileComponent = () => {
  const { cvData, updateField } = useCvStore();
  return (
    <div>
      <h3 className="font-bold text-cumstonBlue">PERFIL PROFESIONAL</h3>
      <p
      className="bg-customGray"
        contentEditable
        suppressContentEditableWarning
        onBlur={(e) => updateField("profile", e.currentTarget.innerText)}
      >
        {cvData.profile}
      </p>
    </div>
  );
};

export { ProfileComponent };
