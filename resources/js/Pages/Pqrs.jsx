import React, { useEffect, useState } from "react";
import Container from "@/Components/Container";
import Authenticated from "@/Layouts/Authenticated";
import PPqrsFormqrs from "@/Components/PqrsForm";
import { getService } from "@/Utils/FetchService";

export default function Pqrs(props) {
    const [service, setService] = useState(null);
    useEffect(() => {
        getService(props.serviceId).then((res) => {
            setService(res[0]);
        });
    }, []);

    return (
        <>
            <Authenticated {...props}>
                <Container className="justify-center bg-opacity-30 shadow-xl">
                    <Container className={"justify-center"}>
                        <h1 className="text-blue-primary text-3xl mb-1 font-bold  text-center ease-in duration-200">
                            {service?.tracking_id} PQRs
                        </h1>
                        <PPqrsFormqrs
                            serviceId={props.serviceId}
                            auth={props.auth}
                        />
                    </Container>
                </Container>
            </Authenticated>
        </>
    );
}
