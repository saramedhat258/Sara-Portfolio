"use client";
import React, { JSX, useState } from "react";
import {
    motion,
    AnimatePresence,
    useScroll,
    useMotionValueEvent,
} from "motion/react";
import { cn } from "@/app/_lib/utils";
import { Download } from "lucide-react";
import Link from "next/link";

type NavItem = {
    name: string;
    link: string;
    icon?: React.ReactNode;
};
type FloatingNavProps = {
    navItems: NavItem[];
    className?: string;
};
export const FloatingNav = ({ navItems, className }: FloatingNavProps) => {

    const { scrollYProgress } = useScroll();
    const [visible, setVisible] = useState(true);

    useMotionValueEvent(scrollYProgress, "change", (current) => {
        // Check if current is not undefined and is a number
        if (typeof current === "number") {
            const direction = current! - scrollYProgress.getPrevious()!;

            if (scrollYProgress.get() < 0.05) {
                setVisible(true);
            } else {
                if (direction < 0) {
                    setVisible(true);
                } else {
                    setVisible(false);
                }
            }
        }
    });

    return (
        <AnimatePresence mode="wait">
            <motion.div
                initial={{
                    opacity: 1,
                    y: -100,
                }}
                animate={{
                    y: visible ? 0 : -100,
                    opacity: visible ? 1 : 0,
                }}
                transition={{
                    duration: 0.2,
                }}
                className={cn(
                    "flex max-w-fit md:min-w-[70vw] lg:min-w-fit fixed z-[5000] top-10 inset-x-0 mx-auto px-10 py-5 rounded-xl border border-black/.1 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] items-center justify-center sm:space-x-4 space-x-3",
                    className
                )}
                style={{
                    backdropFilter: "blur(16px) saturate(180%)",
                    backgroundColor: "rgba(17, 25, 40, 0.75)",
                    borderRadius: "12px",
                    border: "1px solid rgba(255, 255, 255, 0.125)",
                }}
            >
                {navItems.map((navItem:NavItem, idx: number) => (
                    <a
                        key={`link=${idx}`}
                        href={navItem.link}
                        className={cn(
                            "relative dark:text-neutral-50 items-center focus:outline-0 flex scroll-smooth sm:space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
                        )}
                    >
                        <span className="">{navItem.icon}</span>
                        <span className="!cursor-pointer sm:text-sm text-[13px]">{navItem.name}</span>
                    </a>
                ))}
                <Link
                    href="/saracv.pdf"
                    download="Sara-medhat-CV.pdf"
                    className=" flex gap-2 items-center border sm:text-sm text-[13px] font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white sm:px-4 px-2 py-2 rounded-full">
                    <span>CV</span>
                    <Download size={20} />
                    <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
                </Link>
            </motion.div>
        </AnimatePresence>
    );
};
