import React, { useState } from "react";
import Label from "@/Components/Label";
import Input from "@/Components/Input";
import Select from "react-select";
import { useForm } from "@inertiajs/inertia-react";
import Card from "./Card";

export default function DataForm({ dataF = [], httpMethod, url }) {
    const setDataForm = () => {
        const dataForm = {};
        dataF.forEach((item) => {
            dataForm[item.value] = "";
        });
        return dataForm;
    };
    const { data, setData, post, put, processing, errors, reset } = useForm(
        setDataForm(dataF)
    );

    const submit = (e) => {
        e.preventDefault();

        /*
        switch (httpMethod) {
            case "POST": {
                post(route(url));
            }
            case "PUT": {
                put(route(url));
            }
        }
        */
    };

    const handleChange = (e, setInputData, name) => {
        if (e.label) {
            setData(name, e.label);
            setInputData(e.value);
        } else {
            setData(e.target.name, e.target.value);
        }
    };

    function createInput({
        label,
        name,
        type,
        value,
        required,
        options,
        handleChange,
        key,
    }) {
        const [inputData, setInputData] = useState("");

        return (
            <div key={key}>
                <Label forInput={name} value={label} />
                {type === "select" ? (
                    <Select
                        options={options}
                        autoComplete={name}
                        onChange={(e) => handleChange(e, setInputData, name)}
                        required={required}
                    />
                ) : (
                    <Input
                        type={type}
                        name={name}
                        value={value}
                        autoComplete={name}
                        handleChange={handleChange}
                        required={required}
                    />
                )}
            </div>
        );
    }

    return (
        <Card>
            <form onSubmit={submit}>
                {dataF.map(({ label, name, type, value, required, items }) => {
                    return createInput({
                        label,
                        name,
                        type,
                        value,
                        required,
                        options: items,
                        handleChange,
                        key: name,
                    });
                })}
                <button type="submit">Submit</button>
            </form>
        </Card>
    );
}
