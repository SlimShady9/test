import axios from "axios";

const storeContent = async (content) => {
    try {
        const req = axios.post("/api/content", content);
        return { data: req.data, error: null };
    } catch (error) {
        return { data: null, error: error };
    }
};

const deleteContent = async (id) => {
    try {
        const req = await axios.delete(`/api/content/${id}`);
        return { data: req.data, error: null };
    } catch (error) {
        return { data: null, error: error };
    }
};

const getContent = async (idService) => {
    try {
        const req = await axios.get(`/api/content/${idService}`);
        return [req.data, null];
    } catch (error) {
        return [null, error];
    }
};

export { storeContent, deleteContent, getContent };
