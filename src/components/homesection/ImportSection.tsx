import Link from "next/link";
import React from "react";

const ImportSection = () => {
  const list = [
    {
      title: "Sales Cycle/Velocity Reports",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      image:
        "https://zircon-next.vercel.app/_next/image?url=%2Fassets%2Fsaas-images%2Fproducts1.1.png&w=1920&q=75",
    },
    {
      title: "KPI Dashboards",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      image:
        "https://zircon-next.vercel.app/_next/image?url=%2Fassets%2Fsaas-images%2Fproducts2.1.png&w=1920&q=75",
    },
  ];
  return (
    <section className="max-w-[1200px] mx-auto">
      <div className="text-center py-20">
        <h2 className="text-3xl text-[rgb(66_67_69)] mb-3">Importa tu CV</h2>
        <p className="text-lg text-[rgb(86_87_89)]">
          Ahora puedes importar tu CV generado con nosotros o de Linkedin
        </p>
      </div>
      <div className="flex flex-col gap-y-16">
        {list.map((item, index) => (
          <div className={`flex items-center gap-x-10 ${index % 2 === 1 && "flex-row-reverse"}`} key={index}>
            <div className="w-2/5 flex flex-col gap-y-5">
              <h3 className="text-3xl">{item.title}</h3>
              <p className="text-base">{item.description}</p>
              <div>
                <Link
                  href="/create"
                  className="py-2 mt-4 px-7 rounded uppercase inline-block align-middle bg-[#ff850c] text-white hover:opacity-80 duration-500"
                >
                  Generar mi CV ahora!
                </Link>
              </div>
            </div>
            <div className="w-3/5">
              <img className="w-full" src={item.image} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export { ImportSection };
