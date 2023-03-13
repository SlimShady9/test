import axios from "axios";
const costxSellBymonth = async () => {
    const req = await axios.get(`/api/graph/costxSellBymonth`);
    return req.data;
};

export { costxSellBymonth };
