import { StyleSheet, Font } from "@react-pdf/renderer";

Font.register({
  family: "Roboto",
  fonts: [
    {
      src: "/fonts/Roboto-Regular.ttf",
      fontWeight: "normal",
    },
    {
      src: "/fonts/Roboto-Bold.ttf",
      fontWeight: "bold",
    },
    {
      src: "/fonts/Roboto-Italic.ttf",
      fontStyle: "italic",
    },
    {
      src: "/fonts/Roboto-BoldItalic.ttf",
      fontWeight: "bold",
      fontStyle: "italic",
    },
  ],
});
export const styles = StyleSheet.create({
  page: {
    backgroundColor: "#ffffff",
    width: "210mm",
    minHeight: "297mm",
    padding: "15mm",
    display: "flex",
    flexDirection: "column",
    gap: 10,
    fontFamily: "Roboto",
  },
  bullet: {
    width: 10,
    fontSize: 14,
  },
  section_name: {
    borderBottom: "1px solid grey",
  },
  name: {
    fontSize: 32,
    color: "#1C4587",
    textAlign: "center",
    fontWeight: "black",
  },
  title: {
    textAlign: "center",
    fontSize: 14,
    opacity: 0.9,
    marginBottom: 5,
    fontWeight: "bold",
  },
  listWeb: {
    display: "flex",
    flexDirection: "row",
    fontSize: 12,
    marginBottom: 2,
    marginTop: -7,
    justifyContent: "center",
  },
  text: {
    fontSize: 12,
    marginBottom: 2,
  },
  list: {
    marginVertical: 4,
    paddingLeft: 15,
  },
  listItem: {
    marginBottom: 2,
  },
  link: {
    color: "#3b82f6",
    textDecoration: "underline",
  },
  section: {
    fontSize: 12,
    marginBottom: 8,
  },
  section_title: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 4,
    color: "#1C4587",
  },
  // Studies
  studies: {
    display: "flex",
    flexDirection: "row",
  },
  experiencie: {
    marginBottom: 6,
  },
  experiencie_title: {
    fontWeight: "bold",
  },
  experiencie_tech: {
    fontSize: 10,
    fontFamily: "Roboto",
    fontStyle: "italic",
  },

  // Skills
  skills: {
    fontSize: 12,
    display: "flex",
    flexDirection: "row",
  },

  // Projects
  project_list: {
    marginBottom: 6,
  },
  project_text: {
    fontWeight: "bold",
    color: "black",
  },
});