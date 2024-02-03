import Navbar from "@/components/navbar";
import orbitiobg from "../../../public/bg-purple.jpg";
import Image from "next/image";
const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<body className="dark">
			<main className="">
				<div className="-z-10 fixed w-full h-[100vh]">
					<Image src={orbitiobg} alt="orbitio" fill objectFit="cover" />
				</div>
				<Navbar />
				{children}
			</main>
		</body>
	);
};

export default DashboardLayout;
