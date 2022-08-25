import React from "react";

function Footer({ className }) {
    return (
        <footer className={`shadow-md bg-gradient-to-r from-white to-blue-light bg-bg-secondary text-text-primary ${className}`}>
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6 sm:px-8 px-5 py-16">
                <ul>
                    <h1 className="mb-1 font-semibold">Links</h1>
                    <li>
                        <a
                            className="text-text-secondary hover:text-teal-400 duration-300
                           text-sm cursor-pointer"
                            href="register"
                        >
                            registrarse
                        </a>
                    </li>
                    <li>
                        <a
                            className="text-text-secondary duration-300
                           text-sm cursor-pointer"
                        >
                            Sobre nosotros
                        </a>
                    </li>
                </ul>
                <ul>
                    <h1 className="">Otros</h1>
                    <li>
                        <a
                            className="text-text-secondary hover:text-teal-400 duration-300
                           text-sm cursor-pointer"
                        >
                            Contáctanos
                        </a>
                    </li>
                    <li>
                        <a
                            className="text-text-secondary hover:text-teal-400 duration-300
                           text-sm cursor-pointer"
                        >
                            Politicas de provacidad
                        </a>
                    </li>
                    <li>
                        <a
                            className="text-text-secondary hover:text-teal-400 duration-300
                           text-sm cursor-pointer"
                        >
                            Terminos y condiciones
                        </a>
                    </li>
                </ul>
                <ul>
                    <h1 className="mb-1 font-semibold">Servicios</h1>
                    <li>
                        <a
                            className="text-text-secondary hover:text-teal-400 duration-300
                           text-sm cursor-pointer"
                        >
                            Envios
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
