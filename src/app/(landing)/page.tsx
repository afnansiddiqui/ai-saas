import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import orbitiobg from "../../../public/orbitiobg.jpg";
import umar from "../../../public/umar.jpeg";
import afnan from "../../../public/afnan.jpg";
import mustafa from "../../../public/mustafa.jpg";
import asad from "../../../public/asad.jpg";

const LandingPage = () => {
    return (
        <>

            {/* Image section */}
            <div className="-z-10 fixed w-full h-[150vh]">
                <Image
                    src={orbitiobg}
                    alt="orbitio"
                    fill
                    objectFit="cover"
                />

            </div>
            {/* Navbar */}
            <div className="flex justify-between items-center bg-transparent py-4 shadow-xl border-b-2 border-white/10 ">
                <div className="font-bold text-3xl px-4 text-white ">
                    Orbitio
                </div>
                <div className="gap-x-2 flex px-4">
                    <div>
                        <Link href="/sign-in">
                            <Button>
                                Login
                            </Button>
                        </Link>
                    </div>
                    <div>
                        <Link href="/sign-up">
                            <Button>
                                Sign Up for free
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
            {/* {HERO SECTION} */}
            <div className="h-full relative flex text-center justify-center">
                <div className="absolute top-1/3 left-1/2  -translate-x-1/2 -translate-y-1/2 " >
                    <h1 className="text-white lg:text-8xl text-6xl font-extrabold">Orbitio</h1>
                    <p className="text-[#fff] py-4 ">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <Link href="/sign-up">
                        <button className="border-2 px-4 py-2 rounded-lg mt-1 text-[#fff] ">
                            Sign Up for free Now
                        </button>
                    </Link>
                </div>
            </div>
            {/* Video */}
            <div className="flex justify-center py-10 px-6 lg:px-0">
                <iframe width="900" height="400" src="https://www.youtube.com/embed/hJ96188sXVY?si=HSK-eRHXZ6U5rk_7" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            </div >
            {/* WORKHOLIC */}
            <div className="py-16 text-center">
                <h1 className="text-black lg:text-6xl text-4xl font-extrabold lg:pt-8 pt-6">Orbitio Commandos</h1>
                <div className="flex justify-center gap-x-4 lg:gap-x-12 lg:py-12 py-8 px-4 lg:px-0">
                    <div>
                        <Link href="https://www.linkedin.com/in/mustafa-abrar/" target="_blank">
                            <div className="lg:w-40 lg:h-40 w-24 h-24 rounded-full bg-white relative">
                                <Image
                                    src={mustafa}
                                    alt="men"
                                    fill
                                    objectFit="cover"
                                    className="rounded-full"
                                />
                            </div>
                            <h1 className="text-secondary/90 bg-black rounded-xl text-lg py-1 cursor-pointer">Mustafa Abrar</h1>
                        </Link>
                    </div>
                    <div>
                        <Link href="https://www.linkedin.com/in/umarkhaan/" target="_blank">
                            <div className="lg:w-40 lg:h-40 w-24 h-24 rounded-full bg-white relative">
                                <Image
                                    src={umar}
                                    alt="umar"
                                    fill
                                    objectFit="cover"
                                    className="rounded-full"
                                />
                            </div>
                            <h1 className="text-secondary/90 bg-black rounded-xl text-lg py-1 cursor-pointer">Umar Khan</h1>
                        </Link>
                    </div>
                    <div>
                        <Link href="https://www.linkedin.com/in/expert-jamstack-nextjs-react-webdeveloper/?originalSubdomain=pk" target="_blank">
                            <div className="lg:w-40 lg:h-40 w-24 h-24 rounded-full bg-white relative">
                                <Image
                                    src={afnan}
                                    alt="afnan"
                                    fill
                                    objectFit="cover"
                                    className="rounded-full"
                                />
                            </div>
                            <h1 className="text-secondary/90 bg-black rounded-xl text-lg py-1 cursor-pointer">Muhm. Afnan</h1>
                        </Link>
                    </div>
                    <div>
                        <Link href="https://www.linkedin.com/in/syed-asad-raza-/" target="_blank">
                            <div className="lg:w-40 lg:h-40 w-24 h-24 rounded-full bg-white relative">
                                <Image
                                    src={asad}
                                    alt="asad"
                                    fill
                                    objectFit="cover"
                                    className="rounded-full"
                                />
                            </div>
                            <h1 className="text-secondary/90 bg-black rounded-xl text-lg py-1 cursor-pointer">Syed Asad</h1>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};
export default LandingPage