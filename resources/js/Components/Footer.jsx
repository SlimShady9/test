import { Container } from "postcss";
import React from "react";

function Footer() {
    return <>
                <footer>
                    <div className="Container">
                        <div className="row">
                            <div className="col-12 col-lg-10 mx-auto">
                                <div className="row">
                                    <div className="col-6 col-lg-3">
                                        <h2> Links</h2>
                                        <ul className="col-12 col-md-3 list-unstyled">
                                            <li className="font-weight-bold mb-2">Registrarse</li>
                                            <li className="font-weight-bold mb-2">Acerca de nosotros</li>
                                      </ul>
                                    </div>
                                    <div className="col-6 col-lg-3">
                                        <h2> Otros</h2>
                                        <ul className="col-12 col-md-3 list-unstyled">
                                            <li className="font-weight-bold mb-2">Preguntas frecuentes</li>
                                            <li className="font-weight-bold mb-2">Contactanos</li>
                                            <li className="font-weight-bold mb-2">Politicas de privacidad</li>
                                            <li className="font-weight-bold mb-2">Terminos y condiciones</li>
                                       </ul>
                                    </div>
                                    <div className="col-6 col-lg-3">
                                        <h2> Servicios</h2>
                                        <ul className="col-12 col-md-3 list-unstyled">
                                            <li className="font-weight-bold mb-2">Envio</li>
                                         </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
    </>;
}

export default Footer;
