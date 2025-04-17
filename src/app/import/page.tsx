"use client";

import { ImportPDF } from "@/components/common/ImportPDF";


const ImportPage = () => {
  return (
    <div className="mt-5 max-w-[1200px] mx-auto">
      <h2 className="text-3xl text-[rgb(66_67_69)] mb-3 text-center">Importar PDF</h2>
      <ImportPDF />
    </div>
  );
};

export default ImportPage;
