/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{js,jsx,ts,tsx}",
];
export const darkMode = 'class';
export const theme = {
  extend: {
   
    colors: {
      blue:{
        custom:'#1A8CD8'
      },
      theme:{
        main:"#000000"
      }

    }
  },
};
export const plugins = [];
