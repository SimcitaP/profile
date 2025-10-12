/*

import { Config } from "postcss-load-config";

const config = {
  plugins: ["@tailwindcss/postcss", autoprefixer],
};

export default config;
*/
/*

/** @type {import('postcss-load-config').Config} */
/*import postcss from 'postcss';
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

const config = {
  plugins: [
    postcss.plugin('tailwindcss', tailwindcss),
    postcss.plugin('autoprefixer', autoprefixer),
  ],
};
/*
   // tailwindcss: {},
   ["@tailwindcss/postcss"],
   // autoprefixer: {},
  
};
*/
const config = {
  plugins: ["@tailwindcss/postcss"],
};
export default config;

