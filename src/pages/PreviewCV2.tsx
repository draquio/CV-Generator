"use client";
import { CvPDF } from "@/components/CvPDF";
import { useCvStore } from "@/hooks/useCvStore";
import { PDFViewer } from "@react-pdf/renderer";
const PreviewCV2 = () => {
  const cvData = useCvStore((state) => state.cvData);
  return (
    <>
      <PDFViewer style={{ width: "100%", height: "100vh" }} showToolbar={false}>
        <CvPDF cvData={cvData} />
      </PDFViewer>
      <button className="bg-purple-600 p-2">Generar PDF</button>
    </>
  );
};

export default PreviewCV2;
