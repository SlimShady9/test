import { TipoDeUsuariosEnum } from "@/Constants/TipoDeUsuariosEnum";
import axios from "axios";
import { createOrder } from "./FetchOrder";

const uploadService = async (service, idUser, typeUser) => {
    try {
        const req = await axios.post("/api/service", service);
        if (
            typeUser === TipoDeUsuariosEnum.CLIENTE_JURIDICO ||
            typeUser === TipoDeUsuariosEnum.CLIENTE_NATURAL
        ) {
            createOrder({
                id_service: req.data.id,
                id_user: idUser,
            });
        }
        return req;
    } catch (error) {
        return { error, data: null };
    }
};

const deleteService = async (id) => {
    try {
        return await axios.delete(`/api/service/${id}`);
    } catch (error) {
        return { error, data: null };
    }
};

const getService = async (idService) => {
    try {
        return [(await axios.get(`/api/service/${idService}`)).data, null];
    } catch (error) {
        return [null, error];
    }
};

const updateService = async (service) => {
    try {
        const req = (await axios.put(`/api/service/${service.id}`, service))
            .data;
        return [req, null];
    } catch (error) {
        return [null, error];
    }
};

const getAddressByService = async (idService) => {
    if (!idService) {
        return [{}, null];
    }
    try {
        return [
            (await axios.get(`/api/service/${idService}/address`)).data,
            null,
        ];
    } catch (error) {
        return [null, error];
    }
};

export {
    uploadService,
    deleteService,
    getService,
    updateService,
    getAddressByService,
};
