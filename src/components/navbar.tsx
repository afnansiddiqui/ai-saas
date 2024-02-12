import { UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="absolute top-0 left-0 w-full z-20"> {/* Ensure it's fixed */}
      <div className="flex justify-between items-center p-4">
        <div>
          <Link href="/dashboard">
            <Button variant={"link"}>
              <ArrowLeft className="mr-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
        <div className="flex justify-end w-full gap-x-2 items-center">
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
