import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {toggleMenu} from "../utils/appSlice.jsx";
import {YOUTUBE_SEARCH_API} from "../utils/constants.jsx";

const Header = () => {


    const dispatch = useDispatch();

    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    }

    return (
        <div className="flex items-center justify-between px-4 py-2 shadow-md sticky top-0 bg-white z-50">
            {/* Left: Menu and Logo */}
            <div className="flex items-center space-x-4">
                <img
                    onClick={() => toggleMenuHandler()}
                    className="h-8 cursor-pointer"
                    alt="menu"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAARVBMVEX///8jHyAgHB0OBQgMAAWlpKQpJSaenZ309PUAAAAIAAD8/Pz5+fna2tqop6dvbW1oZmevrq4tKivFxMQYExRiYGC+vr7Dc4WrAAABB0lEQVR4nO3cS3LCMBAFQGIIIBPbhN/9jxqSyiIsTUnlydB9g1eSNV5MvdUKAAAAAAAAAAAAAAAAXtEwvscwDk3yHabSb2Loy/TRIOHUv8XRH+sHHMrSqR6U+hd1jHSE90P8lHC2/Lc0/0vzMy3WMdynxaFBwu+Jv4uh0cQHAAAAAAAAAIB59jG0ijdcT9sYTtcmK0PncumiuJRz/YD7bbf0ut4f3br+GvQt2PblrXrC3WbpUA/6sXrC/GeY/zvM/5aGmofHZiu0S//M/GoVDwAAAAAAAAAAZsjeuRerN1HL7hPy95fm76DNnzD/Lc3/0rxAJ3v+Xn0AAAAAAAAAAAAAAAD4T74AYhs1O+vt3ioAAAAASUVORK5CYII="
                />
                <a href="/">
                    <img
                        className="h-6"
                        alt="logo"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
                    />
                </a>
            </div>

            {/* Center: Search Bar */}
            <div className="flex flex-1 justify-center max-w-xl px-4">
                <input
                    className="w-full border border-gray-300 p-2 rounded-l-full"
                    type="text"
                    placeholder="Search"
                />
                <button className="border border-gray-300 bg-gray-100 px-4 rounded-r-full cursor-pointer">
                    🔍
                </button>
            </div>

            {/* Right: User Icon */}
            <div className="flex items-center space-x-4">
                <img
                    className="h-8 w-8 rounded-full"
                    alt="user"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s"
                />
            </div>
        </div>
    );
};

export default Header;
