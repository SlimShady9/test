const { transform } = require("lodash");
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
                servi:"#1EE300"
            },
            gray: {
                light: "#dcdcdc",
                dark: "#9a9a9a",
                servi:"#dcdcdc"
            },
            blue: {
                light: "#9CBEFF",
                primary: "#231A49",
                dark: "#000022",
                servi:"#0a0231"
            },
            red: {
                light: "#ffb3b3",
                primary: "#ff0000",
                dark: "#b30000",
            },
            white: "#ffffff",
            black: "#000000",
            "input-border": "hsl(0, 0%, 80%)",
        },
        extend: {
            keyframes: {
                "fade-out-modal": {
                    "0%": {
                        opacity: 1,
                    },
                    "100%": {
                        opacity: 0,
                        transform: "translateX(30%)",
                        display: "none",
                        visibility: "hidden",
                    },
                },
                "fade-in-modal": {
                    "0%": {
                        opacity: 0,
                        display: "block",
                        transform: "translateX(30%)",
                    },
                    "100%": {
                        opacity: 1,
                    },
                },
                "opacity-in-modal": {
                    "0%": {
                        opacity: 0,
                    },
                    "100%": {
                        opacity: 0.4,
                    },
                },
                "opacity-out-modal": {
                    "0%": {
                        opacity: 0.4,
                    },
                    "100%": {
                        opacity: 0,
                        display: "none",
                        visibility: "hidden",
                    },
                },
            },
            animation: {
                "fade-out-modal": "fade-out-modal .5s ease-in-out forwards",
                "fade-in-modal": "fade-in-modal .5s ease-in-out forwards",
                "opacity-in-modal": "opacity-in-modal .5s linear forwards",
                "opacity-out-modal": "opacity-out-modal .5s linear forwards",
            },
        },
    },

    plugins: [require("@tailwindcss/forms")],
};
