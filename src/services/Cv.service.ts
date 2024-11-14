import { downloadPdf } from "@/helpers/functions";
import { ICVData } from "@/interfaces/interface";

export class Cv {
  async CreatePDF(cvData: ICVData) {
    try {
      const response = await fetch("/api/generate-pdf", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ cvData }),
      });
      if (response.ok) {
        const blob = await response.blob();
        downloadPdf(blob, cvData.name);

      } else {
        console.error("Error al generar el PDF");
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
    }
  }
}
