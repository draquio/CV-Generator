"use client";
import { useCvStore } from "@/hooks/useCvStore";
import { PDFViewer } from "@react-pdf/renderer";
import React from "react";
import { CvPDF } from "./CvPDF";
import { downloadPdf } from "@/helpers/functions";

const PreviewCV = () => {
  const cvData = useCvStore((state) => state.cvData);

  return (
    <>
      <div className="flex py-4 justify-between">
        <h2 className="text-3xl text-[rgb(66_67_69)] mb-3 text-center">
          Vista previa
        </h2>
        <button
          className="py-2 px-7 rounded uppercase inline-block align-middle bg-[#ff850c] text-white font-bold hover:opacity-80 duration-500 "
          onClick={() => downloadPdf(cvData)}
        >
          Descargar
        </button>
      </div>

      <PDFViewer
        style={{ width: "100%", height: "100dvh" }}
        showToolbar={false}
      >
        <CvPDF cvData={cvData} />
      </PDFViewer>
    </>
  );
};

export default PreviewCV;
