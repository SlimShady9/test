const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        fontFamily: {
            sans: ["Rubik", ...defaultTheme.fontFamily.sans],
            lato: ["Lato", ...defaultTheme.fontFamily.sans],
        },
        colors: {
            green: {
                primary: "#1EE300",
                light: "#8eff80",
                dark: "#139f00",
            },
            gray: {
                light: "#dcdcdc",
                dark: "#9a9a9a",
            },
            blue: {
                light: "#4e4175",
                primary: "#231A49",
                dark: "#000022",
            },
        },
    },

    plugins: [require("@tailwindcss/forms")],
};
