import React, { useEffect, useState } from "react";
import Card from '@/Components/Card'
import ServiceContext from '@/Components/ServiceForms/useServiceContext'
import Authenticated from '@/Layouts/Authenticated'
import ServiceDataForm from "@/Components/ServiceForms/ServiceDataForm";
import MessagingForm from "@/Components/ServiceForms/MessagingForm";
import AddressForm from "@/Components/AddressForm";
import UsersForm from "@/Components/ServiceForms/UsersForm";
import ContentForm from "@/Components/ServiceForms/ContentForm";
import TaskForm from "@/Components/ServiceForms/TaskForm";
import { TipoDeServiciosEnum } from "@/Constants/TipoDeServiciosEnum";

function CreateService2(props) {

    const isBigForm = true;


    const [showMensajeria, setShowMensajeria] = useState(true);
    const [showConContenido, setShowConContenido] = useState(true);
     // State of the progress of service creation using context api
     const [serviceDTO, setServiceDTO] = useState({
        service: {},
        address: {},
        orders: [],
        tasks: [],
        messaging: {},
        content: {},
    });


    useEffect(() => {
        setShowMensajeria(true);
        setShowConContenido(true);
        if (TipoDeServiciosEnum.GESTION_DOCUMENTAL == serviceDTO.service.id_type_service || TipoDeServiciosEnum.LOGISTICA_DE_MENSJERIA == serviceDTO.service.id_type_service) {
            setShowMensajeria(false);
            setShowConContenido(false);
        }
    }, [serviceDTO.service.id_type_service])

    return (
    <>
        <Authenticated {...props}>
            <div className="h-full grid place-items-center">
                <Card>
                    <ServiceContext.Provider value={{ serviceDTO, setServiceDTO }}>
                        <ServiceDataForm isBigForm={isBigForm}></ServiceDataForm>
                        {showMensajeria && <MessagingForm isBigForm={isBigForm} user={props.auth.user}></MessagingForm>}
                        <AddressForm isBigForm={isBigForm}></AddressForm>
                        <UsersForm ></UsersForm>
                        {showConContenido && <ContentForm></ContentForm>}
                        <TaskForm user={props.auth.user}></TaskForm>
                    </ServiceContext.Provider>
                </Card>
            </div>
        </Authenticated>
    </>
    )
}

export default CreateService2