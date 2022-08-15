import React, { useEffect, useState } from "react";
import Authenticated from "@/Layouts/Authenticated";
import Datatable from "@/Components/DataTableUser"

export default function Users(props) {
    const [serviceParams, setServiceParams] = useState([]);
    //Antes de que cargue la vista corgamos los datos


    return (
        <>
        <Authenticated {...props}>
            <Datatable/>
        </Authenticated>
        </>
    );
}