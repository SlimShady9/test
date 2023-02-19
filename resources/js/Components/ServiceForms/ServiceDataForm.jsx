import React, { useEffect, useState, useContext } from "react";
import ServiceContext from "./useServiceContext";
import { Head } from "@inertiajs/inertia-react";
import Input from "../FormUtils/Input";
import Label from "../FormUtils/Label";
import CurrencyFormInput from "../FormUtils/CurrencyFormInput";
import Button from "../FormUtils/Button";
import SelectInput from "../FormUtils/SelectInput";
import {
    TipoDeServiciosEnum,
    toStringTipoDeServiciosEnum,
} from "@/Constants/TipoDeServiciosEnum";
import { EstadoServiciosEnum } from "@/Constants/EstadoServiciosEnum";
import { uploadFile, uploadService } from "@/Utils/FetchService";
import moment from "moment";

function ServiceDataForm({ currentStep, setNextStep, setServicesAvailable }) {
    const id = EstadoServiciosEnum.SERVICIO_INCIADO;

    const typeServices = Object.keys(TipoDeServiciosEnum).map((key) => {
        return {
            label: toStringTipoDeServiciosEnum(TipoDeServiciosEnum[key]),
            value: TipoDeServiciosEnum[key],
        };
    });
    // Context
    const { service, setService } = useContext(ServiceContext);
    // Refs
    const inputRef = React.useRef(null);
    // States
    const [optionsTypeService, setOptionsTypeService] = useState([]);
    const [fileList, setFileList] = useState([]);
    const files = fileList ? [...fileList] : [];
    const [showDetail, setShowDetail] = useState(true);

    const [serviceForm, setServiceForm] = useState({
        name: "",
        id_type_service: TipoDeServiciosEnum.CORRESPONDENCIA,
        id_state_service: EstadoServiciosEnum.SERVICIO_INCIADO,
        description: "",
        price: 0,
        cost: 0,
    });

    // Closure fuctions

    const handleChangeFile = (event) => {
        setFileList(event.target.files);
        console.log(event.target.files);
    };

    const handleChangeFileButton = (event) => {
        inputRef.current.click();
    };

    const handleChange = (event) => {
        setServiceForm({
            ...serviceForm,
            [event.target.name]: event.target.value,
        });
    };

    const finalizeServiceForm = () => {
        console.log(serviceForm.id_type_service);
        if (
            serviceForm.id_type_service ===
                TipoDeServiciosEnum.LOGISTICA_DE_MENSJERIA ||
            serviceForm.id_type_service ===
                TipoDeServiciosEnum.GESTION_DOCUMENTAL
        ) {
            setServicesAvailable((prev) => {
                prev.splice(
                    prev.indexOf(EstadoServiciosEnum.SERVICIO_MENSAJERIA),
                    1
                );

                return prev;
            });
            setServicesAvailable((prev) => {
                prev.splice(
                    prev.indexOf(EstadoServiciosEnum.SERVICIO_CON_CONTENIDO),
                    1
                );
                return prev;
            });
            setNextStep(EstadoServiciosEnum.SERVICIO_DIRECCION_CONFIRMADA);
        } else {
            setNextStep(EstadoServiciosEnum.SERVICIO_DIRECCION_CONFIRMADA);
        }
    };

    const submitForm = async (e) => {
        e.preventDefault();
        /*finalizeServiceForm();
        return;*/

        if (serviceForm.start_date === "") {
            alert("La fecha de inicio no puede estar vacía");
            return;
        }
        if (serviceForm.start_date_hours === "") {
            alert("La hora de inicio no puede estar vacía");
            return;
        }

        const date = `${serviceForm.start_date} ${serviceForm.start_date_hours}`;
        setServiceForm((prev) => {
            return {
                ...prev,
                start_date: moment(date)
                    .format("YYYY-MM-DD HH:mm:ss")
                    .toString(),
                start_date_hours: undefined,
            };
        });

        if (!files[0]) {
            alert("No se ha seleccionado ningún archivo");
            return;
        }
        const response = await uploadFile(files[0]);
        if (response.data === null) {
            alert("Error al subir el archivo");
            return;
        }
        const file = await response.data.name;
        console.log(file);
        setServiceForm({ ...serviceForm, archive: file });
        console.log(serviceForm);
        const responseService = await uploadService(serviceForm);
        if (responseService.data === null) {
            alert("Error al subir el servicio");
            return;
        }
        const service = await responseService.data;
        setServiceForm((prev) => {
            return {
                ...prev,
                service: service,
            };
        });
        finalizeServiceForm();
    };
    // Sync data
    useEffect(() => {}, []);

    const onHideAdd = () => setShowModalAdd(false);

    const addAddress = (id) => {
        setShowModalAdd(true);
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
                        <Input
                            name="name"
                            autoComplete="nameService"
                            handleChange={handleChange}
                        />
                    </div>
                    <div className="col-span-1">
                        <Label className="">Tipo de servicio</Label>
                        <SelectInput
                            options={typeServices}
                            name="id_type_service"
                            onChange={(e) =>
                                handleChange({
                                    target: {
                                        name: "id_type_service",
                                        value: e.value,
                                    },
                                })
                            }
                        />
                    </div>

                    <div className="col-span-1">
                        <Label>Fecha de inicio del Servicio</Label>
                        <Input
                            type="date"
                            name="start_date"
                            handleChange={handleChange}
                        />
                    </div>
                    <div className="col-span-1">
                        <Label>Hora de inicio del Servicio</Label>
                        <Input
                            type="time"
                            name="start_date_hours"
                            handleChange={handleChange}
                        />
                    </div>
                    {showDetail && (
                        <>
                            <div className="col-span-1">
                                <Label>Costo ($COP)</Label>
                                <CurrencyFormInput
                                    name="cost"
                                    onValueChange={(e) =>
                                        handleChange({
                                            target: { name: "cost", value: e },
                                        })
                                    }
                                />
                            </div>
                            <div className="col-span-1">
                                <Label>Precio ($COP)</Label>
                                <CurrencyFormInput
                                    name="price"
                                    onValueChange={(e) =>
                                        handleChange({
                                            target: { name: "price", value: e },
                                        })
                                    }
                                />
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
                        name="description"
                        id=""
                        cols="30"
                        rows="4"
                        onChange={handleChange}
                    ></textarea>
                    <div className="justify-center mt-3">
                        <Label>Archivos Adicionales</Label>
                        <input
                            ref={inputRef}
                            onChange={handleChangeFile}
                            style={{ display: "none" }}
                            className="mx-auto my-3 w-full"
                            type="file"
                            multiple
                        />
                    </div>

                    <Button type="Button" onClick={handleChangeFileButton}>
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
