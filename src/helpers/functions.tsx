"use client";
import { CvPDF } from "@/components/CvPDF";
import { ICVData } from "@/interfaces/interface";
import { pdf } from "@react-pdf/renderer";
import * as pdfjsLib from "pdfjs-dist";
import { TextItem } from "pdfjs-dist/types/src/display/api";


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
export const extractCvDataFromPdf = async (file: File) => {
  const arrayBuffer = await file.arrayBuffer();
  const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
  const page = await pdf.getPage(1);
  const content = await page.getTextContent();

  const fullText = content.items
    .filter((item): item is TextItem => "str" in item)
    .map((item) => item.str)
    .join(" ");

  const match = fullText.match(/META:(\{.*\})/);

  if (match && match[1]) {
    try {
      return JSON.parse(match[1]);
    } catch {
      throw new Error("JSON malformado en el PDF");
    }
  }

  throw new Error("No se encontró ningún dato incrustado en el PDF");
};