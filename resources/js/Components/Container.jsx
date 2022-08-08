import React from "react";

function Container({ className = "", children }) {
    return (
        <div
            className={
                "inline-flex items-center px-4 py-2 rounded-md font-semibold text-xs uppercase tracking-widest gap-3 " +
                className
            }
        >
            {children}
        </div>
    );
}

export default Container;
