import { Outfit } from 'next/font/google';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderWidth: {
        6: '6px', // Add 6px border width
      },
      colors: {
        lightHover:'#fcf4ff',
        darkHover:'#2a004a',
        darkTheme: '#11001F',
        customOrange:'rgb(255,159,24)',
      },
      fontFamily:{
        Outfit:["Outfit","sans-serif"],
        Ovo:["Ovo","sans-serif"],
      },
      boxShadow:{
        'black':'4px 4px 0 #000',
        'white':'4px 4px 0 #fff',
      },
      gridTemplateColumns:{
        'auto':'repeat(auto-fit,minmax(200px,1fr))',
      },
    },
  },
  darkMode:'selector',
  plugins: [],
};

