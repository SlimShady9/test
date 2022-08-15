import React, { useState } from "react";
import Label from "@/Components/Label";
import Input from "@/Components/Input";
import Button from "@/Components/Button";
import Select from "react-select";
import { useForm } from "@inertiajs/inertia-react";
import axios from "axios";
import Card from "./Card";
import { zIndex } from "tailwindcss/defaultTheme";

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
            <Card 
            col={cols}
            title={titleForm}
            >
            {parameters.map(({ label, extend, name, type, required, options }) => (
                <AnyInput
                    label={label}
                    extend={extend}
                    name={name}
                    type={type}
                    required={required}
                    options={options}
                    handleChange={handleChange}
                    key={`${label}_${name}`}
                />
            ))}
            <div className="flex col-span-2 justify-center">
                <br />
                <Button className="justify-center" processing={processing}>
                    {buttonText}
                </Button>
            </div>
            </Card>
        </form>
    );
}

function AnyInput({
    label,
    extend,
    name,
    type,
    value,
    required,
    options,
    handleChange,
}) {
    const [inputData, setInputData] = useState("");

    function extended(extend, prop){
        if (extend) {
            return prop
        }
        else {
            return null
        }
    }

    return (
        <div className={"col-span-"+extend}>
            <Label forInput={name} value={label} />
            {console.log(extend)}
            {type === "select" ? (
                <Select
                    menuPlacement="top"
                    maxMenuHeight={80}
                    placeholder={"Seleccione..."}
                    className={"border rounded"}
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
