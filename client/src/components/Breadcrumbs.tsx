import { useLocation } from "wouter";

const labels: Record<string, string> = {
  "/": "Início",
  "/recursos": "Recursos",
  "/plano-de-acao": "Plano de Ação",
  "/estrategias": "Estratégias",
  "/depoimentos": "Depoimentos",
  "/faq": "FAQ",
  "/informacoes": "Informações",
  "/privacidade": "Privacidade",
  "/termos": "Termos",
  "/reembolso": "Reembolso",
  "/contato": "Contato",
  "/top-10-sites-freelancer-2026": "Top 10 Sites 2026",
  "/como-ganhar-5000-por-mes-plano": "Renda 5000 – Plano",
  "/guia-home-office-iniciantes": "Guia Home Office",
  "/sites-que-pagam-em-dolar-aceitam-brasileiros": "Sites que pagam em dólar",
  "/ranking-melhores-sites-por-categoria": "Ranking por categoria",
  "/checklist-seo-perfil-freelancer": "Checklist SEO do perfil",
  "/sitemap": "Mapa do site",
};

export default function Breadcrumbs() {
  const [pathname, setLocation] = useLocation();
  const parts = pathname.split("/").filter(Boolean);
  const trail = ["/", ...parts.map((_, i) => `/${parts.slice(0, i + 1).join("/")}`)];

  return (
    <nav aria-label="breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-2 text-sm">
        {trail.map((p, i) => {
          const isLast = i === trail.length - 1;
          const label = labels[p] || p.replace(/\//g, "");
          return (
            <li key={p} className="flex items-center gap-2">
              {!isLast ? (
                <a
                  href={p}
                  onClick={(e) => {
                    e.preventDefault();
                    setLocation(p);
                  }}
                  className="text-purple-300 hover:text-purple-200 underline"
                >
                  {label || "Início"}
                </a>
              ) : (
                <span className="text-gray-400">{label}</span>
              )}
              {!isLast && <span className="text-gray-500">/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
