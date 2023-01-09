import StateServiceEnum from "@/Constants/StateServiceEnum";
import React from "react";

function UsersForm({ currentStep, setNextStep }) {
    const id = StateServiceEnum.SERVICE_USERS_ASSIGNED;

    if (currentStep !== id) {
        return <></>;
    }
    return <div>UsersForm</div>;
}

export default UsersForm;
