/** @type {import('tailwindcss').Config} */
export default {
   darkMode: "class",
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         keyframes: {
            "show-up": {
               "0%": {
                  opacity: "0",
                  transform: "translateY(5%)",
               },
               "100%": {
                  opacity: "1",
                  transform: "translateY(0%)",
               },
            },
         },
         animation: {
            "show-up": "show-up 0.6s ease-in-out",
         },
      },
   },
   plugins: [require("tailwind-scrollbar")],
};
