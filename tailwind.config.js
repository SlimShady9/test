const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Nunito", ...defaultTheme.fontFamily.sans],
            },
        },
        colors: {
            primary: "#00bcd4",
            secondary: "#ff9800",
            tertiary: "#ff5722",
            "text-primary": "#212121",
            "text-secondary": "#757575",
            "text-tertiary": "#f44336",
            "bg-primary": "#f5f5f5",
            "bg-secondary": "#fff",
            "bg-tertiary": "#f5f5f5",
        },
    },

    plugins: [require("@tailwindcss/forms")],
};
