"use client";
import React from "react"
import { useFormStatus } from "react-dom";


type btnProps = {
    text: string,
    icon?: React.ReactNode,
    handleClick?: () => void,
    classes?: string,
    width?: string,
}
function MagicButton({ text, icon, handleClick, classes, width }: btnProps) {
    const { pending } = useFormStatus()
    return (
        <button
            className={`relative inline-flex h-12 overflow-hidden rounded-xl p-[1px] ${width ? width : 'w-full md:w-60 '}  `}
            onClick={handleClick}
            disabled={pending}
            type="submit"
        >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className={`${classes} inline-flex gap-2 h-full w-full cursor-pointer items-center justify-center rounded-xl bg-slate-950 sm:px-3 px-2 py-1  text-sm font-medium text-white backdrop-blur-3xl`}>
                {pending ?
                    'Sending...'
                    : <>
                        {text}
                        {icon}
                    </>
                }
            </span>
            
        </button>
    )
}

export default MagicButton