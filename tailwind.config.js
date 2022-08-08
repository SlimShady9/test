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

        // https://tailwindcss.com/docs/customizing-colors#customizing-colors-with-variants
        // Custmizacion de los colores
        colors: {
            // Para la customizacion  de un color de agrega diferentes variantes de este mismo
            // Ejemplo para aplicar una de las variantes a un color seria de la siguiente forma:
            // green-primary, y como prefijo bg, o text, o border, etc
            green: {
                // Color con identificador y valor hexadecimal de este
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
            white: "#ffffff",
            black: "#000000",
        },
    },

    plugins: [require("@tailwindcss/forms")],
};
