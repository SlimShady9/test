import React, { useEffect, useState, useRef } from "react";
import Authenticated from "@/Layouts/Authenticated";
import Card from "@/Components/Card";
import Modal from "@/Components/Modal";
import Button from "@/Components/Button";
import axios from "axios";
import Container from "@/Components/Container";
import Input from "@/Components/Input";
import Label from "@/Components/Label";
import Checkbox from "@/Components/Checkbox";
import Select from "react-select";
import StateServiceEnum from "@/Constants/StateServiceConstants";
import StepProgressCircles from "@/Components/MultiStepForm/StepProgressCircles";

export default function Services(props) {
    const ServiceAvailable = [
        StateServiceEnum.SERVICE_STARTED,
        StateServiceEnum.SERVICE_ADDRESS_CONFIRMED,
        StateServiceEnum.SERVICE_USERS_ASSIGNED,
    ];

    // Initial state of current service
    const [stateService, setStateService] = useState(
        StateServiceEnum.SERVICE_ADDRESS_CONFIRMED
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
                    </Card>
                </Container>
            </Authenticated>
        </>
    );
}
