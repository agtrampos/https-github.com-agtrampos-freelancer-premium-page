import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

/**
 * FAQ Component
 * Design: Minimalismo Moderno com Gradiente Roxo
 * 
 * Seção de perguntas frequentes com respostas expandíveis
 * - Perguntas sobre ganhos, tempo e plataformas
 * - Respostas detalhadas e práticas
 * - Categorias: Ganhos, Tempo, Plataformas, Estratégia
 */
const faqItems: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'Ganhos',
    question: 'Quanto posso ganhar como freelancer em 2026?',
    answer: 'Os ganhos variam bastante dependendo da sua especialidade, experiência e dedicação. Iniciantes geralmente ganham R$ 500-2.000/mês nos primeiros 2 meses. Com experiência e bom portfólio, é possível chegar a R$ 5.000-15.000/mês. Profissionais especializados em nichos premium podem ganhar R$ 20.000+/mês. A chave é começar, ganhar avaliações positivas e aumentar gradualmente seus preços.',
  },
  {
    id: 'faq-2',
    category: 'Tempo',
    question: 'Quanto tempo leva para começar a ganhar dinheiro?',
    answer: 'Você pode receber seu primeiro pagamento em 1-2 semanas se conseguir um cliente rápido. No entanto, para ganhos consistentes e significativos (R$ 3.000+/mês), geralmente leva 2-4 meses de trabalho consistente. O tempo depende de: (1) Qualidade do seu perfil, (2) Consistência nas aplicações (10-15/dia), (3) Qualidade do trabalho entregue, (4) Velocidade em responder clientes. Quanto mais rápido você agir, mais rápido ganham resultados.',
  },
  {
    id: 'faq-3',
    category: 'Plataformas',
    question: 'Qual plataforma é melhor para começar?',
    answer: 'Recomendamos começar com 3-4 plataformas simultaneamente: (1) Upwork - melhor para iniciantes, muitos projetos disponíveis, (2) Fiverr - ótimo para criar pacotes de serviços, (3) 99Freelas ou Workana - plataformas brasileiras com menos competição, (4) LinkedIn ProFinder - excelente para encontrar clientes premium. Não escolha apenas uma - diversificar aumenta suas chances de sucesso. Comece com as que combinam mais com sua especialidade.',
  },
  {
    id: 'faq-4',
    category: 'Estratégia',
    question: 'Como faço para conseguir meu primeiro cliente?',
    answer: 'Siga este plano: (1) Crie um perfil profissional completo com foto, descrição clara e portfólio (mesmo que pequeno), (2) Aplique para 10-15 vagas por dia, (3) Personalize cada proposta para o cliente específico, (4) Seja competitivo nos preços iniciais, (5) Responda rápido (menos de 1 hora), (6) Ofereça garantia de satisfação. Estatisticamente, com 100 aplicações bem feitas, você consegue pelo menos 3-5 clientes. A persistência é a chave!',
  },
  {
    id: 'faq-5',
    category: 'Estratégia',
    question: 'Como aumentar meus preços sem perder clientes?',
    answer: 'Aumente gradualmente seus preços: (1) Após primeiras 5-10 avaliações positivas, aumente 10-15%, (2) Crie pacotes (básico, padrão, premium) para diferentes tipos de clientes, (3) Ofereça serviços adicionais premium, (4) Aumente 10-20% a cada 3-4 meses conforme ganha experiência, (5) Mantenha clientes satisfeitos - eles aceitam aumentos se o trabalho é excelente. Lembre-se: é melhor ter 5 clientes pagando bem do que 20 pagando pouco.',
  },
  {
    id: 'faq-6',
    category: 'Ganhos',
    question: 'Preciso de experiência anterior para começar?',
    answer: 'Não é obrigatório ter experiência profissional anterior, mas ajuda ter algum portfólio. Se é iniciante: (1) Crie projetos pessoais para seu portfólio, (2) Faça trabalhos grátis ou com desconto para ganhar primeiras avaliações, (3) Comece com projetos simples e pequenos, (4) Aprenda com cada cliente, (5) Gradualmente aumente a complexidade e preço dos projetos. Muitos freelancers bem-sucedidos começaram do zero. O que importa é qualidade, dedicação e aprendizado contínuo.',
  },
  {
    id: 'faq-7',
    category: 'Plataformas',
    question: 'Devo pagar para usar as plataformas?',
    answer: 'Não! As principais plataformas (Upwork, Fiverr, 99Freelas, Workana) são gratuitas para se registrar e criar perfil. Elas ganham dinheiro cobrando uma comissão dos seus ganhos (geralmente 10-20%). Algumas plataformas premium como Toptal têm processo de seleção mais rigoroso, mas também são gratuitas. Cuidado com plataformas que cobram taxa de inscrição - geralmente são golpes. Invista seu dinheiro em melhorar suas habilidades, não em plataformas.',
  },
  {
    id: 'faq-8',
    category: 'Estratégia',
    question: 'Como criar um nicho lucrativo?',
    answer: 'Escolher um nicho aumenta seus ganhos em 50-100%. Siga este processo: (1) Identifique suas habilidades e paixões, (2) Pesquise demanda no mercado (Upwork, Google Trends), (3) Escolha um nicho com boa demanda e menos competição, (4) Especialize seu portfólio nesse nicho, (5) Aumente seus preços como especialista, (6) Crie conteúdo e templates para esse nicho. Exemplos de nichos lucrativos: e-commerce, SaaS, startups, agências digitais, pequenos negócios em crescimento.',
  },
  {
    id: 'faq-9',
    category: 'Tempo',
    question: 'Quanto tempo por dia preciso dedicar?',
    answer: 'Depende do seu objetivo: (1) Para começar: 2-3 horas/dia (aplicações, comunicação, trabalho), (2) Para ganhar R$ 5.000/mês: 4-6 horas/dia, (3) Para escalar: 6-8 horas/dia. Dica importante: não precisa ser 8 horas contínuas. Você pode: aplicar para vagas de manhã (30 min), trabalhar em projetos durante o dia, responder clientes à noite. Muitos freelancers começam part-time enquanto trabalham em outro lugar, depois fazem a transição para full-time.',
  },
  {
    id: 'faq-10',
    category: 'Ganhos',
    question: 'É possível viver apenas de freelancer?',
    answer: 'Sim! Muitos freelancers vivem confortavelmente apenas disso. No Brasil, R$ 5.000/mês já é um bom salário. Para viver bem de freelancer: (1) Comece com objetivo de R$ 3.000/mês (3-6 meses), (2) Depois aumente para R$ 5.000/mês (6-12 meses), (3) Finalmente R$ 8.000+/mês (12+ meses). Dica: mantenha uma reserva de 3-6 meses de despesas, pois renda pode variar. Muitos freelancers ganham mais que profissionais empregados, especialmente em nichos premium.',
  },
  {
    id: 'faq-11',
    category: 'Estratégia',
    question: 'Como lidar com clientes difíceis?',
    answer: 'Clientes difíceis são parte do negócio. Dicas: (1) Comunique-se claramente desde o início sobre escopo e prazos, (2) Envie atualizações regulares do progresso, (3) Estabeleça limite de revisões (ex: 2 revisões incluídas), (4) Documente tudo por escrito, (5) Se necessário, ofereça reembolso parcial e encerre o projeto, (6) Deixe feedback honesto. Lembre-se: é melhor perder um cliente difícil do que gastar semanas em frustração. Qualidade de vida importa!',
  },
  {
    id: 'faq-12',
    category: 'Plataformas',
    question: 'Posso trabalhar em múltiplas plataformas ao mesmo tempo?',
    answer: 'Sim, e é recomendado! Trabalhar em múltiplas plataformas: (1) Diversifica suas fontes de renda, (2) Aumenta chances de conseguir clientes, (3) Reduz dependência de uma única plataforma, (4) Permite testar qual funciona melhor para você. Comece com 3-4 plataformas, depois expanda. Dica: use ferramentas para gerenciar aplicações (planilha, Notion) para não perder prazos. Muitos freelancers bem-sucedidos ganham 40% em Upwork, 30% em Fiverr, 30% em outras plataformas.',
  },
];

