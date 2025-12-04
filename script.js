// WhatsApp number for HustlerDev – no "+" sign
const HD_WHATSAPP = "27768588689";

// Open a simple intro chat from Home hero button
function openWhatsAppIntro() {
    const msg =
        "Hi HustlerDev, I saw your website and I’m interested in a website for my business. Can you tell me more about your packages?";
    window.open(`https://wa.me/${HD_WHATSAPP}?text=${encodeURIComponent(msg)}`, "_blank");
}

// Handle project brief form on contact.html
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("project-form");
    if (!form) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const business = document.getElementById("business").value.trim();
        const industry = document.getElementById("industry").value.trim();
        const pages = document.getElementById("pages").value;
        const budget = document.getElementById("budget").value;
        const management = document.getElementById("management").value;
        const whatsapp = document.getElementById("whatsapp").value.trim();
        const details = document.getElementById("details").value.trim();

        const msgLines = [
            "New website enquiry from HustlerDev site:",
            "",
            `Name: ${name}`,
            `Business: ${business}`,
            `Type of business: ${industry}`,
            `Pages: ${pages}`,
            `Budget (once-off): ${budget}`,
            `Monthly management: ${management}`,
            whatsapp ? `Client WhatsApp number: ${whatsapp}` : "",
            "",
            "Project idea / details:",
            details
        ].filter(Boolean);

        const msg = msgLines.join("\n");
        const url = `https://wa.me/${HD_WHATSAPP}?text=${encodeURIComponent(msg)}`;

        window.open(url, "_blank");
    });
});
