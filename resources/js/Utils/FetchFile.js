import axios from "axios";

const deleteFile = async (fileName) => {
    try {
        const req = await axios.delete(`/api/file/${fileName}`);
        return [req.data, null];
    } catch (error) {
        return [null, error];
    }
};

const uploadFile = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    try {
        return await axios.post("/api/file", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
    } catch (error) {
        return { error, data: null };
    }
};

export { deleteFile, uploadFile };
