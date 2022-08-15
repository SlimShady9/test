import React, { useEffect, useState } from "react";
import Authenticated from "@/Layouts/Authenticated";
import Label from "@/Components/DataForm";
import axios from "axios";
import DataForm from "@/Components/DataForm";
import AddressForm from "@/Components/AddressForm";
import Card from "@/Components/Card";

export default function Services(props) {
    const [serviceParams, setServiceParams] = useState([]);
    const [showModal, setShowModal] = useState("");
    const [idAddress, setIdAddress] = useState(null);

    const onHide = () => setShowModal(false);

    const submitService = (data) => {
        //Load address on data
        console.log(idAddress);
        if (idAddress != null) {
            data.id_address = idAddress;
            axios.post("/api/services", data).then((res) => {
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
                    onSubmit={submitService}
                    url={"/api/services"}
                ></DataForm>
                {/* Custom address form due to the fact of dynamism */}
                <AddressForm api_token={props.api_token} />
            </Authenticated>
        </>
    );
}
