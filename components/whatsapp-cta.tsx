import { defaultWhatsAppMessage, whatsappUrl } from '@/lib/site'

export function WhatsAppCta() {
  return (
    <a
      className="whatsapp-float"
      href={whatsappUrl(defaultWhatsAppMessage)}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Fanmei Textile on WhatsApp"
    >
      <span aria-hidden="true">WA</span>
      <strong>WhatsApp</strong>
    </a>
  )
}
