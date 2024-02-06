import * as React from "react";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { ArrowLeft } from "lucide-react";

const DashboardPage = () => {
	return (
    <>
      {/* Navbar for the DashBoard */}
			<div className="flex justify-between items-center p-4">
				<div>
					<Link href="/">
						<Button variant={"link"}>
							<ArrowLeft className="mr-2 h-4 w-4" />
						</Button>
					</Link>
				</div>
				<div className="flex justify-end w-full  gap-x-2 items-center">
					<UserButton afterSignOutUrl="/" />
				</div>
			</div>
			<div className="w-full mx-auto lg:px-16 pb-10">
				<div className="flex w-full justify-center">
					<p className="text-center text-3xl lg:text-4xl font-semibold py-8 mb-11">
						Dashboard
					</p>
				</div>

				<div className="grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 xl:px-5 lg:px-4 md:px-3 sm:px-2">
					<Card className="w-full hover:shadow-lg hover:-translate-y-1 transition-transform duration-200 ease-in-out lg:col-span-2 xl:col-span-2 md:col-span-1 sm:col-span-1">
						<CardHeader>
							<CardTitle className="text-3xl">Conversation</CardTitle>
							<CardDescription className="text-lg py-2">
								Hey, do you want someone to chat? Talk openly with me...
							</CardDescription>
						</CardHeader>
						<CardFooter className="flex justify-end">
							<Link href="/conversation">
								<Button>Open</Button>
							</Link>
						</CardFooter>
					</Card>
					<Card className="w-full hover:shadow-lg hover:-translate-y-1 transition-transform duration-200 ease-in-out lg:col-span-1 xl:col-span-1 md:col-span-1 sm:col-span-1">
						<CardHeader>
							<CardTitle className="text-3xl">Code Generation</CardTitle>
							<CardDescription className="text-lg py-2">
								Generate Your Desired Code with just one click...
							</CardDescription>
						</CardHeader>
						<CardFooter className="flex justify-end">
							<Link href="/code">
								<Button>Open</Button>
							</Link>
						</CardFooter>
					</Card>
					<Card className="w-full hover:shadow-lg hover:-translate-y-1 transition-transform duration-200 ease-in-out lg:col-span-1 xl:col-span-1 md:col-span-1 sm:col-span-1">
						<CardHeader>
							<CardTitle className="text-3xl">Image Generation</CardTitle>
							<CardDescription className="text-lg py-2">
								Generate Your Desire Image with just one click...
							</CardDescription>
						</CardHeader>
						<CardFooter className="flex justify-end">
							<Link href="/image">
								<Button>Open</Button>
							</Link>
						</CardFooter>
					</Card>
					<Card className="w-full hover:shadow-lg hover:-translate-y-1 transition-transform duration-200 ease-in-out lg:col-span-2 xl:col-span-2 md:col-span-1 sm:col-span-1">
						<CardHeader>
							<CardTitle className="text-3xl">3D Model</CardTitle>
							<CardDescription className="text-lg py-2">
								Create Your Desire Design of T-shirt in 3D with just one click..
							</CardDescription>
						</CardHeader>
						<CardFooter className="flex justify-end">
							<Link href="/3dshirt">
								<Button>Open</Button>
							</Link>
						</CardFooter>
					</Card>
					<Card className="w-full hover:shadow-lg hover:-translate-y-1 transition-transform duration-200 ease-in-out lg:col-span-1 xl:col-span-1 md:col-span-1 sm:col-span-1">
						<CardHeader>
							<CardTitle className="text-3xl">Whisper AI</CardTitle>
							<CardDescription className="text-lg py-2">
								OpenAIs Whisper API to Translate Audio to another Language +
								Text Translation with just one click..
							</CardDescription>
						</CardHeader>
						<CardFooter className="flex justify-end">
							<Link href="/whisper">
								<Button>Open</Button>
							</Link>
						</CardFooter>
					</Card>
					<Card className="w-full hover:shadow-lg hover:-translate-y-1 transition-transform duration-200 ease-in-out lg:col-span-1 xl:col-span-1 md:col-span-1 sm:col-span-1">
						<CardHeader>
							<CardTitle className="text-3xl">3D Text to Speech</CardTitle>
							<CardDescription className="text-lg py-2">
								OpenAIs Whisper API to Translate Audio to another Language +
								Text Translation with just one click..
							</CardDescription>
						</CardHeader>
						<CardFooter className="flex justify-end">
							<Link href="/3dtext">
								<Button>Open</Button>
							</Link>
						</CardFooter>
					</Card>
					<Card className="w-full hover:shadow-lg hover:-translate-y-1 transition-transform duration-200 ease-in-out lg:col-span-1 xl:col-span-1 md:col-span-1 sm:col-span-1">
						<CardHeader>
							<CardTitle className="text-3xl">Speech To Speech</CardTitle>
							<CardDescription className="text-lg py-2">
								OpenAIs Whisper API to Translate Audio to another Language +
								Text Translation with just one click..
							</CardDescription>
						</CardHeader>
						<CardFooter className="flex justify-end">
							<Link href="/speechtospeech">
								<Button>Open</Button>
							</Link>
						</CardFooter>
					</Card>
				</div>
			</div>
		</>
	);
};

export default DashboardPage;
