import React, { useState } from "react";
import Input from "@/Components/FormUtils/Input";
import SelectInput from "@/Components/FormUtils/SelectInput";
import Button from "@/Components/FormUtils/Button";
import Label from "@/Components/FormUtils/Label";
import { useForm } from "@inertiajs/inertia-react";
import ReactLoading from "react-loading";

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

    const [loading, setLoading] = useState(false);

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
        setLoading(true);

        // Validate form
        const nData = Object.keys(data).map((key) => {
            if (data[key].type == "select") {
                return {
                    [data[key].name]:
                        data[key].value.value || data[key].value[0].value,
                };
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
                ({
                    label,
                    extend,
                    name,
                    type,
                    value,
                    required,
                    options,
                    onlyLetters,
                    alpaNumeric,
                    onlyNumbers,
                    email,
                    min,
                    max,
                    minLenght,
                    maxLenght,
                }) => (
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
                        onlyLetters={onlyLetters}
                        alpaNumeric={alpaNumeric}
                        onlyNumbers={onlyNumbers}
                        email={email}
                        min={min}
                        max={max}
                        minLenght={minLenght}
                        maxLenght={maxLenght}
                    />
                )
            )}
            <div className="flex col-span-2 justify-center m-4">
                <br />
                <Button className="justify-center " processing={processing}>
                    {loading && (
                        <ReactLoading
                            type="spin"
                            color="#808080"
                            height={16}
                            width={16}
                        />
                    )}
                    {!loading && buttonText}
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
    onlyLetters,
    alpaNumeric,
    onlyNumbers,
    email,
    min,
    max,
    minLenght,
    maxLenght,
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
                    onlyLetters={onlyLetters}
                    alpaNumeric={alpaNumeric}
                    onlyNumbers={onlyNumbers}
                    email={email}
                    min={min}
                    max={max}
                    minLength={minLenght}
                    maxLength={maxLenght}
                />
            )}
        </div>
    );
}
