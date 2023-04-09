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
import {
    getAddressByService,
    updateService,
    uploadService,
} from "@/Utils/FetchService";
import moment from "moment";
import { toast } from "react-toastify";
import { uploadFile, deleteFile as dFile } from "@/Utils/FetchFile";

function ServiceDataForm({
    currentStep,
    setNextStep,
    setServicesAvailable,
    isEdit = false,
    typeUser,
    idUser,
}) {
    const id = EstadoServiciosEnum.SERVICIO_INCIADO;

    const typeServices = Object.keys(TipoDeServiciosEnum).map((key) => {
        return {
            label: toStringTipoDeServiciosEnum(TipoDeServiciosEnum[key]),
            value: TipoDeServiciosEnum[key],
        };
    });
    // Context
    const { serviceDTO, setServiceDTO } = useContext(ServiceContext);

    // Refs
    const inputRef = React.useRef(null);
    // States
    const [optionsTypeService, setOptionsTypeService] = useState([]);
    const [hadFile, setHadFile] = useState(
        isEdit
            ? serviceDTO.service.archive !== null &&
                  serviceDTO.service.archive !== undefined
            : false
    );
    const [fileList, setFileList] = useState([]);
    const files = fileList ? [...fileList] : [];
    const [showDetail, setShowDetail] = useState(true);

    const [serviceForm, setServiceForm] = useState({
        id: serviceDTO.service.id,
        name: serviceDTO.service.name,
        id_type_service: serviceDTO.service.id_type_service || 0,
        id_state_service: EstadoServiciosEnum.SERVICIO_INCIADO,
        start_date:
            serviceDTO.service.start_date !== undefined &&
            serviceDTO.service.start_date !== null
                ? moment(
                      serviceDTO.service.start_date,
                      "yyyy-MM-DD HH:mm:ss"
                  ).format("yyyy-MM-DD")
                : moment().format("yyyy-MM-DD"),
        start_date_hours:
            serviceDTO.service.start_date !== undefined &&
            serviceDTO.service.start_date !== null
                ? moment(
                      serviceDTO.service.start_date,
                      "yyyy-MM-DD HH:mm:ss"
                  ).format("HH:mm:ss")
                : moment().format("HH:mm:ss"),
        description: serviceDTO.service.description,
        price: serviceDTO.service.price,
        cost: serviceDTO.service.cost,
        archive: serviceDTO.service.archive,
        originalArchive: serviceDTO.service.archive,
        hasFile:
            serviceDTO.service.archive !== null &&
            serviceDTO.service.archive !== undefined,
    });

    // Closure fuctions

    const handleChangeFile = (event) => {
        // If the file is bigger than 5MB then it will not be uploaded
        if (event.target.files[0].size > 5242880) {
            toast.warning(
                "El archivo es demasiado grande, por favor seleccione uno más pequeño"
            );
            return;
        }
        // If the file is not a pdf or an image then it will not be uploaded
        if (
            !event.target.files[0].type.includes("pdf") &&
            !event.target.files[0].type.includes("png") &&
            !event.target.files[0].type.includes("jpeg") &&
            !event.target.files[0].type.includes("jpg")
        ) {
            toast.warning(
                "El archivo no es un pdf o una imagen, por favor seleccione uno válido"
            );
            return;
        }
        setFileList(event.target.files);
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
        }
        setNextStep(EstadoServiciosEnum.SERVICIO_DIRECCION_CONFIRMADA);
    };

    const submitForm = async (e) => {
        e.preventDefault();
        /*finalizeServiceForm();
        return;*/

        if (serviceForm.start_date === "") {
            toast.warning("La fecha de inicio no puede estar vacía");
            return;
        }
        if (serviceForm.start_date_hours === "") {
            toast.warning("La hora de inicio no puede estar vacía");
            return;
        }

        const date =
            serviceForm.start_date + " " + serviceForm.start_date_hours;
        serviceForm.start_date = date;
        // hadFile is true
        console.log("hadFile", hadFile);
        console.log("files.length !== 0 ", files.length !== 0);

        if (files.length !== 0 && !hadFile) {
            serviceForm.archive = await addAddress();
        }
        if (!isEdit) {
            const response = await uploadService(serviceForm, idUser, typeUser);
            if (response.error) {
                toast.error("Error al subir el servicio");
                return;
            }
            const service = await response.data;
            setServiceForm(service);
            setServiceDTO((prev) => {
                return { ...prev, service: service };
            });
            finalizeServiceForm();
        } else {
            const data = await updateService(serviceForm);
            if (data.error) {
                toast.error("Error al subir el servicio");
                return;
            }
            setServiceForm(data[0]);
            setServiceDTO((prev) => {
                return { ...prev, service: data[0] };
            });
            finalizeServiceForm();
        }
    };
    // Sync data
    useEffect(() => {
        if (!!serviceDTO.service.archive && !!serviceDTO.service.id) {
            // load address details
            setFileList([{ name: serviceDTO.service.archive }]);
        }
    }, []);

    const addAddress = async () => {
        const response = await uploadFile(files[0]);
        if (response.data === null) {
            toast.error("Error al subir el archivo");
            return;
        }
        return await response.data.name;
    };

    const deleteFile = async () => {
        if (serviceForm.originalArchive) {
            const [response, err] = await dFile(serviceForm.originalArchive);
            if (err) {
                return;
            }
            setServiceForm({
                ...serviceForm,
                archive: null,
                originalArchive: null,
                hasFile: false,
            });
        }
        setFileList([]);
    };

    const verArchivo = (e) => {
        // Donwload file
        if (serviceForm.archive) {
            window.open("/api/file/" + serviceForm.archive, "_blank");
        }
    };

    if (currentStep !== id) {
        return <></>;
    }
    return (
        <>
            {serviceForm != undefined && currentStep === id && (
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
                                    defaultValue={serviceForm.name}
                                    handleChange={handleChange}
                                    required
                                    maxLength={50}
                                    alpaNumeric={true}
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
                                    value={{
                                        value: serviceForm.id_type_service,
                                        label: toStringTipoDeServiciosEnum(
                                            serviceForm.id_type_service
                                        ),
                                    }}
                                    required={true}
                                />
                            </div>

                            <div className="col-span-1">
                                <Label>Fecha de inicio del Servicio</Label>
                                <Input
                                    type="date"
                                    name="start_date"
                                    handleChange={handleChange}
                                    required={true}
                                    defaultValue={moment(
                                        serviceForm.start_date,
                                        "yyyy-MM-DD HH:mm:ss"
                                    )
                                        .format("yyyy-MM-DD")
                                        .toString()}
                                />
                            </div>
                            <div className="col-span-1">
                                <Label>Hora de inicio del Servicio</Label>
                                <Input
                                    type="time"
                                    name="start_date_hours"
                                    handleChange={handleChange}
                                    required={true}
                                    defaultValue={serviceForm.start_date_hours}
                                />
                            </div>
                            {showDetail && typeUser === 1 && (
                                <>
                                    <div className="col-span-1">
                                        <Label>Costo ($COP)</Label>
                                        <CurrencyFormInput
                                            name="cost"
                                            onValueChange={(e) =>
                                                handleChange({
                                                    target: {
                                                        name: "cost",
                                                        value: e,
                                                    },
                                                })
                                            }
                                            defaultValue={serviceForm.cost}
                                        />
                                    </div>
                                    <div className="col-span-1">
                                        <Label>Precio ($COP)</Label>
                                        <CurrencyFormInput
                                            name="price"
                                            onValueChange={(e) =>
                                                handleChange({
                                                    target: {
                                                        name: "price",
                                                        value: e,
                                                    },
                                                })
                                            }
                                            defaultValue={serviceForm.price}
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
                                defaultValue={serviceForm.description}
                            ></textarea>
                            <div className="justify-center mt-3">
                                <Label>Archivos Adicionales</Label>
                                <input
                                    ref={inputRef}
                                    onChange={handleChangeFile}
                                    style={{ display: "none" }}
                                    className="mx-auto my-3 w-full"
                                    type="file"
                                    accept="application/pdf, image/*"
                                />
                            </div>

                            <div className="flex">
                                <Button
                                    className="mx-3 w-2/3"
                                    type="Button"
                                    onClick={handleChangeFileButton}
                                >
                                    Selecciona un archivo
                                </Button>
                                <Button
                                    className={`mx-3 w-1/3`}
                                    type="Button"
                                    onClick={deleteFile}
                                >
                                    Limpiar
                                </Button>
                            </div>
                            {serviceForm.hasFile && files.length > 0 ? (
                                <div className="flex flex-col md:flex-row gap-4 w-full mx-3">
                                    <div className="md:w-8/12">
                                        <Input
                                            type="text"
                                            disabled={true}
                                            className="text-sm"
                                            defaultValue={`${files[0].name}`}
                                        />
                                    </div>
                                    <Button
                                        className="w-full md:w-3/12"
                                        type="button"
                                        onClick={verArchivo}
                                    >
                                        Ver archivo
                                    </Button>
                                </div>
                            ) : (
                                <ul>
                                    {files.map((file, i) => (
                                        <li key={i}>
                                            {file.name} {file.type && "-"}{" "}
                                            {file.type}
                                        </li>
                                    ))}
                                </ul>
                            )}
                            <div className="my-3 m-auto">
                                <Button className="" type="submit">
                                    Guardar y continuar
                                </Button>
                            </div>
                        </div>
                    </form>
                </>
            )}
        </>
    );
}

export default ServiceDataForm;
