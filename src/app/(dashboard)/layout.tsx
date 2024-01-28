"use client"
import Navbar from "@/components/navbar"
import { ThemeProvider } from "@/components/theme-provider"

const DashboardLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {
    return (
        <body>
            < ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
            >
                <main className="">
                    <Navbar />
                    {children}
                </main>
            </ThemeProvider >
        </body >
    );
}

export default DashboardLayout;
