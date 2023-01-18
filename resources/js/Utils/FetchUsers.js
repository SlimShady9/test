import axios from "axios";
import cocatenateParams from "./Functions";

const getUsers = async (params) => {
    const req = await axios.get(`/api/users${cocatenateParams(params)}`);
    return req.data;
};

export { getUsers };
