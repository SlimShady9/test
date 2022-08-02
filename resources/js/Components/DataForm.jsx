import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import Checkbox from "@/Components/Input";
import Checkbox from "@/Components/Label";
import axios from "axios";


export default function DataForm(title, route, inputs, params) {
    
    const params = ["Uno", "Dos", "Tres"];
    const options = [];

    const inputs = [
        {label: "Nombre", name: "nombre", type: "text", value: "Ingrese texto", required: "True", params}
    ];

    const submit = (e) => {
        e.preventDefault();

        post(route("register"));
    };
    
    function cargarItems(params) {
        const options = [];
        params.forEach(param => {
            
        });
        
        var items = [];
        return items;
    }
    function createInput(label, name, type, value, required, items) {
        <div>
            <Label forInput={name} value={label} />
            <Input
                type={type}
                name={name}
                value={value}
                className="mt-1 block w-full"
                options={items}
                autoComplete={name}
                isFocused={true}
                handleChange={onHandleChange}
                required={required}
            />
        </div>
    }

    function generateParams() {

    }

    return (
        <>
            <Authenticated {...props}>
            <h1>{title}</h1>
            <form onSubmit={submit}>
                <div className="grid grid-cols-2 gap-4">
                    {inputs}
                    <input type="submit" />
                </div>
            </form>
        </Authenticated>
        </>
    );
}
