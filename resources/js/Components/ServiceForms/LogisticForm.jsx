import React, { useEffect, useState } from "react";
import { EstadoServiciosEnum } from "@/Constants/EstadoServiciosEnum";
("@/Constants/EstadoServiciosEnum");
import { Head } from "@inertiajs/inertia-react";
import Label from "../FormUtils/Label";
import { getOptionsTypeService } from "@/Utils/FetchApi";
import Button from "../FormUtils/Button";
import Checkbox from "../FormUtils/Checkbox";

function LogisticForm() {

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

    return (
        <>
            <Head title="Datos Logística" />
            <h1 className="text-xl font-bold text-left mb-3">
                Información de Logística en Mensajería
            </h1>
            <form className="gap-4" onSubmit={submitForm}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex col-span-1">
                        
                        <Checkbox
                        id="check"
                        name="check"
                        />
                        ¿Tiene personal de mensajería?
                        <Label 
                        id="check"
                        forInput="check"
                        />
                    </div>
                    <div className="flex col-span-1">
                        
                        <Checkbox
                        name="check2"
                        />
                        ¿Actualmente tiene clientes a los que haga envíos de forma recurrente?
                        <Label 
                        forInput="check2"
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
        </>
    );
}

export default LogisticForm;
