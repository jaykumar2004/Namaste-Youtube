import React from "react";
import {
    Home,
    Flame,
    Video,
    Radio,
    Music,
    Trophy,
    Gamepad2,
    Clapperboard,
    Clock,
} from "lucide-react";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const Sidebar = () => {

    const isMenuOpen = useSelector((store) => store.app.isMenuOpen);


    //early return pattern
    if (!isMenuOpen) return null;

    return (
        <div className="p-5 shadow-lg w-48 text-sm space-y-6">
            <ul className="space-y-2">
                <li>
                    <Link to="/" className="flex items-center gap-2">
                        <Home size={18}/>
                        Home
                    </Link>
                </li>
                <li className="flex items-center gap-2">
                    <Flame size={18}/> Shorts
                </li>
                <li className="flex items-center gap-2">
                    <Video size={18}/> Videos
                </li>
                <li className="flex items-center gap-2">
                    <Radio size={18}/> Live
                </li>
            </ul>

            <div>
                <h1 className="text-lg font-extrabold mb-2">Subscriptions</h1>
                <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                        <Music size={18}/> Music
                    </li>
                    <li className="flex items-center gap-2">
                        <Trophy size={18}/> Sports
                    </li>
                    <li className="flex items-center gap-2">
                        <Gamepad2 size={18}/> Gaming
                    </li>
                    <li className="flex items-center gap-2">
                        <Clapperboard size={18}/> Movies
                    </li>
                </ul>
            </div>

            <div>
                <h1 className="text-lg font-extrabold mb-2">Watch Later</h1>
                <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                        <Music size={18}/> Music
                    </li>
                    <li className="flex items-center gap-2">
                        <Trophy size={18}/> Sports
                    </li>
                    <li className="flex items-center gap-2">
                        <Gamepad2 size={18}/> Gaming
                    </li>
                    <li className="flex items-center gap-2">
                        <Clapperboard size={18}/> Movies
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
