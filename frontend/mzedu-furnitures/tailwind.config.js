const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}",
  flowbite.content(),
  ],
  theme: {
    extend: {
      fontFamily: {
        Dancing:["Dancing Script",'cursive'],
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}