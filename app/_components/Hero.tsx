import { Spotlight } from "./ui/Spotlight"
import { cn } from "@/app/_lib/utils"
import { TextGenerateEffect } from "./ui/TextGenerator"
import MagicButton from "./ui/MagicButton"
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
function Hero() {
    return (
        <>
            <div className="pb-20 pt-28 relative z-50 w-full">
                <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
                <Spotlight className="h-[80vh] w-[50vw] top-10 left-full" fill="purple" />
                <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
            </div>
            <div className="h-screen absolute top-0 left-0 flex w-full items-center justify-center bg-white dark:bg-black-100">
                <div
                    className={cn(
                        "absolute inset-0",
                        "[background-size:40px_40px]",
                        "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
                        "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
                    )}
                />
                {/* Radial gradient for the container to give a faded look */}
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-100" />
            </div>
            <div className="flex justify-center relative sm:mb-5 z-10">
                <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col justify-center items-center">
                    <p className="text-sm uppercase tracking-wide">Dynamic Web Magic with Next.js</p>
                    <TextGenerateEffect
                        words="Transforming ideas into seamless web solutions."
                        className="sm:text-[40px] text-3xl lg:text-6xl text-center capitalize "
                    />
                    <p className="text-center pt-5 text-sm md:text-lg lg:text-2xl capitalize mb-5">I’m sara, a passionate Front-End Developer with 3 years of experience.</p>
                    
                    <Link href="https://github.com/saramedhat258" target="_blank">
                        <MagicButton text="See My Work" icon={<ArrowUpRight />} />
                    </Link>
                    <div className="flex gap-5 mt-5">
                        <Link href="https://github.com/saramedhat258" target='_blank'>
                            <Github />
                        </Link>
                        <Link href="https://www.linkedin.com/in/sara-medhat-bayoumi/" target='_blank'>
                            <Linkedin />
                        </Link>
                        <Link href="mailto:sara2003me@gmail.com" target='_blank'>
                            <Mail />
                        </Link>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Hero