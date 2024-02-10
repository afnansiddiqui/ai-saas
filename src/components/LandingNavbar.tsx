"use client";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import logo from "../../public/logo.png"
import React, { useEffect, useState } from "react";
import Image from "next/image";

const LandingNavbar = () => {
	const [scroll, setScroll] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			setScroll(window.scrollY > 50);
		});
	}, []);

	return (
		<div
			className={`fixed top-0 left-0 w-full flex justify-between items-center py-4 border-b-2 transition-all duration-500 ${scroll ? "bg-[#1a0a23] border-white/75 transition-all duration-500" : ""
				}`}
		>
			<div className="flex items-center px-4">
				<h1 className="font-bold sm:text-3xl text-2xl px-2 text-white ml-2">Orbitio</h1>
				<Image
					src={logo}
					width={40}
					height={40}
					alt="Orbitio Logo"
					className=""
				/>

			</div>
			<div className="gap-x-2 flex px-4 justify-end items-center">
				<Link
					href="/dashboard"
					className="text-white font-bold text-sm sm:text-lg"
				>
					Dashboard
				</Link>
				<UserButton afterSignOutUrl="/" />
			</div>
		</div>
	);
};

export default LandingNavbar;
