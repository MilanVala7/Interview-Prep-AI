import React from "react";
import ProfileInfoCard from "../cards/ProfileInfoCard";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="h-16 bg-white  border border-b border-gray-200/50 backdrop-blur-[2px] py-2.5 px-4 md:px-0 sticky top-0 z-30">
            <div className="container mx-auto px-20 flex items-center justify-between gap-5">
                <Link to="/dashboard">
                    <span className=" text-2xl text-transparent bg-clip-text bg-[radial-gradient(circle,_#FF9324_0%,_#FCD760_100%)] bg-[length:200%_200%] animate-text-shine font-semibold">
                        SmartPrepAi
                    </span>
                </Link>
                <ProfileInfoCard />
            </div>
        </div>
    );
};

export default Navbar;