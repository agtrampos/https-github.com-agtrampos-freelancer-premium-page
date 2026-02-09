/**
 * RefundPolicy Component
 * Design: Minimalismo Moderno com Gradiente Roxo
 * 
 * Página de Devolução e Reembolso
 */
export default function RefundPolicy() {
  return (
    <div className="space-y-8">
      <div className="mb-8">
        <h2 className="font-headline text-3xl font-bold mb-4 gradient-purple-pink-text">
          Devolução e Reembolso
        </h2>
        <p className="text-gray-300 font-body">
          Última atualização: {new Date().toLocaleDateString('pt-BR')}
        </p>
      </div>

      <div className="space-y-6">
        <section className="card-premium p-6">
          <h3 className="font-headline text-xl font-semibold mb-3 text-white">
            1. Política de Reembolso
          </h3>
          <p className="text-gray-300 font-body leading-relaxed">
            O Freelancer Premium oferece acesso a informações e recursos digitais por um período trimestral. Como o serviço é fornecido imediatamente após o pagamento, não oferecemos reembolsos após o acesso ao conteúdo.
          </p>
        </section>

        <section className="card-premium p-6">
          <h3 className="font-headline text-xl font-semibold mb-3 text-white">
            2. Exceções
          </h3>
          <p className="text-gray-300 font-body leading-relaxed mb-4">
            Reembolsos podem ser considerados nas seguintes situações:
          </p>
          <ul className="space-y-2 text-gray-300 font-body">
            <li className="flex gap-3">
              <span className="text-purple-400">•</span>
              <span>Erro técnico que impede o acesso ao serviço</span>
            </li>
            <li className="flex gap-3">
              <span className="text-purple-400">•</span>
              <span>Cobrança duplicada ou não autorizada</span>
            </li>
            <li className="flex gap-3">
              <span className="text-purple-400">•</span>
              <span>Falha no fornecimento do serviço dentro de 24 horas</span>
            </li>
          </ul>
        </section>

        <section className="card-premium p-6">
          <h3 className="font-headline text-xl font-semibold mb-3 text-white">
            3. Processo de Reembolso
          </h3>
          <p className="text-gray-300 font-body leading-relaxed mb-4">
            Para solicitar um reembolso:
          </p>
          <ol className="space-y-2 text-gray-300 font-body">
            <li className="flex gap-3">
              <span className="text-purple-400">1.</span>
              <span>Entre em contato conosco em agtramposof@gmail.com</span>
            </li>
            <li className="flex gap-3">
              <span className="text-purple-400">2.</span>
              <span>Descreva o motivo do reembolso com detalhes</span>
            </li>
            <li className="flex gap-3">
              <span className="text-purple-400">3.</span>
              <span>Aguarde análise dentro de 5 dias úteis</span>
            </li>
            <li className="flex gap-3">
              <span className="text-purple-400">4.</span>
              <span>Reembolso será processado em até 10 dias úteis</span>
            </li>
          </ol>
        </section>

        <section className="card-premium p-6">
          <h3 className="font-headline text-xl font-semibold mb-3 text-white">
            4. Período Trimestral
          </h3>
          <p className="text-gray-300 font-body leading-relaxed">
            Seu acesso ao Freelancer Premium é válido por um período trimestral (3 meses). Após este período, você pode renovar sua assinatura para manter o acesso aos recursos e atualizações.
          </p>
        </section>

        <section className="card-premium p-6">
          <h3 className="font-headline text-xl font-semibold mb-3 text-white">
            5. Valor Simbólico
          </h3>
          <p className="text-gray-300 font-body leading-relaxed">
            O valor cobrado é simbólico e destina-se a custear a integração com mais informações acessíveis aos usuários cadastrados. Não é abusivo e oferece excelente valor pelos recursos fornecidos.
          </p>
        </section>

        <section className="card-premium p-6">
          <h3 className="font-headline text-xl font-semibold mb-3 text-white">
            6. Contato
          </h3>
          <p className="text-gray-300 font-body leading-relaxed">
            Para dúvidas sobre reembolsos ou esta política, entre em contato conosco em:
            <br />
            <span className="text-purple-400 font-semibold">agtramposof@gmail.com</span>
          </p>
        </section>
      </div>
    </div>
  );
}
