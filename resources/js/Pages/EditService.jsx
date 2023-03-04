import React, { useEffect, useState } from "react";
import AddressForm from "@/Components/AddressForm";
import Card from "@/Components/Card";
import Container from "@/Components/Container";
import StepProgressCircles from "@/Components/MultiStepForm/StepProgressCircles";
import ContentForm from "@/Components/ServiceForms/ContentForm";
import MessagingForm from "@/Components/ServiceForms/MessagingForm";
import ServiceDataForm from "@/Components/ServiceForms/ServiceDataForm";
import TaskForm from "@/Components/ServiceForms/TaskForm";
import UsersForm from "@/Components/ServiceForms/UsersForm";
import ServiceContext from "@/Components/ServiceForms/useServiceContext";
import { EstadoServiciosEnum } from "@/Constants/EstadoServiciosEnum";
import { TipoDeServiciosEnum } from "@/Constants/TipoDeServiciosEnum";
import Authenticated from "@/Layouts/Authenticated";
import { getContent } from "@/Utils/FetchContent";
import { getMessaging } from "@/Utils/FetchMessaging";
import { getOrder } from "@/Utils/FetchOrder";
import { getAddressByService, getService } from "@/Utils/FetchService";
import { getTask } from "@/Utils/FetchTask";
import ReactLoading from "react-loading";

function EditService(props) {
    const { auth, serviceId } = props;

    const initialStateServicesAvailable = [
        EstadoServiciosEnum.SERVICIO_INCIADO,
        EstadoServiciosEnum.SERVICIO_DIRECCION_CONFIRMADA,
        EstadoServiciosEnum.SERVICIO_MENSAJERIA,
        EstadoServiciosEnum.SERVICIO_USUARIOS_ASIGNADOS,
        EstadoServiciosEnum.SERVICIO_CON_CONTENIDO,
        EstadoServiciosEnum.SERVICIO_CON_TAREAS,
    ];

    const [servicesAvailable, setServicesAvailable] = useState(
        initialStateServicesAvailable
    );

    const [stateService, setStateService] = useState(
        EstadoServiciosEnum.SERVICIO_CON_CONTENIDO
    );

    const [dataLoaded, setDataLoaded] = useState(false);

    // State of the progress of service creation using context api
    const [serviceDTO, setServiceDTO] = useState({
        service: {},
        address: {},
        messaging: {},
        content: {},
        orders: [],
        tasks: [],
    });

    useEffect(() => {
        fetchDTO();
    }, []);

    const fetchDTO = async () => {
        var dataMessaging = {};
        var dataContent = {};
        const [dataService, errorService] = await getService(serviceId);
        if (errorService != null) {
        }
        setServiceDTO((prev) => {
            return {
                ...prev,
                service: dataService,
            };
        });
        const [dataAddr, errorAddr] = await getAddressByService(
            dataService.address
        );
        if (errorAddr != null) {
        }
        if (
            serviceDTO.service.id_type_service !==
                TipoDeServiciosEnum.LOGISTICA_DE_MENSJERIA &&
            serviceDTO.service.id_type_service !==
                TipoDeServiciosEnum.GESTION_DOCUMENTAL
        ) {
            // messaging
            var [dataMessaging, errorMessaging] = await getMessaging(serviceId);
            if (errorMessaging != null) {
            }
            // content
            var [dataContent, errorContent] = await getContent(serviceId);
            if (errorContent != null) {
            }
        }
        const [dataOrders, errorOrders] = await getOrder(serviceId);
        if (errorOrders != null) {
        }
        const [dataTasks, errorTasks] = await getTask(serviceId);
        if (errorTasks != null) {
        }
        setServiceDTO({
            service: dataService,
            address: dataAddr,
            messaging: dataMessaging,
            content: dataContent,
            orders: dataOrders,
            tasks: dataTasks,
        });
        console.log(dataContent);
        setDataLoaded(true);
    };

    return (
        <>
            <Authenticated {...props}>
                {!dataLoaded && (
                    <ReactLoading
                        type={"spin"}
                        color={"#D3D3D3"}
                        height={"10%"}
                        width={"10%"}
                        className="m-auto translate-y-2/3"
                    />
                )}
                {dataLoaded && (
                    <Container className="flex justify-center">
                        <Card className="sm:w-3/5">
                            <h1 className="text-2xl font-bold text-center">
                                Crear Servicio
                            </h1>
                            <StepProgressCircles
                                currentStep={stateService}
                                steps={servicesAvailable}
                            ></StepProgressCircles>
                            <></>
                            <ServiceContext.Provider
                                value={{ serviceDTO, setServiceDTO }}
                            >
                                {stateService ===
                                    EstadoServiciosEnum.SERVICIO_INCIADO && (
                                    <ServiceDataForm
                                        currentStep={stateService}
                                        setNextStep={setStateService}
                                        setServicesAvailable={
                                            setServicesAvailable
                                        }
                                        service={serviceDTO.service}
                                        isEdit={true}
                                    />
                                )}
                                {stateService ===
                                    EstadoServiciosEnum.SERVICIO_MENSAJERIA && (
                                    <MessagingForm
                                        currentStep={stateService}
                                        setNextStep={setStateService}
                                        user={props.auth.user.id}
                                        messaging={serviceDTO.messaging}
                                    />
                                )}
                                {stateService ===
                                    EstadoServiciosEnum.SERVICIO_DIRECCION_CONFIRMADA && (
                                    <AddressForm
                                        api_token={props.api_token}
                                        address={serviceDTO.address}
                                        onSubmit={(res) => {
                                            setServiceDTO(function (prev) {
                                                return {
                                                    ...prev,
                                                    address: res,
                                                };
                                            });
                                            setStateService(
                                                EstadoServiciosEnum.SERVICIO_MENSAJERIA
                                            );
                                        }}
                                    />
                                )}
                                {stateService ===
                                    EstadoServiciosEnum.SERVICIO_USUARIOS_ASIGNADOS && (
                                    <UsersForm
                                        currentStep={stateService}
                                        setNextStep={setStateService}
                                        users={serviceDTO.orders}
                                    />
                                )}
                                {stateService ===
                                    EstadoServiciosEnum.SERVICIO_CON_CONTENIDO && (
                                    <ContentForm
                                        currentStep={stateService}
                                        setNextStep={setStateService}
                                        content={serviceDTO.content}
                                        isEdit={true}
                                    />
                                )}
                                {stateService ===
                                    EstadoServiciosEnum.SERVICIO_CON_TAREAS && (
                                    <TaskForm
                                        api_token={props.api_token}
                                        currentStep={stateService}
                                        setNextStep={setStateService}
                                        tasks={serviceDTO.tasks}
                                    />
                                )}
                            </ServiceContext.Provider>
                        </Card>
                    </Container>
                )}
            </Authenticated>
        </>
    );
}

export default EditService;
