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
import { EstadoDeTareaEnum } from "@/Constants/EstadoDeTareaEnum";
import ServiceContext from "./useServiceContext";
import { deleteAddress as dAddress } from "@/Utils/FetchAddress";
import moment from "moment/moment";
import TaskBox from "../FormUtils/TaskBox";

function TaskForm({ setNextStep, api_token }) {
    const [showDetail, setShowDetail] = useState(false);
    const { serviceDTO, setServiceDTO } = useContext(ServiceContext);

    const [tasks, setTasks] = useState([]);
    const [currentTask, setCurrentTask] = useState({
        name: "Juanda Florez",
        entity: "Banco de la República",
        dependency: "Banco de la República 2",
        id_state: EstadoDeTareaEnum.CREADO,
        id_address: -1,
        id_service: serviceDTO.service.id,
        desc: "Tarea de prueba",
        responsible: 1,
        dateLimit: "2021-05-05",
        hourLimit: "12:00",
        last_state_date: moment(new Date()).format("YYYY-MM-DD HH:mm:ss"),
    });

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
        console.log(currentTask);
        var task = {
            ...currentTask,
            limit_date: moment(
                currentTask.dateLimit + " " + currentTask.hourLimit
            ).format("YYYY-MM-DD HH:mm:ss"),
            last_state_date: moment(new Date()).format("YYYY-MM-DD HH:mm:ss"),
        };
        delete task.dateLimit;
        delete task.hourLimit;
        setTasks((prev) => [...prev, task]);
        setCurrentTask({
            name: "Juanda Florez",
            entity: "Banco de la República",
            dependency: "Banco de la República 2",
            id_state: EstadoDeTareaEnum.CREADO,
            id_address: -1,
            id_service: serviceDTO.service.id,
            desc: "Tarea de prueba",
            responsible: 1,
            dateLimit: "2021-05-05",
            hourLimit: "12:00",
            last_state_date: moment(new Date()).format("YYYY-MM-DD HH:mm:ss"),
        });

        //setNextStep(EstadoServiciosEnum.SERVICIO_PENDIENTE);
    };

    const onHideAdd = () => setShowModalAdd(false);

    const addAddress = (id) => {
        setShowModalAdd(true);
    };

    const storeAddress = (address) => {
        setServiceDTO((prev) => ({ ...prev, address: address }));
        setCurrentTask((prev) => ({ ...prev, id_address: address.id }));
        onHideAdd();
    };

    const deleteAddress = () => {
        dAddress(serviceDTO.address.id);
        setServiceDTO((prev) => ({ ...prev, address: {} }));
    };

    const onChange = (e) => {
        setCurrentTask((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
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
                            <Input
                                name="name"
                                handleChange={onChange}
                                defaultValue={currentTask.name}
                            />
                        </div>
                        <div className="col-span-1">
                            <Label>Empresa / Entidad Asociada</Label>
                            <Input
                                name="entity"
                                handleChange={onChange}
                                defaultValue={currentTask.entity}
                            />
                        </div>
                        <div className="col-span-1">
                            <Label className="">Dependencia</Label>
                            <Input
                                name="dependency"
                                handleChange={onChange}
                                defaultValue={currentTask.dependency}
                            />
                        </div>
                        {/*<div className="col-span-1">
                            <Label>Excepciones (condiciones especiales)</Label>
                            <SelectInput isMulti={true} />
                        </div>*/}
                        <div className="col-span-1">
                            <Label>Responsable</Label>
                            <SelectInput
                                options={usersResponsibleAvailable}
                                onChange={(e) =>
                                    onChange({
                                        target: "responsible",
                                        value: e.value,
                                    })
                                }
                            />
                        </div>
                        <div className="grid grid-cols-2 col-span-2 justify-center">
                            <Label className="col-span-2">
                                Fecha y Hora Límite
                            </Label>
                            <div className="flex gap-4 col-span-2">
                                <div className="w-2/3">
                                    <Input
                                        name="dateLimit"
                                        type="date"
                                        handleChange={onChange}
                                        defaultValue={currentTask.dateLimit}
                                    />
                                </div>
                                <div className="w-1/3">
                                    <Input
                                        name="hourLimit"
                                        type="time"
                                        handleChange={onChange}
                                        defaultValue={currentTask.hourLimit}
                                    />
                                </div>
                            </div>
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
                            name="desc"
                            id=""
                            cols="30"
                            rows="4"
                            onChange={onChange}
                            defaultValue={currentTask.desc}
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
