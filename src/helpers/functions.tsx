"use client";
import { CvPDF } from "@/components/CvPDF";
import { ICVData } from "@/interfaces/interface";
import { pdf } from "@react-pdf/renderer";



export const downloadPdf = async (cvData: ICVData) => {
  try {
    const blob = await pdf(<CvPDF cvData={cvData} />).toBlob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = cvData.name + "_CV.pdf";
    a.click();
    URL.revokeObjectURL(url);
  } catch (error) {
    console.error("Error generando el PDF:", error);
  }
};
