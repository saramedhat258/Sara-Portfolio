"use client"

import React, { useState, useTransition } from "react";
import { sendContact } from "../actions";
import { BackgroundBeams } from "./ui/BeamsBg"
import MagicButton from "./ui/MagicButton"
import { Toast } from "./ui/Toast";

function Contact() {
    const [isPending, startTransition] = useTransition();
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
    const [errorMsg, setErrorMsg] = useState<string | null>(null);
    const [showToast, setShowToast] = useState(false);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus("idle");
        setErrorMsg(null);
        const form = e.currentTarget;
        const formData = new FormData(form);

        startTransition(async () => {
            const res = await sendContact(formData);
            if (res?.success) {
                setShowToast(true);
form.reset();
setTimeout(() => setShowToast(false), 3500);
                
            } else {
                setStatus("error");
                setErrorMsg(res?.message || "Failed to send message");
            }
        });
    }

    return (
        <div id="contact" className="relative mt-32 mb-20">
            <div className="text-center flex flex-col gap-5 lg:w-[55%] m-auto ">
                <h1 className="sm:text-5xl text-2xl font-medium">Ready to take <span className="text-purple">your</span> digital presence to the next level?</h1>
                <p className="sm:text-xl">Reach out to me today and let&apos;s discuss how I can help you achieve your goals.</p>
            </div>

            <Toast show={showToast} />
            <form onSubmit={handleSubmit} className="lg:w-[55%] flex flex-col justify-center m-auto mt-14 border border-slate-800 bg-slate-900/[0.7] rounded-2xl py-10">
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    required
                    className="border border-slate-800 bg-slate-950 rounded-2xl p-3 sm:w-3/4 w-11/12 m-auto my-2 z-10" />
                <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    required
                    className="border border-slate-800 bg-slate-950 rounded-2xl p-3 sm:w-3/4 w-11/12 m-auto my-2 z-10" />
                <input
                    type="tel"
                    placeholder="phone number"
                    name="phone"
                    required
                    className="border border-slate-800 bg-slate-950 rounded-2xl p-3 sm:w-3/4 w-11/12 m-auto my-2 z-10" />
                <textarea
                    rows={5}
                    maxLength={550}
                    placeholder="whats your goal?"
                    name="message"
                    required
                    className="border border-slate-800 bg-slate-950 rounded-2xl p-3 sm:w-3/4 w-11/12 m-auto my-2 z-10" />
                <div className="sm:w-3/4 w-11/12 m-auto mt-3 z-10">
                    <MagicButton text={isPending ? "sending..." : "submit"} width="w-full" />
                </div>
            </form>
            <BackgroundBeams/>
        </div>
    )
}

export default Contact