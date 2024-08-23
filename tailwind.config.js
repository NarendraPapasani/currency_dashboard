/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(90deg, rgba(190, 251, 122, 0) 42.53%, #BEFB7A 230.08%)",
      },
    },
  },
  plugins: [],
};
