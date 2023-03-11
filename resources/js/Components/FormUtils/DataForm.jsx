import React, { useState } from "react";
import Input from "@/Components/FormUtils/Input";
import SelectInput from "@/Components/FormUtils/SelectInput";
import Button from "@/Components/FormUtils/Button";
import Label from "@/Components/FormUtils/Label";
import { useForm } from "@inertiajs/inertia-react";

export default function DataForm({
    parameters = [],
    onSubmit,
    titleForm,
    buttonText,
    cols,
    className,
}) {
    const { data, setData, processing, errors, reset } = useForm(
        parameters.map((item) => ({ ...item, value: item.value || "" }))
    );

    const handleChange = (e, setInputData, name) => {
        if (e.label) {
            setData((data) => {
                const newValueObj = data.find((input) => input.name == name);
                const posNewObj = data.findIndex((input) => input.name == name);
                newValueObj.value = { name: e.label, value: e.value };
                data[posNewObj] = newValueObj;
                return data;
            });
            setInputData({ label: e.label, value: e.value });
        } else {
            setData((data) => {
                const newValueObj = data.find(
                    (input) => input.name == e.target.name
                );
                const posNewObj = data.findIndex(
                    (input) => input.name == e.target.name
                );
                newValueObj.value = e.target.value;
                data[posNewObj] = newValueObj;
                return data;
            });
            setInputData(e.target.value);
        }
    };

    const submit = (e) => {
        e.preventDefault();

        // Validate form
        const nData = Object.keys(data).map((key) => {
            if (data[key].type == "select") {
                console.log(data[key]);
                return { [data[key].name]: data[key].value.value };
            } else if (data[key].type == "text") {
                return { [data[key].name]: data[key].value };
            }
            return data[key];
        });
        const newData = {};

        nData.map((item) => {
            if (isNaN(Object.keys(item)[0])) {
                newData[Object.keys(item)[0]] = Object.values(item)[0];
            }
        });
        onSubmit(newData);
    };

    return (
        <form onSubmit={submit}>
            {parameters.map(
                ({ label, extend, name, type, value, required, options }) => (
                    <AnyInput
                        label={label}
                        extend={extend}
                        name={name}
                        type={type}
                        value={value}
                        required={required}
                        options={options}
                        handleChange={handleChange}
                        key={`${label}_${name}`}
                    />
                )
            )}
            <div className="flex col-span-2 justify-center m-4">
                <br />
                <Button className="justify-center" processing={processing}>
                    {buttonText}
                </Button>
            </div>
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
    const [inputData, setInputData] = useState(value);
    return (
        <div className={"col-span-" + extend}>
            <Label forInput={name} value={label} />
            {type === "select" ? (
                <SelectInput
                    options={options}
                    value={inputData}
                    onChange={(e) => handleChange(e, setInputData, name)}
                    required={required}
                />
            ) : (
                <Input
                    type={type}
                    name={name}
                    defaultValue={inputData}
                    autoComplete={name}
                    handleChange={(e) => handleChange(e, setInputData, name)}
                    required={required}
                />
            )}
        </div>
    );
}
