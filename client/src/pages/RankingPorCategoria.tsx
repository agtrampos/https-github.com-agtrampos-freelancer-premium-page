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
      </div>
    </div>
  );
}
