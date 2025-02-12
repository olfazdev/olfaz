import { BsTwitterX, BsLinkedin } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { Separator } from "./ui/separator";

const Footer = () => {
    return (
        <div className="bg-muted/70 gap-1 md:gap-6 space-y-10 pt-4">
            <div className="flex flex-col md:flex-row items-center justify-around">
                {/* Contact Section */}
                <div className="space-y-4 mb-6">
                    {/* <p className='font-medium text-center md:text-left py-2 text-[clamp(1.2rem,2.5ch,1.5rem)]'>Contact Us</p> */}
                    <div className="flex px-8 py-4 gap-4 md:gap-4 items-center justify-center md:justify-start">
                        <a href={"https://x.com/official_olfaz"}>
                            <BsTwitterX className="w-6 h-6 md:w-6 md:h-6 transition-transform duration-300 hover:scale-110 hover:text-black dark:hover:text-white" />
                        </a>

                        <a
                            href={
                                "https://www.linkedin.com/in/olfaz-technologies-10a047339?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                            }
                        >
                            <BsLinkedin className="w-7 h-7 md:w-7 md:h-7 rounded-sm transition-transform duration-300 hover:scale-110 hover:text-[#0A66C2]" />
                        </a>
                    </div>
                </div>
                {/* Address Section */}
                <div className="space-y-2 px-8 py-4 text-center md:text-left">
                    <p className="font-medium text-foreground/70 text-[clamp(1.2rem,2.5vh,1.5rem)] ">
                        Address
                    </p>
                    <div className="flex items-center space-x-2">
                        <FaLocationDot className="w-7 h-7" />

                        <a
                            href="https://www.google.com/maps/search/?api=1&query=MKAS+Business+Center+Near+Dembel+City+Center,+Gabon+Street,+Kirkos,+Addis+Ababa"
                            target="_blank"
                            rel="noopener noreferrer"
                            className=" "
                        >
                            <span className="leading-relaxed font-extralight text-[clamp(1rem,2vh,1.4rem)] max-w-[60%] mx- auto text-balance text-blue-500 underline hover:text-blue-700">
                                {" "}
                                MKAS Business Center Near Dembel City Center,
                                Gabon Street, Kirkos, Addis Ababa
                            </span>
                        </a>
                    </div>
                </div>
            </div>
            <div className=" flex flex-col items-center">
                <Separator className="bg-primary/20 container" />
                <p className="font-extralight text-foreground/70 text-center py-4 text-[clamp(1rem,1.5vh,0.8rem)]">
                    &copy; 2025 Olfaz. All Rights Reserved.
                </p>
            </div>
        </div>
    );
};

export default Footer;
