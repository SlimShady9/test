import React, { useEffect, useState, useRef } from "react";
import Authenticated from "@/Layouts/Authenticated";
import Card from "@/Components/Card";
import Container from "@/Components/Container";
import EstadoServiciosEnum from "@/Constants/EstadoServiciosEnum";
import StepProgressCircles from "@/Components/MultiStepForm/StepProgressCircles";
import ServiceDataForm from "@/Components/ServiceForms/ServiceDataForm";
import AddressForm from "@/Components/ServiceForms/AddressForm";
import UsersForm from "@/Components/ServiceForms/UsersForm";

export default function Services(props) {
    const ServiceAvailable = [
        EstadoServiciosEnum.SERVICIOS_INCIADO,
        EstadoServiciosEnum.SERVICIO_DIRECCION_CONFIRMADA,
        EstadoServiciosEnum.SERVICIO_USUARIOS_ASIGNADOS,
        EstadoServiciosEnum.SERVICIO_CON_DETALLE,
    ];

    // Initial state of current service
    const [stateService, setStateService] = useState(
        EstadoServiciosEnum.SERVICIOS_INCIADO
    );

    return (
        <>
            <Authenticated {...props}>
                <Container className="flex justify-center">
                    <Card>
                        <h1 className="text-2xl font-bold text-center">
                            Crear Servicio
                        </h1>
                        <StepProgressCircles
                            currentStep={stateService}
                            steps={ServiceAvailable}
                        ></StepProgressCircles>
                        <ServiceDataForm
                            currentStep={stateService}
                            setNextStep={setStateService}
                        />
                        <AddressForm
                            api_token={props.api_token}
                            currentStep={stateService}
                            setNextStep={setStateService}
                        />
                        <UsersForm
                            currentStep={stateService}
                            setNextStep={setStateService}
                        />
                    </Card>
                </Container>
            </Authenticated>
        </>
    );
}
