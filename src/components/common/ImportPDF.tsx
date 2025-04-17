"use client";
import React, { ChangeEvent } from "react";
import { handlePdfImport } from "@/helpers/functions";
import { toast } from "sonner";
const ImportPDF = () => {
  const handleFileUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const file = e.target.files?.[0];
    if (file) {
      const value = await handlePdfImport(file);
      toast[value ? "success" : "error"](
        value ? "CV importado correctamente" : "No se pudo importar el CV"
      );
    }
  };
  return (
    <form>
      <label>Import PDF</label>
      <input type="file" accept="application/pdf" onChange={handleFileUpload} />
    </form>
  );
};

export { ImportPDF };
