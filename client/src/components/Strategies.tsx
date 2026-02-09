import { CheckCircle2, Circle } from 'lucide-react';

interface StrategyBlock {
  title: string;
  items: string[];
}

/**
 * Strategies Component
 * Design: Minimalismo Moderno com Gradiente Roxo
 * 
 * Exibe blocos com checklists de estratégias
 * - Construa um Perfil Irresistível
 * - Estratégia de Precificação
 * - Conquiste Clientes
 * - Escale Seus Ganhos
 */
const strategies: StrategyBlock[] = [
  {
    title: 'Construa um Perfil Irresistível',
    items: [
      'Foto profissional de alta qualidade',
      'Título claro e focado em resultados',
      'Descrição que destaca seus diferenciais',
      'Portfólio com 3-5 trabalhos melhores',
      'Depoimentos e avaliações de clientes',
    ],
  },
  {
    title: 'Estratégia de Precificação',
    items: [
      'Comece competitivo para ganhar avaliações',
      'Aumente 10–20% após primeiras avaliações',
      'Crie pacotes (básico, padrão, premium)',
      'Gere urgência com ofertas limitadas',
      'Precifique por valor, não por hora',
    ],
  },
  {
    title: 'Conquiste Clientes',
    items: [
      'Aplicar para 10–15 vagas/dia consistentemente',
      'Personalizar cada proposta para o cliente',
      'Ofereça garantia de satisfação ou revisão',
      'Responda rápido (em menos de 1 hora)',
      'Acompanhe o cliente até o final',
    ],
  },
  {
    title: 'Escale Seus Ganhos',
    items: [
      'Focar em nichos específicos e lucrativos',
      'Automatizar tarefas repetitivas',
      'Criar templates e processos',
      'Aumentar preços gradualmente',
      'Construir relacionamento com clientes recorrentes',
    ],
  },
];

export default function Strategies() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {strategies.map((strategy, index) => (
          <div
            key={strategy.title}
            className="card-premium p-8"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Title */}
            <h3 className="font-headline text-2xl font-semibold mb-6 gradient-purple-pink-text">
              {strategy.title}
            </h3>

            {/* Checklist Items */}
            <div className="space-y-4">
              {strategy.items.map((item, itemIndex) => (
                <div key={itemIndex} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 font-body leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Additional Tips */}
      <div className="mt-12 space-y-6">
        <div className="card-premium p-8">
          <h4 className="font-headline text-xl font-semibold mb-4 text-purple-300">
            💡 Dicas Extras para Sucesso
          </h4>
          <div className="space-y-3 text-gray-300 font-body">
            <p>
              <span className="text-purple-400 font-semibold">Consistência:</span> A chave do sucesso é aplicar para vagas todos os dias. Mesmo que tenha poucos clientes no início, continue aplicando.
            </p>
            <p>
              <span className="text-purple-400 font-semibold">Qualidade:</span> Seus primeiros trabalhos definem sua reputação. Faça o melhor possível, mesmo que cobre menos.
            </p>
            <p>
              <span className="text-purple-400 font-semibold">Comunicação:</span> Responda rápido, seja profissional e mantenha o cliente informado sobre o progresso.
            </p>
            <p>
              <span className="text-purple-400 font-semibold">Networking:</span> Construa relacionamento com clientes. Muitos voltam para novos projetos ou indicam amigos.
            </p>
          </div>
        </div>

        <div className="card-premium p-8">
          <h4 className="font-headline text-xl font-semibold mb-4 text-purple-300">
            🚀 Próximos Passos Imediatos
          </h4>
          <div className="space-y-3">
            {[
              'Escolha 3-4 plataformas para começar',
              'Crie perfis profissionais em cada uma',
              'Prepare seu portfólio e descrição',
              'Comece a aplicar para vagas hoje',
              'Acompanhe suas aplicações e respostas',
            ].map((step, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-purple-500/20 border border-purple-500/30 flex-shrink-0 text-xs font-semibold text-purple-300">
                  {idx + 1}
                </div>
                <span className="text-gray-300 font-body pt-0.5">
                  {step}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
