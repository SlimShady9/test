import React, { useEffect, useState, useRef } from "react";
import ServiceContext from "@/Components/ServiceForms/useServiceContext";
import Authenticated from "@/Layouts/Authenticated";
import Card from "@/Components/Card";
import Container from "@/Components/Container";
import { EstadoServiciosEnum } from "@/Constants/EstadoServiciosEnum";
import StepProgressCircles from "@/Components/MultiStepForm/StepProgressCircles";
import ServiceDataForm from "@/Components/ServiceForms/ServiceDataForm";
import AddressForm from "@/Components/AddressForm";
import UsersForm from "@/Components/ServiceForms/UsersForm";
import MessagingForm from "@/Components/ServiceForms/MessagingForm";
import TaskForm from "@/Components/ServiceForms/TaskForm";
import ContentForm from "@/Components/ServiceForms/ContentForm";
import { updateService } from "@/Utils/FetchService";

export default function Services(props) {
    console.log(props);
    const initialStateServicesAvailable = [
        EstadoServiciosEnum.SERVICIO_INCIADO,
        EstadoServiciosEnum.SERVICIO_DIRECCION_CONFIRMADA,
        EstadoServiciosEnum.SERVICIO_MENSAJERIA,
        EstadoServiciosEnum.SERVICIO_USUARIOS_ASIGNADOS,
        EstadoServiciosEnum.SERVICIO_CON_CONTENIDO,
        EstadoServiciosEnum.SERVICIO_CON_TAREAS,
    ];
    const [servicesAvailable, setServicesAvailable] = useState(
        initialStateServicesAvailable
    );

    // Initial state of current service
    const [stateService, setStateService] = useState(
        EstadoServiciosEnum.SERVICIO_INCIADO
    );

    // State of the progress of service creation using context api
    const [serviceDTO, setServiceDTO] = useState({
        service: {},
        address: {},
        orders: [],
        tasks: [],
        messaging: {},
    });

    const restoreInitialState = () => {
        setServicesAvailable(initialStateServicesAvailable);
        setStateService(EstadoServiciosEnum.SERVICIO_INCIADO);
    };

    return (
        <>
            <Authenticated {...props}>
                <Container className="flex justify-center">
                    <Card className="sm:w-3/5">
                        <h1 className="text-2xl font-bold text-center">
                            Crear Servicio
                        </h1>
                        <StepProgressCircles
                            currentStep={stateService}
                            steps={servicesAvailable}
                        ></StepProgressCircles>
                        <></>
                        <ServiceContext.Provider
                            value={{ serviceDTO, setServiceDTO }}
                        >
                            {stateService ===
                                EstadoServiciosEnum.SERVICIO_INCIADO && (
                                <ServiceDataForm
                                    currentStep={stateService}
                                    setNextStep={setStateService}
                                    setServicesAvailable={setServicesAvailable}
                                />
                            )}
                            {stateService ===
                                EstadoServiciosEnum.SERVICIO_MENSAJERIA && (
                                <MessagingForm
                                    currentStep={stateService}
                                    setNextStep={setStateService}
                                    user={props.auth.user.id}
                                />
                            )}
                            {stateService ===
                                EstadoServiciosEnum.SERVICIO_DIRECCION_CONFIRMADA && (
                                <AddressForm
                                    api_token={props.api_token}
                                    onSubmit={async (res) => {
                                        setServiceDTO(function (prev) {
                                            prev.service.address_id = res.id;
                                            var service = {
                                                ...prev.service,
                                                address: res.id,
                                            };
                                            return {
                                                ...prev,
                                                service,
                                            };
                                        });
                                        await updateService(prev.service);
                                        setStateService(
                                            EstadoServiciosEnum.SERVICIO_MENSAJERIA
                                        );
                                    }}
                                />
                            )}
                            {stateService ===
                                EstadoServiciosEnum.SERVICIO_USUARIOS_ASIGNADOS && (
                                <UsersForm
                                    currentStep={stateService}
                                    setNextStep={setStateService}
                                />
                            )}
                            {stateService ===
                                EstadoServiciosEnum.SERVICIO_CON_CONTENIDO && (
                                <ContentForm
                                    currentStep={stateService}
                                    setNextStep={setStateService}
                                />
                            )}
                            {stateService ===
                                EstadoServiciosEnum.SERVICIO_CON_TAREAS && (
                                <TaskForm
                                    api_token={props.api_token}
                                    currentStep={stateService}
                                    setNextStep={setStateService}
                                />
                            )}
                        </ServiceContext.Provider>
                    </Card>
                </Container>
            </Authenticated>
        </>
    );
}
