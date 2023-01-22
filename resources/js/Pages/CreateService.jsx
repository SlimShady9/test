import React, { useEffect, useState, useRef } from "react";
import Authenticated from "@/Layouts/Authenticated";
import Card from "@/Components/Card";
import Container from "@/Components/Container";
import { EstadoServiciosEnum } from "@/Constants/EstadoServiciosEnum";
import StepProgressCircles from "@/Components/MultiStepForm/StepProgressCircles";
import ServiceDataForm from "@/Components/ServiceForms/ServiceDataForm";
import AddressForm from "@/Components/ServiceForms/AddressForm";
import UsersForm from "@/Components/ServiceForms/UsersForm";
import MessagingForm from "@/Components/ServiceForms/MessagingForm";
import TaskForm from "@/Components/ServiceForms/TaskForm";
import ContentForm from "@/Components/ServiceForms/ContentForm";


export default function Services(props) {
    const ServiceAvailable = [
        EstadoServiciosEnum.SERVICIO_INCIADO,
        EstadoServiciosEnum.SERVICIO_MENSAJERIA,
        EstadoServiciosEnum.SERVICIO_DIRECCION_CONFIRMADA,
        EstadoServiciosEnum.SERVICIO_USUARIOS_ASIGNADOS,
        EstadoServiciosEnum.SERVICIO_CON_DETALLE,
    ];

    // Initial state of current service
    const [stateService, setStateService] = useState(
        EstadoServiciosEnum.SERVICIO_INCIADO
    );

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
                            steps={ServiceAvailable}
                        ></StepProgressCircles>
                        {stateService ===
                            EstadoServiciosEnum.SERVICIO_INCIADO && (
                            <ServiceDataForm
                                currentStep={stateService}
                                setNextStep={setStateService}
                            />
                        )}
                        {stateService ===
                            EstadoServiciosEnum.SERVICIO_MENSAJERIA && (
                            <MessagingForm
                                currentStep={stateService}
                                setNextStep={setStateService}
                            />
                        )}
                        {stateService ===
                            EstadoServiciosEnum.SERVICIO_DIRECCION_CONFIRMADA && (
                            <AddressForm
                                api_token={props.api_token}
                                currentStep={stateService}
                                setNextStep={setStateService}
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
                            EstadoServiciosEnum.SERVICIO_CON_DETALLE && (
                            <TaskForm
                                currentStep={stateService}
                                setNextStep={setStateService}
                            />
                        )}
                        {stateService ===
                            EstadoServiciosEnum.SERVICIO_PENDIENTE && (
                            <ContentForm
                                currentStep={stateService}
                                setNextStep={setStateService}
                            />
                        )}
                    </Card>
                </Container>
            </Authenticated>
        </>
    );
}
