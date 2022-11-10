import React from "react";
import Guest from "@/Layouts/Guest";
import Container from "@/Components/Container";
import Card from "@/Components/Card";

const associates = [{ name: "", icon: "", url: "" }];

export default function Welcome(props) {
    return (
        <Guest className={"grid grid-cols-1 justify-center"}>
            <Container className={"lg:flex md:grid justify-center"}>
            <h1 className="text-lg mb-1 font-bold">Welcome Home</h1>
            </Container>
            <Container className={"lg:flex md:grid justify-center"}>
                <Card
                    className={
                        "grid gap-4 py-4 justify-center scale-100 hover:scale-105 ease-in duration-200"
                    }
                    col={"1"}
                    title={"T-Service 1"}
                >
                    <Container
                        className={
                            "flex w-40 h-40 shadow-xl overflow-hidden shadow-gray-dark bg-gradient-to-t from-white to-gray-servi rounded-full"
                        }
                    >
                        <img src="https://climbea.com/wp-content/uploads/2021/05/control-gestion.png" />
                    </Container>
                    <Container className={"justify-center"}>
                        Este es un ejemplo
                    </Container>
                </Card>
                <Card
                    className={
                        "grid gap-4 py-4 justify-center scale-100 hover:scale-105 ease-in duration-200"
                    }
                    col={"1"}
                    title={"T-Service 1"}
                >
                    <Container
                        className={
                            "flex w-40 h-40 shadow-xl overflow-hidden shadow-gray-dark bg-gradient-to-t from-white to-gray-servi rounded-full"
                        }
                    >
                        <img src="https://climbea.com/wp-content/uploads/2021/05/control-gestion.png" />
                    </Container>
                    <Container className={"justify-center"}>
                        Este es un ejemplo
                    </Container>
                </Card>
                <Card
                    className={
                        "grid gap-4 py-4 justify-center scale-100 hover:scale-105 ease-in duration-200"
                    }
                    col={"1"}
                    title={"T-Service 1"}
                >
                    <Container
                        className={
                            "flex w-40 h-40 shadow-xl overflow-hidden shadow-gray-dark bg-gradient-to-t from-white to-gray-servi rounded-full"
                        }
                    >
                        <img src="https://climbea.com/wp-content/uploads/2021/05/control-gestion.png" />
                    </Container>
                    <Container className={"justify-center"}>
                        Este es un ejemplo
                    </Container>
                </Card>
            </Container>
            <Container className={"flex justify-center"}>
                <Container
                    className={
                        " sm:scale-75 flex w-40 h-40 shadow-xl overflow-hidden shadow-gray-dark bg-gradient-to-t from-gray-servi to-gray-dark rounded-full hover:opacity-30"
                    }
                >
                    <img
                        className="scale-100 hover:scale-150 ease-in duration-500"
                        src="https://static.wixstatic.com/media/d991ba_a9ae7991896e44f4a2388d9a9b2149cf~mv2.png/v1/fill/w_320,h_320,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Logo-Inter-Rapidisimo-Vh-400x122-1.png"
                    />
                </Container>
                <Container
                    className={
                        "flex w-40 h-40 shadow-xl overflow-hidden shadow-gray-dark bg-gradient-to-t from-gray-servi to-gray-dark rounded-full hover:opacity-30"
                    }
                >
                    <img
                        className="scale-100 hover:scale-150 ease-in duration-500"
                        src="https://static.wixstatic.com/media/d991ba_a9ae7991896e44f4a2388d9a9b2149cf~mv2.png/v1/fill/w_320,h_320,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Logo-Inter-Rapidisimo-Vh-400x122-1.png"
                    />
                </Container>
                <Container
                    className={
                        "flex w-40 h-40 shadow-xl overflow-hidden shadow-gray-dark bg-gradient-to-t from-gray-servi to-gray-dark rounded-full hover:opacity-30"
                    }
                >
                    <img
                        className="scale-100 hover:scale-150 ease-in duration-500"
                        src="https://static.wixstatic.com/media/d991ba_a9ae7991896e44f4a2388d9a9b2149cf~mv2.png/v1/fill/w_320,h_320,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Logo-Inter-Rapidisimo-Vh-400x122-1.png"
                    />
                </Container>
            </Container>
        </Guest>
    );
}
