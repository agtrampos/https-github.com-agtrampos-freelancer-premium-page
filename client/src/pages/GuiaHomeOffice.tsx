export default function GuiaHomeOffice() {
  return (
    <div className="py-16 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
          Guia Completo de Home Office para Iniciantes (SEO + Estratégia)
        </h1>
        <p className="text-gray-300 font-body mb-8">
          Passo a passo para começar no home office com produtividade, posicionamento SEO e plano de crescimento.
        </p>
        <h2 className="font-headline text-2xl font-semibold text-white mb-4">
          Checklist de configuração
        </h2>
        <ul className="space-y-3 text-gray-300 font-body">
          <li>Ambiente, ferramentas e rotinas</li>
          <li>Criação de perfis e presença online</li>
          <li>Estratégia de conteúdo e networking</li>
        </ul>
        <div className="mt-8">
          <a href="https://freelancerpremium.vercel.app/#:~:text=Comece%20hoje%20%E2%80%93%20Lista%20com%20sites%20%2B%20Estrat%C3%A9gia" className="btn-gradient px-6 py-2 rounded-lg font-semibold">Comece hoje – Lista com sites + Estratégia</a>
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
                    g('event', 'cta_click', { variant: 'Começar Agora – GuiaHomeOffice', page_path: window.location.pathname });
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
                    g('event', 'cta_click', { variant: 'Voltar aos Sites – GuiaHomeOffice', page_path: window.location.pathname });
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
                    g('event', 'share_click', { variant: 'Compartilhar – GuiaHomeOffice', page_path: window.location.pathname });
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
