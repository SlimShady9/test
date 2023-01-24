import React, { useEffect, useState, useContext } from "react";
import ServiceContext from "./useServiceContext";
import { EstadoServiciosEnum } from "@/Constants/EstadoServiciosEnum";
import { Head } from "@inertiajs/inertia-react";
import Input from "../FormUtils/Input";
import Label from "../FormUtils/Label";
import CurrencyFormInput from "../FormUtils/CurrencyFormInput";
import { getOptionsTypeService } from "@/Utils/FetchApi";
import Button from "../Button";
import SelectInput from "../FormUtils/SelectInput";

function ServiceDataForm({ currentStep, setNextStep }) {
    const [fileList, setFileList] = useState([]);
    const { service, setService } = useContext(ServiceContext);
    const [serviceForm, setServiceForm] = useState({
        name: "",
        id_type_service: 0,
        description: "",
        price: 0,
        cost: 0,
        date: "",
    });

    const handleChange = (event) => {
        setFileList(event.target.files);
    };

    const files = fileList ? [...fileList] : [];

    const inputRef = React.useRef(null);

    const handleClick = (event) => {
        inputRef.current.click();
    };

    const id = EstadoServiciosEnum.SERVICIO_INCIADO;

    const showDetail = true;

    const addPermisson = (e) => {
        showDetail = !showDetail;
    };

    const [optionsTypeService, setOptionsTypeService] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const options = await getOptionsTypeService();
        setOptionsTypeService(options);
    };

    const submitForm = (e) => {
        e.preventDefault();
        setNextStep(EstadoServiciosEnum.SERVICIO_MENSAJERIA);
    };

    if (currentStep !== id) {
        return <></>;
    }
    return (
        <>
            <Head title="Datos del servicio" />
            <h1 className="text-xl font-bold text-left mb-3">
                Datos iniciales
            </h1>
            <form className="gap-4" onSubmit={submitForm}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="col-span-1">
                        <Label>Asunto de la Solicitud</Label>
                        <Input name="name" autoComplete="nameService"></Input>
                    </div>
                    <div className="col-span-1">
                        <Label className="">Tipo de servicio</Label>
                        <SelectInput options={optionsTypeService} />
                    </div>

                    <div className="col-span-1">
                        <Label>Fecha de inicio del Servicio</Label>
                        <Input type="date"></Input>
                    </div>
                    <div className="col-span-1">
                        <Label>Hora de inicio del Servicio</Label>
                        <Input type="time"></Input>
                    </div>
                    {showDetail && (
                        <>
                            <div className="col-span-1">
                                <Label>Costo ($COP)</Label>
                                <CurrencyFormInput />
                            </div>
                            <div className="col-span-1">
                                <Label>Precio ($COP)</Label>
                                <CurrencyFormInput />
                            </div>
                        </>
                    )}
                </div>
                <div className="flex flex-col w-full gap-4">
                    <div className="mt-3">
                        <Label>Descripción / Recomendaciones</Label>
                    </div>
                    <textarea
                        className="m-1 rounded-md font-sans tracking-widest"
                        name="Descripcion"
                        id=""
                        cols="30"
                        rows="4"
                    ></textarea>
                    <div className="justify-center mt-3">
                        <Label>Archivos Adicionales</Label>
                        <input
                            ref={inputRef}
                            onChange={handleChange}
                            style={{ display: "none" }}
                            className="mx-auto my-3 w-full"
                            type="file"
                            multiple
                        />
                    </div>

                    <Button type="Button" onClick={handleClick}>
                        Selecciona uno o varios Archivos
                    </Button>
                    <ul>
                        {files.map((file, i) => (
                            <li key={i}>
                                {file.name} - {file.type}
                            </li>
                        ))}
                    </ul>
                    <div className="my-3 m-auto">
                        <Button className="" type="submit">
                            Guardar y continuar
                        </Button>
                    </div>
                </div>
            </form>
        </>
    );
}

export default ServiceDataForm;
