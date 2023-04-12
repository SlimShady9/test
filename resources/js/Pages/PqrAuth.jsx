import Card from "@/Components/Card";
import Container from "@/Components/Container";
import PqrsForm from "@/Components/PqrsForm";
import Authenticated from "@/Layouts/Authenticated";
import React from "react";

export default function PqrAuth(props) {
    return (
        <Authenticated {...props}>
            <Container className="m-auto lg:h-1/2 xl:w-2/4 md:w-1/2 sm:w-11/12 sm:mt-20">
                <Card className={"m-auto"}>
                    <PqrsForm auth={props.auth} isMainPage={true} />
                </Card>
            </Container>
        </Authenticated>
    );
}
