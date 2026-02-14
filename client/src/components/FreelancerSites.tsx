import { ExternalLink, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/_core/hooks/useAuth';
import ShareButtons from './ShareButtons';

interface FreelancerSite {
  id: string;
  name: string;
  tags: string[];
  description: string;
  earnings: string;
  url: string;
}

/**
 * FreelancerSites Component
 * Design: Minimalismo Moderno com Gradiente Roxo
 * 
 * Exibe cards com plataformas de freelancer
 * - Nome da plataforma
 * - Tags (Internacional, Nacional, Iniciante, etc.)
 * - Descrição curta
 * - Estimativa de ganhos
 * - Botão de acesso
 */
const sites: FreelancerSite[] = [
  {
    id: 'upwork',
    name: 'Upwork',
    tags: ['Internacional', 'Iniciante'],
    description: 'Maior marketplace global de freelancers com ampla variedade de projetos.',
    earnings: 'R$ 1.000 - R$ 12.000+/mês',
    url: 'https://www.upwork.com',
  },
  {
    id: '99freelas',
    name: '99Freelas',
    tags: ['Nacional', 'Iniciante'],
    description: 'Plataforma brasileira com projetos variados e comunidade ativa.',
    earnings: 'R$ 300 - R$ 3.000+/mês',
    url: 'https://www.99freelas.com.br',
  },
  {
    id: 'workana',
    name: 'Workana',
    tags: ['Nacional', 'Intermediário'],
    description: 'Plataforma popular na América Latina com projetos em diversas áreas.',
    earnings: 'R$ 500 - R$ 5.000+/mês',
    url: 'https://www.workana.com',
  },
  {
    id: 'freelancer',
    name: 'Freelancer',
    tags: ['Internacional', 'Intermediário'],
    description: 'Plataforma global com leilões de projetos e sistema de reputação.',
    earnings: 'R$ 1.000 - R$ 8.000+/mês',
    url: 'https://www.freelancer.com',
  },
  {
    id: 'guru',
    name: 'Guru',
    tags: ['Internacional', 'Intermediário'],
    description: 'Plataforma com projetos diversos e sistema de proteção ao freelancer.',
    earnings: 'R$ 800 - R$ 6.000+/mês',
    url: 'https://www.guru.com',
  },
  {
    id: 'peopleperhour',
    name: 'PeoplePerHour',
    tags: ['Internacional', 'Intermediário'],
    description: 'Plataforma europeia com foco em design, desenvolvimento e marketing.',
    earnings: 'R$ 1.000 - R$ 7.000+/mês',
    url: 'https://www.peopleperhour.com',
  },
  {
    id: 'getninjas',
    name: 'GetNinjas',
    tags: ['Nacional', 'Iniciante'],
    description: 'Plataforma brasileira focada em serviços locais e digitais.',
    earnings: 'R$ 200 - R$ 2.000+/mês',
    url: 'https://www.getninjas.com.br',
  },
  {
    id: 'trampos',
    name: 'Trampos',
    tags: ['Nacional', 'Intermediário'],
    description: 'Plataforma brasileira com projetos de tecnologia e criatividade.',
    earnings: 'R$ 500 - R$ 4.000+/mês',
    url: 'https://trampos.co',
  },
  {
    id: 'remoteok',
    name: 'RemoteOK',
    tags: ['Internacional', 'Intermediário'],
    description: 'Plataforma com foco em trabalho remoto e full-time.',
    earnings: 'R$ 3.000 - R$ 15.000+/mês',
    url: 'https://remoteok.com',
  },
  {
    id: 'weworkremotely',
    name: 'We Work Remotely',
    tags: ['Internacional', 'Intermediário'],
    description: 'Plataforma especializada em oportunidades de trabalho remoto.',
    earnings: 'R$ 2.000 - R$ 12.000+/mês',
    url: 'https://weworkremotely.com',
  },
  {
    id: 'flexjobs',
    name: 'FlexJobs',
    tags: ['Internacional', 'Intermediário'],
    description: 'Plataforma com trabalhos verificados e sem taxas de aplicação.',
    earnings: 'R$ 1.500 - R$ 10.000+/mês',
    url: 'https://www.flexjobs.com',
  },
  {
    id: 'simplyhired',
    name: 'SimplyHired',
    tags: ['Internacional', 'Intermediário'],
    description: 'Plataforma com vagas de trabalho remoto e freelancer.',
    earnings: 'R$ 1.000 - R$ 8.000+/mês',
    url: 'https://www.simplyhired.com',
  },
  {
    id: 'contently',
    name: 'Contently',
    tags: ['Internacional', 'Avançado'],
    description: 'Plataforma para escritores, jornalistas e criadores de conteúdo.',
    earnings: 'R$ 1.000 - R$ 10.000+/mês',
    url: 'https://contently.com',
  },
  {
    id: 'writeraccess',
    name: 'WriterAccess',
    tags: ['Internacional', 'Intermediário'],
    description: 'Marketplace de conteúdo com oportunidades para redatores e criativos.',
    earnings: 'R$ 800 - R$ 6.000+/mês',
    url: 'https://www.writeraccess.com',
  },
  {
    id: 'textbroker',
    name: 'Textbroker',
    tags: ['Internacional', 'Iniciante'],
    description: 'Plataforma para redatores com níveis de qualidade e pagamentos por texto.',
    earnings: 'R$ 300 - R$ 2.000+/mês',
    url: 'https://www.textbroker.com',
  },
  {
    id: 'problogger',
    name: 'ProBlogger',
    tags: ['Internacional', 'Intermediário'],
    description: 'Quadro de vagas para escritores e criadores de conteúdo.',
    earnings: 'R$ 500 - R$ 4.000+/mês',
    url: 'https://problogger.com/jobs',
  },
  {
    id: 'behance',
    name: 'Behance',
    tags: ['Internacional', 'Design'],
    description: 'Portfólio online e plataforma para designers e criativos.',
    earnings: 'R$ 500 - R$ 5.000+/mês',
    url: 'https://www.behance.net',
  },
  {
    id: 'dribbble',
    name: 'Dribbble',
    tags: ['Internacional', 'Design'],
    description: 'Comunidade de designers com oportunidades de projeto.',
    earnings: 'R$ 500 - R$ 4.000+/mês',
    url: 'https://dribbble.com',
  },
  {
    id: 'linkedin',
    name: 'LinkedIn ProFinder',
    tags: ['Internacional', 'Intermediário'],
    description: 'Ferramenta do LinkedIn para conectar com clientes.',
    earnings: 'R$ 1.000 - R$ 8.000+/mês',
    url: 'https://www.linkedin.com/profinder',
  },
  {
    id: 'nexxt',
    name: 'Nexxt',
    tags: ['Nacional', 'Intermediário'],
    description: 'Plataforma brasileira com projetos e oportunidades de trabalho.',
    earnings: 'R$ 400 - R$ 3.000+/mês',
    url: 'https://www.nexxt.com',
  },
  {
    id: 'guinio',
    name: 'Gun.io',
    tags: ['Internacional', 'Avançado'],
    description: 'Plataforma para desenvolvedores especializados e experientes.',
    earnings: 'R$ 3.000 - R$ 20.000+/mês',
    url: 'https://www.gun.io',
  },
];

const tagColors: { [key: string]: string } = {
  'Internacional': 'bg-blue-500/20 text-blue-300 border-blue-500/30',
  'Nacional': 'bg-green-500/20 text-green-300 border-green-500/30',
  'Iniciante': 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
  'Intermediário': 'bg-orange-500/20 text-orange-300 border-orange-500/30',
  'Avançado': 'bg-purple-500/20 text-purple-300 border-purple-500/30',
  'Design': 'bg-pink-500/20 text-pink-300 border-pink-500/30',
};

export default function FreelancerSites() {
  const { isAuthenticated } = useAuth();
  return (
    <div id="sites" className="space-y-6">
      {isAuthenticated ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(() => {
            const seen = new Set<string>();
            const list = sites.filter(s => {
              const k = (s.url || s.name).trim().toLowerCase();
              if (seen.has(k)) return false;
              seen.add(k);
              return true;
            });
            return list.map((site, index) => (
            <div
              key={site.id}
              className="card-premium p-6 flex flex-col"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="mb-4">
                <h3 className="font-headline text-xl font-semibold mb-3">
                  {site.name}
                </h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {site.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`badge-tag ${tagColors[tag] || 'bg-purple-500/20 text-purple-300 border-purple-500/30'}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-gray-300 font-body text-sm mb-4 flex-grow">
                {site.description}
              </p>
              <div className="mb-4 pb-4 border-b border-border">
                <p className="text-xs text-gray-400 font-body mb-1">Ganhos estimados:</p>
                <p className="text-purple-300 font-semibold text-sm">
                  {site.earnings}
                </p>
              </div>
              <a
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
                onClick={() => {
                  try {
                    const g = (window as any).gtag;
                    if (typeof g === "function") {
                      g("event", "platform_click", { name: site.name, url: site.url });
                    }
                  } catch {}
                }}
              >
                <button className="w-full btn-gradient px-4 py-2 rounded-lg font-semibold text-sm flex items-center justify-center gap-2 hover:shadow-lg transition-all">
                  Acessar Site
                  <ExternalLink className="w-4 h-4" />
                </button>
              </a>
            </div>
            ));
          })()}
        </div>
      ) : (
        <div className="space-y-6">
          <div className="card-premium p-6">
            <div className="flex items-center gap-2 mb-2">
              <Lock className="w-5 h-5 text-purple-300" />
              <h3 className="font-headline text-xl font-semibold text-white">Conteúdo Premium</h3>
            </div>
            <p className="text-gray-300 font-body text-sm">
              As listas completas de plataformas e links diretos estão disponíveis para membros.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              'Freelance',
              'Vagas Remotas',
              'Buscadores de Emprego',
              'Escrita & Conteúdo',
              'Startups & Tech',
              'Microtarefas & Serviços',
            ].map((cat) => (
              <div key={cat} className="card-premium p-4">
                <h4 className="font-headline text-lg font-semibold text-white">🔹 {cat}</h4>
                <p className="text-gray-300 font-body text-sm">
                  Acesso completo disponível após login.
                </p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <a
              href="/checkout"
              className="btn-gradient px-6 py-2 rounded-lg font-semibold inline-flex items-center gap-2"
              onClick={() => {
                try {
                  const g = (window as any).gtag;
                  if (typeof g === 'function') {
                    g('event', 'cta_click', { variant: 'Acesso premium – recursos', page_path: window.location.pathname });
                  }
                } catch {}
              }}
            >
              Acessar conteúdo premium
            </a>
          </div>
        </div>
      )}
      <div className="mt-10 card-premium p-6">
        <h3 className="font-headline text-xl font-semibold text-white mb-2">Pronto para começar?</h3>
        <p className="text-gray-300 font-body mb-4">Você tem tudo que precisa para começar. O sucesso depende de ação consistente e qualidade no trabalho.</p>
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="/checkout"
            className="btn-gradient px-6 py-2 rounded-lg font-semibold"
            onClick={() => {
              try {
                const g = (window as any).gtag;
                if (typeof g === 'function') {
                  g('event', 'cta_click', { variant: 'Começar Agora – recursos', page_path: window.location.pathname });
                }
              } catch {}
            }}
          >
            Começar Agora
          </a>
          <a
            href="/"
            className="px-6 py-2 rounded-lg font-semibold border border-purple-500/30 text-purple-300 hover:bg-purple-500/10 transition-colors"
            onClick={() => {
              try {
                const g = (window as any).gtag;
                if (typeof g === 'function') {
                  g('event', 'cta_click', { variant: 'Voltar aos Sites – recursos', page_path: window.location.pathname });
                }
              } catch {}
            }}
          >
            Voltar aos Sites
          </a>
          <button
            className="px-6 py-2 rounded-lg font-semibold border border-purple-500/30 text-purple-300 hover:bg-purple-500/10 transition-colors"
            onClick={() => {
              try {
                const shareData = { title: document.title, text: 'Freelancer Premium', url: window.location.href };
                if (navigator.share) {
                  navigator.share(shareData);
                } else {
                  const url = window.location.href;
                  navigator.clipboard?.writeText(url);
                  alert('Link copiado para a área de transferência');
                }
                const g = (window as any).gtag;
                if (typeof g === 'function') {
                  g('event', 'share_click', { variant: 'Compartilhar – recursos', page_path: window.location.pathname });
                }
              } catch {}
            }}
          >
            Compartilhar com Amigos
          </button>
        </div>
        <div className="mt-4">
          <ShareButtons showLabel={false} variant="horizontal" />
        </div>
      </div>
    </div>
  );
}
export const freelancerSitesData = sites;
