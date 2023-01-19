import { EstadoServiciosEnum } from "@/Constants/EstadoServiciosEnum";
import React, { useState, useEffect } from "react";
import { useForm } from "@inertiajs/inertia-react";
import Label from "../FormUtils/Label";
import SelectInput from "../FormUtils/SelectInput";
import axios from "axios";
import Input from "../FormUtils/Input";
import Button from "../Button";
import { saveAddress } from "@/Utils/PostApi";

function AddressForm({ currentStep, setNextStep, api_token }) {
    const axiosConfig = {
        headers: {
            "X-CSCAPI-KEY": api_token,
        },
    };

    const { data, setData, processing, errors, reset } = useForm({
        name: "",
        country: { label: "", value: "" },
        region: { label: "", value: "" },
        city: { label: "", value: "" },
        addr: "",
        addr_detail: "",
        postal_code: "",
    });

    const id = EstadoServiciosEnum.SERVICIO_DIRECCION_CONFIRMADA;

    const [countries, setCountries] = useState([]);
    const [regions, setRegions] = useState([]);
    const [cities, setCities] = useState([]);

    useEffect(() => {
        if (!data.country?.value) {
            axios
                .get(
                    "https://api.countrystatecity.in/v1/countries",
                    axiosConfig
                )
                .then((res) => {
                    setCountries(res.data);
                });
        }
    }, []);

    useEffect(() => {
        setData({
            ...data,
            region: { label: "", value: "" },
            city: { label: "", value: "" },
        });
        if (data.country?.value && data.country.value != "") {
            axios
                .get(
                    `https://api.countrystatecity.in/v1/countries/${data.country.value}/states`,
                    axiosConfig
                )
                .then((res) => {
                    setRegions(res.data);
                });
        }
    }, [data.country]);

    useEffect(() => {
        setData({
            ...data,
            city: { label: "", value: "" },
        });
        if (
            data.country?.value &&
            data.region?.value &&
            !(data.country.value == "" || data.region.value == "")
        ) {
            axios
                .get(
                    `https://api.countrystatecity.in/v1/countries/${data.country.value}/states/${data.region.value}/cities`,
                    axiosConfig
                )
                .then((res) => {
                    setCities(res.data);
                });
        }
    }, [data.region]);

    const handleChange = (e, propName) => {
        let newData = { ...data };
        if (e.label) {
            newData[propName] = e;
            setData(newData);
        } else {
            setData({ ...data, [e.target.name]: e.target.value });
        }
    };

    const submit = (e) => {
        e.preventDefault();
        /* 
        saveAddress(data).then((res) => {
            setNextStep(EstadoServiciosEnum.SERVICIO_USUARIOS_ASIGNADOS);
        });

        */
        setNextStep(EstadoServiciosEnum.SERVICIO_USUARIOS_ASIGNADOS);
    };

    if (currentStep !== id) {
        return <></>;
    }
    return (
        <form onSubmit={submit}>
            <h1 className="text-xl font-bold text-left mb-3">
                Ingresa direccion de origen del servicio
            </h1>
            <div className="col-span-1 my-3">
                <Label forInput="name">Nombre del Lugar</Label>
                <Input
                    name="name"
                    handleChange={(e) => handleChange(e, "name")}
                />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="col-span-1">
                    <Label forInput="addr">Dirección</Label>
                    <Input
                        name="addr"
                        handleChange={(e) => handleChange(e, "addr")}
                    />
                </div>
                <div className="col-span-1">
                    <Label forInput="addr_detail">Detalles Dirección</Label>
                    <Input
                        name="addr_detail"
                        handleChange={(e) => handleChange(e, "addr_detail")}
                    />
                </div>
                <div className="col-span-1">
                    <Label forInput="country">País</Label>
                    <SelectInput
                        value={data.country}
                        preventDefault
                        onChange={(e) => handleChange(e, "country")}
                        options={countries.map((c) => ({
                            label: c.name,
                            value: c.iso2,
                        }))}
                    />
                </div>
                <div className="col-span-1">
                    <Label forInput="region">Región</Label>
                    <SelectInput
                        value={data.region}
                        onChange={(e) => handleChange(e, "region")}
                        options={regions.map((c) => ({
                            label: c.name,
                            value: c.iso2,
                        }))}
                    />
                </div>
                <div className="col-span-1">
                    <Label forInput="city">Ciudad</Label>
                    <SelectInput
                        name="city"
                        type="select"
                        value={data.city}
                        onChange={(e) => handleChange(e, "city")}
                        options={cities.map((c) => ({
                            label: c.name,
                            value: c.id,
                        }))}
                    />
                </div>
                <div className="col-span-1">
                    <Label forInput="postal_code">Localidad / Barrio</Label>
                    <Input
                        name="locality"
                        handleChange={(e) => handleChange(e, "locality")}
                    />
                </div>
                <div className="col-span-1">
                    <Label forInput="postal_code">Código postal</Label>
                    <Input
                        name="postal_code"
                        handleChange={(e) => handleChange(e, "postal_code")}
                    />
                </div>
            </div>

            <div className="flex justify-center">
                <Button processing={processing} type="submit" className="mt-3">
                    Siguente paso
                </Button>
            </div>
        </form>
    );
}

export default AddressForm;
