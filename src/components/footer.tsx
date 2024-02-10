import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter, AiFillYoutube } from "react-icons/ai";
import Link from "next/link";

function Footer() {
    const iconsTab = [
        { icon: <FaFacebookF /> },
        { icon: <AiOutlineTwitter /> },
        { icon: <AiFillYoutube /> },

    ];
    return (
        <>
            <footer className="bg-white">
                <div className="container  py-[10rem]">
                    <div className="flex justify-between flex-col md:flex-row  items-center md:items-start  md:gap-[5rem] text-left">
                        <div className="flex flex-col w-1/2 md:p-0 py-4 gap-8">
                            <h1 className="text-black text-3xl">Orbitio</h1>
                            <p className="text-[15px] font-medium text-[#646464]">
                               Orbitio - Pioneering the Future of AI. Explore, Innovate, and Create with us.
                            </p>

                            <div className="flex gap-7 text-[18px] text-[#646464] justify-center md:justify-start">
                                {iconsTab.map(({ icon }, index) => {
                                    return (
                                        <div
                                            key={index}
                                            className="text-2xl bg-[#efefef] p-2 rounded-full hover:bg-[#ff0366] hover:text-white"
                                            style={{ transition: "all 0.3s" }}
                                        >
                                            {icon}
                                        </div>
                                    );
                                })} 
                            </div>
                            <p className="text-[16px] font-medium text-[#646464]">
                                Privacy Policy | © {new Date().getFullYear()}  <br />{" "}
                                Design by{" "}
                                <a
                                    href="/"
                                                                  >
                                    Orbitio
                                </a>
                            </p>
                        </div>

                        <div className="flex flex-col gap-8 relative mr-16 my-16 md:my-0">
                            <p className="text-[22px] font-bold footer-main text-black">Orbitio</p>

                            <span className="top-[33px] absolute w-[7rem] h-[4px] bg-[#ff0366]"></span>

                            <Link href="/dashboard">
                                <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold">
                                    Dashboard
                                </p>
                            </Link>

                            <Link href="/sign-up">
                                <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold">
                                    sign up
                                </p>
                            </Link>
                            <Link href="/sign-in">
                                <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold">
                                    sign in
                                </p>
                            </Link>

                        </div>

                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;