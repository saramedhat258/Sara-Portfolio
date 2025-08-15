"use client";
import { cn } from "@/app/_lib/utils";
import { BackgroundGradientAnimation } from "./GradiantBg";
import { LampDemo } from "./Lamp";
import { useState } from "react";
import animationData from "@/app/_data/confetii.json"
import Lottie from "lottie-react";
import MagicButton from "./MagicButton";
import { CopyIcon } from "lucide-react";

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "bento-grid mx-auto grid max-w-7xl grid-cols-1 gap-4  md:grid-cols-5",
                className,
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
    id,
    className,
    title,
    description,
    img,
    imgClassName,
    titleClassName,
    spareImg

}: {
    id: number
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    img: string;
    imgClassName: string;
    titleClassName: string;
    spareImg: string;

}) => {
    const leftLists = ["HTML", "ReactJS", "Typescript"];
    const rightLists = ["Javascript", "NextJS", "TailwindCSS"];

    const [copied, setCopied] = useState(false)

    const handleCopy = () => {
        navigator.clipboard.writeText('sara2003me@gmail.com')
        setCopied(true)
        
    }
    return (
        <div
            className={
                cn(
                    "z-10 row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
                    className,
                )
            }
            style={{
                background: "rgb(4,7,29)",
                backgroundColor:
                    "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            }}
        >
            <div className={`${id === 6 ? 'flex justify-center ' : ''} h-full `}>
                {/* image & spare image if exist */}
                <div className="w-full h-full absolute">
                    {img && (
                        <img
                            src={img}
                            alt={img}
                            className={cn(imgClassName, "object-cover object-center ")}
                        />
                    )}
                </div>
                <div className={`absolute right-0 -bottom-5 ${id === 5 ? "w-full opacity-80" : ''} `}>
                    {spareImg && (
                        <img
                            src={spareImg}
                            alt={spareImg}
                            className="object-cover object-center h-full w-full "
                        />
                    )}
                </div>
                {/* gradient bg for element 6 */}
                {id === 6 &&
                    <BackgroundGradientAnimation>
                        <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center " ></div>
                    </BackgroundGradientAnimation>
                }
                {/* description & title for sections */}
                {id !== 2 &&
                    <div className={cn(titleClassName, "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10")}>
                        <div className="font-sans font-extralight md:max-w-44  md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
                            {description}
                        </div>
                        <div className="capitalize font-sans text-lg lg:text-3xl max-w-96 font-medium z-10">
                            {title}
                        </div>
                        {/* handle tech in element 3 */}
                        {id === 3 &&
                            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
                                <div className="flex flex-col gap-2 ">
                                    {leftLists.map((ele) => (
                                        <span key={ele} className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                                            lg:opacity-100 rounded-xl text-center bg-[#10132E]">
                                            {ele}
                                        </span>
                                    ))}
                                    <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-xl text-center bg-[#181a3c]"></span>
                                </div>
                                <div className="flex flex-col gap-2 ">
                                    <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-xl text-center bg-[#181a3c]"></span>
                                    {rightLists.map((ele) => (
                                        <span key={ele} className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                                            lg:opacity-100 rounded-xl text-center bg-[#10132E]">
                                            {ele}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        }
                        {
                            id === 6 &&
                            <div className="relative">
                                <div className={`absolute -bottom-5 right-0`}>
                                    <Lottie
                                    loop={copied}
                                    autoplay={copied}
                                    animationData={animationData}
                                    height={200} width={400}
                                />
                                </div>
                                
                                <MagicButton
                                    text={copied ? 'Email is Copied!' : 'Copy my email address'}
                                    icon={<CopyIcon />}
                                    handleClick={handleCopy}
                                    classes="!bg[#161a31]"
                                    width="mt-3"
                                />
                            </div>
                        }
                    </div>
                }
                {/*title for element 2 */}
                {
                    id === 2 &&

                    <LampDemo title={title} classname="h-full flex items-center justify-center" />

                }
            </div>
        </div >
    );
};
