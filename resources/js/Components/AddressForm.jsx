import React, { useState, useEffect, useContext } from "react";
import Label from "./FormUtils/Label";
import SelectInput from "./FormUtils/SelectInput";
import Input from "./FormUtils/Input";
import Button from "./FormUtils/Button";
import {
    getCities,
    getCountries,
    getRegions,
    saveAddress,
    updateAddress,
} from "@/Utils/FetchAddress";
import { toast } from "react-toastify";
import ServiceContext from "./ServiceForms/useServiceContext";

function AddressForm({ api_token, onSubmit, isEdit = false, title = "" }) {
    const { serviceDTO, setServiceDTO } = useContext(ServiceContext);
    const [data, setData] = useState({
        id: serviceDTO.address.id,
        name: serviceDTO.address.name,
        addr: serviceDTO.address.addr,
        country: {
            label: serviceDTO.address.country,
            value: serviceDTO.address.country_iso,
        },
        country_iso: serviceDTO.address.country_iso,
        region: {
            label: serviceDTO.address.region,
            value: serviceDTO.address.region_iso,
        },
        region_iso: serviceDTO.address.region_iso,
        city: {
            label: serviceDTO.address.city,
            value: serviceDTO.address.city_id,
        },
        city_id: serviceDTO.address.city_id,
        postal_code: serviceDTO.address.postal_code,
        addr_detail: serviceDTO.address.addr_detail,
        neighborhood: serviceDTO.address.neighborhood,
    });

    const [countries, setCountries] = useState([]);
    const [regions, setRegions] = useState([]);
    const [cities, setCities] = useState([]);
    const [loading, setLoading] = useState(true);
    const [exit, setExit] = useState(false);

    useEffect(() => {
        getCountries(api_token).then((res) => setCountries(res));
    }, []);

    useEffect(() => {
        if (!loading) {
            setData({
                ...data,
                region: { label: "", value: "" },
                city: { label: "", value: "" },
            });
        }
        if (data.country?.value && data.country.value != "") {
            getRegions(api_token, data.country.value).then((res) =>
                setRegions(res)
            );
        }
    }, [data.country]);

    useEffect(() => {
        if (!loading) {
            setData({
                ...data,
                city: { label: "", value: "" },
            });
        }
        if (
            data.country?.value &&
            data.region?.value &&
            !(data.country.value == "" || data.region.value == "")
        ) {
            getCities(api_token, data.country.value, data.region.value).then(
                (res) => setCities(res)
            );
        }
        setLoading(false);
    }, [data.region]);

    const handleChange = (e, propName, args) => {
        let newData = { ...data };
        if (e.label) {
            newData[propName] = e;
            if (args) {
                newData[args.isoId] = args.isoName;
            }
            setData(newData);
        } else {
            setData({ ...data, [e.target.name]: e.target.value });
        }
    };

    const submit = (e) => {
        e.preventDefault();
        if (!isEdit) {
            toast.success("Dirección guardada correctamente");
            saveAddress(data).then((res) => {
                onSubmit(res, exit);
            });
        } else {
            toast.success("Dirección actualizada correctamente");
            updateAddress(data).then((res) => {
                onSubmit(res, exit);
            });
        }
    };

    return (
        <div>
            <form onSubmit={submit} className="">
                <h1 className="text-xl font-bold text-left mb-3">
                    {title}
                </h1>
                <div className="flex flex-col my-3">
                    <Label forInput="name">Nombre del Lugar</Label>
                    <Input
                        name="name"
                        handleChange={(e) => handleChange(e, "name")}
                        defaultValue={data.name}
                        maxLength={50}
                        alpaNumeric={true}
                    />
                </div>
                <div className="flex md:flex-row flex-col gap-4 my-3">
                    <div className="md:w-1/2 w-full">
                        <Label forInput="addr">Dirección *</Label>
                        <Input
                            name="addr"
                            handleChange={(e) => handleChange(e, "addr")}
                            defaultValue={data.addr}
                            required={true}
                            maxLength={50}
                        />
                    </div>
                    <div className="md:w-1/2 w-full">
                        <Label forInput="postal_code">Código postal</Label>
                        <Input
                            name="postal_code"
                            handleChange={(e) => handleChange(e, "postal_code")}
                            defaultValue={data.postal_code}
                            maxLength={10}
                            onlyNumbers={true}
                        />
                    </div>
                </div>

                <div className="flex md:flex-row flex-col gap-4 my-3">
                    <div className="md:w-1/2">
                        <Label forInput="country">País *</Label>
                        <SelectInput
                            value={data.country}
                            required={true}
                            onChange={(e) =>
                                handleChange(e, "country", {
                                    isoId: "country_iso",
                                    isoName: e.value,
                                })
                            }
                            options={countries.map((c) => ({
                                label: c.name,
                                value: c.iso2,
                            }))}
                        />
                    </div>
                    <div className="md:w-1/2">
                        <Label forInput="region">Región *</Label>
                        <SelectInput
                            value={data.region}
                            required={true}
                            onChange={(e) =>
                                handleChange(e, "region", {
                                    isoId: "region_iso",
                                    isoName: e.value,
                                })
                            }
                            options={regions.map((c) => ({
                                label: c.name,
                                value: c.iso2,
                            }))}
                        />
                    </div>
                </div>
                <div className="flex md:flex-row flex-col gap-4 my-3">
                    <div className="md:w-1/2 w-full">
                        <Label forInput="city">Ciudad *</Label>
                        <SelectInput
                            value={data.city}
                            required={true}
                            onChange={(e) =>
                                handleChange(e, "city", {
                                    isoId: "city_id",
                                    isoName: e.value,
                                })
                            }
                            options={cities.map((c) => ({
                                label: c.name,
                                value: c.id,
                            }))}
                        />
                    </div>
                    <div className="md:w-1/2 w-full">
                        <Label forInput="postal_code">Localidad / Barrio</Label>
                        <Input
                            name="neighborhood"
                            handleChange={(e) =>
                                handleChange(e, "neighborhood")
                            }
                            defaultValue={data.neighborhood}
                            maxLength={30}
                        />
                    </div>
                </div>
                <div className="w-full">
                    <Label forInput="addr_detail">Detalles Dirección</Label>
                    <Input
                        name="addr_detail"
                        handleChange={(e) => handleChange(e, "addr_detail")}
                        defaultValue={data.addr_detail}
                        maxLength={255}
                        lettersAndSymbols={true}
                    />
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
                        <Button type="submit" onClick={() => setExit(true)}>
                            Guardar y salir
                        </Button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default AddressForm;
