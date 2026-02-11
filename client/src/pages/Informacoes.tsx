import { Link } from "wouter";

export default function Informacoes() {
  const cards = [
    { title: "Política de Privacidade", href: "/privacidade", desc: "Como tratamos seus dados e privacidade." },
    { title: "Termos de Uso", href: "/termos", desc: "Regras de uso do site e serviços." },
    { title: "Devolução e Reembolso", href: "/reembolso", desc: "Políticas de cancelamento e reembolso." },
    { title: "Contato", href: "/contato", desc: "Fale conosco para suporte e dúvidas." },
  ];
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="font-display text-4xl md:text-5xl font-bold">
            <span className="gradient-purple-pink-text">Informações</span>
          </h1>
          <p className="text-gray-300 font-body mt-3">
            Documentos e contatos essenciais para seu uso da plataforma.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, idx) => (
            <Link key={card.title} href={card.href}>
              <a className="card-premium p-6 block hover:bg-white/5 transition-colors" style={{ animationDelay: `${idx * 0.05}s` }}>
                <h3 className="font-headline text-xl font-semibold mb-2">{card.title}</h3>
                <p className="text-gray-300 font-body text-sm">{card.desc}</p>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
