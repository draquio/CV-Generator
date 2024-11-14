import { useCvStore } from "@/hooks/useCvStore";
import { Cv as CvClass } from "@/services/Cv.service";

const PreviewCV = () => {
  const { cvData } = useCvStore();
  const handleGeneratePdf = async () => {
    try {
      const cvController = new CvClass();
      await cvController.CreatePDF(cvData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-white w-[260mm] mx-auto rounded-xl shadow-lg py-10">
      <div
        className="p-2 w-[210mm] min-h-[297mm] mx-auto flex flex-col gap-y-5"
        style={{ pageBreakBefore: "always" }}
      >
        <section className="text-center flex flex-col">
          <h1 className="text-5xl font-bold text-cumstonBlue">{cvData.name}</h1>
          <h2 className="text-xl font-bold mt-1">{cvData.title}</h2>
          <hr className="border my-1"></hr>
          <div className="flex gap-x-2 justify-center">
            <p>{cvData.contact.email}</p>
            <p>|</p>
            <p>{cvData.contact.number}</p>
            <p>|</p>
            <p>{cvData.contact.city}</p>
            <div className="flex">
              {cvData.contact.web.map((web, index) => (
                <div key={index}>
                  <span>|</span>
                  <a
                    className="mx-[6px] text-cumstonBlue border-b border-b-cumstonBlue"
                    href={web.link}
                    target="_blank"
                  >
                    {web.title}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Perfil profesional  */}
        <section>
          <h3 className="font-bold text-cumstonBlue">PERFIL PROFESIONAL</h3>
          <p>{cvData.profile}</p>
        </section>

        {/* Formacion academica  */}
        {cvData.education.length > 0 && (
          <section>
            <h3 className="font-bold text-cumstonBlue">FORMACIÓN ACADÉMICA</h3>
            <ul className="list-disc pl-6 space-y-[2px]">
              {cvData.education.map((education, index) => (
                <li key={index}>
                  <span className="mr-1">{education.title}</span>
                  <span>{education.years}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Experiencia profesional */}
        {cvData.experience.length > 0 && (
          <section>
            <h3 className="font-bold text-cumstonBlue">
              EXPERIENCIA PROFESIONAL
            </h3>
            {cvData.experience.map((experience, index) => (
              <div key={index} className="mb-1">
                <h4 className="font-bold">{experience.title}</h4>
                <p>{experience.content}</p>
                <p className="italic text-xs">
                  <b className="mr-[2px]">Tecnologías:</b>
                  {experience.technologies}
                </p>
              </div>
            ))}
          </section>
        )}

        {/* Habilidades */}
        {cvData.skill.length > 0 && (
          <section>
            <h3 className="font-bold text-cumstonBlue">HABILIDADES</h3>
            <ul className="list-disc pl-6">
              {cvData.skill.map((skill, index) => (
                <span key={index}>
                  <li>
                    <b className="mr-[2px]">{skill.title}:</b>
                    <span>{skill.content}</span>
                  </li>
                </span>
              ))}
            </ul>
          </section>
        )}

        {/* Proyectos */}
        {cvData.project.length > 0 && (
          <section>
            <h3 className="font-bold text-cumstonBlue">PROYECTOS</h3>
            {cvData.project.map((project, index) => (
              <div className="mb-2" key={index}>
                <div className="inline-flex">
                  {project.link ? (
                    <div>
                      <a className="mr-1" href={project.link} target="_blank">
                        <b className="border-b border-black ">
                          {project.title}
                        </b>
                        <span>.-</span>
                      </a>
                      <span>{project.content}</span>
                    </div>
                  ) : (
                    <b>{project.title}</b>
                  )}
                </div>
              </div>
            ))}
          </section>
        )}
      </div>
      <button className="bg-purple-600 p-2" onClick={handleGeneratePdf}>
        Generar PDF
      </button>
    </div>
  );
};

export { PreviewCV };
