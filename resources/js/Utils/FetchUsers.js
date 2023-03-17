import axios from "axios";
import { cocatenateParams } from "./Functions";

const getUsers = async (params) => {
    const req = await axios.get(`/api/user?${cocatenateParams(params)}`);
    return req.data;
};

const getUser = async (id) => {
    const req = await axios.get(`/api/user/${id}`);
    return req.data;
};

const updateUsers = async (user) => {
    try {
        const req = await axios.put(`/api/user/${user.id}`, user);
        return [await req.data, null];
    } catch (error) {
        return [null, error];
    }
};

const loadImageUser = (user) => {
    return "api/user/" + user + "/profileimg";
};

const inactivateUser = async (user) => {
    try {
        const req = await axios.put(`/api/user/${user.id}`, {
            ...user,
            state: false,
        });
        return [await req.data, null];
    } catch (error) {
        return [null, error];
    }
};

export { getUsers, loadImageUser, updateUsers, getUser, inactivateUser };
