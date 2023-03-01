import axios from "axios";

const sendEmail = async (content) => {
    try {
        axios.post(`/api/email/`, content);
    } catch (error) {
        return { data: null, error: error };
    }
};


export { sendEmail };
