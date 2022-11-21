import React from "react";
import Guest from "@/Layouts/Guest";
import Container from "@/Components/Container";
import Card from "@/Components/Card";
import Link from "@inertiajs/inertia-react";
import { GrGoogle } from "react-icons/gr";

const associates = [{ name: "", icon: "", url: "" }];

export default function Welcome(props) {
   
    return (
        
        <Guest className={"grid grid-cols-1 justify-center"}>
            <Container className={"justify-center"}>
            <h1 className="text-3xl mb-1 font-bold  text-center hover:scale-110 ease-in duration-200">Welcome Home</h1>
            </Container>
            <Container className={"flex justify-center hover:scale-105 ease-in duration-200"}>
            <Container 
            className="text-xl text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam enim nunc, lacinia a lobortis eget, mattis a augue. Praesent lacinia scelerisque sapien, at ornare risus luctus sed. Nam quis rutrum nunc. Sed tincidunt scelerisque mollis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pellentesque, risus sit amet pretium auctor, tortor tortor hendrerit purus, sit amet tempor tortor risus in arcu. Etiam imperdiet auctor nisi a condimentum.
            </Container>
            </Container>
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
