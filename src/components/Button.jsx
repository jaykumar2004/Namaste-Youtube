import React from 'react';

const Button = ({name}) => {
    return (
        <div className="px-5 py-2 m-2 bg-gray-200 rounded-lg flex justify-center cursor-pointer">{name}</div>
    );
}

export default Button;
