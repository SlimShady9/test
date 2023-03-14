import React from "react";

function Footer({ className }) {
    return (
        <footer
            className={`shadow-md bg-gradient-to-r from-white to-blue-light bg-bg-secondary text-text-primary ${className}`}
        >
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6 sm:px-8 px-5 py-16">
                <ul>
                    <h1 className="mb-1 font-bold">Links</h1>
                    <li>
                        <div className="hover:scale-110 duration-100">
                            <a
                                className="text-text-secondary hover:underline
                           text-sm cursor-pointer"
                                href="register"
                            >
                                Registrarse
                            </a>
                        </div>
                    </li>
                    <li>
                        <div className="hover:scale-110 duration-100">
                            <a
                                className="text-text-secondary hover:underline
                           text-sm cursor-pointer"
                                href="register"
                            >
                                Sobre Nosotros
                            </a>
                        </div>
                    </li>
                </ul>
                <ul>
                    <h1 className="mb-1 font-semibold">Servicios</h1>
                    <li>
                        <div className="hover:scale-110 duration-100">
                            <a
                                className="text-text-secondary hover:underline
                           text-sm cursor-pointer"
                                href="register"
                            >
                                Envíos
                            </a>
                        </div>
                        <div className="hover:scale-110 duration-100">
                            <a
                                className="text-text-secondary hover:underline
                           text-sm cursor-pointer"
                                href="register"
                            >
                                Correspondencia
                            </a>
                        </div>
                        <div className="hover:scale-110 duration-100">
                            <a
                                className="text-text-secondary hover:underline
                           text-sm cursor-pointer"
                                href="register"
                            >
                                Gestión de Mensajería
                            </a>
                        </div>
                    </li>
                </ul>
                <ul>
                    <h1 className="mb-1 font-bold">Otros</h1>
                    <li>
                        <div className="hover:scale-110 duration-100">
                            <a
                                className="text-text-secondary hover:underline
                           text-sm cursor-pointer"
                                href="register"
                            >
                                Contáctanos
                            </a>
                        </div>
                    </li>
                    <li>
                        <div className="hover:scale-110 duration-100">
                            <a
                                className="text-text-secondary hover:underline
                           text-sm cursor-pointer"
                                href="register"
                            >
                                Políticas de Privacidad
                            </a>
                        </div>
                    </li>
                    <li>
                        <div className="hover:scale-110 duration-100">
                            <a
                                className="text-text-secondary hover:underline
                           text-sm cursor-pointer"
                                href="register"
                            >
                                Términos y Condiciones
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
