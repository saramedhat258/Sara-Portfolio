"use client";
import React from 'react'
import { BackgroundGradient } from './ui/background-gradient';
import { projects } from '../_data';
import Image from 'next/image';
import MagicButton from './ui/MagicButton';
import Link from 'next/link';

export function Projects() {
    return (
        <div className='py-10 ' id='projects'>
            <h1 className='text-center sm:text-5xl text-2xl font-medium '>a small selection of {" "}
                <span className='text-purple'>Recent Projects</span>
            </h1>
            {/* cards */}
            <div className='py-10 flex flex-wrap gap-10 justify-center items-center'>
                {
                    projects.map(proj => (
                        <div key={proj.id} className='md:w-[45%] sm:w-3/4 w-11/12'>
                            <BackgroundGradient className="rounded-[22px] p-5 sm:p-7 bg-white dark:bg-zinc-900">
                                <Image
                                    src={proj.img}
                                    alt={proj.title}
                                    height="550"
                                    width="550"
                                    className="md:min-h-64 rounded-[22px] m-auto"
                                />
                                <div className='pt-5 flex flex-col gap-2'>
                                    <p className='sm:text-3xl text-lg font-medium '>
                                        {proj.title}
                                    </p>
                                    <p className='text-sm sm:text-base'>
                                        {proj.des}
                                    </p>
                                </div>
                                <div className='flex justify-between items-center h-full pt-5'>
                                    <div className=' flex items-center justify-center'>
                                        {proj?.iconLists.map((icon, index) => (
                                            <div key={index} style={{
                                                transform: `translateX(-${5 * index + 2}px)`,
                                            }}
                                                className=' rounded-full border border-white/[0.2] bg-[#161937] p-2 flex items-center justify-center'>
                                                <Image
                                                    src={icon}
                                                    alt={`icon-${index}`}
                                                    width={30}
                                                    height={30}
                                                    className='sm:w-6 sm:h-6 m-auto w-4 h-4'
                                                />
                                            </div>
                                        ))}
                                    </div>
                                    <div className='flex gap-2 '>
                                        {proj.demo &&
                                            <Link href={proj.demo} target='_blank'>
                                                <MagicButton
                                                    text='Demo'
                                                    width='w-fit sm:text-base text-sm'
                                                />
                                            </Link>
                                        }
                                        {proj.github &&
                                            <Link href={proj.github} target='_blank'>
                                                <MagicButton
                                                    text='Code'
                                                    width='w-fit sm:text-base text-sm'
                                                />
                                            </Link>
                                        }
                                    </div>
                                </div>
                            </BackgroundGradient>
                        </div>
                    ))
                }


            </div>
        </div >
    )
}
