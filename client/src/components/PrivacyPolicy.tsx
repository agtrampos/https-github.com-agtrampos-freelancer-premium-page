/**
 * PrivacyPolicy Component
 * Design: Minimalismo Moderno com Gradiente Roxo
 * 
 * Página de Política de Privacidade
 */
export default function PrivacyPolicy() {
  return (
    <div className="space-y-8">
      <div className="mb-8">
        <h2 className="font-headline text-3xl font-bold mb-4 gradient-purple-pink-text">
          Política de Privacidade
        </h2>
        <p className="text-gray-300 font-body">
          Última atualização: {new Date().toLocaleDateString('pt-BR')}
        </p>
      </div>

      <div className="space-y-6">
        <section className="card-premium p-6">
          <h3 className="font-headline text-xl font-semibold mb-3 text-white">
            1. Introdução
          </h3>
          <p className="text-gray-300 font-body leading-relaxed">
            A Agência Trampos Designer e Assessoria Inova Simples (I.S.) – ME ("nós", "nosso" ou "empresa") respeita a privacidade de nossos usuários ("usuário" ou "você"). Esta Política de Privacidade explica como coletamos, usamos, divulgamos e salvaguardamos suas informações.
          </p>
        </section>

        <section className="card-premium p-6">
          <h3 className="font-headline text-xl font-semibold mb-3 text-white">
            2. Informações que Coletamos
          </h3>
          <div className="space-y-4">
            <div>
              <p className="text-purple-300 font-semibold mb-2">Informações Pessoais:</p>
              <p className="text-gray-300 font-body leading-relaxed">
                Quando você se registra, coletamos seu email e outras informações que você fornece voluntariamente.
              </p>
            </div>
            <div>
              <p className="text-purple-300 font-semibold mb-2">Dados de Uso:</p>
              <p className="text-gray-300 font-body leading-relaxed">
                Coletamos informações sobre como você interage com nosso serviço, incluindo páginas visitadas e tempo gasto.
              </p>
            </div>
          </div>
        </section>

        <section className="card-premium p-6">
          <h3 className="font-headline text-xl font-semibold mb-3 text-white">
            3. Como Usamos Suas Informações
          </h3>
          <ul className="space-y-2 text-gray-300 font-body">
            <li className="flex gap-3">
              <span className="text-purple-400">•</span>
              <span>Fornecer e manter nossos serviços</span>
            </li>
            <li className="flex gap-3">
              <span className="text-purple-400">•</span>
              <span>Enviar atualizações e comunicações importantes</span>
            </li>
            <li className="flex gap-3">
              <span className="text-purple-400">•</span>
              <span>Melhorar nossos serviços e experiência do usuário</span>
            </li>
            <li className="flex gap-3">
              <span className="text-purple-400">•</span>
              <span>Cumprir obrigações legais</span>
            </li>
          </ul>
        </section>

        <section className="card-premium p-6">
          <h3 className="font-headline text-xl font-semibold mb-3 text-white">
            4. Segurança de Dados
          </h3>
          <p className="text-gray-300 font-body leading-relaxed">
            Implementamos medidas de segurança apropriadas para proteger suas informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição.
          </p>
        </section>

        <section className="card-premium p-6">
          <h3 className="font-headline text-xl font-semibold mb-3 text-white">
            5. Seus Direitos
          </h3>
          <p className="text-gray-300 font-body leading-relaxed">
            Você tem o direito de acessar, corrigir ou solicitar a exclusão de suas informações pessoais. Para exercer esses direitos, entre em contato conosco em agtramposof@gmail.com.
          </p>
        </section>

        <section className="card-premium p-6">
          <h3 className="font-headline text-xl font-semibold mb-3 text-white">
            6. Contato
          </h3>
          <p className="text-gray-300 font-body leading-relaxed">
            Se você tiver dúvidas sobre esta Política de Privacidade, entre em contato conosco em:
            <br />
            <span className="text-purple-400 font-semibold">agtramposof@gmail.com</span>
          </p>
        </section>
      </div>
    </div>
  );
}
