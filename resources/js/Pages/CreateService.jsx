import React, { useEffect, useState, useRef } from "react";
import Authenticated from "@/Layouts/Authenticated";
import Card from "@/Components/Card";
import Container from "@/Components/Container";
import StateServiceEnum from "@/Constants/StateServiceEnum";
import StepProgressCircles from "@/Components/MultiStepForm/StepProgressCircles";
import ServiceDataForm from "@/Components/ServiceForms/ServiceDataForm";
import AddressForm from "@/Components/ServiceForms/AddressForm";
import UsersForm from "@/Components/ServiceForms/UsersForm";

export default function Services(props) {
    const ServiceAvailable = [
        StateServiceEnum.SERVICE_STARTED,
        StateServiceEnum.SERVICE_ADDRESS_CONFIRMED,
        StateServiceEnum.SERVICE_USERS_ASSIGNED,
        StateServiceEnum.SERVICE_DETAIL,
    ];

    // Initial state of current service
    const [stateService, setStateService] = useState(
        StateServiceEnum.SERVICE_STARTED
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
