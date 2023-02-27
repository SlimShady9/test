import axios from "axios";

const storeMessaging = async (content) => {
    try {
        const req = axios.post("/api/messaging", content);
        return { data: req.data, error: null };
    } catch (error) {
        return { data: null, error: error };
    }
};

const deleteMessaging = async (id) => {
    try {
        const req = axios.delete(`/api/messaging/${id}`);
        return { data: req.data, error: null };
    } catch (error) {
        return { data: null, error: error };
    }
};

const getMessaging = async (params) => {
    const req = await axios.get(`/api/messaging?${cocatenateParams(params)}`);
    return req.data;
};

export { storeMessaging, deleteMessaging, getMessaging };
