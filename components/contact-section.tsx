import { Mail, MessageCircle, Instagram } from "lucide-react";

export function ContactSection() {
  return (
    <div className="flex flex-col items-center gap-4">
      <p className="text-sm text-muted-foreground">
        Enquanto isso, entre em contato:
      </p>
      <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
        <a
          href="mailto:checkmatetech@gmail.com"
          className="group flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
          aria-label="Enviar email para Checkmate Tech"
        >
          <Mail className="h-4 w-4" />
          <span>checkmatetech@gmail.com</span>
        </a>
        <a
          href="https://wa.me/5585921894689"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
          aria-label="Falar com Checkmate Tech no WhatsApp"
        >
          <MessageCircle className="h-4 w-4" />
          <span>WhatsApp</span>
        </a>
        <a
          href="https://instagram.com/checkmattech"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
          aria-label="Seguir Checkmate Tech no Instagram"
        >
          <Instagram className="h-4 w-4" />
          <span>@checkmattech</span>
        </a>
      </div>
    </div>
  );
}
