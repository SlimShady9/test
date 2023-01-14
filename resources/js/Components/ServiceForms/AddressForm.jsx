import StateServiceEnum from "@/Constants/StateServiceEnum";
import React, { useState, useEffect } from "react";
import { useForm } from "@inertiajs/inertia-react";
import Label from "../FormUtils/Label";
import SelectInput from "../FormUtils/SelectInput";
import axios from "axios";
import Input from "../FormUtils/Input";
import Button from "../Button";

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

    const id = StateServiceEnum.SERVICE_ADDRESS_CONFIRMED;

    const [countries, setCountries] = useState([]);
    const [regions, setRegions] = useState([]);
    const [cities, setCities] = useState([]);

    useEffect(() => {
        axios
            .get("https://api.countrystatecity.in/v1/countries", axiosConfig)
            .then((res) => {
                setCountries(res.data);
            });
    }, []);

    useEffect(() => {
        setData({
            ...data,
            region: { label: "", value: "" },
            city: { label: "", value: "" },
        });
        if (data.country.value != "") {
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
        if (!(data.country.value == "" || data.region.value == "")) {
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
        setNextStep(StateServiceEnum.SERVICE_USERS_ASSIGNED);
    };

    if (currentStep !== id) {
        return <></>;
    }
    return (
        <form onSubmit={submit}>
            <h1 className="text-xl font-bold text-left mb-3">
                Ingresa direccion de origen del servicio
            </h1>
            <div className="flex gap-4">
                <div className="w-1/2">
                    <Label forInput="country">País</Label>
                    <SelectInput
                        value={data.country}
                        onChange={(e) => handleChange(e, "country")}
                        options={countries.map((c) => ({
                            label: c.name,
                            value: c.iso2,
                        }))}
                    />
                </div>
                <div className="w-1/2">
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
            </div>
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
            <Label forInput="name">Nombre</Label>
            <Input name="name" handleChange={(e) => handleChange(e, "name")} />
            <Label forInput="addr">Dirección</Label>
            <Input name="addr" handleChange={(e) => handleChange(e, "addr")} />
            <Label forInput="addr_detail">Detalles</Label>
            <Input
                name="addr_detail"
                handleChange={(e) => handleChange(e, "addr_detail")}
            />
            <Label forInput="postal_code">Código postal</Label>
            <Input
                name="postal_code"
                handleChange={(e) => handleChange(e, "postal_code")}
            />
            <div className="flex justify-center">
                <Button processing={processing} type="submit" className="mt-3">
                    Siguente paso
                </Button>
            </div>
        </form>
    );
}

export default AddressForm;
