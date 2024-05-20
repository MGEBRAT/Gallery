import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '15px'
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
    },
    fontFamily: {
      inter: 'var(--font-inter)',
      literata: 'var(--font-literata)',
    },
    backgroundImage: {
      hero: 'url(/assets/img/main/bg.png)',
    },
    extend: {
      colors: {
        korich: '#D8AE9E',
        greeen: '#80A4A2',
        butgreen: '#3D654D',
        bluee: '#3B7C90',
        gol: '#80A4A2'
      },
    },
  },
  plugins: [],
};
export default config;