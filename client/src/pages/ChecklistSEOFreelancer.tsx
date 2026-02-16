import AdsenseInArticle from "@/components/AdsenseInArticle";

export default function ChecklistSEOFreelancer() {
  return (
    <div className="py-16 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
          Checklist SEO para seu perfil de freelancer crescer no Google
        </h1>
        <p className="text-gray-300 font-body mb-8">
          Um checklist prático para otimizar perfis, portfólios e conteúdo com foco em ranqueamento orgânico.
        </p>
        <AdsenseInArticle />
        <h2 className="font-headline text-2xl font-semibold text-white mb-4">
          Itens essenciais
        </h2>
        <ul className="space-y-3 text-gray-300 font-body">
          <li>H1 com palavra-chave principal</li>
          <li>Meta description clara e persuasiva</li>
          <li>URLs amigáveis e interlinks</li>
          <li>Imagens com alt text descritivo</li>
          <li>Conteúdo evergreen atualizado periodicamente</li>
        </ul>
        <div className="mt-8">
          <a href="/estrategias" className="btn-gradient px-6 py-2 rounded-lg font-semibold">Ver estratégias</a>
        </div>
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
                    g('event', 'cta_click', { variant: 'Começar Agora – Checklist', page_path: window.location.pathname });
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
                    g('event', 'cta_click', { variant: 'Voltar aos Sites – Checklist', page_path: window.location.pathname });
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
                    g('event', 'share_click', { variant: 'Compartilhar – Checklist', page_path: window.location.pathname });
                  }
                } catch {}
              }}
            >
              Compartilhar com Amigos
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
