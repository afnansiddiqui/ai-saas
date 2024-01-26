"use client"
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const DashboardLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {

    return (
        <div className="">
            <div className="flex items-center h-full justify-start ">
                <Link href="/dashboard">
                    <ArrowLeft
                        className="ml-2 mr-2" />
                </Link>
            </div>
            {children}
        </div>

    )
}

export default DashboardLayout