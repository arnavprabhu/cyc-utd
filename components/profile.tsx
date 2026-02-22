"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

interface Member {
    first_name: string;
    last_name: string;
    email: string;
    major: string;
    graduation_year: number | string;
    linkedin?: string;
    position?: string;
    headshot?: string;
}

const ProfileSkeleton = () => (
    <div className="text-center space-y-3">
        {/* Skeleton Avatar */}
        <div className="mx-auto size-24">
            <Skeleton className="w-full h-full rounded-full" />
        </div>

        {/* Skeleton Text */}
        <div className="pt-1 space-y-2">
            <Skeleton className="w-32 h-4 mx-auto" />
            <Skeleton className="w-24 h-3 mx-auto" />
            <Skeleton className="w-24 h-3 mx-auto" />
        </div>
    </div>
);

const HEADSHOTS_SCALE_2 = [
    "anas-hassan",
    "prajeethreddy-bhuma",
    "arnav-prabhu",
    "satwik-padhy",
    "rithik-chowdam",
    "yuvraj-kashyap",
    "pranishka-jagtap",
    "hansini-routhu",
    "sri-sagiraju",
    "ayaan-ahmed",
    "aydin-mahmood",
    "likhitsaish-kadiam",
    "srisupraja-vishnubhatla",
    "rakeen-virani",
    "akshara-akella",
    "rushil-kannery",
    "pranav-boyapati",
];

const Profile = ({ first_name, last_name, email, major, graduation_year, linkedin, position, headshot }: Member) => (
    <div className="text-center space-y-3">
        <Avatar className="mx-auto size-24">
            <AvatarImage
                src={headshot}
                alt={`${first_name} ${last_name}`}
                className={cn("object-cover", headshot && HEADSHOTS_SCALE_2.some((slug) => headshot.includes(slug)) && "scale-[2]")}
            />
            <AvatarFallback>
                {first_name[0]}
                {last_name[0]}
            </AvatarFallback>
        </Avatar>

        <div>
            <h3 className="text-lg font-semibold">
                {first_name} {last_name}
            </h3>
            {!position?.includes("Analyst") && <p className="text-sm text-muted-foreground">{position}</p>}
            <p className="text-sm text-muted-foreground">
                {major} • {graduation_year}
            </p>
        </div>
    </div>
);

export { type Member, ProfileSkeleton, Profile };
