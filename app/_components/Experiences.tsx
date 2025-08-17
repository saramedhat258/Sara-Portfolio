import Image from "next/image"
import { workExperience } from "../_data"
import { Button } from "./ui/MovingBorder"

function Experiences() {
    return (
        <div id="experiences" >
            <h1 className="text-center sm:text-5xl text-2xl font-medium ">
                Courses and Experience
            </h1>
            <div className="grid lg:grid-cols-4 grid-cols-1 justify-between gap-4  my-10 z-10">
                {workExperience.map(work => (
                    <div className="lg:col-span-2" key={work.id}>
                        <Button>
                            <div className="flex w-full gap-8 items-center md:min-h-50 min-h-30 sm:p-10 p-3 ">
                                <div className="relative sm:w-26 sm:h-26 w-20 h-20 shrink-0">
                                    <Image
                                        src={work.thumbnail}
                                        alt={work.title}
                                        fill
                                        className="object-contain w-full h-full shrink-0"
                                    />
                                </div>

                                <div className="flex flex-col gap-3 text-start">
                                    <p className="font-medium sm:text-2xl text-xl">{work.title}</p>
                                    <p className="sm:text-[17px]">{work.desc}</p>
                                </div>
                            </div>
                        </Button>
                    </div>
                ))}


            </div>
        </div>
    )
}

export default Experiences