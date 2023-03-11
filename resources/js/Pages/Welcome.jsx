import React from "react";
import Guest from "@/Layouts/Guest";
import Container from "@/Components/Container";
import Card from "@/Components/Card";
import Link from "@inertiajs/inertia-react";

import barras from "../../imgs/barras.png";
import trasnportes from "../../imgs/transportes.png";

import { GrEdit } from "react-icons/gr";
import { GrGoogle } from "react-icons/gr";
import { welcome, title, mainText } from "@/Utils/FetchParameters";

const associates = [{ name: "", icon: "", url: "" }];
import Label from "@/Components/FormUtils/Label";

export default function Welcome(props) {
   
    return (
        
        <Guest className={"grid grid-cols-1 justify-center"}>

            <img className="fixed w-full inset-y-1/3 -z-10 scale-125" src={trasnportes}/> 
            <div>
            <h1 className="text-4xl w-3/4 mx-auto text-blue- mb-1 font-bold  text-center hover:scale-110 ease-in duration-200">
                {welcome}
            </h1>
            <div className="">
                <div className="flex">
                    
                    
                </div>
            </div>
            </div>
            <Container className={"grid grid-cols-2 justify-center"}>
            <h1 className="text-3xl font-bold my-auto text-center hover:scale-110 ease-in duration-200">
                {title}
            </h1>
            <Container className={"flex justify-center hover:scale-105 ease-in duration-200"}>
            <Label
            className="text-lg text-center">
            {mainText}
            </Label>
            </Container>
            </Container>
            <div className="h-10 w-full bg-gradient-to-r from-white to-blue-light"/>
            <Container className={"grid lg:flex md:flex sm:flex justify-center gap-4"}>
                
                <Card
                    className={
                        "grid contentgrid-cols-1 content-center text-xl gap-4 scale-100 hover:scale-105 ease-in duration-200"
                    }
                    col={"1"}
                    title={"T-Service 1"}
                >
                    <Container
                        className={
                            "ml-6 mr-6 hadow-xl overflow-hidden shadow-gray-dark bg-gradient-to-t from-white to-gray-servi rounded-full"
                        }
                    >
                        <img src="https://climbea.com/wp-content/uploads/2021/05/control-gestion.png" />
                    </Container>
                    <Container className={"text-center hover:scale-110 ease-in duration-100"}>
                        Este es un ejemplo Este es un ejemplo Este es un ejemplo Este es un ejemplo Este es un ejemplo Este es un ejemplo 
                    </Container>
                    <Container className={"text-center hover:scale-110 ease-in duration-200"}>
                    <a
                        href="google.com"
                        className="underline cursor-pointer"
                    >
                        Example Link To the Resource
                    </a>
                    </Container>
                </Card>
                <Card
                    className={
                        "grid contentgrid-cols-1 content-center text-xl gap-4 scale-100 hover:scale-105 ease-in duration-200"
                    }
                    col={"1"}
                    title={"T-Service 1"}
                >
                    <Container
                        className={
                            "ml-6 mr-6 hadow-xl overflow-hidden shadow-gray-dark bg-gradient-to-t from-white to-gray-servi rounded-full"
                        }
                    >
                        <img src="https://climbea.com/wp-content/uploads/2021/05/control-gestion.png" />
                    </Container>
                    <Container className={"text-center hover:scale-110 ease-in duration-100"}>
                        Este es un ejemplo Este es un ejemplo Este es un ejemplo Este es un ejemplo Este es un ejemplo Este es un ejemplo 
                    </Container>
                    <Container className={"text-center hover:scale-110 ease-in duration-200"}>
                    <a
                        href="google.com"
                        className="underline cursor-pointer"
                    >
                        Example Link To the Resource
                    </a>
                    </Container>
                </Card>
                <Card
                    className={
                        "grid contentgrid-cols-1 content-center text-xl gap-4 scale-100 hover:scale-105 ease-in duration-200"
                    }
                    col={"1"}
                    title={"T-Service 1"}
                >
                    <Container
                        className={
                            "ml-6 mr-6 hadow-xl overflow-hidden shadow-gray-dark bg-gradient-to-t from-white to-gray-servi rounded-full"
                        }
                    >
                        <img src="https://climbea.com/wp-content/uploads/2021/05/control-gestion.png" />
                    </Container>
                    <Container className={"text-center hover:scale-110 ease-in duration-100"}>
                        Este es un ejemplo Este es un ejemplo Este es un ejemplo Este es un ejemplo Este es un ejemplo Este es un ejemplo 
                    </Container>
                    <Container className={"text-center hover:scale-110 ease-in duration-200"}>
                    <a
                        href="google.com"
                        className="underline cursor-pointer"
                    >
                        Example Link To the Resource
                    </a>
                    </Container>
                </Card>
            </Container>
            <Container className={"flex justify-center"}>
                <Container
                    className={
                        "flex lg:m-10 lg:w-28 lg:h-28 sm:w-20 sm:h-20 shadow-xl overflow-hidden shadow-gray-dark bg-gradient-to-t from-gray-servi to-gray-dark rounded-full hover:opacity-30"
                    }
                >
                    <img
                        className="sm:scale-150 scale-125 hover:scale-150 ease-in duration-200"
                        src="https://static.wixstatic.com/media/d991ba_a9ae7991896e44f4a2388d9a9b2149cf~mv2.png/v1/fill/w_320,h_320,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Logo-Inter-Rapidisimo-Vh-400x122-1.png"
                    />
                </Container>
                <Container
                    className={
                        "flex lg:m-10 lg:w-28 lg:h-28 sm:w-20 sm:h-20 shadow-xl overflow-hidden shadow-gray-dark bg-gradient-to-t from-gray-servi to-gray-dark rounded-full hover:opacity-30"
                    }
                >
                    <img
                        className="sm:scale-150 scale-125 hover:scale-150 ease-in duration-200"
                        src="https://static.wixstatic.com/media/d991ba_a9ae7991896e44f4a2388d9a9b2149cf~mv2.png/v1/fill/w_320,h_320,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Logo-Inter-Rapidisimo-Vh-400x122-1.png"
                    />
                </Container>
                <Container
                    className={
                        "flex lg:m-10 lg:w-28 lg:h-28 sm:w-20 sm:h-20 shadow-xl overflow-hidden shadow-gray-dark bg-gradient-to-t from-gray-servi to-gray-dark rounded-full hover:opacity-30"
                    }
                >
                    <img
                        className="sm:scale-150 scale-125 hover:scale-150 ease-in duration-200"
                        src="https://static.wixstatic.com/media/d991ba_a9ae7991896e44f4a2388d9a9b2149cf~mv2.png/v1/fill/w_320,h_320,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Logo-Inter-Rapidisimo-Vh-400x122-1.png"
                    />
                </Container>
                <Container
                    className={
                        "flex lg:m-10 lg:w-28 lg:h-28 sm:w-20 sm:h-20 shadow-xl overflow-hidden shadow-gray-dark bg-gradient-to-t from-gray-servi to-gray-dark rounded-full hover:opacity-30"
                    }
                >
                    <img
                        className="sm:scale-150 scale-125 hover:scale-150 ease-in duration-200"
                        src="https://static.wixstatic.com/media/d991ba_a9ae7991896e44f4a2388d9a9b2149cf~mv2.png/v1/fill/w_320,h_320,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Logo-Inter-Rapidisimo-Vh-400x122-1.png"
                    />
                </Container>
                <Container
                    className={
                        "flex lg:m-10 lg:w-28 lg:h-28 sm:w-20 sm:h-20 shadow-xl overflow-hidden shadow-gray-dark bg-gradient-to-t from-gray-servi to-gray-dark rounded-full hover:opacity-30"
                    }
                >
                    <img
                        className="sm:scale-150 scale-125 hover:scale-150 ease-in duration-200"
                        src="https://static.wixstatic.com/media/d991ba_a9ae7991896e44f4a2388d9a9b2149cf~mv2.png/v1/fill/w_320,h_320,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Logo-Inter-Rapidisimo-Vh-400x122-1.png"
                    />
                </Container>

            </Container>
        </Guest>
    );
}
