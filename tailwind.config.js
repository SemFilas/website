/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    backgroundImage: {
      login:
        "url(https://cdn.discordapp.com/attachments/1003803777612132412/1095780693533012019/background.jpg)",
      app: "url(https://cdn.discordapp.com/attachments/1095476209762189505/1095909145410023424/order.jpg)",
    },
  },
  plugins: [],
};
