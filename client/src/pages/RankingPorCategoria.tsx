export default function RankingPorCategoria() {
  return (
    <div className="py-16 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
          Ranking dos melhores sites freelance por categoria
        </h1>
        <p className="text-gray-300 font-body mb-8">
          Classificação por categorias para facilitar a escolha da plataforma ideal de acordo com seu nicho.
        </p>
        <h2 className="font-headline text-2xl font-semibold text-white mb-4">
          Categoria: Freelance
        </h2>
        <ul className="space-y-2 text-gray-300 font-body">
          <li>Upwork</li>
          <li>Fiverr</li>
          <li>99Freelas</li>
        </ul>
        <h2 className="font-headline text-2xl font-semibold text-white mt-8 mb-4">
          Categoria: Vagas Remotas
        </h2>
        <ul className="space-y-2 text-gray-300 font-body">
          <li>RemoteOK</li>
          <li>We Work Remotely</li>
          <li>FlexJobs</li>
        </ul>
        <h2 className="font-headline text-2xl font-semibold text-white mt-8 mb-4">
          Categoria: Escrita e Conteúdo
        </h2>
        <ul className="space-y-2 text-gray-300 font-body">
          <li>ProBlogger</li>
          <li>Contently</li>
          <li>WriterAccess</li>
        </ul>
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
                    g('event', 'cta_click', { variant: 'Começar Agora – Ranking', page_path: window.location.pathname });
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
                    g('event', 'cta_click', { variant: 'Voltar aos Sites – Ranking', page_path: window.location.pathname });
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
                    g('event', 'share_click', { variant: 'Compartilhar – Ranking', page_path: window.location.pathname });
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
