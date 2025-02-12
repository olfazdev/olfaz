import React from "react";
import { ModeToggle } from "./modeToggle";

const Navbar = () => {
    return (
        <div className=" fixed w-full top-0 z-10">
            <div className=" flex items-center justify-between py-4 border-b backdrop-blur mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
                <div>
                    <a href="/" className="relative w-full h-auto">
                        <img
                            src="/olfaz.svg"
                            alt="Olfaz Logo"
                            className="w-[50%] h-auto dark:invert"
                        />
                    </a>
                </div>

                <div className="flex items-center gap-2 sm:gap-4">
                    <ModeToggle />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
