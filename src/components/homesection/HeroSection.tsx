import Link from 'next/link'
import React from 'react'

const HeroSection = () => {
  return (
    <section className="bg-[url(https://zircon-next.vercel.app/assets/saas-images/banner.jpg)] bg-cover bg-no-repeatw-full min-h-dvh">
      <div className="grid grid-cols-2 justify-center items-center min-h-[100vh] mx-auto max-w-[1200px]">
        <div className="flex  flex-col gap-y-6">
          <h1 className="text-6xl leading-none tracking-[-0.05em] text-white font-bold">
            Generador de CVs
          </h1>
          <p className="text-left max-w-[520px] text-white">
            Genera CVs de manera fácil, rápida y gratis, tu mejor opción con formato Harvard y
            aprobado para pasar los filtros de ATS.
          </p>
          <div>
            <Link href="/create" className="py-2 px-7 rounded uppercase inline-block align-middle bg-[#ff850c] text-white font-bold hover:opacity-80 duration-500">Generar mi CV ahora!</Link>
          </div>
        </div>
        <div className="flex justify-end">
            <img src="https://zircon-next.vercel.app/_next/image?url=%2Fassets%2Fsaas-images%2Fbanner-rightimage.png&w=1920&q=75"></img>
        </div>
      </div>
    </section>
  )
}

export {HeroSection}
