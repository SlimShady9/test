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
import ProfitTService from "@/Components/Graph/ProfitTService";
import ServiceStateService from "@/Components/Graph/ServiceStateService";
import ServiceTService from "@/Components/Graph/ServiceTService";

import { getService } from "@/Utils/FetchService";

export default function Graph(props) {
    
    return (
        <>
            <Authenticated {...props}>
                <h1 className="text-blue-primary text-3xl mb-10 font-bold  text-center hover:scale-110 ease-in duration-200">
                    Gráficas Analíticas
                </h1>
                <div className="">
                    <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3  sm:mx-5 gap-5">
                        <CostTContent/>
                        <PriceTContent/>
                        <ProfitTContent/>
                        <CostTService/>
                        <PriceTService/>
                        <ProfitTService/>
                    </div>
            
                    <div className="grid sm:grid-cols-2  sm:mx-5 gap-5">
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
