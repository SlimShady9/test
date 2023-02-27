import axios from "axios";

const storeTask = async (task) => {
    try {
        const req = await axios.post("/api/task", task);
        return { data: req.data, error: null };
    } catch (error) {
        return { data: null, error };
    }
};

const deleteTask = async (id) => {
    try {
        const req = await axios.delete(`/api/task/${id}`);
        return { data: req.data, error: null };
    } catch (error) {
        return { data: null, error };
    }
};

const changeTaskState = async (id) => {
    
};

export { storeTask, deleteTask, changeTaskState };
