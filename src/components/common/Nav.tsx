"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
const Nav = () => {
  const pathname = usePathname();
  const style =
    pathname !== "/"
      ? "bg-[#ffffff] text-[rgb(73, 73, 73)] shadow-[inset_0_-1px_0_0_#eaeaea]"
      : "text-[#d6d6d6]";

  return (
    <header
      className={`h-16 flex items-center relative top-0 z-10 ${style}`}
    >
      <nav className="flex justify-between items-center max-w-[1200px] w-full mx-auto font-roboto">
        <Link href="/" className=" text-xl">Generador de CV</Link>
        <div className="flex gap-x-6">
          <Link href="/create" className="px-2 py-1">
            Editar
          </Link>
          <Link href="/preview" className="px-2 py-1 ">
            Previsualizar
          </Link>
          {/* <button className="px-2 py-1 " onClick={() => downloadPdf(cvData)}>
            Descargar
          </button> */}
          {/* <button onClick={resetCvData} className="px-2 py-1 ">
            Reiniciar
          </button> */}
          <Link href="/import" className="px-2 py-1 ">
            Importar
          </Link>
        </div>
      </nav>
    </header>
  );
};

export { Nav };
