const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        darkBlue: "#1E293A",
        lightBlue: "#5d7a97",
        darkGreen: "#00d5d5",
        lightGreen: "#00ffbf",
        pink: "#ff2896",
        orange: "#ff9b65",
      },
      backgroundImage: {
        "gradient-187":
          "linear-gradient( -187deg, var(--tw-gradient-from) 0%, var(--tw-gradient-to) 60%)",
      },
    },
  },
  plugins: [
    //require('@tailwindcss/typography'),
    //require("@tailwindcss/forms"),
    //require("@tailwindcss/aspect-ratio"),
    //require("@tailwindcss/container-queries"),
  ],
};
