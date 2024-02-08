import Image from "next/image";
import Link from "next/link";
import orbitiobg from "../../../public/bg-purple.jpg";
import anda from "../../../public/anda.png";
import umar from "../../../public/umar.jpeg";
import afnan from "../../../public/afnan.jpg";
import mustafa from "../../../public/mustafa.jpg";
import asad from "../../../public/asad.jpg";
import { UserButton } from "@clerk/nextjs";
import Footer from "@/components/footer";
import LandingNavbar from "@/components/LandingNavbar";

const LandingPage = () => {
	return (
		<>
			{/* Image section */}
			<div className="-z-10 fixed w-full h-[150vh]">
				<Image src={orbitiobg} alt="orbitio" fill objectFit="cover" />
			</div>

			{/* Navbar */}
			<LandingNavbar />
			{/* {HERO SECTION} */}
			<div className="h-full  sm:flex sm:px-16 sm:justify-around ">
				<div className="px-4 pt-[10rem] sm:py-[12rem] md:col-span-6 col-span-12 text-center sm:text-left">
					<h1 className="text-white lg:text-8xl text-6xl font-extrabold">
						Orbitio
					</h1>
					<p className="text-[#fff] py-4 ">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
					</p>
					<div className="">
						<Link href="/sign-up">
							<button className="px-1 py-1 w-full sm:w-fit mb-2 sm:mb-0 sm:mr-2 rounded bg-gradient-to-br from-[#FF0065] to-[#81039B] hover:bg-slate-800 text-white mt-3">
								<span className="block bg-white/10 rounded px-3 py-1">
									Sign Up for free Now
								</span>
							</button>
						</Link>

						<Link href="/sign-in">
							<button className="px-4 py-2 w-full sm:w-fit rounded bg-gradient-to-br from-[#FF0065] to-[#81039B] hover:bg-slate-200 text-white">
								Sign In
							</button>
						</Link>
					</div>
				</div>
				<div className="sm:py-16 py-8 sm:ml-auto sm:mt-8">
					<div className="sm:text-left">
						<Image
							src={anda}
							alt="Umar Khan developer Image"
							className="mx-auto sm:mx-0"
							width={400}
							height={400}
						/>
					</div>
				</div>
			</div>

			{/* Video */}
			<div className="flex justify-center py-10 px-6 lg:px-0 mt-24 sm:mt-0">
				<iframe
					width="900"
					height="400"
					src="https://www.youtube.com/embed/hJ96188sXVY?si=HSK-eRHXZ6U5rk_7"
					title="YouTube video player"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				></iframe>
			</div>
			{/* WORKHOLIC */}
			<div className="py-16 text-center">
				<h1 className="text-white lg:text-6xl text-4xl font-extrabold lg:pt-8 pt-6">
					Orbitio Commandos
				</h1>
				<div className="flex mx-auto justify-center gap-x-4 lg:gap-x-12 lg:py-12 py-8 px-4 lg:px-0">
					<Link
						href="https://www.linkedin.com/in/mustafa-abrar/"
						target="_blank"
					>
						<div className="lg:w-40 lg:h-40 md:w-24 md:h-24 w-16 h-16 rounded-full  bg-white relative -z-10">
							<Image
								src={mustafa}
								alt="men"
								fill
								objectFit="cover"
								className="rounded-full"
							/>
						</div>
						<h1 className="text-primary bg-transparent rounded-xl sm:text-lg text-sm py-2  cursor-pointer">
							Mustafa Abrar
						</h1>
					</Link>
					<Link href="https://www.linkedin.com/in/umarkhaan/" target="_blank">
						<div className="lg:w-40 lg:h-40 md:w-24 md:h-24 w-16 h-16 rounded-full bg-white relative -z-10">
							<Image
								src={umar}
								alt="umar"
								fill
								objectFit="cover"
								className="rounded-full"
							/>
						</div>
						<h1 className="text-primary bg-transparent rounded-xl sm:text-lg text-sm py-2 cursor-pointer">
							Umar Khan
						</h1>
					</Link>

					<Link
						href="https://www.linkedin.com/in/expert-jamstack-nextjs-react-webdeveloper/?originalSubdomain=pk"
						target="_blank"
					>
						<div className="lg:w-40 lg:h-40  md:w-24 md:h-24 w-16 h-16 rounded-full bg-white relative -z-10">
							<Image
								src={afnan}
								alt="afnan"
								fill
								objectFit="cover"
								className="rounded-full"
							/>
						</div>
						<h1 className="text-primary bg-transparent rounded-xl sm:text-lg text-sm py-2 cursor-pointer">
							Muhm. Afnan
						</h1>
					</Link>
					<Link
						href="https://www.linkedin.com/in/syed-asad-raza-/"
						target="_blank"
					>
						<div className="lg:w-40 lg:h-40  md:w-24 md:h-24 w-16 h-16 rounded-full bg-white relative -z-10">
							<Image
								src={asad}
								alt="asad"
								fill
								objectFit="cover"
								className="rounded-full"
							/>
						</div>
						<h1 className="text-primary bg-transparent rounded-xl sm:text-lg text-sm py-2 cursor-pointer">
							Syed Asad
						</h1>
					</Link>
				</div>
			</div>
			{/*  */}

			<section className="py-16 text-white grid sm:grid-cols-2 gap-4 px-8">
				<div className="self-center order-2">
					<h2 className="text-3xl font-bold py-2">About Orbito</h2>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia
						molestias eum ad sed quibusdam non, architecto nobis quasi similique
						libero, alias dicta consectetur quaerat commodi doloremque nihil
						corrupti aut natus voluptatibus. Eius cupiditate totam, repellat
						ipsa cumque amet hic! Facilis nostrum, autem sed debitis officia
						fugit veritatis doloremque ex harum provident minus nulla laboriosam
						error sapiente vero corporis ad quod sequi, mollitia dolorum! Magnam
						error quae repellat, officiis distinctio fugiat doloribus dolorum
						ut, dicta rerum voluptate. Possimus, at doloremque quod vero
						asperiores ea dicta odit nobis, veritatis eos voluptatibus
						necessitatibus molestias cum placeat fuga perspiciatis illum quia
						nostrum consequuntur adipisci corrupti
					</p>
				</div>
				<div className="self-center order-1">
					<Image
						src={anda}
						alt="Umar Khan developer Image"
						className="mx-auto sm:mx-0"
						width={400}
						height={400}
					/>
				</div>
			</section>

			{/* footer */}
			<Footer />
		</>
	);
};
export default LandingPage;
