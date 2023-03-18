import axios from "axios";

const createOrders = async (orders) => {
    try {
        return await axios.post("/api/order/multiple", orders);
    } catch (error) {
        return { error, data: null };
    }
};

const findOrders = async (orders) => {
    try {
        const req = await axios.get("/api/order", orders);
        return [req.data, null];
    } catch (error) {
        return [null, error];
    }
};

const deleteOrder = async (id) => {
    try {
        const req = await axios.delete(`/api/order/${id}`);
        return { data: req.data, error: null };
    } catch (error) {
        return { data: null, error: error };
    }
};

const getOrder = async (idService) => {
    try {
        const req = await axios.get(`/api/order/${idService}`);
        return [req.data, null];
    } catch (error) {
        return [null, error];
    }
};

export { createOrders, getOrder,findOrders, deleteOrder };
