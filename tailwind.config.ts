import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cumstonBlue: "#1c4587",
        customGreen: "#7fbf4d",
        customRed: "#ff6473",
        customGray: "#F4F6FF",
      },
      borderColor: {
        borderGray: "#d2d2d2",
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      margin:{
        "6px": '6px' 
      },
      gap:{
        "6px":' 6px'
      },
    },
  },
  plugins: [],
};
export default config;
