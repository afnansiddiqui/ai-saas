import { Button } from "@/components/ui/button";
import Link from "next/link";

const LandingPage = () => {
    return (
        <>
            <div>
<<<<<<< HEAD
                Landing Page (Unprotected)
=======
                Landing Page (Unprotected) learning git
>>>>>>> e8e8a6a4a82b002de682df2f61d3bde94ddfa930
            </div>
            <div>
                <Link href="/sign-in">
                    <Button>
                        Login
                    </Button>
                </Link>
                <Link href="/sign-up">
                    <Button>
                        Register
                    </Button>
                </Link>
            </div>
        </>
    );
};
export default LandingPage