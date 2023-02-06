import React, { useEffect, useState, useContext } from "react";
import { EstadoServiciosEnum } from "@/Constants/EstadoServiciosEnum";
("@/Constants/EstadoServiciosEnum");
import { Head } from "@inertiajs/inertia-react";
import Input from "../FormUtils/Input";
import Label from "../FormUtils/Label";
import Modal from "@/Components/Modal";
import Button from "../FormUtils/Button";
import SelectInput from "../FormUtils/SelectInput";
import AddressForm from "../AddressForm";
import { getOptionsTypeService } from "@/Utils/FetchApi";
import { getUsers } from "@/Utils/FetchUsers";
import { TipoDeUsuariosEnum } from "@/Constants/TipoDeUsuariosEnum";
import ServiceContext from "./useServiceContext";
import { deleteAddress as dAddress } from "@/Utils/FetchAddress";

function TaskForm({ setNextStep, api_token }) {
    const [showDetail, setShowDetail] = useState(false);
    const { serviceDTO, setServiceDTO } = useContext(ServiceContext);

    const [tasks, setTasks] = useState([]);

    const [usersResponsibleAvailable, setusersResponsibleAvailable] = useState(
        []
    );
    const [showModalAdd, setShowModalAdd] = useState("");

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
        const usersAvailable = await getUsers({
            id_t_user: TipoDeUsuariosEnum.ADMIN,
        });
        setusersResponsibleAvailable(
            usersAvailable.data.map((user) => ({
                label: user.email,
                value: user.id,
            }))
        );
    };

    const previous = (e) => {
        e.preventDefault();
        setNextStep(EstadoServiciosEnum.SERVICIO_MENSAJERIA);
    };

    const submitForm = (e) => {
        e.preventDefault();
        setNextStep(EstadoServiciosEnum.SERVICIO_PENDIENTE);
    };

    const onHideAdd = () => setShowModalAdd(false);

    const addAddress = (id) => {
        setShowModalAdd(true);
    };

    const storeAddress = (address) => {
        setServiceDTO((prev) => ({ ...prev, address: address }));
        onHideAdd();
    };

    const deleteAddress = () => {
        dAddress(serviceDTO.address.id);
        setServiceDTO((prev) => ({ ...prev, address: null }));
    };

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
                            <Input name="name" />
                        </div>
                        <div className="col-span-1">
                            <Label>Empresa / Entidad Asociada</Label>
                            <Input name="entity" />
                        </div>
                        <div className="col-span-1">
                            <Label className="">Dependencia</Label>
                            <Input name="dependency" />
                        </div>
                        {/*<div className="col-span-1">
                            <Label>Excepciones (condiciones especiales)</Label>
                            <SelectInput isMulti={true} />
                        </div>*/}
                        <div className="col-span-1">
                            <Label>Responsable</Label>
                            <SelectInput options={usersResponsibleAvailable} />
                        </div>
                        <div className="grid grid-cols-2 col-span-1 justify-center">
                            <Label className="col-span-2">
                                Fecha y Hora Límite
                            </Label>
                            <Input className="dateLimit" type="date" />
                            <Input className="hourLimit" type="time" />
                        </div>
                    </div>
                    <div className="flex flex-col w-full gap-4">
                        <div className="mt-3">
                            <Label>
                                Destino de la Tarea (en caso de que la requiera)
                            </Label>
                        </div>
                        {!serviceDTO.address?.id && (
                            <Button
                                className="mx-4"
                                type="button"
                                onClick={addAddress}
                            >
                                Agregar Dirección
                            </Button>
                        )}
                        {serviceDTO.address?.id && (
                            <div className="flex gap-4">
                                <div className="w-3/4">
                                    <Input
                                        defaultValue={serviceDTO.address?.name}
                                        disabled={true}
                                    />
                                </div>
                                <Button
                                    className="w-1/4"
                                    onClick={deleteAddress}
                                >
                                    Limpiar
                                </Button>
                            </div>
                        )}
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

                {/* Tareas agregadas*/}
                {tasks.length > 0 &&
                    tasks.map((task, index) => (
                        <TaskBox task={task} key={index} />
                    ))}

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
                    <AddressForm
                        api_token={api_token}
                        onSubmit={storeAddress}
                    />
                </Modal>
                <Head title="Datos del servicio" />
            </div>
        </>
    );
}

export default TaskForm;
