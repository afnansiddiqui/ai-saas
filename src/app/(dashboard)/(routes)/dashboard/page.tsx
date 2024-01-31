import * as React from "react";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

const DashboardPage = () => {
    return (
        <div className="container mx-auto ">
            <div className="flex w-full justify-center">
                <p className="text-center text-3xl lg:text-4xl font-semibold py-8">Dashboard</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 py-3">
                <Card className="w-full">
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
                <Card className="w-full">
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
            </div>
            <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 py-10">
                <Card className="w-full py-3">
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
                <Card className="w-full py-3">
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
                <Card className="w-full py-3">
                    <CardHeader>
                        <CardTitle className="text-3xl">Whisper AI</CardTitle>
                        <CardDescription className="text-lg py-2">
                            OpenAIs Whisper API to Translate Audio to another Language + Text Translation with just one click..
                        </CardDescription>
                    </CardHeader>
                    <CardFooter className="flex justify-end">
                        <Link href="/whisper">
                            <Button>Open</Button>
                        </Link>
                    </CardFooter>
                </Card>
                <Card className="w-full py-3">
                    <CardHeader>
                        <CardTitle className="text-3xl">3D Text to Speech</CardTitle>
                        <CardDescription className="text-lg py-2">
                            OpenAIs Whisper API to Translate Audio to another Language + Text Translation with just one click..
                        </CardDescription>
                    </CardHeader>
                    <CardFooter className="flex justify-end">
                        <Link href="/3dtext">
                            <Button>Open</Button>
                        </Link>
                    </CardFooter>
                </Card>
                <Card className="w-full py-3 group hover:shadow-lg hover:-translate-y-1 transition-transform duration-200 ease-in-out">
                    <CardHeader>
                        <CardTitle className="text-3xl">Speech To Speech</CardTitle>
                        <CardDescription className="text-lg py-2">
                            OpenAIs Whisper API to Translate Audio to another Language + Text Translation with just one click..
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
    );
};

export default DashboardPage;