const categories = ['Ganhos', 'Tempo', 'Plataformas', 'Estratégia'];

export default function FAQ() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredFAQ = selectedCategory
    ? faqItems.filter((item) => item.category === selectedCategory)
    : faqItems;

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="py-16 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-500/20 rounded-full mb-4">
            <HelpCircle className="w-6 h-6 text-purple-400" />
          </div>
          <h2 className="font-display text-5xl md:text-6xl font-bold mb-4">
            <span className="gradient-purple-pink-text">Perguntas</span>
            <br />
            <span className="text-white">Frequentes</span>
          </h2>
          <p className="text-xl text-gray-300 font-body max-w-2xl mx-auto">
            Respostas para as dúvidas mais comuns sobre como ter sucesso como freelancer em 2026.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 justify-center mb-12 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-6 py-2 rounded-full font-semibold transition-all ${
              selectedCategory === null
                ? 'btn-gradient'
                : 'border border-purple-500/30 text-purple-300 hover:border-purple-500/50'
            }`}
          >
            Todas
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                selectedCategory === category
                  ? 'btn-gradient'
                  : 'border border-purple-500/30 text-purple-300 hover:border-purple-500/50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          {filteredFAQ.map((item, index) => (
            <div
              key={item.id}
              className="card-premium overflow-hidden"
              style={{ animationDelay: `${0.2 + index * 0.05}s` }}
            >
              <button
                onClick={() => toggleExpand(item.id)}
                className="w-full px-6 py-5 flex items-center justify-between hover:bg-white/5 transition-colors text-left"
              >
                <div className="flex-1">
                  <p className="text-xs text-purple-400 font-semibold uppercase tracking-wide mb-2">
                    {item.category}
                  </p>
                  <h3 className="font-headline text-lg font-semibold text-white">
                    {item.question}
                  </h3>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-purple-400 flex-shrink-0 ml-4 transition-transform ${
                    expandedId === item.id ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Expanded Answer */}
              {expandedId === item.id && (
                <div className="px-6 pb-5 pt-0 border-t border-border animate-fade-in">
                  <p className="text-gray-300 font-body leading-relaxed whitespace-pre-wrap">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Still Have Questions */}
        <div className="mt-16 card-premium p-8 text-center animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <h3 className="font-headline text-2xl font-semibold mb-3">
            Ainda tem dúvidas?
          </h3>
          <p className="text-gray-300 font-body mb-6">
            Se sua pergunta não foi respondida aqui, você pode encontrar mais informações no plano de ação e nas estratégias de sucesso.
          </p>
          <a href="#plano" className="btn-gradient px-8 py-3 rounded-lg font-semibold">
            Voltar ao Plano de Ação
          </a>
        </div>
      </div>
    </div>
  );
}
