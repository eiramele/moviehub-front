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
        "purple-heart": {
          "50": "#edefff",
          "100": "#dee2ff",
          "200": "#c4caff",
          "300": "#a0a6ff",
          "400": "#7c7aff",
          "500": "#675afa",
          "600": "#593cef",
          "700": "#4529c2",
          "800": "#3f29aa",
          "900": "#362986",
          "950": "#21184e",
        },
        "cadet-blue": {
          "50": "#f5f6f8",
          "100": "#edeff2",
          "200": "#dee1e7",
          "300": "#c9cdd8",
          "400": "#abb0c2",
          "500": "#9da1b7",
          "600": "#8789a4",
          "700": "#74758e",
          "800": "#5f6074",
          "900": "#50515f",
          "950": "#2f3037",
        },
      },
    },
  },
  plugins: [],
};
export default config;
