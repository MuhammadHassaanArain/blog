import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",

 

    './pages/**/*.{js,ts,jsx,tsx}', // Adjust the path as needed
    './components/**/*.{js,ts,jsx,tsx}', // Adjust the path as needed
    './app/**/*.{js,ts,jsx,tsx}', // If using the new Next.js 13 app directory
    './public/**/*.html', // Include if you're using HTML files
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
