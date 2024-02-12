import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface props {
    title: string;
    description: string;
    icon: LucideIcon;
    iconColor?: string;
    bgColor?: string;
}

const Heading = (
    {
        title,
        description,
        icon: Icon,
        iconColor,
        bgColor
    }: props

) => {
    return (
        <div className="px-4 lg:px-8 flex justify-center items-center gap-x-3 mb-8 p-16">
            <div>
                <h2 className="text-3xl font-bold">
                    {title}
                </h2>
                <p className="text-sm text-muted-foreground">
                    {description}
                </p>
            </div>
            <div className={cn("p-2 w-fit rounded-md ", bgColor)}>
                <Icon className={cn("w-10 h-10", iconColor)} />
            </div>
        </div>
    )
}

export default Heading