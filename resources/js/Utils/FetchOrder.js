import axios from "axios";

const createOrders = async (orders) => {
    try {
        return await axios.post("/api/order/multiple", orders);
    } catch (error) {
        return { error, data: null };
    }
};

export { createOrders };