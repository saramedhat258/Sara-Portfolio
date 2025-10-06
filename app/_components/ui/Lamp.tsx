"use client";
import React from "react";
import { motion } from "motion/react";
import { cn } from "@/app/_lib/utils";

type LampDemoProps = {
    title: string| React.ReactNode;
    classname:string
};

export function LampDemo({ title,classname }: LampDemoProps) {
    return (
        <LampContainer className={classname} >
            <motion.h1
                initial={{ opacity: 0.5, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                }}
                className="md:-translate-y-6 -translate-y-3 bg-gradient-to-br from-slate-300 pb-4 to-slate-500  bg-clip-text text-center text-lg font-medium tracking-tight text-white/40 lg:text-3xl"
            >
                {title}
            </motion.h1>
        </LampContainer>
    );
}

export const LampContainer = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div
            className={cn(
                "relative flex min-h-40 flex-col items-center justify-center overflow-hidden bg-slate-950 w-full rounded-md z-0",
                className
            )}
        >
            <div className="relative flex w-full h-full scale-y-125 items-center justify-center isolate z-0 ">
                <motion.div
                    initial={{ opacity: 0.5, width: "15rem" }}
                    whileInView={{ opacity: 1, width: "30rem" }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    style={{
                        backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
                    }}
                    className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-[#2f3065] via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
                >
                    <div className="absolute  w-[100%] left-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
                    <div className="absolute  w-40 h-[100%] left-0 bg-slate-950  bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0.5, width: "15rem" }}
                    whileInView={{ opacity: 1, width: "30rem" }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    style={{
                        backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
                    }}
                    className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-[#2f3065] text-white [--conic-position:from_290deg_at_center_top]"
                >
                    <div className="absolute  w-40 h-[100%] right-0 bg-slate-950  bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
                    <div className="absolute  w-[100%] right-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
                </motion.div>
                <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-slate-950 blur-2xl"></div>
                <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
                <div className="absolute inset-auto z-50 h-36 w-[28rem]  rounded-full bg-[#2f3065] opacity-50 blur-3xl"></div>
                <motion.div
                    initial={{ width: "8rem" }}
                    whileInView={{ width: "16rem" }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="absolute inset-auto z-30 h-36 w-64 -translate-y-[5rem] rounded-full bg-[#2f3065] blur-2xl"
                ></motion.div>
                <motion.div
                    initial={{ width: "15rem" }}
                    whileInView={{ width: "30rem" }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="absolute inset-auto z-50 h-0.5 w-[30rem] md:-translate-y-[1.85rem] -translate-y-[1.8rem]  bg-[#2f3065] "
                ></motion.div>

                <div className="absolute inset-auto z-40  w-full  bg-slate-950 "></div>
            </div>

            <div className="relative z-50 flex flex-col items-center px-5">
                {children}
            </div>
        </div>
    );
};
