import react, { useEffect, useState, useRef } from "react";
import Authenticated from "@/Layouts/Authenticated";
import ApplicationLogo from "@/Components/ApplicationLogo";
import Label from "@/Components/FormUtils/Label";
import Button from "@/Components/FormUtils/Button";
import SignatureCanvas from "react-signature-canvas";
import { getContent } from "@/Utils/FetchContent";
import { toStringTipoDeServiciosEnum } from "@/Constants/TipoDeServiciosEnum";
import { toStringTipoDeCargaEnum } from "@/Constants/TipoDeCargaEnum";
import { toStringExcepcionesEnum } from "@/Constants/ExcepcionesEnum";
import {
    EstadoDeTareaEnum,
    toStringEstadoDeTareaEnum,
} from "@/Constants/EstadoDeTareaEnum";
import axios from "axios";
import { dataURLtoFile } from "@/Utils/Functions";
import { updateService } from "@/Utils/FetchService";
import { uploadFile } from "@/Utils/FetchFile";
import { toast } from "react-toastify";
import ButtonGroup from "@/Components/FormUtils/ButtonGroup";
import { FaEraser, FaPrint, FaSave, FaTrash } from "react-icons/fa";
import { getAddressByTask } from "@/Utils/FetchAddress";
import { getTask, updateTask } from "@/Utils/FetchTask";
import { useReactToPrint } from "react-to-print";
import { getOrder } from "@/Utils/FetchOrder";
import SelectInput from "@/Components/FormUtils/SelectInput";
import { getUser } from "@/Utils/FetchUsers";
import {
    EstadoExceptionTaskEnum,
    toStringEstadoExceptionTaskEnum,
} from "@/Constants/EstadoExceptionTaskEnum";
import ReactLoading from "react-loading";
import React from "react";
import { Link } from "@inertiajs/inertia-react";

