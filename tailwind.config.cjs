/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./views/**/*.ejs", "./public/css/*.css"],
    theme: {
        extend: {},
    },
    darkMode: "class",
    plugins: [require("flowbite/plugin")],
};
