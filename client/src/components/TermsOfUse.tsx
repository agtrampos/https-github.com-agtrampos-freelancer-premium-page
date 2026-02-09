/**
 * TermsOfUse Component
 * Design: Minimalismo Moderno com Gradiente Roxo
 * 
 * Página de Termos de Uso
 */
export default function TermsOfUse() {
  return (
    <div className="space-y-8">
      <div className="mb-8">
        <h2 className="font-headline text-3xl font-bold mb-4 gradient-purple-pink-text">
          Termos de Uso
        </h2>
        <p className="text-gray-300 font-body">
          Última atualização: {new Date().toLocaleDateString('pt-BR')}
        </p>
      </div>

      <div className="space-y-6">
        <section className="card-premium p-6">
          <h3 className="font-headline text-xl font-semibold mb-3 text-white">
            1. Aceitação dos Termos
          </h3>
          <p className="text-gray-300 font-body leading-relaxed">
            Ao acessar e usar este serviço, você aceita estar vinculado por estes Termos de Uso. Se você não concordar com qualquer parte destes termos, não poderá usar nosso serviço.
          </p>
        </section>

        <section className="card-premium p-6">
          <h3 className="font-headline text-xl font-semibold mb-3 text-white">
            2. Descrição do Serviço
          </h3>
          <p className="text-gray-300 font-body leading-relaxed">
            O Freelancer Premium fornece acesso a informações, estratégias e recursos sobre como ganhar dinheiro como freelancer em 2026. O serviço é fornecido por um período trimestral com acesso contínuo às páginas de recursos.
          </p>
        </section>

        <section className="card-premium p-6">
          <h3 className="font-headline text-xl font-semibold mb-3 text-white">
            3. Licença de Uso
          </h3>
          <p className="text-gray-300 font-body leading-relaxed">
            Você recebe uma licença limitada, não exclusiva e não transferível para acessar e usar nosso serviço para fins pessoais. Você não pode reproduzir, distribuir ou transmitir o conteúdo sem nossa permissão prévia.
          </p>
        </section>

        <section className="card-premium p-6">
          <h3 className="font-headline text-xl font-semibold mb-3 text-white">
            4. Responsabilidades do Usuário
          </h3>
          <ul className="space-y-2 text-gray-300 font-body">
            <li className="flex gap-3">
              <span className="text-purple-400">•</span>
              <span>Manter a confidencialidade de suas credenciais de acesso</span>
            </li>
            <li className="flex gap-3">
              <span className="text-purple-400">•</span>
              <span>Não usar o serviço para atividades ilegais ou prejudiciais</span>
            </li>
            <li className="flex gap-3">
              <span className="text-purple-400">•</span>
              <span>Respeitar os direitos de propriedade intelectual</span>
            </li>
            <li className="flex gap-3">
              <span className="text-purple-400">•</span>
              <span>Não compartilhar sua conta com terceiros</span>
            </li>
          </ul>
        </section>

        <section className="card-premium p-6">
          <h3 className="font-headline text-xl font-semibold mb-3 text-white">
            5. Isenção de Responsabilidade
          </h3>
          <p className="text-gray-300 font-body leading-relaxed">
            O serviço é fornecido "como está" sem garantias de qualquer tipo. Não garantimos que o serviço atenderá às suas expectativas ou que os resultados serão alcançados.
          </p>
        </section>

        <section className="card-premium p-6">
          <h3 className="font-headline text-xl font-semibold mb-3 text-white">
            6. Limitação de Responsabilidade
          </h3>
          <p className="text-gray-300 font-body leading-relaxed">
            Em nenhum caso seremos responsáveis por danos indiretos, incidentais, especiais ou consequentes decorrentes do uso ou incapacidade de usar nosso serviço.
          </p>
        </section>

        <section className="card-premium p-6">
          <h3 className="font-headline text-xl font-semibold mb-3 text-white">
            7. Modificações dos Termos
          </h3>
          <p className="text-gray-300 font-body leading-relaxed">
            Reservamos o direito de modificar estes Termos de Uso a qualquer momento. As alterações entrarão em vigor imediatamente após a publicação.
          </p>
        </section>

        <section className="card-premium p-6">
          <h3 className="font-headline text-xl font-semibold mb-3 text-white">
            8. Contato
          </h3>
          <p className="text-gray-300 font-body leading-relaxed">
            Para dúvidas sobre estes Termos de Uso, entre em contato conosco em:
            <br />
            <span className="text-purple-400 font-semibold">agtramposof@gmail.com</span>
          </p>
        </section>
      </div>
    </div>
  );
}
