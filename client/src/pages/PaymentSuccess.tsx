import { useEffect, useState } from 'react';
import { useAuth } from '@/_core/hooks/useAuth';
import { useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  CheckCircle2,
  Mail,
  Clock,
  BookOpen,
  Zap,
  ArrowRight,
  Download,
} from 'lucide-react';
import { toast } from 'sonner';

/**
 * Payment Success Page - Página de Sucesso
 * Design: Minimalismo Moderno com Gradiente Roxo
 * 
 * Funcionalidades:
 * - Confirmação visual de pagamento
 * - Instruções de acesso
 * - Bônus exclusivo
 * - Próximos passos
 * - Contato de suporte
 */
export default function PaymentSuccess() {
  const { user, isAuthenticated } = useAuth();
  const [, setLocation] = useLocation();
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!isAuthenticated) {
      setLocation('/');
    }
  }, [isAuthenticated, setLocation]);

  const handleCopyEmail = () => {
    if (user?.email) {
      navigator.clipboard.writeText(user.email);
      setCopied(true);
      toast.success('Email copiado!');
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleDownloadChecklist = () => {
    // Simular download de checklist
    toast.success('Checklist de 30 dias enviado para seu email!');
  };

  const handleAccessDashboard = () => {
    setLocation('/dashboard');
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background text-foreground py-12 px-4">
      {/* Background decorative elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Success Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-lg opacity-75 animate-pulse"></div>
              <CheckCircle2 className="w-20 h-20 text-green-400 relative" />
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-4 gradient-purple-pink-text">
            Parabéns! 🎉
          </h1>
          <p className="text-2xl text-white font-semibold mb-2">
            Seu Acesso foi Ativado!
          </p>
          <p className="text-gray-400 text-lg">
            Bem-vindo ao Freelancer Premium. Você agora tem acesso a todos os recursos exclusivos.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Access Instructions */}
          <div className="md:col-span-2">
            <Card className="p-8 card-premium mb-8">
              <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
                <Zap className="w-6 h-6 text-yellow-400" />
                Como Acessar Agora
              </h2>

              <div className="space-y-6">
                {/* Step 1 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-purple-600 text-white font-bold">
                      1
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">
                      Você já está autenticado
                    </h3>
                    <p className="text-gray-400">
                      Sua conta foi criada e seu acesso foi ativado automaticamente. Você pode começar a explorar os recursos imediatamente.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-purple-600 text-white font-bold">
                      2
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">
                      Acesse seu Dashboard
                    </h3>
                    <p className="text-gray-400 mb-3">
                      Visualize seu status de assinatura, data de expiração e histórico de pagamentos.
                    </p>
                    <Button
                      onClick={handleAccessDashboard}
                      className="btn-gradient px-4 py-2 rounded-lg text-sm font-semibold"
                    >
                      Ir para Dashboard
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-purple-600 text-white font-bold">
                      3
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">
                      Comece com o Plano de 30 Dias
                    </h3>
                    <p className="text-gray-400 mb-3">
                      Siga nosso checklist estruturado para maximizar seus ganhos nos próximos 30 dias.
                    </p>
                    <Button
                      onClick={handleDownloadChecklist}
                      variant="outline"
                      className="px-4 py-2 rounded-lg text-sm font-semibold"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Baixar Checklist
                    </Button>
                  </div>
                </div>
              </div>
            </Card>

            {/* What's Included */}
            <Card className="p-8 card-premium">
              <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-purple-400" />
                O que você tem acesso agora
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  '16+ Plataformas de Freelancer',
                  'Estratégias de Precificação',
                  'Plano de Ação de 30 Dias',
                  'Depoimentos de Sucesso',
                  'FAQ Completo',
                  'Suporte por Email',
                  'Acesso por 3 Meses',
                  'Atualizações Futuras',
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-purple-500/10 rounded-lg border border-purple-500/20">
                    <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Sidebar - Confirmation & Bonus */}
          <div>
            {/* Confirmation Card */}
            <Card className="p-6 card-premium mb-8 sticky top-8">
              <h3 className="text-lg font-bold mb-4 text-white">
                Confirmação de Pagamento
              </h3>

              <div className="space-y-4 mb-6 pb-6 border-b border-border">
                <div>
                  <p className="text-sm text-gray-400 mb-1">Email</p>
                  <div className="flex items-center gap-2">
                    <p className="text-white font-semibold text-sm break-all">
                      {user?.email}
                    </p>
                    <button
                      onClick={handleCopyEmail}
                      className="text-purple-400 hover:text-purple-300 transition-colors"
                      title="Copiar email"
                    >
                      {copied ? '✓' : '📋'}
                    </button>
                  </div>
                </div>

                <div>
                  <p className="text-sm text-gray-400 mb-1">Plano</p>
                  <p className="text-white font-semibold">Freelancer Premium</p>
                </div>

                <div>
                  <p className="text-sm text-gray-400 mb-1">Período</p>
                  <p className="text-white font-semibold">3 Meses</p>
                </div>

                <div>
                  <p className="text-sm text-gray-400 mb-1">Status</p>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <p className="text-green-400 font-semibold">Ativo</p>
                  </div>
                </div>
              </div>

              <Button
                onClick={handleAccessDashboard}
                className="w-full btn-gradient py-3 rounded-lg font-semibold"
              >
                Acessar Dashboard
              </Button>
            </Card>

            {/* Exclusive Bonus */}
            <Card className="p-6 card-premium bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-500/30">
              <div className="text-center mb-4">
                <p className="text-2xl">🎁</p>
              </div>
              <h3 className="text-lg font-bold mb-3 text-white text-center">
                Bônus Exclusivo
              </h3>

              <div className="space-y-3 text-sm">
                <div className="p-3 bg-black/20 rounded-lg">
                  <p className="text-purple-300 font-semibold mb-1">
                    E-book: "Primeiros 30 Dias"
                  </p>
                  <p className="text-gray-400 text-xs">
                    Guia prático passo a passo
                  </p>
                </div>

                <div className="p-3 bg-black/20 rounded-lg">
                  <p className="text-purple-300 font-semibold mb-1">
                    Templates de Propostas
                  </p>
                  <p className="text-gray-400 text-xs">
                    Prontos para usar
                  </p>
                </div>

                <div className="p-3 bg-black/20 rounded-lg">
                  <p className="text-purple-300 font-semibold mb-1">
                    Planilha de Ganhos
                  </p>
                  <p className="text-gray-400 text-xs">
                    Rastreie seu progresso
                  </p>
                </div>
              </div>

              <p className="text-xs text-gray-500 text-center mt-4">
                Enviados para seu email
              </p>
            </Card>
          </div>
        </div>

        {/* Next Steps */}
        <Card className="p-8 card-premium mb-12">
          <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
            <Clock className="w-6 h-6 text-blue-400" />
            Próximos Passos Recomendados
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                week: 'Semana 1',
                title: 'Configuração',
                tasks: [
                  'Escolha 3-5 plataformas',
                  'Crie perfis profissionais',
                  'Adicione portfólio',
                ],
              },
              {
                week: 'Semana 2-3',
                title: 'Primeiros Clientes',
                tasks: [
                  'Aplique para 10-15 vagas/dia',
                  'Personalize propostas',
                  'Responda rápido',
                ],
              },
              {
                week: 'Semana 4',
                title: 'Otimização',
                tasks: [
                  'Analise resultados',
                  'Ajuste estratégia',
                  'Aumente preços',
                ],
              },
            ].map((step, index) => (
              <div key={index} className="p-6 bg-purple-500/10 rounded-lg border border-purple-500/20">
                <p className="text-purple-300 font-semibold text-sm mb-2">
                  {step.week}
                </p>
                <h3 className="text-lg font-bold text-white mb-4">
                  {step.title}
                </h3>
                <ul className="space-y-2">
                  {step.tasks.map((task, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                      <span className="text-purple-400 font-bold">•</span>
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Card>

        {/* Support Section */}
        <Card className="p-8 card-premium text-center">
          <Mail className="w-12 h-12 text-purple-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2 text-white">
            Precisa de Ajuda?
          </h2>
          <p className="text-gray-400 mb-6">
            Nosso time de suporte está disponível para responder suas dúvidas
          </p>
          <a
            href="mailto:agtramposof@gmail.com"
            className="inline-block btn-gradient px-8 py-3 rounded-lg font-semibold"
          >
            Enviar Email para Suporte
          </a>
        </Card>
      </div>
    </div>
  );
}
