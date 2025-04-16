import { ICVData } from "@/interfaces/interface";

export const cvDataLocal: ICVData = {
  name: "SERGIO MERCADO GALARZA",
  title: "Ingeniero de Sistemas - Desarrollador Web - Inglés B2",
  profile:
    "Ingeniero de Sistemas con inglés nivel B2 titulado, me especializo en desarrollo web full stack basándome en principios del desarrollo clean code, S.O.L.I.D. y programación orientada a objetos (POO). Tengo 1 año y medio enfocándome como desarrollador FullStack",
  contact: {
    city: "Bolivia, Tarija",
    email: "draquio@gmail.com",
    number: "+591 756556354",
    web: [
      {
        id: "1",
        title: "Linkedin",
        link: "https://www.linkedin.com/in/sergio-mercado-galarza-4a4b42274/",
      },
      {
        id: "2",
        title: "Github",
        link: "https://github.com/draquio",
      },
    ],
  },
  experience: [
    {
      id: "1",
      title: "Pasantía en el área de desarrollo de UPDS. Abril - Junio, 2020",
      content:
        "He solucionado pequeños bugs y optimizado funciones en PHP y javascript para sistemas internos de la propia universidad, así también he colaborado en la planeación y desarrollo de un sistema web realizado en PHP, Javascript, HTML, CSS y CodeIgniter.",
      technologies: "HTML5, CSS3, JavaScript, Jquery, PHP y CodeIgniter.",
    },
    {
      id: "2",
      title: "Desarrollador Web Freelance. 2023 - Actualidad",
      content:
        "En mi trayectoria como Freelance he solucionado bugs en scripts de php y javascript, así también he desarrollado varios proyectos personales monetizados.",
      technologies:
        "HTML5, CSS3, JavaScript, React, Next, TypeScript, Tailwind, Node, Express, MongoDB y MySQL.",
    },
  ],
  education: [
    {
      id: "1",
      title: "Ingeniería de Sistemas - Universidad Domingo Savio",
      years: "2016 - 2021",
    },
    {
      id: "2",
      title: "Inglés B2 - Centro Boliviano Americano (CBA)",
      years: "2017 - 2019",
    },
  ],
  skill: [
    {
      id: "1",
      title: "Frontend",
      content:
        "HTML, CSS, Javascript, React, Typescript, Redux, NextJS, Angular, Bootstrap, Sass y Tailwind.",
    },
    {
      id: "2",
      title: "Backend",
      content: "Python, Php, NodeJs y .Net Core (C#).",
    },
    {
      id: "3",
      title: "Base de datos",
      content: "MySQL, SQL server, y MongoDB.",
    },
    {
      id: "4",
      title: "Testing",
      content: "Cypress, Jest, Vitest, Testing Library y xUnit.",
    },
    {
      id: "5",
      title: "Otras Herramientas",
      content: "SEO, Git, Github, Figma y Docker.",
    },
    { id: "6", title: "CMS", content: "Wordpress y vBulletin." },
    { id: "7", title: "En Progreso", content: "Spring Boot y Laravel." },
  ],
  project: [
    {
      id: "1",
      title: "Weather",
      link: "https://clima-draquio.vercel.app/",
      content:
        "Es una plataforma online que proporciona información meteorológica actualizada, construida con NextJS y Tailwind con un diseño intuitivo.",
    },
    {
      id: "2",
      title: "DescargaVideos",
      link: "https://descargavideos.vercel.app/",
      content:
        "Una aplicación que te permite descargar videos de Youtube y TikTok simplemente ingresando la URL correspondiente. Está desarrollada con tecnologías React, TypeScript y Sass para una experiencia de usuario fluida y personalizable.",
    },
    {
      id: "3",
      title: "QRGenerator",
      link: "https://qrg.draquio.vercel.app/",
      content:
        "Herramienta web que permite crear códigos QR para URLs, textos, configuraciones de Wi-Fi, llamadas, y más. Desarrollado utilizando React, Redux y Sass, garantiza una experiencia fluida y personalizable para los usuarios.",
    },
    {
      id: "4",
      title: "TheMovie",
      link: "https://themovie-draquio.vercel.app/",
      content:
        "Página web de películas y series realizada con React y Sass implementando las mejores prácticas de Ui/UX",
    },
    {
      id: "5",
      title: "Acortador de Enlaces Backend",
      link: "https://github.com/draquio/Shortened-Link-Clean-Architecture-Dot-Net",
      content:
        "Backend de un Acortador de enlaces construido con .Net Core, C# y SQLServer realizado con Arquitectura Limpia, patrones de diseño y analíticas.",
    },
  ],
};
