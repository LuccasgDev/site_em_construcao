import Image from "next/image";
import { ChessGrid } from "@/components/chess-grid";
import { StatusBadge } from "@/components/status-badge";
import { FeatureCards } from "@/components/feature-cards";
import { ContactSection } from "@/components/contact-section";

export default function HomePage() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <ChessGrid />

      <div className="relative z-10 flex flex-col items-center gap-10 px-6 py-16 max-w-3xl mx-auto text-center">
        {/* Logo */}
        <div className="relative w-48 h-48 md:w-56 md:h-56">
          <Image
            src="/images/Logo_CheckmatTech-removebg-preview.png"
            alt="Checkmate Tech - Torre de xadrez com destaque laranja"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Status Badge */}
        <StatusBadge />

        {/* Headline */}
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-3xl md:text-5xl font-bold font-display tracking-tight text-balance text-foreground">
            Nosso site esta sendo{" "}
            <span className="text-primary">construido</span>.
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed text-pretty">
            Estamos preparando cada movimento com estrategia. Em breve, voce
            conhecera todas as nossas solucoes para transformar a tecnologia do
            seu negocio.
          </p>
        </div>

        {/* Divider */}
        <div className="w-full flex items-center gap-4">
          <div className="flex-1 h-px bg-border" />
          <span className="text-xs text-muted-foreground uppercase tracking-widest">
            O que fazemos
          </span>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Feature Cards */}
        <FeatureCards />

        {/* Tagline */}
        <div className="flex flex-col items-center gap-2">
          <p className="text-sm text-muted-foreground italic">
            {
              '"Cada solucao e um movimento. Cada projeto, um passo rumo ao checkmate."'
            }
          </p>
        </div>

        {/* Contact */}
        <ContactSection />

        {/* Footer */}
        <footer className="pt-6 border-t border-border w-full">
          <p className="text-xs text-muted-foreground">
            {"Checkmate Tech"} &mdash; Tecnologia com estrategia.
          </p>
        </footer>
      </div>
    </main>
  );
}
