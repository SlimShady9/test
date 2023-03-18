const GLOBALAPI = "https://api.countrystatecity.in/v1";

const axiosConfig = (apiKey) => {
    return {
        headers: {
            "X-CSCAPI-KEY": apiKey,
        },
    };
};

export { GLOBALAPI, axiosConfig };
