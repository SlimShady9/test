import React from "react";
import { Link, Head } from "@inertiajs/inertia-react";
import Base from "@/Layouts/Base";
import Container from "@/Components/Container"
import Card from "@/Components/Card"

export default function Welcome(props) {
    return (
        <Base>
            <Container>
                <Container>
                    <Card className={"bg-gradient-to-t from-white to-blue-light"} title={"T-Service 1"}>
                        <Container>
                            <Container className={"col-span-2 w-40 h-40 shadow-xl shadow-gray-dark bg-gradient-to-t from-white to-gray-servi rounded-full"}>
                            
                            </Container>
                            <br />
                            <Container>
                                Este es un ejemplo
                            </Container>
                        </Container>
                    </Card>
                    <Container className={"w-40 h-40 shadow-xl shadow-gray-dark bg-gradient-to-t from-white to-gray-servi rounded-full"}>
                        
                    </Container>
                </Container>
                <Container>
                
                </Container>
                <Container>
                
                </Container>
            </Container>
        </Base>
    );
}
