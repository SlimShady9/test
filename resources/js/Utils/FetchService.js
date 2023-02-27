import axios from "axios";

const uploadFile = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    try {
        return await axios.post("/api/file", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
    } catch (error) {
        return { error, data: null };
    }
};

const uploadService = async (service) => {
    try {
        return await axios.post("/api/service", service);
    } catch (error) {
        return { error, data: null };
    }
};

const deleteService = async (id) => {
    try {
        return await axios.delete(`/api/service/${id}`);
    } catch (error) {
        return { error, data: null };
    }
};

const loadService = (id) => {
    axios.get(`/api/service/${id}`).then((res) => {
        console.log(res);
        return res;
    });
};

export { uploadFile, uploadService, deleteService, loadService };
