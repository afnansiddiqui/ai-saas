import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import orbitiobg from "../../../public/bg-purple.jpg";
import anda from "../../../public/anda.png";
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
            <div className="fixed top-0 left-0 bg-opacity-100 w-full flex justify-between items-center bg-transparent py-4 shadow-xl border-b-2 mb-8 border-white/10 ">
                <div className="font-bold text-3xl px-4 text-white ">
                    Orbitio
                </div>
                <div className="gap-x-2 flex px-4 items-center">
                    <div>
                        <Link href="/dashboard" className="text-white font-bold" >
                            Dashboard
                        </Link>
                    </div>
                    <div>
                        <Link href="/sign-in">
                            <Button>
                                Log in
                            </Button>
                        </Link>
                    </div>

                </div>
            </div>
            {/* {HERO SECTION} */}
            <div className="h-full sm:flex sm:justify-between">
                <div className="px-4 lg:px-8 pt-[10rem] sm:py-[10rem] md:col-span-6 col-span-12 text-center sm:text-left" >
                    <h1 className="text-white lg:text-8xl text-6xl font-extrabold">Orbitio</h1>
                    <p className="text-[#fff] py-4 ">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <Link href="/sign-up">
                        <button className="border-2 px-4 py-2 rounded-lg mt-1 text-[#fff] ">
                            Sign Up for free Now
                        </button>
                    </Link>
                </div>
                <div className='sm:py-16 py-8 sm:ml-auto sm:mt-8'>
                    <div className="sm:text-left">
                        <Image
                            src={anda}
                            alt='Umar Khan developer Image'
                            className='mx-auto sm:mx-0'
                            width={400}
                            height={400}
                        />
                    </div>
                </div>
            </div>

            {/* Video */}
            <div className="flex justify-center py-10 px-6 lg:px-0 mt-24 sm:mt-0">
                <iframe width="900" height="400" src="https://www.youtube.com/embed/hJ96188sXVY?si=HSK-eRHXZ6U5rk_7" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            </div >
            {/* WORKHOLIC */}
            <div className="py-16 text-center">
                <h1 className="text-white lg:text-6xl text-4xl font-extrabold lg:pt-8 pt-6">Orbitio Commandos</h1>
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