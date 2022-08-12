import React, { useState, useEffect } from "react";
import { useForm } from "@inertiajs/inertia-react";
import Input from "@/Components/Input";
import Select from "react-select";
import Label from "@/Components/Label";
import axios from "axios";
import Button from "./Button";

function AddressForm({ api_token }) {
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
        street: "",
        addr: "",
        addr_detail: "",
    });

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
        });
        axios
            .get(
                `https://api.countrystatecity.in/v1/countries/${data.country.value}/states`,
                axiosConfig
            )
            .then((res) => {
                setRegions(res.data);
            });
    }, [data.country]);

    useEffect(() => {
        setData({
            ...data,
            city: { label: "", value: "" },
        });
        if (data.region.value) {
        }
        axios
            .get(
                `https://api.countrystatecity.in/v1/countries/${data.country.value}/states/${data.region.value}/cities`,
                axiosConfig
            )
            .then((res) => {
                setCities(res.data);
            });
    }, [data.region, data.country]);

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
        const parsedData = {
            ...data,
            country: data.country.label,
            region: data.region.label,
            city: data.city.label,
        };
        console.log(parsedData);
        axios.post("/api/address", parsedData).then((res) => {
            console.log(res);
        });
    };

    return (
        <form onSubmit={submit}>
            <Select
                name="country"
                type="select"
                onChange={(e) => handleChange(e, "country")}
                options={countries.map((c) => ({
                    label: c.name,
                    value: c.iso2,
                }))}
            />
            <Select
                name="region"
                type="select"
                onChange={(e) => handleChange(e, "region")}
                options={regions.map((c) => ({
                    label: c.name,
                    value: c.iso2,
                }))}
            />
            <Select
                name="city"
                type="select"
                onChange={(e) => handleChange(e, "city")}
                options={cities.map((c) => ({
                    label: c.name,
                    value: c.id,
                }))}
            />
            <Input
                name="street"
                handleChange={(e) => handleChange(e, "street")}
            />
            <Input name="name" handleChange={(e) => handleChange(e, "name")} />
            <Input name="addr" handleChange={(e) => handleChange(e, "addr")} />
            <Input
                name="addr_detail"
                handleChange={(e) => handleChange(e, "addr_detail")}
            />
            <Button processing={processing} type="submit">
                Submit
            </Button>
        </form>
    );
}

export default AddressForm;
