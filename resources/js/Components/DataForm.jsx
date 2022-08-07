import React, { useState } from "react";
import Label from "@/Components/Label";
import Input from "@/Components/Input";
import Button from "@/Components/Button";
import Select from "react-select";
import { useForm } from "@inertiajs/inertia-react";
import Card from "./Card";

export default function DataForm({
    dataF = [],
    httpMethod,
    url,
    titleForm,
    buttonText,
    cols,
    className,
}) {
    const { data, setData, post, put, processing, errors, reset } = useForm(
        dataF.map((item) => ({ ...item, value: "" }))
    );

    const handleChange = (e, setInputData, name) => {
        if (e.label) {
            setData(name, e.label);
            setInputData(e.value);
        } else {
            setData(e.target.name, e.target.value);
        }
    };

    const submit = (e) => {
        e.preventDefault();
        console.log(dataF);

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

    return (
        <form onSubmit={submit}>
            <Card col={cols}>
                <div className="flex col-span-2 justify-center">
                    <h1>{titleForm}</h1>
                </div>
                {dataF.map(({ label, name, type, required, options }) => (
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
            </Card>
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
