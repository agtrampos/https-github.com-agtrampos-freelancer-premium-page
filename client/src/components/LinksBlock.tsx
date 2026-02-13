import { freelancerSitesData } from "./FreelancerSites";

type Props = {
  excludeNames?: string[];
  excludeUrls?: string[];
};

function normalizeName(n: string) {
  return n.trim().toLowerCase();
}

function getCategory(name: string): string {
  const n = normalizeName(name);
  if (["upwork","fiverr","99freelas","workana","freelancer","freelancer.com","peopleperhour","guru"].some(k => n.includes(k))) return "Freelance";
  if (["remoteok","we work remotely","weworkremotely","flexjobs"].some(k => n.includes(k))) return "Vagas Remotas";
  if (["simplyhired","nexxt","linkedin"].some(k => n.includes(k))) return "Buscadores de Emprego";
  if (["contently","problogger","textbroker","writeraccess"].some(k => n.includes(k))) return "Escrita & Conteúdo";
  if (["gun.io","trampos"].some(k => n.includes(k))) return "Startups & Tech";
  if (["getninjas"].some(k => n.includes(k))) return "Microtarefas & Serviços";
  return "Freelance";
}

export default function LinksBlock({ excludeNames = [], excludeUrls = [] }: Props) {
  const nameSet = new Set(excludeNames.map(normalizeName));
  const urlSet = new Set(excludeUrls.map(u => u.trim().toLowerCase()));

  const items = freelancerSitesData.filter(s => {
    const byName = !nameSet.has(normalizeName(s.name));
    const byUrl = !urlSet.has(s.url.trim().toLowerCase());
    return byName && byUrl;
  });

  const categories = [
    "Freelance",
    "Vagas Remotas",
    "Buscadores de Emprego",
    "Escrita & Conteúdo",
    "Startups & Tech",
    "Microtarefas & Serviços",
  ];

  const grouped: Record<string, typeof items> = {};
  for (const c of categories) grouped[c] = [];
  for (const it of items) {
    const c = getCategory(it.name);
    grouped[c].push(it);
  }

  return (
    <div className="space-y-8">
      {categories.map((cat) => (
        <div key={cat} className="card-premium p-4">
          <h3 className="font-headline text-xl font-semibold text-white mb-3">🔹 {cat}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {grouped[cat].map((s) => (
              <a
                key={s.id}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-300 hover:text-purple-200 underline font-body text-sm"
              >
                {s.name}
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
