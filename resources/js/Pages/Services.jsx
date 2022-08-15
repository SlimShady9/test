import React, { useEffect, useState } from "react";
import Authenticated from "@/Layouts/Authenticated";
import axios from "axios";
import DataForm from "@/Components/DataForm";
import AddressForm from "@/Components/AddressForm";
import Card from "@/Components/Card";

export default function Services(props) {
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
                    cols={2}
                    titleForm={"Nuevo Servicio"}
                    parameters={serviceParams}
                    buttonText="Cargar servicio"
                    httpMethod={"POST"}
                    url={"/api/services"}
                ></DataForm>  
            </Authenticated>
        </>
    );
}
