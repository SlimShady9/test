import axios from "axios";

const saveAddress = async (address) => {
    address["country"] = address["country"]["label"];
    address["region"] = address["region"]["label"];
    address["city"] = address["city"]["label"];
    const req = await axios.post("/api/address", address);
    return req.data;
};

export { saveAddress };
