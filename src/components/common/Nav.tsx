"use client"
import { useCvStore } from "@/hooks/useCvStore";
import Link from "next/link"
import { downloadPdf } from "@/helpers/functions";

const Nav = () => {
  //   try {
  //     const blob = await pdf(<CvPDF cvData={cvData} />).toBlob();
  //     const url = URL.createObjectURL(blob);
  //     const a = document.createElement("a");
  //     a.href = url;
  //     a.download = cvData.name + "_CV.pdf";
  //     a.click();
  //     URL.revokeObjectURL(url);
  //   } catch (error) {
  //     console.error("Error generando el PDF:", error);
  //   }
  // };
  const cvData = useCvStore((state) => state.cvData);
  return (
    <nav className="flex justify-between h-10 items-center">
      <div>Logo</div>
      <div className="flex gap-x-2">
        <Link href="/create" className="px-2 py-1 bg-customGreen text-white rounded-md">Editar CV</Link>
        <Link href="/preview" className="px-2 py-1 bg-customRed text-white rounded-md">Previsualizar CV</Link>
        <button className="px-2 py-1 bg-customGreen text-white rounded-md" onClick={() => downloadPdf(cvData)}>Descargar CV</button>
      </div>
    </nav>
  )
}

export { Nav }


