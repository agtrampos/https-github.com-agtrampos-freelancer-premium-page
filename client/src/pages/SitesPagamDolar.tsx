import AdsenseInArticle from "@/components/AdsenseInArticle";

export default function SitesPagamDolar() {
  return (
    <div className="py-16 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <a href="/" className="text-purple-300 underline hover:text-purple-200">Início</a>
          <span className="text-gray-500 mx-2">/</span>
          <span className="text-gray-400">Sites que pagam em dólar</span>
        </div>
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
          Sites que pagam em dólar e aceitam brasileiros
        </h1>
        <p className="text-gray-300 font-body mb-8">
          Plataformas internacionais com pagamento em dólar e cadastro liberado para profissionais do Brasil.
        </p>
        <AdsenseInArticle />
        <h2 className="font-headline text-2xl font-semibold text-white mb-4">
          Plataformas recomendadas
        </h2>
        <p className="text-gray-300 font-body">
          A relação completa de plataformas e links diretos está disponível para membros. Faça o acesso para ver tudo.
        </p>
        <div className="mt-8">
          <a href="/checkout" className="btn-gradient px-6 py-2 rounded-lg font-semibold">Acessar conteúdo premium</a>
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
                    g('event', 'cta_click', { variant: 'Começar Agora – SitesPagamDolar', page_path: window.location.pathname });
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
                    g('event', 'cta_click', { variant: 'Voltar aos Sites – SitesPagamDolar', page_path: window.location.pathname });
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
                    g('event', 'share_click', { variant: 'Compartilhar – SitesPagamDolar', page_path: window.location.pathname });
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
