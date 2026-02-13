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
          <a href="/recursos" className="btn-gradient px-6 py-2 rounded-lg font-semibold">Ver plataformas recomendadas</a>
        </div>
      </div>
    </div>
  );
}
