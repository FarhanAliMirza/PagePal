"use client";
import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern";
import { ModeToggle } from "@/components/ModeToggle";
import { MorphingText } from "@/components/magicui/morphing-text";
import { AuroraText } from "@/components/magicui/aurora-text";
import { Button } from "@/components/ui/button";
import { ShineBorder } from "@/components/magicui/shine-border";
import Link from "next/link";


export default function Home() {


  return (
    <div>
      <AnimatedGridPattern className="blur-sm" />
      <ShineBorder
        shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
        borderWidth={2}
      />
      <div className="h-screen w-screen">
        <div className="flex justify-end items-center p-3">
          <ModeToggle />
        </div>
        <div className="flex flex-col justify-center items-center h-3/4 w-full  ">
          <MorphingText texts={["Swap", "Share", "Discover"]} />
          <div className="text-3xl md:text-7xl font-bold dark:text-blue-300 text-blue-600">
            Books with
            <AuroraText
              speed={5}
              colors={["#00FFFF", "#00BFFF", "#007BFF", "#0047AB"]}
              className="m-3"
            >
              PagePal
            </AuroraText>
          </div>
          <div className="m-3 text-lg md:text-2xl text-center font-light text-black dark:text-white">
            Exchange, lend, or borrow books in your neighborhood with ease.
          </div>
          <Button asChild className="m-4">
            <Link href={"/signin"}>Get Started</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
