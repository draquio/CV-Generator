"use client";
import { ICVData } from "@/interfaces/interface";
import { styles } from "@/styles/pdfstyles";
import { Document, Link, Page, Text, View } from "@react-pdf/renderer";

interface CvPDFProps {
  cvData: ICVData;
}
export const CvPDF = ({ cvData }: CvPDFProps) => {
  const {
    contact,
    education,
    experience,
    title,
    name,
    project,
    skill,
    profile,
  } = cvData;
  const encoded = Buffer.from(JSON.stringify(cvData)).toString("base64");
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Sección de encabezado */}
        <View style={styles.section_name}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.listWeb}>
          <Text style={styles.text}>
            {contact.email} | {contact.number} | {contact.city}{" "}
          </Text>
          {contact.web.map((web, index) => (
            <Text key={index}>
              <Text> | </Text>
              <Link src={web.link} style={styles.link}>
                {web.title}
              </Link>
            </Text>
          ))}
        </View>

        {/* Perfil profesional */}
        <View style={styles.section}>
          <Text style={styles.section_title}>PERFIL PROFESIONAL</Text>
          <Text>{profile}</Text>
        </View>

        {/* Formación académica */}
        {education.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.section_title}>FORMACIÓN ACADÉMICA</Text>
            {education.map((edu, index) => (
              <View key={index} style={styles.studies}>
                <Text style={styles.bullet}>•</Text>
                <Text>
                  {edu.title} - {edu.years}
                </Text>
              </View>
            ))}
          </View>
        )}

        {/* Experiencia profesional */}
        {experience.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.section_title}>EXPERIENCIA PROFESIONAL</Text>
            {experience.map((exp, index) => (
              <View key={index} style={styles.experiencie}>
                <Text style={styles.experiencie_title}>{exp.title}</Text>
                <Text>{exp.content}</Text>
                <Text style={styles.experiencie_tech}>
                  <Text style={{ fontWeight: "bold" }}>Tecnologías:</Text>{" "}
                  {exp.technologies}
                </Text>
              </View>
            ))}
          </View>
        )}

        {/* Habilidades */}
        {skill.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.section_title}>HABILIDADES</Text>
            {skill.map((sk, index) => (
              <View key={index} style={styles.skills}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.listItem}>
                  <Text style={{ fontWeight: "bold" }}>{sk.title}:</Text>{" "}
                  {sk.content}
                </Text>
              </View>
            ))}
          </View>
        )}

        {/* Proyectos */}
        {project.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.section_title}>PROYECTOS</Text>
            {project.map((proj, index) => (
              <Text key={index} style={styles.project_list}>
                {proj.link && proj.link.trim() !== "" ? (
                  <Link
                    style={[
                      styles.project_text,
                      { textDecoration: "underline" },
                    ]}
                    src={proj.link}
                  >
                    {proj.title}
                  </Link>
                ) : (
                  <Text style={styles.project_text}>{proj.title}</Text>
                )}
                <Text>.- {proj.content}</Text>
              </Text>
            ))}
          </View>
        )}

        <Text
          style={{
            fontSize: 0.1,
            color: "white",
          }}
        >
          META:{JSON.stringify(encoded)}
        </Text>
      </Page>
    </Document>
  );
};
