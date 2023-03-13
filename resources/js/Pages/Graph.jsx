import React, { useEffect, useState } from "react";
import Container from "@/Components/Container";
import Authenticated from "@/Layouts/Authenticated";
import SalesGraph from "@/Components/Graph/SalesGraph";
import ServiceGraph from "@/Components/Graph/ServiceGraph";
import VolumeGraph from "@/Components/Graph/VolumeGraph";
import { getService } from "@/Utils/FetchService";

export default function Graph(props) {
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
                        <VolumeGraph />
                        <SalesGraph />
                        <ServiceGraph />
                    </Container>
                </Container>
            </Authenticated>
        </>
    );
}
