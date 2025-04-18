import { useCvStore } from "@/hooks/useCvStore";
import { IWeb } from "@/interfaces/interface";
import React, { useState } from "react";
import { MenuWebComponent } from "./MenuWebComponent";
import { PlusIcon } from "../common/Icons";

const MenuComponent = () => {
  const { cvData, updateContact, updateWeb, setCvData } = useCvStore();
  const [localWebs, setLocalWebs] = useState<IWeb[]>(cvData.contact.web);


  const addWeb = () => {
    if(localWebs.length > 3) return;
    const newWeb: IWeb = {
      id: crypto.randomUUID(),
      title: "Nueva web",
      link: "https://draquioportfolio.vercel.app/",
    };
    const updatedWebs = [...localWebs, newWeb];
    setLocalWebs(updatedWebs);
    setCvData({ contact: { ...cvData.contact, web: updatedWebs } });
  };
  const removeWeb = (index: number) => {
    const updatedWebs = localWebs.filter((_, i) => i !== index);
    setLocalWebs(updatedWebs);
    setCvData({ contact: { ...cvData.contact, web: updatedWebs } });
  };

  const handleUpdate = (index: number, field: keyof IWeb, value: string) => {
    const updatedWebs = [...localWebs];
    updatedWebs[index][field] = value;
    setLocalWebs(updatedWebs);
    updateWeb(index, field, value); // Usamos updateWeb en lugar de updateContact
  };

  return (
    <div className="flex gap-x-2 justify-center relative text-sm">
      <div
        contentEditable
        suppressContentEditableWarning
        className="bg-customGray"
        onBlur={(e) => updateContact("email", e.currentTarget.innerText)}
      >
        {cvData.contact.email}
      </div>
      <div>|</div>
      <div
      className="bg-customGray"
        contentEditable
        suppressContentEditableWarning
        onBlur={(e) => updateContact("number", e.currentTarget.innerText)}
      >
        {cvData.contact.number}
      </div>
      <div>|</div>
      <div
        className="bg-customGray"
        contentEditable
        suppressContentEditableWarning
        onBlur={(e) => updateContact("city", e.currentTarget.innerText)}
      >
        {cvData.contact.city}
      </div>
      <div className="flex">
      {localWebs.map((web, index) => (
        <div key={index} className="relative">
          <MenuWebComponent index={index} web={web} removeWeb={removeWeb} handleUpdate={handleUpdate} />
        </div>
      ))}
      </div>
      <button className="absolute top-0 -left-8 bg-customGreen text-white p-1 text-sm rounded-md" onClick={addWeb}><PlusIcon /></button>
      {/* <button className="absolute top-0 -right-8 bg-green-600 text-white p-1 text-sm rounded-md" onClick={addWeb}><PlusIcon /></button> */}
    </div>
  );
};

export { MenuComponent };