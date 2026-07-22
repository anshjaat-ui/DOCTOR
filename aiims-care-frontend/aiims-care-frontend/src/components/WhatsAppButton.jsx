const WHATSAPP_NUMBER = '919999999999' // TODO: replace with real AIIMS Care doctor/admin WhatsApp number

export default function WhatsAppButton() {
  const message = encodeURIComponent('Hi, I want to talk to a doctor about AIIMS Care products.')

  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Consult doctor on WhatsApp"
      className="fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full bg-accent hover:bg-accent-light text-white flex items-center justify-center shadow-accentGlowLg transition-colors"
    >
      <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.35 5.07L2 22l5.06-1.33A9.94 9.94 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm5.2 14.24c-.22.62-1.28 1.18-1.76 1.24-.45.06-1 .08-1.62-.1-.37-.11-.85-.27-1.46-.53-2.57-1.11-4.25-3.7-4.38-3.87-.13-.17-1.05-1.4-1.05-2.67 0-1.27.67-1.9.9-2.16.24-.26.52-.32.7-.32h.5c.16 0 .38-.03.58.45.22.53.75 1.83.82 1.96.07.13.11.29.02.46-.09.17-.14.28-.27.43-.13.15-.28.34-.4.46-.13.13-.27.27-.12.53.15.26.68 1.13 1.47 1.83 1.01.9 1.86 1.18 2.12 1.31.26.13.41.11.56-.07.15-.17.65-.75.82-1.01.17-.26.33-.21.56-.13.22.09 1.42.67 1.67.79.24.13.4.19.46.29.06.11.06.62-.16 1.23z"/>
      </svg>
    </a>
  )
}
