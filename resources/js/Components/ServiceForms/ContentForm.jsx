import React, { useEffect, useState } from "react";
import { EstadoServiciosEnum } from "@/Constants/EstadoServiciosEnum";
("@/Constants/EstadoServiciosEnum");
import { Head } from "@inertiajs/inertia-react";
import Input from "../FormUtils/Input";
import Label from "../FormUtils/Label";
import { useContext } from "react";
import CurrencyFormInput from "../FormUtils/CurrencyFormInput";
import { getOptionsTypeService } from "@/Utils/FetchApi";
import Button from "../FormUtils/Button";
import SelectInput from "../FormUtils/SelectInput";
import {
    TipoDeCargaEnum,
    toStringTipoDeCargaEnum,
} from "@/Constants/TipoDeCargaEnum";
import {
    ExcepcionesEnum,
    toStringExcepcionesEnum,
} from "@/Constants/ExcepcionesEnum";
import { storeContent } from "@/Utils/FetchContent";
import { toast } from "react-toastify";
import ServiceContext from "./useServiceContext";

function ContentForm({ setNextStep ,isEdit = false }) {
    const { serviceDTO, setServiceDTO } = useContext(ServiceContext);

    const tiposDeCargaSelect = Object.keys(TipoDeCargaEnum).map((key) => ({
        label: toStringTipoDeCargaEnum(TipoDeCargaEnum[key]),
        value: TipoDeCargaEnum[key],
    }));

    const condicionesEspecialesSelect = Object.keys(ExcepcionesEnum).map(
        (key) => ({
            label: toStringExcepcionesEnum(ExcepcionesEnum[key]),
            value: ExcepcionesEnum[key],
        })
    );
    const [content, setContent] = useState({
            commercial_value: serviceDTO.content.commercial_value,
            content: serviceDTO.content.content,
            height: serviceDTO.content.height,
            id_exception: {
                label: Object.keys(ExcepcionesEnum).filter(k => ExcepcionesEnum[k]===serviceDTO.content.id_exception)[0],
                value: serviceDTO.content.id_exception,         
            },
            t_carga:{
                label: Object.keys(TipoDeCargaEnum).filter(k => TipoDeCargaEnum[k]===serviceDTO.content.t_carga)[0],
                value: serviceDTO.content.t_carga,         
            },
            unit_weight: serviceDTO.content.unit_weight,
            width: serviceDTO.content.width,
            units: serviceDTO.content.units,
            length: serviceDTO.content.length,
    });

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
        setNextStep(EstadoServiciosEnum.SERVICIO_CON_DETALLE);
    };

    const submitForm = (e) => {
        e.preventDefault();
        storeContent({
            ...content,
            id_exception: Number(content.id_exception),
            service: serviceDTO.service.id,
        }).then((res) => {
            if (res.error) {
                toast.error(res.error);
                return;
            }
            setNextStep(EstadoServiciosEnum.SERVICIO_CON_TAREAS);
        });
    };

    const onChange = (e) => {
        setContent({ ...content, [e.target.name]: e.target.value });
    };

    return (
        <>
            <Head title="Datos del servicio" />
            <h1 className="text-xl font-bold text-left mb-3">
                Declarar Contenido
            </h1>
            <form className="gap-4" onSubmit={submitForm}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="col-span-1">
                        <Label>Contenido Declarado</Label>
                        <Input
                            name="content"
                            defaultValue={content.content}
                            handleChange={onChange}
                        />
                    </div>
                    <div className="col-span-1">
                        <Label>Tipo de Carga</Label>
                        <SelectInput
                            options={tiposDeCargaSelect}
                            value={content.t_carga}
                            onChange={(e) => {
                                onChange({
                                    target: { name: "t_carga", value: e.value },
                                });
                            }}
                        />
                    </div>
                    <div className="col-span-1">
                        <Label className="">Unidades Declaradas</Label>
                        <Input
                            name="units"
                            defaultValue={content.units}
                            handleChange={onChange}
                        />
                    </div>
                    <div className="col-span-1">
                        <Label>Peso Unitario (Kg)</Label>
                        <Input
                            type="number"
                            name="unit_weight"
                            defaultValue={content.unit_weight}
                            handleChange={onChange}
                        />
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 col-span-1 gap-4 my-3">
                    <div className="col-span-1">
                        <Label>Largo (m)</Label>
                        <Input
                            type="number"
                            name="length"
                            defaultValue={content.length}
                            handleChange={onChange}
                        />
                    </div>
                    <div className="col-span-1">
                        <Label>Ancho (m)</Label>
                        <Input
                            type="number"
                            name="width"
                            defaultValue={content.width}
                            handleChange={onChange}
                        />
                    </div>
                    <div className="col-span-1">
                        <Label>Alto (m)</Label>
                        <Input
                            type="number"
                            name="height"
                            defaultValue={content.height}
                            handleChange={onChange}
                        />
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="col-span-1">
                        <Label>
                            Valor Comercial del Contenido (Por Unidad)
                        </Label>
                        <CurrencyFormInput
                            name="commercial_value"
                            defaultValue={content.commercial_value}
                            onValueChange={(e) =>
                                onChange({
                                    target: {
                                        name: "commercial_value",
                                        value: e,
                                    },
                                })
                            }
                        />
                    </div>
                    <div className="col-span-1">
                        <Label>Excepciones (condiciones especiales)</Label>
                        <SelectInput
                            isMulti={true}
                            options={condicionesEspecialesSelect}
                            value={content.id_exception}
                            onChange={(e) => {
                                onChange({
                                    target: {
                                        name: "id_exception",
                                        value: e
                                            .map((key) => key.value)
                                            .join(""),
                                    },
                                });
                            }}
                        />
                    </div>
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

export default ContentForm;
