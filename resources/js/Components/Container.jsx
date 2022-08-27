import React from "react";

function Container({ className = "", children }) {
    return (
        <div
            className={
                "px-4 py-2 text-xs tracking-widest gap-3 " +
                className
            }
        >
            {children}
        </div>
    );
}

export default Container;
