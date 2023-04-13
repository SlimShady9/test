import axios from "axios";

const updateMessaging = async (messaging) => {
    try {
        const req = (
            await axios.put(`/api/messaging/${messaging.id}`, messaging)
        ).data;
        return [req, null];
    } catch (error) {
        return [null, error];
    }
};

const storeMessaging = async (messaging) => {
    try {
        const req = axios.post("/api/messaging", messaging);
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
        const req = await axios.get(`/api/messaging/${idService}`);
        if (req.data.length === 0) {
            return [{}, null];
        }
        return [req.data[0], null];
    } catch (error) {
        return [null, error];
    }
};

export { storeMessaging, deleteMessaging, getMessaging, updateMessaging };
