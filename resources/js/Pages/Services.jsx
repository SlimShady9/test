import React, { useEffect, useState } from "react";
import Authenticated from "@/Layouts/Authenticated";
import Label from "@/Components/DataForm";
import axios from "axios";
import DataForm from "@/Components/DataForm";
import Datatable from "@/Components/DataTableService"

export default function Envios(props) {
    const [serviceParams, setServiceParams] = useState([]);
    //Antes de que cargue la vista corgamos los datos

    useEffect(() => {
        axios.get("/api/services/create").then((res) => {
            setServiceParams(res.data.parameters);
        });
    }, []);

    return (
        <>
            <Authenticated {...props}>
                <DataForm
                    parameters={serviceParams}
                    buttonText="Cargar servicio"
                    httpMethod={"POST"}
                    url={"/api/services"}
                ></DataForm>
            </Authenticated>
            <Datatable/>
        </>
    );
}
