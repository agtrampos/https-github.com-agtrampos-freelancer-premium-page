import { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Globe, Zap, CheckCircle2, TrendingUp } from 'lucide-react';
import FreelancerSites from './FreelancerSites';
import Strategies from './Strategies';
import ActionPlan from './ActionPlan';
import Testimonials from './Testimonials';
import FAQ from './FAQ';

interface UnlockedAreaProps {
  email: string;
}

/**
 * UnlockedArea Component
 * Design: Minimalismo Moderno com Gradiente Roxo
 * 
 * Seção 2: Área de conteúdo premium liberado
 * - Título de parabéns com animação
 * - Abas: Sites de Freelancer e Estratégias
 * - Plano de ação para 30 dias
 */
export default function UnlockedArea({ email }: UnlockedAreaProps) {
  const [activeTab, setActiveTab] = useState('sites');
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    // Animar confete por 3 segundos
    const timer = setTimeout(() => setShowConfetti(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground py-12 px-4">
      {/* Confetti Animation */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-purple-500 rounded-full animate-confetti"
              style={{
                left: `${Math.random() * 100}%`,
                top: '-10px',
                animationDelay: `${Math.random() * 0.5}s`,
                opacity: Math.random() * 0.7 + 0.3,
              }}
            />
          ))}
        </div>
      )}

      {/* Header */}
      <div className="max-w-6xl mx-auto mb-16 animate-fade-in-up">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-500/20 rounded-full mb-4 animate-unlock">
            <Zap className="w-8 h-8 text-purple-400" />
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-4">
            <span className="gradient-purple-pink-text">Parabéns!</span>
            <br />
            <span className="text-white">Acesso Liberado 🎉</span>
          </h1>
          <p className="text-xl text-gray-300 font-body mb-2">
            Bem-vindo ao Plano Freelancer Premium
          </p>
          <p className="text-sm text-gray-400 font-body">
            Confirmação enviada para: <span className="text-purple-400 font-semibold">{email}</span>
          </p>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="max-w-6xl mx-auto mb-16 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-card border border-border mb-8">
            <TabsTrigger 
              value="sites"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-pink-600 data-[state=active]:text-white"
            >
              <Globe className="w-4 h-4 mr-2" />
              Sites de Freelancer
            </TabsTrigger>
            <TabsTrigger 
              value="strategies"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-pink-600 data-[state=active]:text-white"
            >
              <TrendingUp className="w-4 h-4 mr-2" />
              Estratégias
            </TabsTrigger>
          </TabsList>

          <TabsContent value="sites" className="animate-fade-in">
            <FreelancerSites />
          </TabsContent>

          <TabsContent value="strategies" className="animate-fade-in">
            <Strategies />
          </TabsContent>
        </Tabs>
      </div>

      {/* Action Plan */}
      <div className="max-w-6xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
        <ActionPlan />
      </div>

      {/* Testimonials Section */}
      <div className="animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
        <Testimonials />
      </div>

      {/* FAQ Section */}
      <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
        <FAQ />
      </div>
    </div>
  );
}
