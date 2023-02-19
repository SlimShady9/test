import { useEffect, useState } from "react";
import Authenticated from "@/Layouts/Authenticated";
import ApplicationLogo from "@/Components/ApplicationLogo";
import Label from "@/Components/FormUtils/Label";
import Checkbox from "@/Components/FormUtils/Checkbox";
import Button from "@/Components/FormUtils/Button";
import SignatureCanvas from 'react-signature-canvas'
import ReactToPrint from 'react-to-print';

export default function DeliveryProof(props) {
    const [sigPad, setSigPad] = useState({});
    const [content, setContent] = useState();
    const [pri, setPri] = useState();

    const clear = () => {
        this.sigPad.clear()
    }

    return (
        <>
            <Authenticated {...props}>
                <div className="overflow-scroll">
                    <div id="divcontents" className="grid grid-cols-2 mx-auto w-11/12 md:w-4/5 lg:w-2/5 my-10 border">
                        <div className="row-span-2  mx-auto my-5">
                            <ApplicationLogo />
                        </div>
                        <div className="grid border-l">
                            <Label className=" text-center text-xl my-auto">
                                SERVICURRIER
                            </Label>
                        </div>
                        <div className="grid border-t border-l">
                            <Label className=" text-center my-auto">
                                Prueba de Entrega
                            </Label>
                        </div>
                        <div className="col-span-2 sm:col-span-1 border-t">
                            <div>
                                <div className=" bg-gray-dark text-center text-white"> Remitente</div>
                            </div>
                            <div className="mt-3">
                                <div className="ml-2">
                                    Codensa Emgesa
                                </div>
                                <div className="ml-2">
                                    Pepe Andrés Cruz Godoy, Coordinador
                                </div>
                                <div className="ml-2">
                                    País, Ciudad, Localidad
                                </div>
                                <div className="ml-2">
                                    Calle 152 No. 54 - 39
                                </div>
                                <div className="ml-2">
                                    Torre 2 apto 1504
                                </div>
                                <div className="ml-2">
                                    3002004056
                                </div>
                            </div>
                        </div>
                        <div className="col-span-2 sm:col-span-1 grid grid-cols-2 border-t sm:border-l">
                            <Label className="col-span-2 text-center bg-gray-servi">
                                No. de Guía
                            </Label>
                            <Label className="col-span-2 text-center bg-gray-servi">
                                02365
                            </Label>
                            <Label className="mr-2 m-auto">
                                Impresión:
                            </Label>
                            <div className="ml-2 m-auto">
                                29/01/2023
                            </div>
                            <Label className="mr-2 m-auto">
                                Inicio:
                            </Label>
                            <div className="ml-2 m-auto">
                                29/01/2023
                            </div>
                            <Label className="mr-2 m-auto">
                                Finalización:
                            </Label>
                            <div className="ml-2 m-auto">
                                29/01/2023
                            </div>
                            <Label className="mr-2 m-auto">
                                Tipo de Servicio:
                            </Label>
                            <div className="ml-2 m-auto">
                                Correspondencia
                            </div>
                            <Label className="row-span-2 text-right mr-2 my-auto">
                                Cargar a:
                            </Label>
                            <div className="text-left ml-2 my-auto">
                                MX600B2
                            </div>
                            <div className="text-left ml-2 my-auto">
                                Orden interna
                            </div>
                        </div>
                        <div className="col-span-2 bg-gray-dark text-center text-white">
                            Destinatario(s)
                        </div>
                        
                        <div className="grid grid-cols-4 col-span-2 sm:col-span-2 text-left m-2  border-b-2 border-gray-dark border-dotted">
                            <ul className="col-span-4 sm:col-span-3">
                                <li className="mt-2 border-l-4 border-gray-servi">1. Nombre Destinatario, Entidad Destinatario, Dependencia</li>
                                <li className="mt-2 text-center">Calle 123 No. 23-34 | Hora: 11:30 AM</li>
                                <li className="mt-2 text-sm">Descripción así como bien descriptiva </li>
                            </ul>
                            <div className="col-span-4 sm:col-span-1 flex">
                                <Button className="text-center sm:tracking-tighter mx-auto my-2 text-xs h-16 bg-yellow-cream">
                                    Pendiente
                                </Button>
                            </div>
                        </div>
                        <div className="grid grid-cols-4 col-span-2 sm:col-span-2 text-left m-2  border-b-2 border-gray-dark border-dotted">
                            <ul className="col-span-3">
                                <li className="mt-2 border-l-4 border-gray-servi">2. Nombre Destinatario, Entidad Destinatario, Dependencia</li>
                                <li className="mt-2 text-center">Calle 123 No. 23-34 | Hora: 11:30 AM</li>
                                <li className="mt-2 text-sm">Descripción así como bien descriptiva </li>
                            </ul>
                            <div className="col-span-4 sm:col-span-1 flex">
                                <Button className="text-center sm:tracking-tighter mx-auto my-2 text-xs h-16 bg-yellow-cream">
                                    Pendiente
                                </Button>
                            </div>
                        </div>
                        <div className="grid grid-cols-4 col-span-2 sm:col-span-2 text-left m-2  border-b-2 border-gray-dark border-dotted">
                            <ul className="col-span-3">
                                <li className="mt-2 border-l-4 border-gray-servi">3. Nombre Destinatario, Entidad Destinatario, Dependencia</li>
                                <li className="mt-2 text-center">Calle 123 No. 23-34 | Hora: 11:30 AM</li>
                                <li className="mt-2 text-sm">Descripción así como bien descriptiva </li>
                            </ul>
                            <div className="col-span-4 sm:col-span-1 flex">
                                <Button className="text-center sm:tracking-tighter mx-auto my-2 text-xs h-16 bg-yellow-cream">
                                    Pendiente
                                </Button>
                            </div>
                        </div>
                        <div className="col-span-2 text-center bg-gray-dark text-white border-t border-b">
                            Contenido
                        </div>
                        <div className="col-span-2 text-center bg-gray-servi border-gray-servi border-b-2">
                            <Label >ID DE SEGUIMIENTO: 123456789</Label>
                        </div>
                        <div className="col-span-1 text-center border-gray-servi border-r-2">
                            <div className="border-gray-servi border-b-2">
                                <div className="col-span-3 border-gray-servi border-b-2">
                                    <Label>VOLUMEN:</Label>
                                </div>
                                <div className="border-gray-servi">
                                    <div className="row-span-2 grid grid-cols-3  my-3">
                                        <div className="m-auto border-gray-servi border-b-2">
                                            <Label>Alto</Label>
                                        </div>
                                        <div className="m-auto border-gray-servi border-b-2">
                                            <Label>Ancho</Label>
                                        </div>
                                        <div className="m-auto border-gray-servi border-b-2">
                                            <Label>Largo</Label>
                                        </div>
                                        <div className="m-auto">
                                            30 cm
                                        </div>
                                        <div className="m-auto">
                                            30 cm
                                        </div>
                                        <div className="m-auto">
                                            30 cm
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 border-gray-servi border-t-2">
                                        <Label className="mr-2 m-auto">PESO:</Label>
                                        <div className="ml-2 m-auto">20 Kg</div>
                                    </div>
                                    <div className="grid grid-cols-2 border-gray-servi border-t-2">
                                        <Label className="mr-2 m-auto">UNIDADES:</Label>
                                        <div className="ml-2 m-auto">200</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-span-1 grid grid-cols-2 text-center">
                            <div className="flex col-span-2 border-gray-servi border-b-2">
                                <div className="m-auto">
                                    <Label className="row-span-2">TIPO DE CONTENIDO:</Label>
                                    <div className="row-span-2 text-center">Tipo Contenido</div>
                                </div>
                            </div>
                            <div className="flex col-span-2 border-gray-servi border-b-2">
                                <div className="m-auto">
                                    <Label className="row-span-2">DICE CONTENER:</Label>
                                    <div className="row-span-2 text-center">Nombre Contenido</div>
                                </div>
                            </div>
                            <div className="flex col-span-2 border-gray-servi border-b-2">
                                <div className="m-auto">
                                    <Label className="row-span-2">VALOR COMERCIAL:</Label>
                                    <div className="row-span-2">$ 50.000</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-2 m-auto">
                            <Label>EXCEPCION DEL SERVICIO: </Label>
                        </div>
                        <div className="col-span-2 m-auto">
                            Contenido delicado
                        </div>
                        <div className="col-span-2 text-center bg-gray-dark text-white border-t">
                            Excepción de Entrega
                        </div>
                        <div className="col-span-2 grid grid-cols-2 lg:grid-cols-4 items-center">
                            <div className="m-2 flex sm:mx-auto">
                                <Checkbox name="desconocido" id="desconocido" />
                                <Label className="text-sm" forInput="desconocido">1. DESCONOCIDO</Label>
                            </div>
                            <div className="m-2 flex sm:mx-auto">
                                <Checkbox name="direccion" id="direccion" />
                                <Label className="text-sm" forInput="direccion">2. DIRECCIÓN ERRADA</Label>
                            </div>
                            <div className="m-2 flex sm:mx-auto">
                                <Checkbox name="reside" id="reside" />
                                <Label className="text-sm" forInput="reside">3. NO RESIDE</Label>
                            </div>
                            <div className="m-2 flex sm:mx-auto">
                                <Checkbox name="rehusado" id="rehusado" />
                                <Label className="text-sm" forInput="rehusado">4. REHUSADO</Label>
                            </div>
                        </div>
                        <div className="col-span-2 text-center bg-gray-dark text-white border-t">
                            Descripción del Servicio
                        </div>
                        <div className="col-span-2 text-center">
                            <div className="text-justify m-2">Entidad Destinatario, Calle 123 No. 23-34, Nombre Destinatario, Descripción así como bien descriptivaEntidad Destinatario, Calle 123 No. 23-34, Nombre Destinatario, Descripción así como bien descriptiva</div>
                        </div>
                        <div className="col-span-2">
                            <div className="text-center bg-gray-dark text-white">
                                Recibido Por
                            </div>
                            <div className="text-center bg-gray-servi">
                                Pepe Andrés Cruz Godoy - 1.000.036.533
                            </div>
                        </div>
                        <div className="col-span-2 sm:col-span-1 border-t-2 border-gray-servi grid">
                        <Label className="text-left ml-2">
                                Firma:
                            </Label>
                            <div className="col-span-1 text-center text-gray-dark border mx-auto">
                                <SignatureCanvas canvasProps={{width: 300, height: 100, className: 'sigCanvas'}} clearOnResize={false} 
                                ref={(ref) => { setSigPad(ref) }} />
                            </div>
                            <div className="m-2 text-xs text-center text-gray-dark border-t border-dotted">
                                <div className="ml-2">Autorizo tratamiento de datos</div>
                            </div>
                        </div>
                        <div className="col-span-2 sm:col-span-1 border-t-2 sm:border-l-2 border-gray-servi">
                            <Label className="text-left m-2">
                                Observaciones:
                            </Label>
                            <div className="m-2">
                            <textarea className="h-24 w-full text-sm mx-auto" />
                            </div>
                        </div>
                    </div>
                    <div className="flex w-full mb-10">
                        <Button className="m-auto">
                            Imprimir
                        </Button>
                    </div>
                </div>
                <div id="ifmcontentstoprint"></div>
            </Authenticated>
        </>
    );
}
