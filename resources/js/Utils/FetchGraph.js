import axios from "axios";
const costxSellBymonth = async () => {
    const req = await axios.get(`/api/graph/costxSellBymonth`);
    return req.data;
};

const getServicesMonth = async () => {
    try {
        const req = await axios.get(`/api/graph/servicesxTimeRange`);
        return req.data;
    } catch (error) {
        console.log(error);
    }
};

const costXVolumen = async () => {
    try {
        const req = await axios.get(`/api/graph/costXVolumen`);
        return req.data;
    } catch (error) {
        console.log(error);
    }
};

const costXWeight = async () => {
    try {
        const req = await axios.get(`/api/graph/costXWeight`);
        return req.data;
    } catch (error) {
        console.log(error);
    }
};

export { costxSellBymonth, getServicesMonth, costXVolumen, costXWeight };
