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
import { deleteAddress as dAddress, getAddress } from "@/Utils/FetchAddress";
import moment from "moment/moment";
import TaskBox from "../FormUtils/TaskBox";
import { toast } from "react-toastify";
import { storeTask, deleteTask as dTaks, updateTask } from "@/Utils/FetchTask";

function TaskForm({
    setNextStep,
    api_token,
    pTasks = [],
    isEdit = false,
    user,
}) {
    const [showDetail, setShowDetail] = useState(false);
    const { serviceDTO, setServiceDTO } = useContext(ServiceContext);
    const [tasks, setTasks] = useState(pTasks);
    const [currentTask, setCurrentTask] = useState({
        name: "",
        entity: "",
        dependency: "",
        id_state: EstadoDeTareaEnum.PENDIENTE,
        id_address: -1,
        id_service: serviceDTO.service.id,
        desc: "",
        responsible: 1,
        dateLimit: "",
        hourLimit: "",
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
        setServiceDTO((prev) => ({ ...prev, address: {} }));
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
        if (currentTask.id_address === -1) {
            setCurrentTask((prev) => ({ ...prev, id_address: null }));
        }
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
            last_state_date: moment(new Date()).format("YYYY-MM-DD HH:mm:ss"),
            dateLimit: undefined,
            hourLimit: undefined,
            undefined: undefined,
            id_address:
                currentTask.id_address === null
                    ? undefined
                    : currentTask.id_address,
        };

        if (currentTask.dateLimit && currentTask.hourLimit) {
            task.limit_date = moment(
                currentTask.dateLimit + " " + currentTask.hourLimit
            ).format("YYYY-MM-DD HH:mm:ss");
        }

        if (task.id_address === -1) delete task.id_address;
        if (!!task.id) {
            updateTask(task).then((res) => {
                const [nTask, error] = res;
                if (error) {
                    toast.error(error);
                    return;
                }
                setTasks((prev) => [...prev, nTask]);
                setServiceDTO((prev) => ({
                    ...prev,
                    tasks: [...prev.tasks, nTask],
                    address: {},
                }));
            });
        } else {
            storeTask(task).then((res) => {
                if (res.error) {
                    toast.error(res.error);
                    return;
                }
                setTasks((prev) => [...prev, res.data]);
                setServiceDTO((prev) => ({
                    ...prev,
                    tasks: [...prev.tasks, res.data],
                    address: {},
                }));
            });
        }
        setCurrentTask({
            name: "",
            entity: "",
            dependency: "",
            id_state: EstadoDeTareaEnum.CREADO,
            id_address: -1,
            id_service: serviceDTO.service.id,
            desc: "",
            responsible: -1,
            dateLimit: "",
            hourLimit: "",
            last_state_date: moment(new Date()).format("YYYY-MM-DD HH:mm:ss"),
        });
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

    const deleteAddress = async (e) => {
        e.preventDefault();
        if (currentTask.id_address) {
            const [nTask, error] = await updateTask({
                ...currentTask,
                id_address: undefined,
            });
            if (error) {
                toast.error(error);
                return;
            }
            setCurrentTask(nTask);
        }
        dAddress(serviceDTO.address.id);
        setServiceDTO((prev) => ({ ...prev, address: {} }));
    };

    const deleteTask = (index) => {
        dTaks(index).then((res) => {
            if (res.error) {
                toast.error(res.error);
                return;
            }
            setTasks((prev) => prev.filter((task) => task.id !== index));
            setServiceDTO((prev) => ({
                ...prev,
                tasks: prev.tasks.filter((task) => task.id !== index),
            }));
            toast.info("Tarea eliminada");
        });
    };

    const onChange = (e) => {
        setCurrentTask((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const editTask = (task) => {
        console.log(task);
        setTasks((prev) => prev.filter((t) => t.id !== task.id));
        setCurrentTask({
            ...task,
            dateLimit: moment(task.limit_date).format("YYYY-MM-DD"),
            hourLimit: moment(task.limit_date).format("HH:mm"),
        });
        setServiceDTO((prev) => ({
            ...prev,
            tasks: prev.tasks.filter((t) => t.id !== task.id),
        }));
        getAddress(task.id_address).then((res) => {
            const [address, error] = res;
            if (error) {
                toast.error(res.error);
                return;
            }
            setServiceDTO((prev) => ({ ...prev, address: address }));
        });
    };

    const finalizar = () => {
        window.location.href = "/services";
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
                                max={50}
                                handleChange={onChange}
                                defaultValue={currentTask.name}
                                required={true}
                                onlyLetters={true}
                            />
                        </div>
                        <div className="col-span-1">
                            <Label>Empresa / Entidad Asociada</Label>
                            <Input
                                name="entity"
                                handleChange={onChange}
                                defaultValue={currentTask.entity}
                                required={true}
                                maxLength={50}
                            />
                        </div>
                        <div className="col-span-1">
                            <Label className="">Dependencia</Label>
                            <Input
                                name="dependency"
                                handleChange={onChange}
                                defaultValue={currentTask.dependency}
                                maxLength={50}
                            />
                        </div>
                        {/*<div className="col-span-1">
                            <Label>Excepciones (condiciones especiales)</Label>
                            <SelectInput isMulti={true} />
                        </div>*/}
                        {user.id_t_user === 1 && (
                            <div className="col-span-1">
                                <Label>Responsable</Label>
                                <SelectInput
                                    options={usersResponsibleAvailable}
                                    onChange={(e) =>
                                        onChange({
                                            target: {
                                                name: "responsible",
                                                value: e.value,
                                            },
                                        })
                                    }
                                    value={
                                        currentTask.responsible === -1
                                            ? ""
                                            : usersResponsibleAvailable.find(
                                                  (user) =>
                                                      user.value ===
                                                      currentTask.responsible
                                              )
                                    }
                                />
                            </div>
                        )}
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
                                        disabled={true}
                                        defaultValue={serviceDTO.address?.name}
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
                            value={currentTask.desc}
                            maxLength={255}
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
                        <TaskBox
                            task={task}
                            key={index}
                            onDelete={deleteTask}
                            editTask={editTask}
                        />
                    ))}

                <div className="flex flex-col w-full gap-4">
                    <div className="flex gap-4 my-5 mx-auto">
                        <Button className="" type="Button" onClick={previous}>
                            Volver
                        </Button>
                        <Button className="" onClick={finalizar}>
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
