import { EstadoServiciosEnum } from "@/Constants/EstadoServiciosEnum";
import React, { useState, useEffect } from "react";
import { useForm } from "@inertiajs/inertia-react";
import Label from "./FormUtils/Label";
import SelectInput from "./FormUtils/SelectInput";
import axios from "axios";
import Input from "./FormUtils/Input";
import Button from "./FormUtils/Button";
import {
    getCities,
    getCountries,
    getRegions,
    saveAddress,
} from "@/Utils/FetchAddress";
import { toast } from "react-toastify";

function AddressForm({ api_token, onSubmit }) {
    const [data, setData] = useState({
        name: "Mi casa pro jacker",
        country: { label: "Colombia", value: "48" },
        region: { label: "Bogotá D.C.", value: "DC" },
        city: { label: "Bogotá D.C.", value: "DC" },
        addr: "Calle 152b #55-45",
        addr_detail: "Portal de versalles, torre 3 apto 904",
        postal_code: "11101",
        neighborhood: "Bosa",
    });

    const [countries, setCountries] = useState([]);
    const [regions, setRegions] = useState([]);
    const [cities, setCities] = useState([]);

    useEffect(() => {
        if (!data.country?.value) {
            getCountries(api_token).then((res) => setCountries(res));
        }
    }, []);

    useEffect(() => {
        setData({
            ...data,
            region: { label: "", value: "" },
            city: { label: "", value: "" },
        });
        if (data.country?.value && data.country.value != "") {
            getRegions(api_token, data.country.value).then((res) =>
                setRegions(res)
            );
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
            getCities(api_token, data.country.value, data.region.value).then(
                (res) => setCities(res)
            );
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
        toast.success("Dirección guardada correctamente");
        saveAddress(data).then((res) => {
            onSubmit(res);
        });
    };

    return (
        <div>
            <form onSubmit={submit}>
                <div className="col-span-1 my-3">
                    <Label forInput="name">Nombre del Lugar</Label>
                    <Input
                        name="name"
                        handleChange={(e) => handleChange(e, "name")}
                        defaultValue={data.name}
                        required
                        onlyLetters
                    />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="col-span-1">
                        <Label forInput="addr">Dirección</Label>
                        <Input
                            name="addr"
                            handleChange={(e) => handleChange(e, "addr")}
                            defaultValue={data.addr}
                            required
                        />
                    </div>
                    <div className="col-span-1">
                        <Label forInput="postal_code">Código postal</Label>
                        <Input
                            name="postal_code"
                            handleChange={(e) => handleChange(e, "postal_code")}
                            defaultValue={data.postal_code}
                        />
                    </div>

                    <div className="col-span-1">
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
                            name="neighborhood"
                            handleChange={(e) =>
                                handleChange(e, "neighborhood")
                            }
                            defaultValue={data.neighborhood}
                        />
                    </div>
                    <div className="col-span-2">
                        <Label forInput="addr_detail">Detalles Dirección</Label>
                        <Input
                            name="addr_detail"
                            handleChange={(e) => handleChange(e, "addr_detail")}
                            defaultValue={data.addr_detail}
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
        </div>
    );
}

export default AddressForm;
