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

const getService = async (idService) => {
    try {
        return [(await axios.get(`/api/service/${idService}`)).data, null];
    } catch (error) {
        return [null, error];
    }
};

const updateService = async (service) => {
    try {
        const req = (await axios.put(`/api/service/${service.id}`, service))
            .data;
        return [req, null];
    } catch (error) {
        return [null, error];
    }
};

const getAddressByService = async (idService) => {
    try {
        return [
            (await axios.get(`/api/service/${idService}/address`)).data,
            null,
        ];
    } catch (error) {
        return [null, error];
    }
};

export {
    uploadFile,
    uploadService,
    deleteService,
    getService,
    updateService,
    getAddressByService,
};
