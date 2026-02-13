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
        <h2 className="font-headline text-2xl font-semibold text-white mb-4">
          Plataformas recomendadas
        </h2>
        <p className="text-gray-300 font-body">
          A relação completa de plataformas e links diretos está disponível para membros. Faça o acesso para ver tudo.
        </p>
        <div className="mt-8">
          <a href="/checkout" className="btn-gradient px-6 py-2 rounded-lg font-semibold">Acessar conteúdo premium</a>
        </div>
      </div>
    </div>
  );
}
