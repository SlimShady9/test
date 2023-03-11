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

function AddressForm({ api_token, onSubmit, isEdit = false }) {
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
                onSubmit(res);
            });
        } else {
            toast.success("Dirección actualizada correctamente");
            updateAddress(data).then((res) => {
                onSubmit(res);
            });
        }
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
                        required={true}
                        maxLength={50}
                        alpaNumeric={true}
                    />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="col-span-1">
                        <Label forInput="addr">Dirección</Label>
                        <Input
                            name="addr"
                            handleChange={(e) => handleChange(e, "addr")}
                            defaultValue={data.addr}
                            required={true}
                            maxLength={50}
                        />
                    </div>
                    <div className="col-span-1">
                        <Label forInput="postal_code">Código postal</Label>
                        <Input
                            name="postal_code"
                            handleChange={(e) => handleChange(e, "postal_code")}
                            defaultValue={data.postal_code}
                            required={true}
                            maxLength={10}
                            onlyNumbers={true}
                        />
                    </div>

                    <div className="col-span-1">
                        <Label forInput="country">País</Label>
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
                    <div className="col-span-1">
                        <Label forInput="region">Región</Label>
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
                    <div className="col-span-1">
                        <Label forInput="city">Ciudad</Label>
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
                    <div className="col-span-1">
                        <Label forInput="postal_code">Localidad / Barrio</Label>
                        <Input
                            name="neighborhood"
                            handleChange={(e) =>
                                handleChange(e, "neighborhood")
                            }
                            defaultValue={data.neighborhood}
                            required={true}
                            maxLength={30}
                        />
                    </div>
                    <div className="col-span-2">
                        <Label forInput="addr_detail">Detalles Dirección</Label>
                        <Input
                            name="addr_detail"
                            handleChange={(e) => handleChange(e, "addr_detail")}
                            defaultValue={data.addr_detail}
                            maxLength={255}
                            onlyLetters={true}
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
