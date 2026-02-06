import { Settings, Zap, Shield } from "lucide-react";

const features = [
  {
    icon: Settings,
    title: "Sistemas Sob Medida",
    description:
      "Soluções personalizadas que se encaixam na realidade do seu negócio.",
  },
  {
    icon: Zap,
    title: "Automação de Processos",
    description:
      "Eliminamos controles manuais e transformamos rotinas em fluxos eficientes.",
  },
  {
    icon: Shield,
    title: "Organização de TI",
    description:
      "Estruturamos sua tecnologia para gerar clareza, controle e segurança.",
  },
];

export function FeatureCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {features.map((feature) => (
        <div
          key={feature.title}
          className="group rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:border-primary/40"
        >
          <div className="mb-4 inline-flex rounded-md bg-primary/10 p-2.5">
            <feature.icon className="h-5 w-5 text-primary" />
          </div>
          <h3 className="text-sm font-semibold text-foreground mb-2 font-display">
            {feature.title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  );
}
