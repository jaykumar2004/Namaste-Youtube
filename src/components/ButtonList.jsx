import React from 'react';
import Button from './Button';

const buttonNames = [
    "All",
    "Gaming",
    "Songs",
    "Live",
    "Soccer",
    "Cricket",
    "News",
    "Cooking",
    "Valentines",
    "Podcasts"
];

const ButtonList = () => {
    return (
        <div className="flex">
            {buttonNames.map((name) => (
                <Button key={name} name={name} />
            ))}
        </div>
    );
};

export default ButtonList;
