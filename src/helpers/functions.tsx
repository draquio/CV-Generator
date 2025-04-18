"use client";
import { CvPDF } from "@/components/CvPDF";
import { ICVData } from "@/interfaces/interface";
import { pdf } from "@react-pdf/renderer";
import type { PDFDocumentProxy, TextItem, TextMarkedContent } from "pdfjs-dist/types/src/display/api";
import { useCvStore } from "@/hooks/useCvStore";
import { toast } from "sonner";

export const downloadPdf = async (cvData: ICVData) => {
  try {
    const blob = await pdf(<CvPDF cvData={cvData} />).toBlob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = cvData.name + "_CV.pdf";
    a.click();
    URL.revokeObjectURL(url);
    toast.success("CV descargado correctamente");
  } catch {
    toast.error("CV descargado correctamente");
  }
};

export const extractCvDataFromPdf = async (
  file: File
): Promise<string | null> => {
  try {
    const pdfjsLib = await import("pdfjs-dist/build/pdf");
    const { getDocument } = await import("pdfjs-dist");
    pdfjsLib.GlobalWorkerOptions.workerSrc = "/js/pdf.worker.min.js";



    const arrayBuffer = await file.arrayBuffer();
    const pdf: PDFDocumentProxy = await getDocument({ data: arrayBuffer })
      .promise;

    let fullText = "";

    for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
      const page = await pdf.getPage(pageNum);
      const content = await page.getTextContent();
      const pageText = content.items
        .map((item: TextItem | TextMarkedContent) => {
          if ("str" in item) {
            return (item as TextItem).str;
          }
          return "";
        })
        .join(" ");
      fullText += pageText;
    }
    const match = fullText.match(/META:\s*"?([A-Za-z0-9+/=]+)"?/);
    if (!match) return null;
    const base64Text = match[1];
    const decodedText = decodeURIComponent(
      Array.prototype.map
        .call(
          atob(base64Text),
          (c: string) => `%${c.charCodeAt(0).toString(16).padStart(2, "0")}`
        )
        .join("")
    );
    return decodedText;
  } catch {
    return null;
  }
};

export const handlePdfImport = async (file: File) => {
  const jsonText = await extractCvDataFromPdf(file);
  if (!jsonText) return false;
  try {
    const parsed: ICVData = JSON.parse(jsonText);
    useCvStore.getState().setCvData(parsed);
    return true;
  } catch {
    return false;
  }
};
