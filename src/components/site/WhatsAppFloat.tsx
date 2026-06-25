import { contact } from "@/config/siteContent";
import { track } from "@/config/marketing";

export function WhatsAppFloat() {
  const href = `https://wa.me/${contact.whatsappNumber}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      onClick={() => track("click_whatsapp", { location: "float" })}
      aria-label="Conversar pelo WhatsApp"
      className="fixed z-30 bottom-5 right-5 md:bottom-7 md:right-7 w-13 h-13 md:w-14 md:h-14 rounded-full flex items-center justify-center wa-pulse"
      style={{ background: "oklch(0.55 0.13 145)" }}
    >
      <svg viewBox="0 0 32 32" className="w-6 h-6 md:w-7 md:h-7" fill="white" aria-hidden>
        <path d="M19.11 17.21c-.27-.13-1.6-.79-1.85-.88-.25-.09-.43-.13-.61.13-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.13-1.13-.42-2.16-1.33-.8-.71-1.34-1.59-1.49-1.86-.16-.27-.02-.41.11-.55.12-.12.27-.32.4-.48.13-.16.18-.27.27-.45.09-.18.04-.34-.02-.47-.07-.13-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47-.16 0-.34-.01-.52-.01-.18 0-.47.07-.71.34-.25.27-.93.91-.93 2.22 0 1.31.95 2.57 1.08 2.75.13.18 1.87 2.85 4.53 3.99.63.27 1.12.43 1.51.55.63.2 1.21.17 1.66.1.51-.08 1.6-.65 1.82-1.28.22-.63.22-1.18.16-1.28-.06-.11-.24-.18-.51-.31zM16.04 5.33c-5.91 0-10.71 4.8-10.71 10.71 0 1.89.49 3.74 1.43 5.36L5.33 26.7l5.43-1.41a10.7 10.7 0 0 0 5.27 1.39h.01c5.91 0 10.71-4.8 10.71-10.71s-4.8-10.71-10.71-10.71zm0 19.62a8.9 8.9 0 0 1-4.54-1.24l-.33-.19-3.22.84.86-3.13-.21-.34a8.9 8.9 0 1 1 7.44 4.06z" />
      </svg>
    </a>
  );
}
