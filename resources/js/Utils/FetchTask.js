import axios from "axios";

const storeTask = async (task) => {
    const newTask = {};
    for (var key in task) {
        if (task[key] != null && task[key] != "") {
            newTask[key] = task[key];
        }
    }
    try {
        const req = await axios.post("/api/task", newTask);
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

const getTask = async (serviceId) => {
    try {
        const req = await axios.get(`/api/task/${serviceId}`);
        return [await req.data, null];
    } catch (error) {
        return [null, error];
    }
};

const updateTask = async (task) => {
    try {
        const newTask = {};
        for (var key in task) {
            if (task[key] != null && task[key] != "") {
                newTask[key] = task[key];
            }
        }
        const req = await axios.put(`/api/task/${task.id}`, newTask);
        return [await req.data, null];
    } catch (error) {
        return [null, error];
    }
};

export { storeTask, deleteTask, getTask, updateTask };
