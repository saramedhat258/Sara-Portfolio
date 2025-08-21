"use server";

export async function sendContact(formData: FormData): Promise<void> {
    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const message = formData.get("message");

    const scriptURL =
        "https://script.google.com/macros/s/AKfycbzvaaZ_PaBRHLxY3fOXDLKbU131NPDjcoH2TUuYOiX9EVG7BOwIX0fEhvVI4Rz7C30p/exec";

    await fetch(scriptURL, {
        method: "POST",
        body: JSON.stringify({ name, email, phone, message }),
        headers: { "Content-Type": "application/json" },
    });

}