import React, { useEffect, useState } from "react";
import Container from "@/Components/Container";
import Authenticated from "@/Layouts/Authenticated";
import SalesGraph from "@/Components/Graph/SalesGraph";
import ServiceGraph from "@/Components/Graph/ServiceGraph";
import VolumeGraph from "@/Components/Graph/VolumeGraph";
import WeightGraph from "@/Components/Graph/WeightGraph";
import CostTContent from "@/Components/Graph/CostTContent";
import CostTService from "@/Components/Graph/CostTService";
import PriceTContent from "@/Components/Graph/PriceTContent";
import PriceTService from "@/Components/Graph/PriceTService";
import ProfitTContent from "@/Components/Graph/ProfitTContent";
import ServiceStateService from "@/Components/Graph/ServiceStateService";
import ServiceTService from "@/Components/Graph/ServiceTService";

import { getService } from "@/Utils/FetchService";

export default function Graph(props) {
    
    return (
        <>
            <Authenticated {...props}>
                <div className="">
                    <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3  mx-5 gap-5">
                        <CostTContent/>
                        <CostTService/>
                        <PriceTContent/>
                        <PriceTService/>
                        <ProfitTContent/>
                        <ServiceStateService/>
                        <ServiceTService/>
                    </div>
            
                    <div className="grid sm:grid-cols-2  mx-5 gap-5">
                        
                        <WeightGraph/>
                        <VolumeGraph/>
                        <SalesGraph/>
                        <ServiceGraph/>
                    </div>
                </div>
            </Authenticated>
        </>
    );
}
