import StateServiceEnum from "@/Constants/StateServiceEnum";
import React from "react";

function AddressForm({ currentStep, setNextStep }) {
    const id = StateServiceEnum.SERVICE_ADDRESS_CONFIRMED;

    if (currentStep !== id) {
        return <></>;
    }
    return <></>;
}

export default AddressForm;
