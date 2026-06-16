export function Toast({ show }: { show: boolean }) {
    return (
        <div
            style={{ transition: "opacity 0.35s ease, transform 0.35s ease" }}
            className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 
        bg-[#0f6e56] text-[#e1f5ee] rounded-2xl px-5 py-4 shadow-2xl
        ${show ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3 pointer-events-none"}`}
        >
            <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center shrink-0 text-sm">✓</span>
            <div>
                <p className="font-medium text-sm">Message sent!</p>
                <p className="text-xs opacity-80 mt-0.5">Thank you, we&apos;ll be in touch soon.</p>
            </div>
        </div>
    );
}