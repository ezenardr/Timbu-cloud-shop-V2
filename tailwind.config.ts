import type {Config} from "tailwindcss";
import flowbite from "flowbite-react/tailwind";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content()
  ],
  theme: {
    extend: {
      backgroundImage: {},
      colors: {
        "primary": "#0072C6",
        "primary-light": "rgba(0, 114, 198, 0.12)",
        "dark": "#292929"
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: {transform: 'translateX(0)'},
          to: {transform: 'translateX(-100%)'},
        }
      }
    },
  },
  plugins: [flowbite.plugin],
};
export default config;
