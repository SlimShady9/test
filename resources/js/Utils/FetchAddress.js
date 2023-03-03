import { GLOBALAPI, axiosConfig } from "@/Constants/GlobalAPI";
import axios from "axios";

const getCountries = async (apiKey) => {
    try {
    } catch (error) {}
    const response = await axios.get(
        `${GLOBALAPI}/countries`,
        axiosConfig(apiKey)
    );
    return response.data;
};

const getRegions = async (apiKey, countryId) => {
    const response = await axios.get(
        `${GLOBALAPI}/countries/${countryId}/states`,
        axiosConfig(apiKey)
    );
    return response.data;
};

const getCities = async (apiKey, countryId, stateId) => {
    const response = await axios.get(
        `${GLOBALAPI}/countries/${countryId}/states/${stateId}/cities`,
        axiosConfig(apiKey)
    );
    return response.data;
};

const saveAddress = async (address) => {
    address["country"] = address["country"]["label"];
    address["region"] = address["region"]["label"];
    address["city"] = address["city"]["label"];
    const req = await axios.post("/api/address", address);
    return req.data;
};

const updateAddress = async (address) => {
    address["country"] = address["country"]["label"];
    address["region"] = address["region"]["label"];
    address["city"] = address["city"]["label"];
    const req = await axios.put(`/api/address/${address.id}`, address);
    return req.data;
};

const deleteAddress = async (addressId) => {
    try {
        const req = await axios.delete(`/api/address/${addressId}`);
        return [req.data, null];
    } catch (error) {
        return [null, error];
    }
};

const getAddress = async (addressId) => {
    try {
        const req = await axios.get(`/api/address/${addressId}`);
        return [req.data[0], null];
    } catch (error) {
        return [null, error];
    }
};

const getAddressByService = async (serviceId) => {
    try {
        const req = await axios.get(`/api/service/${serviceId}/address/`);
        return [req.data, null];
    } catch (error) {
        return [null, error];
    }
};

export {
    getCountries,
    getRegions,
    getCities,
    saveAddress,
    deleteAddress,
    getAddress,
    getAddressByService,
    updateAddress,
};
