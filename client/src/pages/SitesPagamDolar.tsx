import LinksBlock from "@/components/LinksBlock";

export default function SitesPagamDolar() {
  return (
    <div className="py-16 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
          Sites que pagam em dólar e aceitam brasileiros
        </h1>
        <p className="text-gray-300 font-body mb-8">
          Plataformas internacionais com pagamento em dólar e cadastro liberado para profissionais do Brasil.
        </p>
        <h2 className="font-headline text-2xl font-semibold text-white mb-4">
          Plataformas recomendadas
        </h2>
        <ul className="space-y-3 text-gray-300 font-body">
          <li>Upwork</li>
          <li>Fiverr</li>
          <li>RemoteOK</li>
          <li>We Work Remotely</li>
          <li>FlexJobs</li>
        </ul>
        <div className="mt-8">
          <a href="https://freelancerpremium.vercel.app/#:~:text=Comece%20hoje%20%E2%80%93%20Lista%20com%20sites%20%2B%20Estrat%C3%A9gia" className="btn-gradient px-6 py-2 rounded-lg font-semibold">Comece hoje – Lista com sites + Estratégia</a>
        </div>
        <div className="mt-12">
          <LinksBlock excludeNames={["Upwork","Fiverr","RemoteOK","We Work Remotely","FlexJobs"]} />
        </div>
      </div>
    </div>
  );
}
