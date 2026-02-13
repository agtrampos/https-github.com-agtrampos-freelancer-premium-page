import { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Globe, Zap, TrendingUp, BookOpen, Info, Mail } from 'lucide-react';
import FreelancerSites from './FreelancerSites';
import Strategies from './Strategies';
import ActionPlan from './ActionPlan';
import Testimonials from './Testimonials';
import FAQ from './FAQ';
import PrivacyPolicy from './PrivacyPolicy';
import TermsOfUse from './TermsOfUse';
import RefundPolicy from './RefundPolicy';
import ContactPage from './ContactPage';
import ShareButtons from './ShareButtons';

interface UnlockedAreaProps {
  email: string;
}

/**
 * UnlockedArea Component
 * Design: Minimalismo Moderno com Gradiente Roxo
 * 
 * Seção 2: Área de conteúdo premium liberado
 * - Título de parabéns com animação
 * - Abas principais: Recursos e Informações
 * - Recursos: Sites, Estratégias, Plano de Ação, Depoimentos, FAQ
 * - Informações: Política de Privacidade, Termos de Uso, Devolução e Reembolso, Contato
 */
export default function UnlockedArea({ email }: UnlockedAreaProps) {
  const [activeMainTab, setActiveMainTab] = useState('recursos');
  const [activeResourceTab, setActiveResourceTab] = useState('sites');
  const [activeInfoTab, setActiveInfoTab] = useState('privacy');
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    // Animar confete por 3 segundos
    const timer = setTimeout(() => setShowConfetti(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const applyHashNavigation = () => {
      if (typeof window === 'undefined') return;
      const hash = window.location.hash.replace('#', '');
      if (!hash) return;
      if (['sites', 'estrategias', 'plano', 'depoimentos', 'faq'].includes(hash)) {
        setActiveMainTab('recursos');
        setActiveResourceTab(hash);
      } else if (['informacoes', 'privacy', 'terms', 'refund', 'contact'].includes(hash)) {
        setActiveMainTab('informacoes');
        // opcional: mapear subtabs de informações
        if (['privacy', 'terms', 'refund', 'contact'].includes(hash)) {
          setActiveInfoTab(hash);
        }
      }
    };
    applyHashNavigation();
    const handler = () => applyHashNavigation();
    window.addEventListener('hashchange', handler);
    return () => window.removeEventListener('hashchange', handler);
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

      {/* Main Tabs Section */}
      <div className="max-w-6xl mx-auto mb-16 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
        <Tabs value={activeMainTab} onValueChange={setActiveMainTab} className="w-full">
          {/* Main Tab List */}
          <TabsList className="grid w-full grid-cols-2 bg-card border border-border mb-8">
            <TabsTrigger 
              value="recursos"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-pink-600 data-[state=active]:text-white"
            >
              <BookOpen className="w-4 h-4 mr-2" />
              Recursos
            </TabsTrigger>
            <TabsTrigger 
              value="informacoes"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-pink-600 data-[state=active]:text-white"
            >
              <Info className="w-4 h-4 mr-2" />
              Informações
            </TabsTrigger>
          </TabsList>

          {/* RECURSOS TAB */}
          <TabsContent value="recursos" className="animate-fade-in">
            <Tabs value={activeResourceTab} onValueChange={setActiveResourceTab} className="w-full">
              <TabsList className="grid w-full grid-cols-5 bg-card border border-border mb-8 overflow-x-auto">
                <TabsTrigger 
                  value="sites"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-pink-600 data-[state=active]:text-white text-xs md:text-sm"
                >
                  <Globe className="w-4 h-4 mr-1 md:mr-2" />
                  <span className="hidden md:inline">Sites</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="estrategias"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-pink-600 data-[state=active]:text-white text-xs md:text-sm"
                >
                  <TrendingUp className="w-4 h-4 mr-1 md:mr-2" />
                  <span className="hidden md:inline">Estratégias</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="plano"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-pink-600 data-[state=active]:text-white text-xs md:text-sm"
                >
                  <span className="hidden md:inline">Plano</span>
                  <span className="md:hidden">📋</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="depoimentos"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-pink-600 data-[state=active]:text-white text-xs md:text-sm"
                >
                  <span className="hidden md:inline">Depoimentos</span>
                  <span className="md:hidden">⭐</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="faq"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-pink-600 data-[state=active]:text-white text-xs md:text-sm"
                >
                  <span className="hidden md:inline">FAQ</span>
                  <span className="md:hidden">❓</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="sites" className="animate-fade-in">
                <FreelancerSites />
              </TabsContent>

              <TabsContent value="estrategias" className="animate-fade-in">
                <Strategies />
              </TabsContent>

              <TabsContent value="plano" className="animate-fade-in">
                <ActionPlan />
              </TabsContent>

              <TabsContent value="depoimentos" className="animate-fade-in">
                <Testimonials />
              </TabsContent>

              <TabsContent value="faq" className="animate-fade-in">
                <FAQ />
              </TabsContent>
            </Tabs>
          </TabsContent>

          {/* INFORMAÇÕES TAB */}
          <TabsContent value="informacoes" className="animate-fade-in">
            <Tabs value={activeInfoTab} onValueChange={setActiveInfoTab} className="w-full">
              <TabsList className="grid w-full grid-cols-4 bg-card border border-border mb-8 overflow-x-auto">
                <TabsTrigger 
                  value="privacy"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-pink-600 data-[state=active]:text-white text-xs md:text-sm"
                >
                  <span className="hidden md:inline">Privacidade</span>
                  <span className="md:hidden">🔒</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="terms"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-pink-600 data-[state=active]:text-white text-xs md:text-sm"
                >
                  <span className="hidden md:inline">Termos</span>
                  <span className="md:hidden">📄</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="refund"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-pink-600 data-[state=active]:text-white text-xs md:text-sm"
                >
                  <span className="hidden md:inline">Reembolso</span>
                  <span className="md:hidden">💰</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="contact"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-pink-600 data-[state=active]:text-white text-xs md:text-sm"
                >
                  <Mail className="w-4 h-4 mr-1 md:mr-2" />
                  <span className="hidden md:inline">Contato</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="privacy" className="animate-fade-in">
                <PrivacyPolicy />
              </TabsContent>

              <TabsContent value="terms" className="animate-fade-in">
                <TermsOfUse />
              </TabsContent>

              <TabsContent value="refund" className="animate-fade-in">
                <RefundPolicy />
              </TabsContent>

              <TabsContent value="contact" className="animate-fade-in">
                <ContactPage />
              </TabsContent>
            </Tabs>
          </TabsContent>
        </Tabs>
      </div>

      {/* Share Section */}
      <div id="share" className="max-w-6xl mx-auto px-4 py-16 text-center animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
        <h3 className="font-headline text-2xl font-semibold mb-4 text-white">
          Compartilhe este conteudo com seus amigos!
        </h3>
        <p className="text-gray-400 font-body mb-6">
          Ajude outros freelancers a descobrir as melhores oportunidades em 2026.
        </p>
        <div className="flex justify-center">
          <ShareButtons showLabel={true} variant="horizontal" />
        </div>
      </div>
    </div>
  );
}
