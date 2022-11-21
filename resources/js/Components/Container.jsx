import React from "react";

function Container({ className = "", children }) {
    return (
        <div
            className={
                "px-4 py-4 text-xs tracking-widest gap-4 " +
                className
            }
        >
            {children}
        </div>
        
    );
}

export default Container;
