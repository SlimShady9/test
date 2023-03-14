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

const priceXTService = async () => {
    try {
        const req = await axios.get(`/api/graph/priceXTService`);
        return req.data;
    } catch (error) {
        console.log(error);
    }
};

const costXTService = async () => {
    try {
        const req = await axios.get(`/api/graph/costXTService`);
        return req.data;
    } catch (error) {
        console.log(error);
    }
};

const profitXTService = async () => {
    try {
        const req = await axios.get(`/api/graph/profitXTService`);
        return req.data;
    } catch (error) {
        console.log(error);
    }
};

const profitXTContent = async () => {
    try {
        const req = await axios.get(`/api/graph/profitXTContent`);
        return req.data;
    } catch (error) {
        console.log(error);
    }
};

const costXTContent = async () => {
    try {
        const req = await axios.get(`/api/graph/costXTContent`);
        return req.data;
    } catch (error) {
        console.log(error);
    }
};

const priceXTContent = async () => {
    try {
        const req = await axios.get(`/api/graph/priceXTContent`);
        return req.data;
    } catch (error) {
        console.log(error);
    }
};
const ServiceByTService = async () => {
    try {
        const req = await axios.get(`/api/graph/ServiceByTService`);
        return req.data;
    } catch (error) {
        console.log(error);
    }
};
const ServiceByStateService = async () => {
    try {
        const req = await axios.get(`/api/graph/ServiceByStateService`);
        return req.data;
    } catch (error) {
        console.log(error);
    }
};

const ServiceXTypeServicePerc = async () => {
    try {
        const req = await axios.get(`/api/graph/ServiceXTypeServicePerc`);
        return req.data;
    } catch (error) {
        console.log(error);
    }
};

export { costxSellBymonth, getServicesMonth, costXVolumen, costXWeight, priceXTService, costXTService, profitXTService, profitXTContent, costXTContent, priceXTContent, ServiceByTService, ServiceByStateService, ServiceXTypeServicePerc};
