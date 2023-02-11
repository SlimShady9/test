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
import { storeMessaging } from "@/Utils/FetchMessaging";

import {
    TransportadoraEnum,
    toStringTransportadorasEnum,
} from "@/Constants/TransportadorEnum";

function MessagingForm({ currentStep, setNextStep , user}) {

    const { serviceDTO, setServiceDTO } = useContext(ServiceContext);
    const transportadorasSelect = Object.keys(TransportadoraEnum).map(
        (key) => ({
            label: toStringTransportadorasEnum(TransportadoraEnum[key]),
            value: TransportadoraEnum[key],
        })
    );
    const submitForm = (e) => {
        e.preventDefault();
        storeMessaging({
            ...messaging,
        }).then((res) => {
            if (res.error) {
                toast.error(res.error);
                return;
            }
            setNextStep(EstadoServiciosEnum.SERVICIO_USUARIOS_ASIGNADOS);
        });
    };
    const [showDetail, setShowDetail] = useState(true);
    const [messaging, setMessaging] = useState({
        name: null,
        id_user: user,
        id_service: serviceDTO.service.id,
        entity: null,
        charge: null,
        id_address: serviceDTO.address.id,
        dependency: null,
        intern_order: null,
        transporter:null,
        cost_center: null,
        id_transporter_tracking: null,
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
                        <Label>Nombre Remitente</Label>
                        <Input
                            name="name"
                            defaultValue={messaging.name}
                            handleChange={onChange}
                        />
                    </div>
                    <div className="col-span-1">
                        <Label>Empresa / Entidad Asociada</Label>
                        <Input
                            name="entity"
                            defaultValue={messaging.entity}
                            handleChange={onChange}
                        ></Input>
                    </div>
                    <div className="col-span-1">
                        <Label className="">Cargo del Remitente</Label>
                        <Input
                        name="charge"
                        defaultValue={messaging.charge}
                        handleChange={onChange}
                        />
                    </div>
                    <div className="col-span-1">
                        <Label>Centro de Costos</Label>
                        <Input
                            name="cost_center"
                            defaultValue={messaging.cost_center}
                            handleChange={onChange}
                        />
                    </div>
                    <div className="col-span-1">
                        <Label>Dependencia</Label>
                        <Input
                            name="dependency"
                            defaultValue={messaging.dependency}
                            handleChange={onChange}
                        />
                    </div>
                    <div className="col-span-1">
                        <Label>Orden interna</Label>
                        <Input
                            name="intern_order"
                            defaultValue={messaging.intern_order}
                            handleChange={onChange}
                        />
                    </div>

                    {showDetail && (
                        <>
                            <div className="col-span-1">
                                <Label className="">
                                    Transportadora Asociada
                                </Label>
                                <SelectInput 
                            options={transportadorasSelect}
                            onChange={(e) => {
                                onChange({
                                    target: { name: "transporter", value: e.label },
                                });
                            }}/>
                            </div>
                            <div className="col-span-1">
                                <Label>Número de Seguimiento</Label>
                                <Input
                                    name="id_transporter_tracking"
                                    defaultValue={messaging.id_transporter_tracking}
                                    handleChange={onChange}
                                />
                            </div>
                        </>
                    )}
                </div>
                <div className="flex flex-col w-full gap-4">
                    <div className="flex gap-4 my-5 mx-auto">
                        <Button className="" type="submit">
                            Guardar y continuar
                        </Button>
                    </div>
                </div>
            </form>
        </>
    );
}

export default MessagingForm;
