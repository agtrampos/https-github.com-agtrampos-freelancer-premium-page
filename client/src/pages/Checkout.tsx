import { useState } from 'react';
import { useAuth } from '@/_core/hooks/useAuth';
import { trpc } from '@/lib/trpc';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { AlertCircle, CheckCircle2, Loader2, ArrowLeft } from 'lucide-react';
import { useLocation } from 'wouter';
import { toast } from 'sonner';

/**
 * Checkout Page - Página de Pagamento
 * Design: Minimalismo Moderno com Gradiente Roxo
 * 
 * Funcionalidades:
 * - Exibição de plano e preço
 * - Integração com InfinitePay
 * - Feedback visual durante processamento
 * - Tratamento de erros
 */
export default function Checkout() {
  const { user, isAuthenticated } = useAuth();
  const [, setLocation] = useLocation();
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Configuração do plano
  const PLAN_CONFIG = {
    name: 'Freelancer Premium',
    description: 'Acesso completo a todos os recursos por 3 meses',
    price: 29.90,
    currency: 'BRL',
    features: [
      'Acesso a 16+ plataformas de freelancer',
      'Estratégias personalizadas de precificação',
      'Plano de ação de 30 dias',
      'Depoimentos de freelancers bem-sucedidos',
      'FAQ com respostas detalhadas',
      'Suporte por email',
      'Acesso por 3 meses (trimestral)',
    ],
  };

  // Mutation para criar checkout
  const createCheckoutMutation = trpc.payment.createCheckout.useMutation({
    onSuccess: (data) => {
      // Armazenar ID de pagamento na sessão
      sessionStorage.setItem('paymentId', data.paymentId?.toString() || '');
      
      // Redirecionar para InfinitePay com URL de retorno
      const returnUrl = `${window.location.origin}/payment-success`;
      const checkoutUrlWithReturn = data.checkoutUrl.includes('?')
        ? `${data.checkoutUrl}&returnUrl=${encodeURIComponent(returnUrl)}`
        : `${data.checkoutUrl}?returnUrl=${encodeURIComponent(returnUrl)}`;
      
      window.location.href = checkoutUrlWithReturn;
    },
    onError: (error) => {
      setIsProcessing(false);
      const errorMessage = error.message || 'Erro ao processar pagamento';
      setError(errorMessage);
      toast.error(errorMessage);
    },
  });

  const handleCheckout = async () => {
    // Validações
    if (!isAuthenticated || !user) {
      setError('Você precisa estar autenticado para continuar');
      toast.error('Por favor, faça login para continuar');
      return;
    }

    setIsProcessing(true);
    setError(null);

    try {
      await createCheckoutMutation.mutateAsync({
        planType: 'premium',
        amount: PLAN_CONFIG.price,
      });
    } catch (err) {
      console.error('Checkout error:', err);
      // Erro já tratado no onError
    }
  };

  const handleGoBack = () => {
    setLocation('/');
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center px-4">
        <Card className="w-full max-w-md p-8 text-center">
          <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">Autenticação Necessária</h2>
          <p className="text-gray-400 mb-6">
            Você precisa estar autenticado para acessar o checkout.
          </p>
          <Button
            onClick={handleGoBack}
            className="w-full btn-gradient"
          >
            Voltar para Home
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={handleGoBack}
            className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar
          </button>
          <h1 className="text-4xl font-bold gradient-purple-pink-text mb-2">
            Checkout
          </h1>
          <p className="text-gray-400">
            Complete seu pagamento para acessar o Freelancer Premium
          </p>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="mb-8 p-4 bg-red-500/10 border border-red-500/30 rounded-lg flex gap-3">
            <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-red-400 mb-1">Erro no Pagamento</h3>
              <p className="text-red-300 text-sm">{error}</p>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Plan Details */}
          <div className="md:col-span-2">
            <Card className="p-8 card-premium">
              <h2 className="text-2xl font-bold mb-4 text-white">
                {PLAN_CONFIG.name}
              </h2>
              <p className="text-gray-400 mb-6">
                {PLAN_CONFIG.description}
              </p>

              {/* Features */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4 text-white">
                  O que está incluído:
                </h3>
                <ul className="space-y-3">
                  {PLAN_CONFIG.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* User Info */}
              <div className="p-4 bg-purple-500/10 rounded-lg border border-purple-500/20">
                <p className="text-sm text-gray-400 mb-1">Email para pagamento:</p>
                <p className="text-white font-semibold">{user?.email}</p>
              </div>
            </Card>
          </div>

          {/* Checkout Summary */}
          <div>
            <Card className="p-6 card-premium sticky top-8">
              <h3 className="text-lg font-semibold mb-6 text-white">
                Resumo do Pedido
              </h3>

              {/* Price Breakdown */}
              <div className="space-y-4 mb-6 pb-6 border-b border-border">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Plano Premium</span>
                  <span className="text-white font-semibold">
                    R$ {PLAN_CONFIG.price.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Período</span>
                  <span className="text-white font-semibold">3 meses</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Taxa</span>
                  <span className="text-white font-semibold">Sem taxa</span>
                </div>
              </div>

              {/* Total */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-400">Total</span>
                  <div className="text-right">
                    <div className="text-2xl font-bold gradient-purple-pink-text">
                      R$ {PLAN_CONFIG.price.toFixed(2)}
                    </div>
                    <p className="text-xs text-gray-500">por 3 meses</p>
                  </div>
                </div>
              </div>

              {/* Checkout Button */}
              <Button
                onClick={handleCheckout}
                disabled={isProcessing}
                className="w-full btn-gradient py-3 rounded-lg font-semibold flex items-center justify-center gap-2"
              >
                {isProcessing ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Processando...
                  </>
                ) : (
                  <>
                    Ir para Pagamento
                  </>
                )}
              </Button>

              {/* Security Info */}
              <div className="mt-6 p-4 bg-green-500/10 rounded-lg border border-green-500/20">
                <p className="text-xs text-green-400 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  Pagamento seguro via InfinitePay
                </p>
              </div>

              {/* Terms */}
              <p className="text-xs text-gray-500 text-center mt-4">
                Ao clicar em "Ir para Pagamento", você concorda com nossos{' '}
                <a href="#" className="text-purple-400 hover:text-purple-300">
                  Termos de Uso
                </a>
                {' '}e{' '}
                <a href="#" className="text-purple-400 hover:text-purple-300">
                  Política de Privacidade
                </a>
              </p>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-12 card-premium p-8 rounded-lg">
          <h3 className="text-xl font-bold mb-6 text-white">
            Dúvidas Frequentes
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-purple-300 mb-2">
                Qual é a política de reembolso?
              </h4>
              <p className="text-gray-400 text-sm">
                Oferecemos reembolso em caso de erro técnico ou falha no fornecimento do serviço dentro de 24 horas.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-purple-300 mb-2">
                Posso cancelar a assinatura?
              </h4>
              <p className="text-gray-400 text-sm">
                Sim, você pode cancelar a qualquer momento. O acesso permanece ativo até o fim do período pago.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-purple-300 mb-2">
                Como faço para renovar?
              </h4>
              <p className="text-gray-400 text-sm">
                Você receberá um email 7 dias antes do vencimento com instruções para renovação.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-purple-300 mb-2">
                Qual é o método de pagamento?
              </h4>
              <p className="text-gray-400 text-sm">
                Aceitamos cartão de crédito, débito e PIX através da InfinitePay.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
