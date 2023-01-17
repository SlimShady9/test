import axios from "axios";
import TipoDeUsuariosEnum from "@/Constants/TipoDeUsuariosEnum";

const getUsers = async (params) => {
    const req = await axios.get(`/api/users/${cocatenateParams(params)}`);
    return req.data;
};

export { getOptionsTypeService };
