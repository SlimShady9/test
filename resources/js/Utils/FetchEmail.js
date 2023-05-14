import axios from "axios";

const sendEmail = async (content) => {
    try {
        axios.post(`/api/email`, content);
    } catch (error) {
        return { data: null, error: error };
    }
};

const sendEmailNoAuth = async (content) => {
    try {
        const req = axios.post(`/api/emailMainPage`, content);
        return { data: (await req).data.success, error: null };
    } catch (error) {
        return { data: null, error: error };
    }
};

export { sendEmail, sendEmailNoAuth };
