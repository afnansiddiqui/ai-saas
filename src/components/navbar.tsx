
import { UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import MobileSidebar from "./mobileSidebar";
import { ModeToggle } from "./Modetoggle";
export const Navbar = () => {
    return (
        <>
            <div className="flex justify-between items-center p-4">
                <div>
                    <Link href="/dashboard">
                        <Button variant={"link"}>
                            <ArrowLeft className="mr-2 h-4 w-4" />
                        </Button>
                    </Link>
                </div>
                <div className="flex justify-end w-full  gap-x-2 items-center">
                    <ModeToggle />
                    <UserButton afterSignOutUrl="/" />
                </div>
            </div>

        </>
    );
};
export default Navbar