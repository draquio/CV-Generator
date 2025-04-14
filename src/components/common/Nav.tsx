"use client"
import { downloadPdf } from "@/helpers/functions";
import { useCvStore } from "@/hooks/useCvStore";
import Link from "next/link"

const Nav = () => {
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


