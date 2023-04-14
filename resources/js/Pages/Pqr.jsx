import PqrsForm from "@/Components/PqrsForm";
import Base from "@/Layouts/Base";
import React from "react";

export default function Pqr() {
    return (
        <Base>
            <PqrsForm isMainPage={true} />
        </Base>
    );
}
