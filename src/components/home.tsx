import React from "react";
import Hero from "./hero";
import { ModeToggle } from "./modeToggle";
import Consult from "./consult";
import { Separator } from "./ui/separator";
import Footer from "./footer";

const Home = () => {
    return (
        <div className="mx-auto mt-0 sm:mt-2 md:mt-0 sm:px-0 lg:px-0">
            {/* hero background section */}
            <div className="relative h-[70vh] sm:h-[75vh] md:h-[80vh] w-full flex items-center justify-center">
                <Hero />
            </div>

            {/* Main home page content */}
            <main className="min-h-screen flex flex-col items-center justify-start py-8 sm:py-10 md:py-12">
                <div className="text-center mx-auto px-4 h-[50vh] items-center">
                    <h1 className="align-bottom font-medium text-neutral-700 dark:text-neutral-400 text-[clamp(1rem,2.5vw,2rem)] leading-[clamp(1.5rem,3vw,2.75rem)] p-[clamp(0.5rem,2vw,2rem)]">
                        <span className="text-gradient bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 bg-clip-text text-transparent">
                            Let&apos;s Build the Future Together.
                        </span>
                        <br />
                        <span className="font-extralight text-md font-stretch-expanded text-neutral-600">
                            Get Started with a{" "}
                            <span className="font-semibold text-neutral-800 dark:text-neutral-200">
                                trusted development partner
                            </span>{" "}
                            today!
                        </span>
                    </h1>
                </div>
                <div className="container max-w-6xl h-[70vh]">
                    <Consult />
                </div>
            </main>
            <Separator className="bg-primary/30" />
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default Home;
