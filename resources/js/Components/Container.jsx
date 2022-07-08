import React from "react";

function Container({className = '', children}) {
    return (
        <div
            
            className={
                'inline-flex items-center px-4 py-2 bg-gray-900 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest ' 
                + className
            }
        >
        {children}
        </div>
    );
}

export default Container;