export default function DeliveryProof(props) {
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    const [mounted, setMounted] = useState(false);
    const [exception, setException] = useState();
    const [sigPad, setSigPad] = useState(null);
    const [content, setContent] = useState([]);
    const [pri, setPri] = useState();
    const [order, setOrder] = useState([]);
    const [userS, setUserS] = useState([]);
    const [service, setService] = useState({});
    const [message, setMessage] = useState([]);
    const [tasks, setTasks] = useState([]);
    const [address, setAddress] = useState([]);
    const [id, setId] = useState(props.serviceId);

    const userByService = (id) => {
        getOrder(id).then(([res, err]) => {
            setOrder(res);
            res.map((order) => {
                getUser(order.id_user).then((ress) => {
                    setUserS((prev) => [
                        ...prev,
                        {
                            label:
                                ress.name +
                                " " +
                                ress.surname +
                                " || " +
                                ress.doc,
                            value: order.id_user,
                        },
                    ]);
                });
            });
        });
    };
    const getService = (id) => {
        try {
            axios.get(`/api/service/${id}`).then((res) => {
                setService(res.data);
            });
        } catch (error) {
            console.log(error);
        }
    };

    const getMessaging = (id) => {
        try {
            axios.get(`/api/messaging/${id}`).then((res) => {
                setMessage(res.data[0]);
            });
        } catch (error) {
            console.log(error);
        }
    };

    const getAddress = (id) => {
        try {
            axios.get(`/api/service/${id}/address`).then((res) => {
                setAddress(res.data);
            });
        } catch (error) {
            console.log(error);
        }
    };

    const getTaskAddress = (idService) => {
        getTask(idService).then(([res, err]) => {
            res.map((task) => {
                if (task.id_address) {
                    getAddressByTask(task.id).then(([res, err]) => {
                        const newTask = {
                            ...task,
                            address: res,
                            isLoadingTask: false,
                        };
                        setTasks((oldTasks) => [...oldTasks, newTask]);
                    });
                } else {
                    setTasks((oldTasks) => [
                        ...oldTasks,
                        { ...task, isLoadingTask: false },
                    ]);
                }
            });
        });
    };

    const nextTaskState = (task, index) => {
        const newTask = {
            ...tasks[index],
            id_state:
                (task.id_state + 1 === Object.keys(EstadoDeTareaEnum).length + 1
                    ? 1
                    : task.id_state + 1) %
                (Object.keys(EstadoDeTareaEnum).length + 1),
        };
        setTasks((prev) => {
            const prevTasks = [...prev];
            prevTasks[index] = {
                ...prevTasks[index],
                isLoading: true,
                id_state:
                    (prev[index].id_state + 1 ===
                    Object.keys(EstadoDeTareaEnum).length + 1
                        ? 1
                        : task.id_state + 1) %
                    (Object.keys(EstadoDeTareaEnum).length + 1),
            };
            return prevTasks;
        });
        updateTask(newTask).then((res) => {
            const [nTask, error] = res;
            if (error) {
                toast.error(error);
                return;
            }
            setTasks((prev) =>
                prev.map((task) =>
                    task.id == nTask.id
                        ? { ...nTask, isLoading: false }
                        : { ...task, isLoading: false }
                )
            );
            getService(id);
        });
    };

    const clear = () => {
        if (!sigPad) {
            toast.warn("No se ha cargado la firma");
            return;
        }
        sigPad.clear();
    };

    const completeID = (id) => {
        var conv = id.toString().padStart(4, "0");
        return conv;
    };

    const getLastTaskDate = () => {
        tasks.map((task) => {
            if (task == tasks[tasks.length - 1]) {
                return task.limit_date;
            }
        });
    };

    const handleException = (e) => {
        e.preventDefault();
        setService((prev) => ({ ...prev, id_exception: e.target.value }));
    };

    useEffect(() => {
        if (!mounted) {
            setMounted(true);
            getService(id);
            getMessaging(id);
            getTaskAddress(id);
            getAddress(id);
            userByService(id);
            getContent(id).then((data) => {
                const [res, error] = data;
                setContent(res);
            });
        }
    }, []);

    const fechaActual = (separator) => {
        let newDate = new Date();
        let date = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();
        return `${date}${separator}${
            month < 10 ? `0${month}` : `${month}`
        }${separator}${year}`;
    };

    const storeSignature = async (e) => {
        e.preventDefault();
        var Obsevation = e.target.Obsevation.value;
        service.id_exception = e.target.exception.value;
        service.description = service.description + " | " + Obsevation;
        const file = dataURLtoFile(sigPad.toDataURL(), "signature.png");
        const { status, data } = await uploadFile(file);
        if (status === 200) {
            const newService = { ...service, signature: data.name };
            const [res, error] = await updateService(newService);
            if (error) {
                toast.error("Error al guardar la firma");
                return;
            }
            toast.success("Firma guardada correctamente");
            setService(res);
        }
    };

    const deleteSignature = async () => {
        const newService = { ...service, signature: null };
        const [res, error] = await updateService(newService);
        if (error) {
            toast.error("Error al eliminar la firma");
            return;
        }
        toast.success("Firma eliminada correctamente");
        setService(res);
    };

    return (
        <>
            <Authenticated {...props}>
                <form className="gap-4" onSubmit={storeSignature}>
                    <div className="">
                        <div className="mt-5 w-1000 text-center text-3xl grid grid-rows-2">
                            <Label>Prueba de Entrega de: </Label>
                            {service.name}
                        </div>
                        <div
                            ref={componentRef}
                            className="grid grid-cols-2 mx-auto w-11/12 md:w-4/5 my-5 border bg-semitransparent"
                        >
                            <div className="row-span-2  mx-auto my-5">
                                <ApplicationLogo />
                            </div>
                            <div className="grid border-l">
                                <Label className=" text-center text-xl my-auto">
                                    SERVICURRIER
                                </Label>
                            </div>
                            <div className="grid border-t border-l">
                                <Label className=" text-center my-auto">
                                    Prueba de Entrega
                                </Label>
                            </div>
                            <div className="col-span-2 sm:col-span-1 border-t">
                                <div className="bg-gray-dark text-center text-white">
                                    {" "}
                                    Remitente
                                </div>
                                {message && address && (
                                    <>
                                        <div className="mt-3">
                                            <div className="m-2">
                                                {message.entity}
                                            </div>
                                            <div className="m-2">
                                                {message.name}, {message.charge}
                                            </div>
                                            <div className="m-2">
                                                {address.country},{" "}
                                                {address.region}, {address.city}
                                            </div>
                                            <a
                                                className="m-2 text-blue-primary underline font-bold"
                                                target="_blank"
                                                href={
                                                    "https://www.google.com/maps/search/" +
                                                    address.city +
                                                    "," +
                                                    address.addr
                                                }
                                            >
                                                {address.addr}
                                            </a>
                                            <div className="m-2">
                                                {address.addr_detail}
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                            <div className="col-span-2 sm:col-span-1 grid grid-cols-2 border-t sm:border-l">
                                <Label className="col-span-2 text-center bg-gray-servi">
                                    No. de Guía
                                </Label>
                                <Label className="col-span-2 text-center bg-gray-servi">
                                    {service.tracking_id}
                                </Label>
                                <Label className="mr-2 m-auto">Nombre:</Label>
                                <div className="ml-2 m-auto">
                                    {service.name}
                                </div>
                                <Label className="mr-2 m-auto">
                                    Impresión:
                                </Label>
                                <div className="ml-2 m-auto">
                                    {fechaActual("/")}
                                </div>
                                <Label className="mr-2 m-auto">Inicio:</Label>
                                <div className="ml-2 m-auto">
                                    {service.start_date}
                                </div>
                                <Label className="mr-2 m-auto">
                                    Finalización:
                                </Label>
                                <div className="ml-2 m-auto">
                                    {service.end_date}
                                </div>
                                <Label className="mr-2 m-auto">
                                    Tipo de Servicio:
                                </Label>
                                <div className="ml-2 m-auto">
                                    {toStringTipoDeServiciosEnum(
                                        service.id_type_service
                                    )}
                                </div>
                                {message && (
                                    <>
                                        <Label className="mr-2 m-auto">
                                            Orden Interna:
                                        </Label>
                                        <div className="ml-2 m-auto">
                                            {message.intern_order}
                                        </div>
                                        <Label className="row-span-2 text-right mr-2 my-auto">
                                            Cargar a:
                                        </Label>
                                        <div className="text-left ml-2 my-auto">
                                            {message.cost_center}
                                        </div>
                                        <div className="text-left ml-2 my-auto">
                                            {message.dependency}
                                        </div>
                                    </>
                                )}
                            </div>
                            <div className="col-span-2 bg-gray-dark text-center text-white">
                                Destinatario(s)
                            </div>
                            {tasks.map((task, index) => (
                                <React.Fragment key={index}>
                                    <div
                                        className="grid grid-cols-4 col-span-2 text-left m-2  border-b-2 border-gray-dark border-dotted"
                                        key={index}
                                    >
                                        <ul className="col-span-4 sm:col-span-3">
                                            <li className="mt-2 border-l-4 border-gray-servi">
                                                {index + 1}. {task.name},{" "}
                                                {task.entity}, {task.dependency}
                                            </li>
                                            {task.address && (
                                                <div className="mt-2 text-center">
                                                    <a
                                                        className="text-blue-primary underline font-bold"
                                                        target="_blank"
                                                        href={
                                                            "https://www.google.com/maps/search/" +
                                                            task.address.city +
                                                            ",+" +
                                                            task.address.addr
                                                        }
                                                    >
                                                        {task.address.addr} ||{" "}
                                                        {task.limit_date}
                                                    </a>
                                                </div>
                                            )}
                                            <li className="mt-2 text-sm">
                                                {task.desc}
                                            </li>
                                        </ul>
                                        <div className="col-span-4 sm:col-span-1 flex ">
                                            <Button
                                                type="button"
                                                onClick={() =>
                                                    nextTaskState(task, index)
                                                }
                                                className="text-center sm:tracking-tighter mx-auto my-2 text-xs h-16 bg-yellow-cream"
                                            >
                                                {task.isLoading && (
                                                    <ReactLoading
                                                        type="spin"
                                                        height={40}
                                                        width={40}
                                                        color="#808080"
                                                    />
                                                )}
                                                {!task.isLoading &&
                                                    toStringEstadoDeTareaEnum(
                                                        Number(
                                                            tasks[index]
                                                                .id_state
                                                        )
                                                    )}
                                            </Button>
                                        </div>
                                    </div>
                                </React.Fragment>
                            ))}
                            {message && (
                                <>
                                    <div className="col-span-2 text-center bg-gray-dark text-white border-t border-b">
                                        Contenido
                                    </div>
                                    <div className="col-span-2 text-center bg-gray-servi border-gray-servi border-b-2">
                                        <Label>
                                            TRANSPORTADORA:{" "}
                                            {message.transporter}
                                        </Label>
                                    </div>
                                    <div className="col-span-2 text-center bg-gray-servi border-gray-servi border-b-2">
                                        <Label>
                                            ID DE SEGUIMIENTO:{" "}
                                            {message.id_transporter_tracking}
                                        </Label>
                                    </div>
                                </>
                            )}
                            {content && (
                                <>
                                    <div className="col-span-2 sm:col-span-1 text-center border-gray-servi border-r-2">
                                        <div className="border-gray-servi border-b-2">
                                            <div className="col-span-3 border-gray-servi border-b-2">
                                                <Label>VOLUMEN:</Label>{" "}
                                                {content?.length *
                                                    content?.width *
                                                    content?.height}{" "}
                                                cm³
                                            </div>
                                            <div className="border-gray-servi">
                                                <div className="row-span-2 grid grid-cols-3  my-3">
                                                    <div className="m-auto border-gray-servi border-b-2">
                                                        <Label>Alto</Label>
                                                    </div>
                                                    <div className="m-auto border-gray-servi border-b-2">
                                                        <Label>Ancho</Label>
                                                    </div>
                                                    <div className="m-auto border-gray-servi border-b-2">
                                                        <Label>Largo</Label>
                                                    </div>
                                                    <div className="m-auto">
                                                        {content?.length} cm
                                                    </div>
                                                    <div className="m-auto">
                                                        {content?.width} cm
                                                    </div>
                                                    <div className="m-auto">
                                                        {content?.height} cm
                                                    </div>
                                                </div>
                                                <div className="grid grid-cols-2 sm:grid-cols-1">
                                                    <div className="grid grid-cols-2 border-gray-servi border-t-2">
                                                        <Label className="mr-2 m-auto">
                                                            PESO UNITARIO:
                                                        </Label>
                                                        <div className="ml-2 m-auto">
                                                            {
                                                                content?.unit_weight
                                                            }{" "}
                                                            Kg
                                                        </div>
                                                    </div>
                                                    <div className="grid grid-cols-2 border-gray-servi border-t-2">
                                                        <Label className="mr-2 m-auto">
                                                            UNIDADES:
                                                        </Label>
                                                        <div className="ml-2 m-auto">
                                                            {content?.units}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {content && (
                                        <>
                                            <div className="col-span-2 sm:col-span-1  grid grid-cols-2 text-center">
                                                <div className="flex col-span-2 border-gray-servi border-b-2">
                                                    <div className="m-auto">
                                                        <Label className="row-span-2">
                                                            TIPO DE CONTENIDO:
                                                        </Label>
                                                        <div className="row-span-2 text-center">
                                                            {toStringTipoDeCargaEnum(
                                                                content.t_carga
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex col-span-2 border-gray-servi border-b-2">
                                                    <div className="m-auto">
                                                        <Label className="row-span-2">
                                                            DICE CONTENER:
                                                        </Label>
                                                        <div className="row-span-2 text-center">
                                                            {content.content}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex col-span-2 border-gray-servi border-b-2">
                                                    <div className="m-auto">
                                                        <Label className="row-span-2">
                                                            VALOR COMERCIAL:
                                                        </Label>
                                                        <div className="row-span-2">
                                                            $
                                                            {" " +
                                                                content.commercial_value}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )}
                                    <div className="col-span-2 m-auto">
                                        <Label>EXCEPCIÓN DEL SERVICIO: </Label>
                                    </div>
                                    <div className="col-span-2 m-auto">
                                        {content &&
                                            content.id_exception &&
                                            content.id_exception
                                                .split("")
                                                .map((n, i) => (
                                                    <span key={i}>
                                                        {toStringExcepcionesEnum(
                                                            Number(n)
                                                        )}
                                                        {i + 1 <
                                                            content.id_exception.split(
                                                                ""
                                                            ).length && ", "}
                                                    </span>
                                                ))}
                                    </div>
                                </>
                            )}
                            <div className="col-span-2 text-center bg-gray-dark text-white border-t">
                                Excepción de entrega
                            </div>
                            <div className="col-span-2 grid grid-cols-2 lg:grid-cols-4 items-center">
                                <div>
                                    <input
                                        type="radio"
                                        value="1"
                                        className="mx-2"
                                        defaultChecked={
                                            service.id_exception ==
                                            EstadoExceptionTaskEnum.DESCONOCIDO
                                        }
                                        onClick={() =>
                                            setService((prev) => ({
                                                ...prev,
                                                id_exception:
                                                    EstadoExceptionTaskEnum.DESCONOCIDO,
                                            }))
                                        }
                                        name="exception"
                                    />
                                    <label>
                                        {toStringEstadoExceptionTaskEnum(
                                            EstadoExceptionTaskEnum.DESCONOCIDO
                                        )}
                                    </label>
                                </div>
                                <div>
                                    <input
                                        type="radio"
                                        value="2"
                                        className="mx-2"
                                        defaultChecked={
                                            service.id_exception ==
                                            EstadoExceptionTaskEnum.DIRECCION_ERRADA
                                        }
                                        name="exception"
                                        onClick={() =>
                                            setService((prev) => ({
                                                ...prev,
                                                id_exception:
                                                    EstadoExceptionTaskEnum.DIRECCION_ERRADA,
                                            }))
                                        }
                                    />
                                    <label>
                                        {toStringEstadoExceptionTaskEnum(
                                            EstadoExceptionTaskEnum.DIRECCION_ERRADA
                                        )}
                                    </label>
                                </div>
                                <div>
                                    <input
                                        type="radio"
                                        value="3"
                                        className="mx-2"
                                        defaultChecked={
                                            service.id_exception ==
                                            EstadoExceptionTaskEnum.NO_RECIBE
                                        }
                                        onClick={() =>
                                            setService((prev) => ({
                                                ...prev,
                                                id_exception:
                                                    EstadoExceptionTaskEnum.NO_RECIBE,
                                            }))
                                        }
                                        name="exception"
                                    />
                                    <label>
                                        {toStringEstadoExceptionTaskEnum(
                                            EstadoExceptionTaskEnum.NO_RECIBE
                                        )}
                                    </label>
                                </div>
                                <div>
                                    <input
                                        type="radio"
                                        value="4"
                                        className="mx-2"
                                        defaultChecked={
                                            service.id_exception ==
                                            EstadoExceptionTaskEnum.REHUSADO
                                        }
                                        onClick={() =>
                                            setService((prev) => ({
                                                ...prev,
                                                id_exception:
                                                    EstadoExceptionTaskEnum.REHUSADO,
                                            }))
                                        }
                                        name="exception"
                                    />
                                    <label>
                                        {toStringEstadoExceptionTaskEnum(
                                            EstadoExceptionTaskEnum.REHUSADO
                                        )}
                                    </label>
                                </div>
                            </div>
                            <div className="col-span-2 text-center bg-gray-dark text-white border-t">
                                Descripción del Servicio
                            </div>
                            <div className="col-span-2 text-center">
                                <div className="text-justify m-2">
                                    {service.description}
                                </div>
                            </div>
                            <div className="col-span-2">
                                <div className="text-center bg-gray-dark text-white">
                                    Recibido Por
                                </div>
                                <div className="text-center bg-gray-servi">
                                    <SelectInput options={userS} />
                                </div>
                            </div>
                            <div className="col-span-2 border-t-2 border-gray-servi grid">
                                <Label className="text-left mx-auto">
                                    Firma:
                                </Label>
                                <div className="col-span-1 text-center text-gray-dark border mx-auto">
                                    {service.signature && (
                                        <img
                                            className="bg-white"
                                            src={`/api/file/${service.signature}`}
                                            alt=""
                                        />
                                    )}
                                    {!service.signature && (
                                        <SignatureCanvas
                                            canvasProps={{
                                                width: 300,
                                                height: 100,
                                                className: "sigCanvas bg-white",
                                            }}
                                            clearOnResize={false}
                                            ref={(ref) => {
                                                setSigPad(ref);
                                            }}
                                        />
                                    )}
                                </div>
                                <div className="m-2 text-xs text-center text-gray-dark border-t border-dotted">
                                    <div className="ml-2">
                                        Autorizo tratamiento de datos
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-2 border-t-2 sm:border-l-2 border-gray-servi">
                                <Label className="text-left m-2">
                                    Observaciones Adicionales:
                                </Label>
                                <div className="m-2">
                                    <textarea
                                        className="h-24 w-full text-sm mx-auto"
                                        name="Obsevation"
                                    />
                                </div>
                            </div>
                        </div>
                        <ButtonGroup
                            listButtons={[
                                {
                                    onClick: handlePrint,
                                    icon: <FaPrint />,
                                    text: "Imprimir Prueba",
                                },
                                {
                                    onClick: () => {},
                                    icon: <FaSave />,
                                    type: "submit",
                                    text: "Guardar Prueba",
                                },
                                {
                                    onClick: clear,
                                    icon: <FaEraser />,
                                    text: "Limpiar Firma",
                                },
                                {
                                    onClick: deleteSignature,
                                    icon: <FaTrash />,
                                    text: "Borrar Firma",
                                },
                            ]}
                        />
                    </div>
                    <div id="ifmcontentstoprint"></div>
                    <iframe id="ifmcontentstoprint"></iframe>
                </form>
            </Authenticated>
        </>
    );
}
const rootElement = document.getElementById("root");
