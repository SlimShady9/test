import React, { useState } from "react";
import Guest from "@/Layouts/Guest";
import Container from "@/Components/Container";
import Card from "@/Components/Card";
import Link from "@inertiajs/inertia-react";
import Button from "@/Components/FormUtils/Button";

import transportes from "../../imgs/transportes.png";
import mensajeria from "../../imgs/mensajeria.png";
import nombre from "../../imgs/nombre.png";
import camion from "../../imgs/camion.png";
import mundo from "../../imgs/mundo.png";
import documento from "../../imgs/document.png";

import env472 from "../../imgs/472.png";
import dhl from "../../imgs/DHL.png";
import interrapidisimo from "../../imgs/Inter-Rapidisimo.png";
import servientrega from "../../imgs/servientrega.png";

import arrows from "../../icons/arrows.png";
import bluedocument from "../../icons/bluedocument.png";
import dolar from "../../icons/dolar.png";
import email from "../../icons/email.png";
import location from "../../icons/location.png";
import user from "../../icons/user.png";

import { GrDown, GrUp, GrSelect } from "react-icons/gr";
import { welcome, title, mainText } from "@/Utils/FetchParameters";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";

import Label from "@/Components/FormUtils/Label";

export default function Welcome(props) {
    const [especializada, setEspecializada] = useState(false);
    const [masiva, setMasiva] = useState(false);
    const [internacional, setInternacional] = useState(false);
    const [documental, setDocumental] = useState(false);

    return (
        <>
        <div>
        {props.hasHeader && (
        <Header className="mt-1/2 z-10" />
        )}
        <div className={"grid grid-cols-1 w-full"}>
            <img
                className="fixed w-full inset-y-3/4 sm:inset-y-2/4 -z-10 scale-125 opacity-50"
                src={transportes}
            />
            <div className="w-full m-5">
                <img className="mx-auto" src={nombre} />
            </div>
            <div className="my-10">
                <h1 className="text-4xl w-3/4 mx-auto text-blue-primary mb-1 font-bold text-center ease-in duration-200">
                    {welcome}
                </h1>
            </div>
            <div className="grid grid-cols-1 text-blue-primary sm:grid-cols-2 sm:w-10/12 rounded-lg justify-center mx-auto bg-gradient-to-r from-semitransparent to-blue-light ">
                <h1 className="text-3xl font-bold my-auto text-center hover:scale-110 ease-in duration-200">
                    {title}
                </h1>
                <Container
                    className={
                        "flex justify-center hover:scale-105 ease-in duration-200"
                    }
                >
                    <Label className="text-lg text-black text-center sm:text-right">
                        {mainText}
                    </Label>
                </Container>
            </div>
            <div
                className={
                    "grid xl:grid-cols-4 md:grid-cols-2 mx-auto w-10/12 gap-14 mt-10"
                }
            >
                <Card
                    className={
                        "grid mx-auto text-xl gap-4 scale-100 hover:scale-105 ease-in duration-200"
                    }
                    col={"1"}
                    title={"Mensajería"}
                    subtitle={"Especializada"}
                >
                    <div className="flex">
                        <div className="flex h-52 w-52 bg-gradient-to-t from-blue-turquose to-white shadow-xl shadow-gray-dark rounded-full m-auto">
                            <img
                                height={100}
                                width={100}
                                className="m-auto"
                                src={mensajeria}
                            />
                        </div>
                    </div>
                    <div className="">
                        <div className="flex mt-3">
                            <Button
                                className="mx-auto gap-2 bg-gradient-to-t hover:text-blue-clear from-white to-gray-light shadow-xl"
                                onClick={() => setEspecializada(!especializada)}
                            >
                                Ver Detalles
                                {!especializada && <GrDown />}
                                {especializada && <GrUp />}
                            </Button>
                        </div>
                        {especializada && (
                            <div className="animate-fade-in-modal">
                                <li className="text-sm mt-3">
                                    Trámites interbancarios
                                </li>
                                <li className="text-sm">
                                    Radicaciones interinstitucionales
                                </li>
                                <li className="text-sm">
                                    Notificaciones con copia cotejo
                                </li>
                                <li className="text-sm">
                                    Servicio Mensajero ServiHoy
                                </li>
                                <li className="text-sm">
                                    Servicio Mensajero ServiHoy
                                </li>
                                <li className="text-sm">
                                    Paquetería especial, entrega, obsequios,
                                    material delicado
                                </li>
                                <li className="text-sm">
                                    Entrega y recaudo por venta de productos
                                </li>
                                <div className="mt-8 flex">
                                    <a
                                    className="grid m-auto text-center text-blue-dark underline"
                                    href="createService"
                                    >
                                    Solicita el Servicio Aquí <GrSelect className="m-auto"/>
                                    </a>
                                </div>
                            </div>
                        )}
                    </div>
                </Card>
                <Card
                    className={
                        "grid mx-auto text-xl gap-4 scale-100 hover:scale-105 ease-in duration-200"
                    }
                    col={"1"}
                    title={"Mensajería"}
                    subtitle={"Masiva"}
                >
                    <div className="flex">
                        <div className="flex h-52 w-52 bg-gradient-to-t from-blue-turquose to-white shadow-xl shadow-gray-dark rounded-full m-auto">
                            <img
                                height={100}
                                width={100}
                                className="m-auto"
                                src={camion}
                            />
                        </div>
                    </div>
                    <div className="">
                        <div className="flex mt-3">
                            <Button
                                className="mx-auto gap-2 bg-gradient-to-t hover:text-blue-clear from-white to-gray-light shadow-xl"
                                onClick={() => setMasiva(!masiva)}
                            >
                                Ver Detalles
                                {!masiva && <GrDown />}
                                {masiva && <GrUp />}
                            </Button>
                        </div>
                        {masiva && (
                            <div className="animate-fade-in-modal">
                                <li className="text-sm mt-3">
                                    Empaque y embalaje
                                </li>
                                <li className="text-sm">
                                    Organización y clasificación de envíos
                                    (sobres, obsequios institucionales)
                                </li>
                                <li className="text-sm">
                                    Entrega de informes con estadísticas de
                                    entrega, devolución, etc.
                                </li>
                                <li className="text-sm">
                                    Facturación electrónica corporativa
                                </li>
                                <div className="mt-8 flex">
                                    <a
                                    className="grid m-auto text-center text-blue-dark underline"
                                    href="createService"
                                    >
                                    Solicita el Servicio Aquí <GrSelect className="m-auto"/>
                                    </a>
                                </div>
                            </div>
                        )}
                    </div>
                </Card>
                <Card
                    className={
                        "grid mx-auto text-xl gap-4 scale-100 hover:scale-105 ease-in duration-200"
                    }
                    col={"1"}
                    title={"Mensajería"}
                    subtitle={"Internacional"}
                >
                    <div className="flex">
                        <div className="flex h-52 w-52 bg-gradient-to-t from-blue-turquose to-white shadow-xl shadow-gray-dark rounded-full m-auto">
                            <img
                                height={100}
                                width={100}
                                className="m-auto"
                                src={mundo}
                            />
                        </div>
                    </div>
                    <div className="grid">
                        <div className="flex mt-3">
                            <Button
                                className="mx-auto gap-2 bg-gradient-to-t hover:text-blue-clear from-white to-gray-light shadow-xl"
                                onClick={() => setInternacional(!internacional)}
                            >
                                Ver Detalles
                                {!internacional && <GrDown />}
                                {internacional && <GrUp />}
                            </Button>
                        </div>
                        {internacional && (
                            <div className="animate-fade-in-modal">
                                <li className="text-sm mt-3">
                                    Envíos Internacionales a TODO el mundo:
                                    Paquetería, Documentos
                                </li>
                                <li className="text-sm">
                                    Asesoría en Importaciones via aéra -
                                    marítima
                                </li>
                                <li className="text-sm">
                                    Tránsito Puertos - Bogotá
                                </li>
                                <li className="text-sm">
                                    Acompañamiento trámite pólizas de seguro
                                </li>
                                <li className="text-sm">
                                    Traemos tus paquetes desde cualquier lugar
                                    del mundo
                                </li>
                                <div className="mt-8 flex">
                                    <a
                                    className="grid m-auto text-center text-blue-dark underline"
                                    href="createService"
                                    >
                                    Solicita el Servicio Aquí <GrSelect className="m-auto"/>
                                    </a>
                                </div>
                            </div>
                        )}
                    </div>
                </Card>
                <Card
                    className={
                        "grid mx-auto text-xl gap-4 scale-100 hover:scale-105 ease-in duration-200"
                    }
                    col={"1"}
                    title={"Gestión"}
                    subtitle={"Documental"}
                >
                    <div className="flex">
                        <div className="flex h-52 w-52 bg-gradient-to-t from-blue-turquose to-white shadow-xl shadow-gray-dark rounded-full m-auto">
                            <img
                                height={100}
                                width={100}
                                className="m-auto"
                                src={documento}
                            />
                        </div>
                    </div>
                    <div className="">
                        <div className="flex mt-3">
                            <Button
                                className="mx-auto gap-2 bg-gradient-to-t hover:text-blue-clear from-white to-gray-light shadow-xl"
                                onClick={() => setDocumental(!documental)}
                            >
                                Ver Detalles
                                {!documental && <GrDown />}
                                {documental && <GrUp />}
                            </Button>
                        </div>
                        {documental && (
                            <div className="animate-fade-in-modal">
                                <li className="text-sm mt-3">Almacenamiento seguro de documentos</li>
                                <li className="text-sm">Automatización de procesos</li>
                                <li className="text-sm">Control de versiones</li>
                                <li className="text-sm">Colaboración en tiempo real</li>
                                <li className="text-sm">Seguridad y cumplimiento normativo</li>
                                <div className="mt-8 flex">
                                    <a
                                    className="grid m-auto text-center text-blue-dark underline"
                                    href="createService"
                                    >
                                    Solicita el Servicio Aquí <GrSelect className="m-auto"/>
                                    </a>
                                </div>
                            </div>
                        )}
                    </div>
                </Card>
            </div>
            <Container className={"mx-auto grid grid-cols-2 sm:grid-cols-4 gap-16"}>
                <Container
                    className={
                        "flex lg:m-10 lg:w-28 lg:h-28 sm:w-20 sm:h-20 shadow-xl overflow-hidden shadow-gray-dark bg-gradient-to-t from-gray-servi to-gray-dark rounded-full hover:opacity-30"
                    }
                >
                    <img
                        className="sm:scale-150 scale-125 hover:scale-150 ease-in duration-200"
                        src={env472}
                    />
                </Container>
                <Container
                    className={
                        "flex lg:m-10 lg:w-28 lg:h-28 sm:w-20 sm:h-20 shadow-xl overflow-hidden shadow-gray-dark bg-gradient-to-t from-gray-servi to-gray-dark rounded-full hover:opacity-30"
                    }
                >
                    <img
                        className="sm:scale-150 scale-125 hover:scale-150 ease-in duration-200"
                        src={dhl}
                    />
                </Container>
                <Container
                    className={
                        "flex lg:m-10 lg:w-28 lg:h-28 sm:w-20 sm:h-20 shadow-xl overflow-hidden shadow-gray-dark bg-gradient-to-t from-gray-servi to-gray-dark rounded-full hover:opacity-30"
                    }
                >
                    <img
                        className="sm:scale-150 scale-125 hover:scale-150 ease-in duration-200"
                        src={interrapidisimo}
                    />
                </Container>
                <Container
                    className={
                        "flex lg:m-10 lg:w-28 lg:h-28 sm:w-20 sm:h-20 shadow-xl overflow-hidden shadow-gray-dark bg-gradient-to-t from-gray-servi to-gray-dark rounded-full hover:opacity-30"
                    }
                >
                    <img
                        className="sm:scale-150 scale-125 hover:scale-150 ease-in duration-200"
                        src={servientrega}
                    />
                </Container>
            </Container>
            <div className="grid gap-4">
            <div 
            id = "project"
            className="rounded-xl mx-auto w-11/12 grid grid-cols-1 bg-blue-clear">
                <Label className={"m-auto sm:ml-20 my-5 text-5xl text-white"}>
                    Proyecto
                </Label>
                <div className="mx-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex text-white">
                        <img className={"w-10 h-10 m-auto"} src={bluedocument}/>
                        <div className="m-2">Centralice su operación de correspondencia y mensajería en una sola solución inmediata.</div>
                    </div>
                    <div className="flex text-white">
                        <img className={"w-10 h-10 m-auto"} src={user}/>
                        <div className="m-2">Contará con apoyo y comunicación de un comercial en toda la ruta del servicio.</div>
                    </div>
                    <div className="flex text-white">
                        <img className={"w-10 h-10 m-auto"} src={arrows}/>
                        <div className="m-2">Constante comunicación y control de sus requerimientos, puede utilizar todas las modalidades de servicio en una sola solicitud de servicio.</div>
                    </div>
                    <div className="flex text-white">
                        <img className={"w-10 h-10 m-auto"} src={dolar}/>
                        <div className="m-2">Minimice costos en empaque, embalaje, inventario, seguimiento de sus paquetes y/o trámites.</div>
                    </div>
                </div>
            </div>
            <div 
            id = "contact"
            className="rounded-xl mx-auto w-11/12 grid grid-cols-1 bg-blue-clearer">
                <Label className={"m-auto sm:ml-20 my-5 text-5xl text-white"}>
                    Contacto
                </Label>
                <div className="m-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex text-white">
                        <div className="m-auto sm:ml-5 text-3xl">+57 300 5981817</div>
                    </div>
                    <div className="flex text-white">
                        <img className={"scale-50"} src={location}/>
                        <div className="m-auto ml-2 text-2xl">Carrera 75 # 9-52 OFC 301,</div>
                    </div>
                    <div className="flex text-white">
                        <img className={"scale-50"} src={email}/>
                        <div className="my-auto sm:text-2xl overflow-cip">comercial@servicurrier.com</div>
                    </div>
                    <div className="flex text-white">
                    <div className="grid gap-4">
                        <div className="m-auto text-3xl">Bogotá, Colombia</div>
                        <div className="m-auto sm:ml-2 text-2xl">110821</div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </div>
            {props.hasFooter && (
                <Footer className="mt-4" />
            )}
            </div>
            </>
    );
}
