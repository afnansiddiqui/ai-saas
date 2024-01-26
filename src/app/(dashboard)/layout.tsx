"use client"
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const DashboardLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {
    return (
        <div className="flex flex-col sm:flex-row items-start w-full mt-5">
            <div className="flex items-center mb-4 sm:mb-0 sm:mr-4">
                <Link href="/dashboard">
                    <Button variant={"link"}>
                        <ArrowLeft className="mr-2 h-4 w-4" />        
                    </Button>
                </Link>
            </div>
            {children}
        </div>
    );
}

export default DashboardLayout;
