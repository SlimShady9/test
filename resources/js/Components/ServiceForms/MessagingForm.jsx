import React, { useEffect, useState, useContext } from "react";
import { EstadoServiciosEnum } from "@/Constants/EstadoServiciosEnum";
("@/Constants/EstadoServiciosEnum");
import { Head } from "@inertiajs/inertia-react";
import Input from "../FormUtils/Input";
import Label from "../FormUtils/Label";
import { getOptionsTypeService } from "@/Utils/FetchApi";
import Button from "../FormUtils/Button";
import SelectInput from "../FormUtils/SelectInput";
import ServiceContext from "./useServiceContext";
import { storeMessaging, updateMessaging } from "@/Utils/FetchMessaging";

import {
    TransportadoraEnum,
    toStringTransportadorasEnum,
} from "@/Constants/TransportadorEnum";
import { TipoDeUsuariosEnum } from "@/Constants/TipoDeUsuariosEnum";

function MessagingForm({ currentStep, setNextStep, user, isEdit }) {
    const { serviceDTO, setServiceDTO } = useContext(ServiceContext);
    console.log(serviceDTO);
    const transportadorasSelect = Object.keys(TransportadoraEnum).map(
        (key) => ({
            label: toStringTransportadorasEnum(TransportadoraEnum[key]),
            value: TransportadoraEnum[key],
        })
    );
    
    const submitForm = async (e) => {
        e.preventDefault();
        if (isEdit) {
            const [response, error] = await updateMessaging(messaging);
            if (error) {
                toast.error("Error al subir el servicio");
                return;
            }
            const messaging2 = await response;
            setServiceDTO((prev) => {
                return { ...prev, messaging: messaging2 };
            });
            if (exit) {
                window.location.href = "/services";
                return;
            }
            if (user.id_t_user == TipoDeUsuariosEnum.ADMIN) {
                setNextStep(EstadoServiciosEnum.SERVICIO_USUARIOS_ASIGNADOS);
            } else {
                setNextStep(EstadoServiciosEnum.SERVICIO_CON_CONTENIDO);
            }
        } else {
            storeMessaging({
                ...messaging,
            }).then((res) => {
                if (res.error) {
                    toast.error(res.error);
                    return;
                }
                setServiceDTO((prev) => {
                    return { ...prev, messaging: res.data };
                });
                if (exit) {
                    window.location.href = "/services";
                    return;
                }
                if (user.id_t_user == TipoDeUsuariosEnum.ADMIN) {
                    setNextStep(
                        EstadoServiciosEnum.SERVICIO_USUARIOS_ASIGNADOS
                    );
                } else {
                    setNextStep(EstadoServiciosEnum.SERVICIO_CON_CONTENIDO);
                }
            });
        }
    };
    const [showDetail, setShowDetail] = useState(true);
    const [exit, setExit] = useState(false);

    const [messaging, setMessaging] = useState({
        name: serviceDTO.messaging.name,
        id_user: serviceDTO.messaging.id_user
            ? serviceDTO.messaging.id_user
            : user.id,
        id_service: serviceDTO.service.id,
        entity: serviceDTO.messaging.entity,
        charge: serviceDTO.messaging.charge,
        id_address: serviceDTO.address.id,
        dependency: serviceDTO.messaging.dependency,
        intern_order: serviceDTO.messaging.intern_order,
        transporter: serviceDTO.messaging.transporter,
        cost_center: serviceDTO.messaging.cost_center,
        id_transporter_tracking: serviceDTO.messaging.id_transporter_tracking,
        id: serviceDTO.messaging.id,
    });
    const id = EstadoServiciosEnum.SERVICIO_MENSAJERIA;

    const [optionsTypeService, setOptionsTypeService] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const options = await getOptionsTypeService();
        setOptionsTypeService(options);
    };

    const onChange = (e) => {
        setMessaging({ ...messaging, [e.target.name]: e.target.value });
    };

    if (currentStep !== id) {
        return <></>;
    }
    return (
        <>
            <Head title="Datos del servicio" />
            <h1 className="text-xl font-bold text-left mb-3">
                Información de Origen y Seguimiento
            </h1>
            <form className="gap-4" onSubmit={submitForm}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="col-span-1">
                        <Label>Nombre Remitente *</Label>
                        <Input
                            name="name"
                            defaultValue={messaging.name}
                            handleChange={onChange}
                            required={true}
                            maxLength={50}
                            minLength={3}
                        />
                    </div>
                    <div className="col-span-1">
                        <Label>Empresa / Entidad Asociada *</Label>
                        <Input
                            name="entity"
                            defaultValue={messaging.entity}
                            handleChange={onChange}
                            required={true}
                            maxLength={50}
                            minLength={3}
                        ></Input>
                    </div>
                    <div className="col-span-1">
                        <Label className="">Cargo del Remitente *</Label>
                        <Input
                            name="charge"
                            defaultValue={messaging.charge}
                            handleChange={onChange}
                            required={true}
                            maxLength={50}
                            minLength={3}
                        />
                    </div>
                    <div className="col-span-1">
                        <Label>Centro de Costos *</Label>
                        <Input
                            name="cost_center"
                            defaultValue={messaging.cost_center}
                            handleChange={onChange}
                            required={true}
                            maxLength={100}
                        />
                    </div>
                    <div className="col-span-1">
                        <Label>Dependencia *</Label>
                        <Input
                            name="dependency"
                            defaultValue={messaging.dependency}
                            handleChange={onChange}
                            required={true}
                            maxLength={30}
                        />
                    </div>
                    <div className="col-span-1">
                        <Label>Orden interna</Label>
                        <Input
                            name="intern_order"
                            defaultValue={messaging.intern_order}
                            handleChange={onChange}
                            maxLength={30}
                        />
                    </div>

                    {showDetail && user.id_t_user === 1 && (
                        <>
                            <div className="col-span-1">
                                <Label className="">
                                    Transportadora Asociada
                                </Label>
                                <SelectInput
                                    options={transportadorasSelect}
                                    value={{
                                        value: messaging.transporter,
                                        label: toStringTransportadorasEnum(
                                            TransportadoraEnum[
                                                messaging.transporter?.toUpperCase()
                                            ]
                                        ),
                                    }}
                                    onChange={(e) => {
                                        onChange({
                                            target: {
                                                name: "transporter",
                                                value: e.label,
                                            },
                                        });
                                    }}
                                />
                            </div>
                            <div className="col-span-1">
                                <Label>Número de Seguimiento</Label>
                                <Input
                                    name="id_transporter_tracking"
                                    defaultValue={
                                        messaging.id_transporter_tracking
                                    }
                                    handleChange={onChange}
                                    maxLength={255}
                                />
                            </div>
                        </>
                    )}
                </div>
                <div className="flex flex-col w-full gap-4">
                    <div className="flex gap-4 my-5 mx-auto">
                        <Button
                            className=""
                            type="submit"
                            onClick={() => setExit(false)}
                        >
                            Guardar y continuar
                        </Button>
                        <Button
                            className=""
                            type="submit"
                            onClick={() => setExit(true)}
                        >
                            Guardar y salir
                        </Button>
                    </div>
                </div>
            </form>
        </>
    );
}

export default MessagingForm;
