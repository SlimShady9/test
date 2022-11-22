import React, { useEffect, useState, useRef } from "react";
import Authenticated from "@/Layouts/Authenticated";
import Card from "@/Components/Card";
import Modal from "@/Components/Modal";
import Button from "@/Components/Button";
import axios from "axios";
import Container from "@/Components/Container";
import Input from "@/Components/Input";
import Label from "@/Components/Label";
import Checkbox from "@/Components/Checkbox";
import Select from "react-select";
import AddressForm from "@/Components/AddressForm";

export default function Services(props) {

    const options = {
        name : "id_type_service",
        options : [
            { value: "1", label: "Gestión de Mensajería" },
            { value: "2", label: "Correspondencia" },
            { value: "3", label: "Paquetería" },
        ]
    }

    const [serviceParams, setServiceParams] = useState([]);
    const [data, setData] = useState({
        name: "",
        date: "",
        id_type_service: "",
        description: "",
        price: "",
        id_address: "",
    })
    const [showModal, setShowModal] = useState("");
    const addressRef = useRef(null)

    const onHide = () => setShowModal(false);


    const handleInputChange = (e) => {
        let target = e.target?.name || options.name;
        let value = e.target?.value || e.value;
        setData({
            ...data,
            [target]: value
        });
    }

    const submitService = (e) => {
        //Load address on data
        e.preventDefault();
        console.log(data.id_address);
        if (data.id_address != null) {
            axios.post("/api/service", data).then((res) => {
                // Modal de juabito
                alert("Servicio creado");
            });
        } else {
            alert("Seleccione una dirección");
        }
    };

    const succesAddressLoad = (pData) => {
        setData({
            ...data,
            id_address: pData.id
        });
        addressRef.current.value = pData.name;
        
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
                <Modal
                    onHide={onHide}
                    show={showModal}
                    title={"Ingrese una nueva dirección"}
                >
                <AddressForm
                    api_token={props.api_token}
                    onSubmit={succesAddressLoad}
                />
                    </Modal>
                <Container className={"justify-center"}>
                <form onSubmit={submitService}>
                    <Card className={"justify-center tracking-widest m-auto"} col={1}>
                    <Container className={"col-span-2 justify-center"}>
                    <h1 className="text-blue-primary text-3xl mb-1 font-bold  text-center hover:scale-110 ease-in duration-200">Nuevo Servicio</h1>
                    </Container>
                        <div className="col-span-2">
                            <Label forInput="name" value="Título del Servicio" />
                            <Input
                                type="text"
                                name="name"
                                value={""}
                                className="mt-1 block w-full"
                                autoComplete="title"
                                isFocused={true}
                                required
                                handleChange={handleInputChange}
                            />
                        </div>
                        <div className="col-span-2">
                            <Label forInput="t_service" value="Tipo de Servicio" />
                            <Select
                                name="t_service"
                                options={options.options}
                                className="mt-1 block w-full"
                                autoComplete="t_service"
                                required
                                onChange={handleInputChange}
                            ></Select>
                        </div>
                        <div className="col-span-2">
                            <Label forInput="desc" value="Descripción" />
                            <textarea
                                type="textarea"
                                name="description"
                                className="mt-1 h-28 block w-full rounded-xl"
                                autoComplete="desc"
                                required
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="col-span-2">
                            <Button className="bg-gray-servi ml-2" onClick={() => setShowModal(true)}>
                            Detalles de dirección de Origen
                            </Button>
                        </div>
                        <div>
                            <Label forInput="name" value="Dirección" />
                            <input
                                type="text"
                                name="title"
                                className="mt-1 block w-full"
                                autoComplete="title"
                                ref={addressRef}
                                disabled={true}
                            />
                        </div>
                        <div className="col-span-2">
                        </div>
                        <div className="col-span-2">
                            <Label forInput="date" value="Fecha de Realización" />
                            <Input
                                type="date"
                                name="date"
                                value={""}
                                className="mt-1 block w-full"
                                autoComplete="value"
                                required
                                handleChange={handleInputChange}
                            />
                        </div>
                        <div className="col-span-2">
                            <Label forInput="value" value="Valor del Servicio" />
                            (Pesos Colombianos)
                            <Input
                                type="number"
                                name="price"
                                value={""}
                                className="mt-1 block w-full"
                                autoComplete="value"
                                required
                                handleChange={handleInputChange}
                            />
                        </div>
                        
                    <div className="flex items-center justify-start mt-4 ">
                    <Button className="bg-red-light" type="submit">
                        Cancelar
                    </Button>
                    </div>
                    <div className="flex items-center justify-end mt-4 ">
                    <Button className="bg-green-light" type="submit">
                        Generar
                    </Button>
                    </div>
                    
                    {/* Custom address form due to the fact of dynamism */}
                    </Card>
                </form>
                </Container>
            </Authenticated>
        </>
    );
}