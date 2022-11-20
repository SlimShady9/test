import React, { useEffect, useState } from "react";
import Container from "@/Components/Container";
import Authenticated from "@/Layouts/Authenticated";
import Datatable from "@/Components/DataTableUser"

export default function Users(props) {
    const [serviceParams, setServiceParams] = useState([]);
    //Antes de que cargue la vista corgamos los datos


    return (
        <>
        <Authenticated {...props}>
        <Container className="justify-center bg-opacity-30 shadow-xl">
            <Container className={"justify-center"}>
                <h1 className="text-blue-primary text-3xl mb-1 font-bold  text-center hover:scale-110 ease-in duration-200">Tabla de Usuarios</h1>
            </Container>
            <Datatable/>
        </Container>
        </Authenticated>
        </>
    );
}