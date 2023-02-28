import axios from "axios";

const createOrders = async (orders) => {
    try {
        return await axios.post("/api/order/multiple", orders);
    } catch (error) {
        return { error, data: null };
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

export { createOrders, getOrder };
