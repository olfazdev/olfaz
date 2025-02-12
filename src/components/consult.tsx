import { Card, CardContent, CardFooter, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Phone } from "lucide-react";

const Consult = () => {
    return (
        <Card className="border-none rounded-2xl text-foreground md:text-zinc-200 md:bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500">
            <CardTitle className="text-center">
                <h1 className="text-[clamp(1rem,2.5vw,2rem)] leading-[clamp(1.5rem,3vw,2.75rem)] p-[clamp(0.5rem,2vw,2rem)]">
                    Book A Free Consult With Us
                </h1>
            </CardTitle>
            <CardContent>
                <text className="max-w-5xl font-extralight font-stretch-expanded text-center text-[clamp(0.75rem,2.5vw,1.5rem)] leading-[clamp(1.5rem,3vw,2.75rem)] p-[clamp(0.5rem,2vw,2rem)]">
                    We bring the digital future closer by creating innovative{" "}
                    <strong className="md:text-white font-medium">
                        web solutions
                    </strong>{" "}
                    for enterprises, startups, industry leaders, and government
                    agencies, helping them grow with the power of{" "}
                    <strong className="md:text-white font-medium">
                        web technology.
                    </strong>
                </text>
            </CardContent>
            <CardFooter className="flex justify-center">
                <a href="tel: +251994638525">
                    <Button className="text-white" variant={"call"} size={"xl"}>
                        <Phone />
                        Give us a Call
                    </Button>
                </a>
            </CardFooter>
        </Card>
    );
};

export default Consult;
