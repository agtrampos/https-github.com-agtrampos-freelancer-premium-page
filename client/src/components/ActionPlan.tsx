import { Calendar, Target, Zap } from 'lucide-react';

interface WeekPlan {
  week: string;
  title: string;
  icon: React.ReactNode;
  tasks: string[];
  color: string;
}

/**
 * ActionPlan Component
 * Design: Minimalismo Moderno com Gradiente Roxo
 * 
 * Exibe plano de ação para 30 dias
 * - Semana 1: Configuração
 * - Semana 2-3: Primeiros Clientes
 * - Semana 4: Otimização
 */
const weekPlans: WeekPlan[] = [
  {
    week: 'Semana 1',
    title: 'Configuração',
    icon: <Calendar className="w-6 h-6" />,
    tasks: [
      'Escolha 3-4 plataformas principais',
      'Crie perfis profissionais completos',
      'Tire foto profissional (ou use stock photo)',
      'Prepare descrição focada em resultados',
      'Organize portfólio com seus melhores trabalhos',
      'Configure preços iniciais competitivos',
    ],
    color: 'from-blue-600 to-cyan-600',
  },
  {
    week: 'Semana 2-3',
    title: 'Primeiros Clientes',
    icon: <Target className="w-6 h-6" />,
    tasks: [
      'Aplique para 10-15 vagas por dia',
      'Personalize cada proposta',
      'Responda rápido a mensagens de clientes',
      'Negocie termos e prazos',
      'Comece seus primeiros projetos',
      'Entregue com qualidade excepcional',
      'Peça avaliações e depoimentos',
    ],
    color: 'from-purple-600 to-pink-600',
  },
  {
    week: 'Semana 4',
    title: 'Otimização',
    icon: <Zap className="w-6 h-6" />,
    tasks: [
      'Analise quais plataformas trazem mais clientes',
      'Aumente preços em 10-20%',
      'Crie pacotes de serviços',
      'Prepare templates para acelerar propostas',
      'Mantenha contato com clientes satisfeitos',
      'Planeje próximas semanas com base em resultados',
      'Considere especializar em um nicho',
    ],
    color: 'from-orange-600 to-red-600',
  },
];

export default function ActionPlan() {
  return (
    <div className="mb-16">
      <div className="text-center mb-12">
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
          <span className="gradient-purple-pink-text">
            Seu Plano de Ação
          </span>
          <br />
          <span className="text-white">para os Próximos 30 Dias</span>
        </h2>
        <p className="text-gray-300 font-body text-lg">
          Siga este plano estruturado para começar a ganhar dinheiro como freelancer
        </p>
      </div>

      {/* Timeline */}
      <div className="space-y-8">
        {weekPlans.map((plan, index) => (
          <div
            key={plan.week}
            className="card-premium p-8 animate-fade-in-up"
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            {/* Header */}
            <div className="flex items-start gap-4 mb-6">
              <div className={`p-3 rounded-lg bg-gradient-to-br ${plan.color} text-white flex-shrink-0`}>
                {plan.icon}
              </div>
              <div>
                <p className="text-sm font-semibold text-purple-300 uppercase tracking-wide">
                  {plan.week}
                </p>
                <h3 className="font-headline text-2xl font-semibold text-white">
                  {plan.title}
                </h3>
              </div>
            </div>

            {/* Tasks Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {plan.tasks.map((task, taskIndex) => (
                <div key={taskIndex} className="flex items-start gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                  <div className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 bg-gradient-to-r ${plan.color}`}></div>
                  <span className="text-gray-300 font-body text-sm leading-relaxed">
                    {task}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Final CTA */}
      <div className="mt-12 card-premium p-8 text-center animate-fade-in-up" style={{ animationDelay: '0.45s' }}>
        <h3 className="font-headline text-2xl font-semibold mb-3">
          Pronto para começar?
        </h3>
        <p className="text-gray-300 font-body mb-6">
          Você tem tudo que precisa para começar. O sucesso depende de ação consistente e qualidade no trabalho.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#sites" className="btn-gradient px-8 py-3 rounded-lg font-semibold">
            Voltar aos Sites
          </a>
          <button className="px-8 py-3 rounded-lg font-semibold border border-purple-500/30 text-purple-300 hover:bg-purple-500/10 transition-colors">
            Compartilhar com Amigos
          </button>
        </div>
      </div>

      {/* Success Stories Teaser */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            name: 'João Silva',
            result: 'R$ 5.000/mês',
            time: 'em 2 meses',
            story: 'Começou com Upwork e agora tem clientes recorrentes',
          },
          {
            name: 'Maria Santos',
            result: 'R$ 8.000/mês',
            time: 'em 3 meses',
            story: 'Especializou em design e aumentou preços gradualmente',
          },
          {
            name: 'Carlos Oliveira',
            result: 'R$ 12.000/mês',
            time: 'em 4 meses',
            story: 'Criou nicho em desenvolvimento web e ganhou clientes premium',
          },
        ].map((story, idx) => (
          <div key={idx} className="card-premium p-6 text-center">
            <p className="text-2xl font-bold gradient-purple-pink-text mb-2">
              {story.result}
            </p>
            <p className="text-sm text-gray-400 font-body mb-3">
              {story.time}
            </p>
            <p className="text-gray-300 font-body text-sm">
              <span className="font-semibold text-white">{story.name}</span>
              <br />
              {story.story}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
