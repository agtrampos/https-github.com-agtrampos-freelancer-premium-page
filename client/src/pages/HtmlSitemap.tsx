const routes = [
  { path: "/", name: "Início" },
  { path: "/recursos", name: "Recursos" },
  { path: "/plano-de-acao", name: "Plano de Ação" },
  { path: "/estrategias", name: "Estratégias" },
  { path: "/depoimentos", name: "Depoimentos" },
  { path: "/faq", name: "FAQ" },
  { path: "/informacoes", name: "Informações" },
  { path: "/privacidade", name: "Privacidade" },
  { path: "/termos", name: "Termos" },
  { path: "/reembolso", name: "Reembolso" },
  { path: "/contato", name: "Contato" },
  { path: "/top-10-sites-freelancer-2026", name: "Top 10 Sites 2026" },
  { path: "/como-ganhar-5000-por-mes-plano", name: "Renda 5000 – Plano" },
  { path: "/guia-home-office-iniciantes", name: "Guia Home Office" },
  { path: "/sites-que-pagam-em-dolar-aceitam-brasileiros", name: "Sites que pagam em dólar" },
  { path: "/ranking-melhores-sites-por-categoria", name: "Ranking por categoria" },
  { path: "/checklist-seo-perfil-freelancer", name: "Checklist SEO do perfil" },
];

export default function HtmlSitemap() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <h1 className="font-display text-3xl font-bold mb-6">Mapa do site (HTML)</h1>
        <p className="text-gray-400 font-body mb-6">
          Lista de páginas indexáveis com links internos para facilitar a descoberta.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {routes.map((r) => (
            <a
              key={r.path}
              href={r.path}
              className="card-premium p-4 underline text-purple-300 hover:text-purple-200"
            >
              {r.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
