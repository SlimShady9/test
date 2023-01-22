import axios from "axios";
import { GLOBALAPI } from "@/Constants/GlobalAPI";

const getOptionsTypeService = async () => {
    return Promise.resolve([
        { label: "Envío", value: 1 },
        { label: "Correspondencia", value: 2 },
        { label: "Coordinación de mensajería", value: 3 },
        { label: "Mandado", value: 4 },
    ]);
};

const getCountries = async (axiosConfig) => {
    const req = await axios.get("/api/countries", axiosConfig);
    return req.data;
};

const getStates = async (countryId, axiosConfig) => {
    const req = await axios.get(
        `${GLOBALAPI}/countries/${countryId}/states`,
        axiosConfig
    );
    return req.data;
};

const getCities = async (countryId, stateID, axiosConfig) => {
    const req = await axios.get(
        `${GLOBALAPI}/countries/${countryId}/states/${stateID}/cities`,
        axiosConfig
    );
    return req.data;
};

export { getOptionsTypeService, getCountries, getStates, getCities };
