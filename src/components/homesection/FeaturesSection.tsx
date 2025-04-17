import React from "react";
import { ListIcon } from "../common/Icons";
import Link from "next/link";

const FeaturesSection = () => {
  const list = [
    {
      title: "Web Analytics Integration",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      title: "Web Analytics Integration",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      title: "Web Analytics Integration",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
  ];
  return (
    <section className="bg-[url(https://zircon-next.vercel.app/assets/saas-images/triangle-bglarge.png)] min-h-dvh bg-no-repeat bg-size-[800px] bg-center">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center py-20">
          <h2 className="text-3xl text-[rgb(66_67_69)] mb-3">Caracteristicas</h2>
          <p className="text-lg text-[rgb(86_87_89)]">Top rated crm software to help you manage better.</p>
        </div>
        <div className="grid grid-cols-2 gap-x-4 justify-evenly">
          <img
            className="rounded-2xl"
            src="/img/cv.png"
          />
          <div className="flex justify-center items-center">
            <ul className="max-w-[512px]">
              {list.map((item, index) => (
                <li key={index} className="flex list-none mb-7">
                  <span className="flex w-8 h-8 p-2 text-[rgb(96_40_250)] shadow-[rgb(230_230_230)_1px_3px_4px_1px] rounded-full">
                    <ListIcon />
                  </span>
                  <div className="ml-5">
                    <h4 className="font-bold text-[rgb(66_67_69)]">
                      {item.title}
                    </h4>
                    <p className="text-sm text-[rgb(86_87_89)]">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            <Link href="/create" className="py-2 mt-4 px-7 rounded uppercase inline-block align-middle bg-[#ff850c] text-white hover:opacity-80 duration-500">Generar mi CV ahora!</Link>
            </ul>

          </div>
        </div>
      </div>
    </section>
  );
};

export { FeaturesSection };
