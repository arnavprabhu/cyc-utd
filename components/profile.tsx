"use client";

import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { Linkedin, Mail, ExternalLink } from "lucide-react";

interface Member {
  first_name: string;
  last_name: string;
  email: string;
  major: string;
  graduation_year: number | string;
  linkedin?: string;
  position?: string;
  headshot?: string;
  tier?: "Executive" | "Senior Analyst" | "Junior Analyst";
}

const ProfileSkeleton = () => (
  <div className="rounded-3xl border border-primary/10 bg-white p-6 text-center space-y-3">
    <div className="mx-auto size-24">
      <Skeleton className="w-full h-full rounded-full" />
    </div>
    <div className="pt-2 space-y-2">
      <Skeleton className="w-32 h-4 mx-auto" />
      <Skeleton className="w-24 h-3 mx-auto" />
      <Skeleton className="w-20 h-3 mx-auto" />
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

const Profile = ({
  first_name,
  last_name,
  email,
  major,
  graduation_year,
  linkedin,
  position,
  headshot,
  tier,
}: Member) => {
  const isScale2 =
    headshot && HEADSHOTS_SCALE_2.some((slug) => headshot.includes(slug));

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="group relative flex flex-col justify-between rounded-3xl border border-primary/10 bg-white p-6 shadow-2xs transition-all duration-300 hover:border-primary/25 hover:shadow-lg"
    >
      <div>
        {/* Top Badges */}
        <div className="flex items-center justify-between gap-2 mb-5">
          {position ? (
            <span className="rounded-full bg-secondary/80 px-2.5 py-1 text-[11px] font-bold text-primary">
              {position}
            </span>
          ) : (
            <span className="rounded-full bg-secondary/80 px-2.5 py-1 text-[11px] font-semibold text-primary/80">
              Consultant
            </span>
          )}

          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-7 w-7 items-center justify-center rounded-full bg-secondary/60 text-primary/70 transition-colors hover:bg-accent hover:text-white"
              aria-label={`LinkedIn profile of ${first_name} ${last_name}`}
            >
              <Linkedin className="h-3.5 w-3.5" />
            </a>
          )}
        </div>

        {/* Headshot Avatar with Frame */}
        <div className="relative mx-auto mb-4 size-24 overflow-hidden rounded-full ring-2 ring-primary/15 shadow-sm group-hover:ring-accent/40 transition-all">
          <Avatar className="size-full">
            <AvatarImage
              src={headshot}
              alt={`${first_name} ${last_name}`}
              className={cn("object-cover", isScale2 && "scale-[2]")}
              loading="lazy"
              decoding="async"
            />
            <AvatarFallback className="bg-primary font-bold text-white text-base">
              {first_name[0]}
              {last_name[0]}
            </AvatarFallback>
          </Avatar>
        </div>

        {/* Name & Academic Credentials */}
        <div className="text-center space-y-1">
          <h3 className="font-serif text-lg font-bold text-primary group-hover:text-accent transition-colors">
            {first_name} {last_name}
          </h3>
          <p className="text-xs font-medium text-muted-foreground">
            {major}
          </p>
        </div>
      </div>

      {/* Footer Info */}
      <div className="mt-5 pt-3.5 border-t border-primary/10 flex items-center justify-between text-[11px] text-muted-foreground">
        <span className="font-medium">Class of {graduation_year}</span>
        {email && (
          <a
            href={`mailto:${email}`}
            className="flex items-center gap-1 text-primary/60 hover:text-accent transition-colors"
            title={email}
            aria-label={`Email ${first_name} ${last_name}`}
          >
            <Mail className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Contact</span>
          </a>
        )}
      </div>
    </motion.div>
  );
};

export { type Member, ProfileSkeleton, Profile };
