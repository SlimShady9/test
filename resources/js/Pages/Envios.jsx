import React, { useEffect, useState } from "react";
import Authenticated from "@/Layouts/Authenticated";
import Container from "@/Components/Container";
import Button from "@/Components/FormUtils/Button";
import { Link } from "@inertiajs/inertia-react";
import axios from "axios";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function Envios(props) {
    //Arreglo de envíos
    const [envios, setEnvios] = useState([]);
    //res llama los valores de los campos con método post
    const submitEnvio = async (e) => {
        e.preventDefault();
        const form = e.target;
        const res = await axios.post("/api/envios", {
            estado: form.estado.value,
            nombre: form.nombre.value,
        });
        setEnvios([...envios, res.data]);
    };
    //Antes de que cargue la vista corgamos los datos
    useEffect(() => {
        //Llamamos a la ruta para obtener datos de los envíos
        axios.get("/api/envios").then((res) => {
            //Cargamos arreglo de envíos existentes en bd.
            setEnvios(res.data);
        });
    }, []);

    return (
        <>
            <Authenticated {...props}>
                <Container className="grid grid-rows-3 lg:grid-cols-3 justify-center gap-2 m-2">
                    <Container
                        className={
                            "justify-center bg-opacity-30 bg-yellow-cream rounded-lg"
                        }
                    >
                        <h1 className="text-blue-primary text-3xl mb-1 font-bold  text-center hover:scale-110 ease-in duration-200">
                            Pendientes
                        </h1>
                        <Link
                            href={route("envios")}
                            className="p-1 bg-blue-400"
                        >
                            <div
                                className="p-1 bg-white border-spacing-2 bg-gradient-to-t from-white to-gray-servi
                        border-gray-dark shadow-lg shadow-gray-dark overflow-visible rounded-lg"
                            >
                                <Container className="lg:flex grid grid-row-3">
                                    <h3 className="font-bold">
                                        Título: Servicio Numero 1{" "}
                                    </h3>
                                    <div className="text-md text-center">
                                        ID: 1235
                                    </div>
                                    <div className="text-md text-center">
                                        Fecha: 20/05/2022
                                    </div>
                                    <Button className="bg-green-light">
                                        <FaArrowRight />
                                    </Button>
                                </Container>
                            </div>
                        </Link>
                        <Link
                            href={route("envios")}
                            className="p-1 bg-blue-400"
                        >
                            <div
                                className="p-1 bg-white border-spacing-2 bg-gradient-to-t from-white to-gray-servi
                        border-gray-dark shadow-lg shadow-gray-dark overflow-visible rounded-lg"
                            >
                                <Container className="lg:flex grid grid-row-3">
                                    <h3 className="font-bold">
                                        Título: Servicio Numero 1{" "}
                                    </h3>
                                    <div className="text-md text-center">
                                        ID: 1235
                                    </div>
                                    <div className="text-md text-center">
                                        Fecha: 20/05/2022
                                    </div>
                                    <Button className="bg-green-light">
                                        <FaArrowRight />
                                    </Button>
                                </Container>
                            </div>
                        </Link>
                    </Container>
                    <Container
                        className={
                            "justify-center  bg-opacity-30 bg-blue-light rounded-lg"
                        }
                    >
                        <h1 className="text-blue-primary text-3xl mb-1 font-bold  text-center hover:scale-110 ease-in duration-200">
                            En Proceso
                        </h1>
                        <Link
                            href={route("envios")}
                            className="p-1 bg-blue-400"
                        >
                            <div
                                className="p-1 bg-white border-spacing-2 bg-gradient-to-t from-white to-gray-servi
                        border-gray-dark shadow-lg shadow-gray-dark overflow-visible rounded-lg"
                            >
                                <Container className="lg:flex grid grid-row-3">
                                    <h3 className="font-bold">
                                        Título: Servicio Numero 1{" "}
                                    </h3>
                                    <div className="text-md text-center">
                                        ID: 1235
                                    </div>
                                    <div className="text-md text-center">
                                        Fecha: 20/05/2022
                                    </div>
                                    <Button className="bg-red-light">
                                        <FaArrowLeft />
                                    </Button>
                                    <Button className="bg-green-light">
                                        <FaArrowRight />
                                    </Button>
                                </Container>
                            </div>
                        </Link>
                        <Link
                            href={route("envios")}
                            className="p-1 bg-blue-400"
                        >
                            <div
                                className="p-1 bg-white border-spacing-2 bg-gradient-to-t from-white to-gray-servi
                        border-gray-dark shadow-lg shadow-gray-dark overflow-visible rounded-lg"
                            >
                                <Container className="lg:flex grid grid-row-3">
                                    <h3 className="font-bold">
                                        Título: Servicio Numero 1{" "}
                                    </h3>
                                    <div className="text-md text-center">
                                        ID: 1235
                                    </div>
                                    <div className="text-md text-center">
                                        Fecha: 20/05/2022
                                    </div>
                                    <Button className="bg-red-light">
                                        <FaArrowLeft />
                                    </Button>
                                    <Button className="bg-green-light">
                                        <FaArrowRight />
                                    </Button>
                                </Container>
                            </div>
                        </Link>
                        <Link
                            href={route("envios")}
                            className="p-1 bg-blue-400"
                        >
                            <div
                                className="p-1 bg-white border-spacing-2 bg-gradient-to-t from-white to-gray-servi
                        border-gray-dark shadow-lg shadow-gray-dark overflow-visible rounded-lg"
                            >
                                <Container className="lg:flex grid grid-row-3">
                                    <h3 className="font-bold">
                                        Título: Servicio Numero 1{" "}
                                    </h3>
                                    <div className="text-md text-center">
                                        ID: 1235
                                    </div>
                                    <div className="text-md text-center">
                                        Fecha: 20/05/2022
                                    </div>
                                    <Button className="bg-red-light">
                                        <FaArrowLeft />
                                    </Button>
                                    <Button className="bg-green-light">
                                        <FaArrowRight />
                                    </Button>
                                </Container>
                            </div>
                        </Link>
                        <Link
                            href={route("envios")}
                            className="p-1 bg-blue-400"
                        >
                            <div
                                className="p-1 bg-white border-spacing-2 bg-gradient-to-t from-white to-gray-servi
                        border-gray-dark shadow-lg shadow-gray-dark overflow-visible rounded-lg"
                            >
                                <Container className="lg:flex grid grid-row-3">
                                    <h3 className="font-bold">
                                        Título: Servicio Numero 1{" "}
                                    </h3>
                                    <div className="text-md text-center">
                                        ID: 1235
                                    </div>
                                    <div className="text-md text-center">
                                        Fecha: 20/05/2022
                                    </div>
                                    <Button className="bg-red-light">
                                        <FaArrowLeft />
                                    </Button>
                                    <Button className="bg-green-light">
                                        <FaArrowRight />
                                    </Button>
                                </Container>
                            </div>
                        </Link>
                        <Link
                            href={route("envios")}
                            className="p-1 bg-blue-400"
                        >
                            <div
                                className="p-1 bg-white border-spacing-2 bg-gradient-to-t from-white to-gray-servi
                        border-gray-dark shadow-lg shadow-gray-dark overflow-visible rounded-lg"
                            >
                                <Container className="lg:flex grid grid-row-3">
                                    <h3 className="font-bold">
                                        Título: Servicio Numero 1{" "}
                                    </h3>
                                    <div className="text-md text-center">
                                        ID: 1235
                                    </div>
                                    <div className="text-md text-center">
                                        Fecha: 20/05/2022
                                    </div>
                                    <Button className="bg-red-light">
                                        <FaArrowLeft />
                                    </Button>
                                    <Button className="bg-green-light">
                                        <FaArrowRight />
                                    </Button>
                                </Container>
                            </div>
                        </Link>
                    </Container>
                    <Container
                        className={
                            "justify-center bg-opacity-30 bg-green-light rounded-lg"
                        }
                    >
                        <h1 className="text-blue-primary text-3xl mb-1 font-bold  text-center hover:scale-110 ease-in duration-200">
                            Realizados
                        </h1>
                        <Link
                            href={route("envios")}
                            className="p-1 bg-blue-400"
                        >
                            <div
                                className="p-1 bg-white border-spacing-2 bg-gradient-to-t from-white to-gray-servi
                        border-gray-dark shadow-lg shadow-gray-dark overflow-visible rounded-lg"
                            >
                                <Container className="lg:flex grid grid-row-3">
                                    <h3 className="font-bold">
                                        Título: Servicio Numero 1{" "}
                                    </h3>
                                    <div className="text-md text-center">
                                        ID: 1235
                                    </div>
                                    <div className="text-md text-center">
                                        Fecha: 20/05/2022
                                    </div>
                                    <Button className="bg-red-light">
                                        <FaArrowLeft />
                                    </Button>
                                </Container>
                            </div>
                        </Link>
                        <Link
                            href={route("envios")}
                            className="p-1 bg-blue-400"
                        >
                            <div
                                className="p-1 bg-white border-spacing-2 bg-gradient-to-t from-white to-gray-servi
                        border-gray-dark shadow-lg shadow-gray-dark overflow-visible rounded-lg"
                            >
                                <Container className="lg:flex grid grid-row-3">
                                    <h3 className="font-bold">
                                        Título: Servicio Numero 1{" "}
                                    </h3>
                                    <div className="text-md text-center">
                                        ID: 1235
                                    </div>
                                    <div className="text-md text-center">
                                        Fecha: 20/05/2022
                                    </div>
                                    <Button className="bg-red-light">
                                        <FaArrowLeft />
                                    </Button>
                                </Container>
                            </div>
                        </Link>
                        <Link
                            href={route("envios")}
                            className="p-1 bg-blue-400"
                        >
                            <div
                                className="p-1 bg-white border-spacing-2 bg-gradient-to-t from-white to-gray-servi
                        border-gray-dark shadow-lg shadow-gray-dark overflow-visible rounded-lg"
                            >
                                <Container className="lg:flex grid grid-row-3">
                                    <h3 className="font-bold">
                                        Título: Servicio Numero 1{" "}
                                    </h3>
                                    <div className="text-md text-center">
                                        ID: 1235
                                    </div>
                                    <div className="text-md text-center">
                                        Fecha: 20/05/2022
                                    </div>
                                    <Button className="bg-red-light">
                                        <FaArrowLeft />
                                    </Button>
                                </Container>
                            </div>
                        </Link>
                    </Container>
                </Container>
            </Authenticated>
        </>
    );
}
