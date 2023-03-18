import React, { useEffect, useState } from "react";
import { Head } from "@inertiajs/inertia-react";
import Label from "../FormUtils/Label";
import { getOptionsTypeService } from "@/Utils/FetchApi";
import Button from "../FormUtils/Button";
import SelectInput from "../FormUtils/SelectInput";
import Input from "../FormUtils/Input";

function DocumentForm() {
    const [showDetail, setShowDetail] = useState(false);

    const addPermisson = (e) => {
        setShowDetail(!showDetail);
    };

    const [optionsTypeService, setOptionsTypeService] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const options = await getOptionsTypeService();
        setOptionsTypeService(options);
    };

    const submitForm = (e) => {
        e.preventDefault();
    };

    const options = [
        { value: "1", label: "Virtuales" },
        { value: "2", label: "Físicos" },
        { value: "3", label: "Físicos y virtuales" },
    ];

    return (
        <>
            <Head title="Datos Logística" />
            <h1 className="text-xl font-bold text-left mb-3">
                Información de Gestión Documental
            </h1>
            <form className="gap-4" onSubmit={submitForm}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="col-span-1">
                        <Label>Tipo de documentos que maneja</Label>
                        <SelectInput options={options} />
                    </div>
                    <div className="col-span-1">
                        <Label>
                            Cantidad aproximada de documentos generados en una
                            semana
                        </Label>
                        <Input type="number" />
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
        </>
    );
}

export default DocumentForm;
