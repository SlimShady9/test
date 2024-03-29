import axios from "axios";

const updateMessaging = async (messaging) => {
    const newMessaging = {};
    for (var key in messaging) {
        if (messaging[key] != null) {
            newMessaging[key] = messaging[key];
        }
    }
    try {
        const req = (
            await axios.put(`/api/messaging/${messaging.id}`, newMessaging)
        ).data;
        return [req, null];
    } catch (error) {
        return [null, error];
    }
};

const storeMessaging = async (messaging) => {
    try {
        const req = await axios.post("/api/messaging", messaging);
        return { data: req.data, error: null };
    } catch (error) {
        return { data: null, error: error };
    }
};

const deleteMessaging = async (id) => {
    try {
        const req = await axios.delete(`/api/messaging/${id}`);
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
