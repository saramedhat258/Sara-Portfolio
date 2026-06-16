"use server";

export async function sendContact(formData: FormData): Promise<{ success: boolean; message?: string }> {
    try {
        const name = String(formData.get("name") || "");
        const email = String(formData.get("email") || "");
        const phone = String(formData.get("phone") || "");
        const message = String(formData.get("message") || "");

        const scriptURL =
            "https://script.google.com/macros/s/AKfycbyULhxHPq86ecY9WkAk-RHwrXDDx1YU-sXH7JhaPjQtt7ysSbiTdD1JOBkQ2_nip-0i/exec";

        const res = await fetch(scriptURL, {
            method: "POST",
            body: JSON.stringify({ name, email, phone, message }),
            headers: { "Content-Type": "application/json" },
        });

        if (!res.ok) {
            const text = await res.text().catch(() => "");
            throw new Error(`Google script responded ${res.status}: ${text}`);
        }

        return { success: true };
    } catch (err) {
        console.error("sendContact error:", err);
        return { success: false, message: err instanceof Error ? err.message : String(err) };
    }
}