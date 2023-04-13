import axios from "axios";

const storeContent = async (content) => {
    try {
        const req = await axios.post("/api/content", content);
        if (req.status === 200 || req.status === 201 || req.status === 202) {
            return { data: req.data, error: null };
        }
        return { data: null, error: "Error al guardar el contenido" };
    } catch (error) {
        return { data: null, error: error };
    }
};

const updateContent = async (content) => {
    try {
        const req = (await axios.put(`/api/content/${content.id}`, content))
            .data;
        return [req, null];
    } catch (error) {
        return [null, error];
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
        if (req.data.length === 0) {
            return [{}, null];
        }
        return [req.data[0], null];
    } catch (error) {
        return [null, error];
    }
};

export { storeContent, deleteContent, getContent, updateContent };
