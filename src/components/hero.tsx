import React from "react";
import BackgroundLines from "./ui/backgroundLines";

const Hero = () => {
    return (
        <BackgroundLines className="flex items-center justify-center px-4 bg-red-00 h-screen">
            <div className=" max-w-5xl mx-auto flex flex-col">
                {/* Heading section */}
                <h1 className="bg-clip-text text-transparent text-center -mb-12 bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white z-0 font-sans my-6 relative font-bold text-[clamp(2rem,4vw,6rem)]">
                    Power your business with smart web solutions
                </h1>
                {/* sub-heading section */}
                <p className="max-w-4xl mx-auto my-12 font-stretch-expanded md:font-thin font-extralight text-neutral-700 dark:text-neutral-400 text-center text-[clamp(1.2rem,2vw,3rem)]">
                    At{" "}
                    <strong className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 bg-clip-text text-transparent">
                        OLFAZ
                    </strong>{" "}
                    we specialize in crafting powerful and dynamic websites
                    tailored for small and medium businesses.
                </p>
            </div>
        </BackgroundLines>
    );
};

export default Hero;
