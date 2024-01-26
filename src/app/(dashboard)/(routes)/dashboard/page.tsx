import * as React from "react"
import { Button } from "@/components/ui/button"
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
        <div className="">
            <p>Dashboard Page(Protected)</p>
            <UserButton afterSignOutUrl="/" />
            <div className="sm:flex gap-x-16 justify-center grid gap-y-3 py-3">
                <Card className="w-[400px] col-span-1">
                    <CardHeader>
                        <CardTitle className="text-3xl">Conversation</CardTitle>
                        <CardDescription className="sm:text-lg text-sm py-0 sm:py-2 ">Hey do you want somenone to chat? Talk openly with me...</CardDescription>
                    </CardHeader>
                    <CardFooter className="flex justify-end">
                        <Link href="/conversation"><Button>Open</Button></Link>
                    </CardFooter>
                </Card>
                <Card className="w-[400px] col-span-1">
                    <CardHeader>
                        <CardTitle className="text-3xl">Code Generation</CardTitle>
                        <CardDescription className="sm:text-lg text-sm py-0 sm:py-2 ">Generate Your Desired Code with just one click...</CardDescription>
                    </CardHeader>
                    <CardFooter className="flex justify-end">
                        <Link href="/code"><Button>Open</Button></Link>
                    </CardFooter>
                </Card>
            </div>
            <div className="sm:flex gap-x-16 md:py-10 justify-center grid">
                <Card className="w-[400px] col-span-1 py-3 ">
                    <CardHeader>
                        <CardTitle className="text-3xl">Image Generation</CardTitle>
                        <CardDescription className="sm:text-lg text-sm py-0 sm:py-2 ">Generate Your Desire Image with just one click...</CardDescription>
                    </CardHeader>
                    <CardFooter className="flex justify-end">
                        <Link href="/images"><Button>Open</Button></Link>
                    </CardFooter>
                </Card>
                <Card className="w-[400px] col-span-1">
                    <CardHeader>
                        <CardTitle className="text-3xl">3D Modal</CardTitle>
                        <CardDescription className="sm:text-lg text-sm py-0 sm:py-2 ">Create Your Desire Design of t-shirt in 3d with just one click..</CardDescription>
                    </CardHeader>
                    <CardFooter className="flex justify-end">
                        <Link href="/images"><Button>Open</Button></Link>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}

export default DashboardPage;