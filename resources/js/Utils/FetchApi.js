import axios from "axios";

const getOptionsTypeService = () => {
    return Promise.resolve([
        { label: "Envío", value: 1 },
        { label: "Correspondencia", value: 2 },
        { label: "Coordinación de mensajería", value: 3 },
        { label: "Mandado", value: 4 },
    ]);
};

const getUsers = () => {
    return axios.get("/api/users");
};

export { getOptionsTypeService, getUsers };
