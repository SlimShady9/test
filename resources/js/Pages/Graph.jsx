import React, { useEffect, useState } from "react";
import Container from "@/Components/Container";
import Authenticated from "@/Layouts/Authenticated";
import SalesGraph from "@/Components/Graph/SalesGraph";
import ServiceGraph from "@/Components/Graph/ServiceGraph";
import VolumeGraph from "@/Components/Graph/VolumeGraph";
import WeightGraph from "@/Components/Graph/WeightGraph";
import { getService } from "@/Utils/FetchService";

export default function Graph(props) {
    
    return (
        <>
            <Authenticated {...props}>
                    <div className="grid sm:grid-cols-2  mx-5 gap-5">
                        <WeightGraph/>
                        <VolumeGraph/>
                        <SalesGraph/>
                        <ServiceGraph/>
                    </div>
            </Authenticated>
        </>
    );
}
