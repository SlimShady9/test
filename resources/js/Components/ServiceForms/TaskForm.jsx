import React, { useEffect, useState } from "react";
import { EstadoServiciosEnum } from "@/Constants/EstadoServiciosEnum";
("@/Constants/EstadoServiciosEnum");
import { Head } from "@inertiajs/inertia-react";
import Input from "../FormUtils/Input";
import Label from "../FormUtils/Label";
import Modal from "@/Components/Modal";
import { getOptionsTypeService } from "@/Utils/FetchApi";
import Button from "../FormUtils/Button";
import SelectInput from "../FormUtils/SelectInput";
import AddressForm from "../AddressForm";

function TaskForm({ currentStep, setNextStep, api_token }) {
    const id = EstadoServiciosEnum.SERVICIO_CON_DETALLE;

    const [showDetail, setShowDetail] = useState(false);

    const addPermisson = (e) => {
        setShowDetail(!showDetail);
    };

    const [optionsTypeService, setOptionsTypeService] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const options = await getOptionsTypeService();
        setOptionsTypeService(options);
    };

    const previous = (e) => {
        e.preventDefault();
        setNextStep(EstadoServiciosEnum.SERVICIO_MENSAJERIA);
    };

    const submitForm = (e) => {
        e.preventDefault();
        setNextStep(EstadoServiciosEnum.SERVICIO_PENDIENTE);
    };

    const [showModal, setShowModal] = useState("");
    const [showModalAdd, setShowModalAdd] = useState("");

    const onHide = () => setShowModal(false);

    const addTask = (id) => {
        setShowModal(true);
    };

    const onHideAdd = () => setShowModalAdd(false);

    const addAddress = (id) => {
        setShowModalAdd(true);
    };

    if (currentStep !== id) {
        return <></>;
    }

    return (
        <>
            <div className="mt-0">
                <h1 className="text-xl font-bold text-left mb-3">
                    Agregar Tareas
                </h1>
                <form className="gap-4" onSubmit={submitForm}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="col-span-1">
                            <Label>Nombre Destinatario</Label>
                            <Input></Input>
                        </div>
                        <div className="col-span-1">
                            <Label>Empresa / Entidad Asociada</Label>
                            <Input></Input>
                        </div>
                        <div className="col-span-1">
                            <Label className="">Dependencia</Label>
                            <Input></Input>
                        </div>
                        <div className="col-span-1">
                            <Label>Excepciones (condiciones especiales)</Label>
                            <SelectInput isMulti={true} />
                        </div>
                        <div className="col-span-1">
                            <Label>Responsable</Label>
                            <SelectInput />
                        </div>
                        <div className="grid grid-cols-2 col-span-1">
                            <Label className="col-span-2">
                                Fecha y Hora Límite
                            </Label>
                            <Input className="col-span-1" type="date" />
                            <Input className="col-span-1" type="time" />
                        </div>
                    </div>
                    <div className="flex flex-col w-full gap-4">
                        <div className="mt-3">
                            <Label>
                                Destino de la Tarea (en caso de que la requiera)
                            </Label>
                        </div>
                        <Button type="button" onClick={() => addAddress()}>
                            Agregar Dirección
                        </Button>
                        <div className="mt-3">
                            <Label>Descripción / Instrucciones</Label>
                        </div>
                        <textarea
                            className="m-1 rounded-md font-sans tracking-widest"
                            name="Descripcion"
                            id=""
                            cols="30"
                            rows="4"
                        ></textarea>
                    </div>
                    <div className="flex flex-col w-full gap-4">
                        <div className="flex gap-4 my-5 mx-auto">
                            <Button className="" type="submit">
                                Agregar
                            </Button>
                        </div>
                    </div>
                </form>

                <div className="flex flex-col w-full gap-4">
                    <div className="flex gap-4 my-5 mx-auto">
                        <Button className="" type="Button" onClick={previous}>
                            Volver
                        </Button>
                        <Button className="" type="submit">
                            Guardar y Continuar
                        </Button>
                    </div>
                </div>
                <Modal
                    onHide={onHideAdd}
                    show={showModalAdd}
                    title={"Agregar Dirección de Destino"}
                >
                    <AddressForm api_token={api_token} />
                </Modal>
                <Head title="Datos del servicio" />
            </div>
        </>
    );
}

export default TaskForm;
