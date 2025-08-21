import { sendContact } from "../actions";
import { BackgroundBeams } from "./ui/BeamsBg"
import MagicButton from "./ui/MagicButton"


function Contact() {
    return (
        <div id="contact" className="relative mt-32 mb-20">
            <div className="text-center flex flex-col gap-5 lg:w-[55%] m-auto ">
                <h1 className="sm:text-5xl text-2xl font-medium">Ready to take <span className="text-purple">your</span> digital presence to the next level?</h1>
                <p className="sm:text-xl">Reach out to me today and let&apos;s discuss how I can help you achieve your goals.</p>
            </div>
            <form action={sendContact} className="lg:w-[55%] flex flex-col justify-center m-auto mt-14 border border-slate-800 bg-slate-900/[0.7] rounded-2xl py-10">
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
                <MagicButton text="submit" width="sm:w-3/4 w-11/12 m-auto mt-3 z-10" />
            </form>
        <BackgroundBeams/>
        </div>
    )
}

export default Contact