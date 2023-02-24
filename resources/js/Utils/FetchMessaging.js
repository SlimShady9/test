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

const getMessaging = async (idService) => {
    try {
        const req = axios.get(`/api/messaging/${idService}`);
        return [req.data, null];
    } catch (error) {
        return [null, error];
    }
};

export { storeMessaging, deleteMessaging, getMessaging };
