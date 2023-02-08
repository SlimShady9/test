import React from "react";

function TaskBox({ task, onDelete }) {
    return <div>{task.name}</div>;
}

export default TaskBox;
