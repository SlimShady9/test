import React, { useState } from "react";
import Label from "@/Components/Label";
import Input from "@/Components/Input";
import Button from "@/Components/Button";
import Select from "react-select";
import { useForm } from "@inertiajs/inertia-react";
import axios from "axios";

export default function DataForm({
    parameters = [],
    httpMethod,
    url,
    titleForm,
    buttonText,
    cols,
    className,
}) {
    const { data, setData, processing, errors, reset } = useForm(
        parameters.map((item) => ({ ...item, value: "" }))
    );

    const handleChange = (e, setInputData, name) => {
        if (e.label) {
            setData(name, e.value);
            setInputData(e.value);
        } else {
            setData(e.target.name, e.target.value);
        }
    };

    const submit = (e) => {
        e.preventDefault();

        switch (httpMethod) {
            case "POST": {
                axios.post(url, data).then((res) => {
                    reset();
                });
                break;
            }
            case "PUT": {
                axios.put(url, data).then((res) => {
                    reset();
                });
                break;
            }
        }
    };

    return (
        <form onSubmit={submit}>
            <div className="flex col-span-2 justify-center">
                <h1>{titleForm}</h1>
            </div>
            {parameters.map(({ label, name, type, required, options }) => (
                <AnyInput
                    label={label}
                    name={name}
                    type={type}
                    required={required}
                    options={options}
                    handleChange={handleChange}
                    key={`${label}_${name}`}
                />
            ))}
            <div className="flex col-span-2 justify-center">
                <Button className="justify-center" processing={processing}>
                    {buttonText}
                </Button>
            </div>
        </form>
    );
}

function AnyInput({
    label,
    name,
    type,
    value,
    required,
    options,
    handleChange,
}) {
    const [inputData, setInputData] = useState("");

    return (
        <div>
            <Label forInput={name} value={label} />
            {type === "select" ? (
                <Select
                    options={options}
                    autoComplete={name}
                    defaultValue={value ? value : ""}
                    onChange={(e) => handleChange(e, setInputData, name)}
                    required={required}
                />
            ) : (
                <Input
                    type={type}
                    name={name}
                    value={value}
                    defaultValue={value ? value : ""}
                    autoComplete={name}
                    handleChange={handleChange}
                    required={required}
                />
            )}
        </div>
    );
}
