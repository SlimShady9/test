import React from 'react';

export default function Checkbox({ name, value, text, handleChange }) {
    return (
        <div className='flex gap-3 justify-center items-center'>
            <input
            type="checkbox"
            name={name}
            id={name}
            value={value}
            className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            onChange={(e) => handleChange(e)} />
            <label for={name}>{text}</label>
        </div>
    );
}
