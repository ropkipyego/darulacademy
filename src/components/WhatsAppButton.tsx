import { MessageCircle } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/254704420640?text=Hello%20Darul%20Ilmi%20School,%20I%20would%20like%20to%20inquire%20about%20admissions";

export function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Darul Ilmi School on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full px-4 py-3 sm:px-5 sm:py-4 text-white font-semibold shadow-elegant animate-wa-bounce transition-transform hover:scale-105"
      style={{ backgroundColor: "#25D366" }}
    >
      <span
        className="absolute inset-0 rounded-full opacity-60 animate-ping"
        style={{ backgroundColor: "#25D366" }}
        aria-hidden
      />
      <MessageCircle className="relative h-6 w-6" strokeWidth={2.5} />
      <span className="relative hidden sm:inline">Chat with us</span>
    </a>
  );
}

export { WHATSAPP_URL };
