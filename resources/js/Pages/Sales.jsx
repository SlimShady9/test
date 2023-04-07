import React, { useEffect, useState } from "react";
import Authenticated from "@/Layouts/Authenticated";
import Container from "@/Components/Container";
import axios from "axios";
import DataTableSales from "@/Components/DataTableSales";
export default function Services(props) {
    const [serviceParams, setServiceParams] = useState([]);
    const [showModal, setShowModal] = useState("");
    const [idAddress, setIdAddress] = useState(null);
    //I'm here
    const onHide = () => setShowModal(false);

    const submitService = (data) => {
        //Load address on data
        if (idAddress != null) {
            data.id_address = idAddress;
            axios.post("/api/service", data).then((res) => {
                // Modal de juabito
                alert("Servicio creado");
            });
        } else {
            alert("Seleccione una dirección");
        }
    };

    const succesAddressLoad = (data) => {
        setIdAddress(data.id);
        setShowModal(false);
    };

    //Antes de que cargue la vista corgamos los datos

    useEffect(() => {
        axios.get("/api/service/create").then((res) => {
            setServiceParams(res.data.parameters);
        });
    }, []);

    return (
        <>
            <Authenticated {...props}>
                <Container className="m-6 justify-center bg-opacity-30 shadow-xl">
                    <Container className={"justify-center"}>
                        <h1 className="text-blue-primary text-3xl mb-1 font-bold  text-center hover:scale-110 ease-in duration-200">
                            Contabilidad
                        </h1>
                    </Container>
                    <DataTableSales />
                </Container>
            </Authenticated>
        </>
    );
}
