"use client";
import { useCvStore } from "@/hooks/useCvStore";
import { PDFViewer } from "@react-pdf/renderer";
import React from "react";
import { CvPDF } from "./CvPDF";

const PreviewCV = () => {
  const cvData = useCvStore((state) => state.cvData);
  
  return (
    <PDFViewer style={{ width: "100%", height: "100vh" }} showToolbar={false}>
      <CvPDF cvData={cvData} />
    </PDFViewer>
  );
};

export default PreviewCV;
