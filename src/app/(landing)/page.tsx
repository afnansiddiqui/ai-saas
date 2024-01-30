import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import men from "../../../public/men.jpg"
import orbitiobg from "../../../public/orbitiobg.jpg";
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
            <div className="lg:py-16 py-12 text-center h-full">
                <h1 className="text-white lg:text-8xl text-6xl pt-8 font-extrabold">Orbitio</h1>
                <p className="text-[#fff] py-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <Link href="/sign-up">
                    <button className="border-2 px-4 py-2 rounded-lg mt-1 text-[#fff] ">
                        Sign Up for free Now
                    </button>
                </Link>
            </div>
            {/* Video */}
            <div className="flex justify-center py-10">
                <iframe width="900" height="450" src="https://www.youtube.com/embed/hJ96188sXVY?si=HSK-eRHXZ6U5rk_7" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            </div >
            {/* WORKHOLIC */}
            <div className="py-16 text-center">
                <h1 className="text-black text-6xl font-extrabold pt-8 ">Orbitio Commandos</h1>
                <div className="flex justify-center gap-x-12 py-12">
                    <div className="w-40 h-40 rounded-full bg-white relative">
                        <Image
                            src={men}
                            alt="men"
                            fill
                            objectFit="cover"
                            className="rounded-full"
                        />
                    </div>
                    <div className="w-40 h-40 rounded-full bg-white relative">
                        <Image
                            src={men}
                            alt="men"
                            fill
                            objectFit="cover"
                            className="rounded-full"
                        />
                    </div>
                    <div className="w-40 h-40 rounded-full bg-white relative">
                        <Image
                            src={men}
                            alt="men"
                            fill
                            objectFit="cover"
                            className="rounded-full"
                        />
                    </div>
                    <div className="w-40 h-40 rounded-full bg-white relative">
                        <Image
                            src={men}
                            alt="men"
                            fill
                            objectFit="cover"
                            className="rounded-full"
                        />
                    </div>

                </div>
            </div>
        </>
    );
};
export default LandingPage