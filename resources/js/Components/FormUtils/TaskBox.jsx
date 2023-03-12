import React from "react";
import Button from "./Button";
import Label from "./Label";
import moment from "moment/moment";

function TaskBox({ task, onDelete, editTask }) {
    return (
        <div className="grid gap-3 my-2">
            <div
                className={
                    "grid hover:shadow-lg grid-cols-6  bg-gradient-to-t from-white to-gray-servi rounded-xl"
                }
            >
                <button
                    onClick={() => editTask(task)}
                    className="col-span-6 flex transition-colors hover:bg-gray-dark"
                >
                    <Label className="ml-3 bg-white text-center shadow-lg rounded-full justify_left col-span-2 aling-center my-auto overflow-hidden py-2 px-3">
                        {task.name}
                    </Label>
                    <div className="justify-center mx-auto text-center grid col-span-3 mt-2 aling-center">
                        <Label className="text-lg font-bold text-left mb-3 overflow-hidden"></Label>
                        <div className="text-xs mb-3 overflow-hidden">
                            {task.desc} -{" "}
                            {moment(task.limit_date).format("DD/MM/YYYY")}
                        </div>
                    </div>
                </button>
                <Button
                    className="col-span-1 col-end-13 ml-auto mr-0"
                    onClick={() => onDelete(task.id)}
                >
                    X
                </Button>
            </div>
        </div>
    );
}

export default TaskBox;
