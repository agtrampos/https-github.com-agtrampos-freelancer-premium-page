import { useState } from 'react';
import { Mail, CheckCircle2, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface LandingProps {
  onUnlock: (email: string) => void;
}

/**
 * Landing Component
 * Design: Minimalismo Moderno com Gradiente Roxo
 * 
 * Seção 1: Captura de lead com headline forte
 * - Headline principal centralizada
 * - Subheadline descritiva
 * - Campo de email
 * - Botão CTA com gradiente roxo-rosa
 * - Elementos de prova social
 * - Bloco de destaque sobre conteúdo premium
 */
export default function Landing({ onUnlock }: LandingProps) {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Validação básica de email
    if (!email || !email.includes('@')) {
      setError('Por favor, digite um email válido');
      return;
    }

    setIsLoading(true);
    // Simular delay de processamento
    setTimeout(() => {
      setIsLoading(false);
      onUnlock(email);
    }, 500);
  };

  return (
    <div className="min-h-screen gradient-dark-purple flex flex-col justify-center items-center px-4 py-12">
      {/* Background decorative elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-2xl w-full">
        {/* Main Content */}
        <div className="text-center mb-12 animate-fade-in-up">
          {/* Headline */}
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="gradient-purple-pink-text">
              Descubra onde ganhar dinheiro
            </span>
            <br />
            <span className="text-white">
              como freelancer em 2026
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-300 font-body mb-12 leading-relaxed">
            Sites, estratégia e caminho prático para começar.
            <br />
            <span className="font-semibold">Sem tentativa e erro.</span>
          </p>
        </div>

        {/* Email Capture Form */}
        <form onSubmit={handleSubmit} className="mb-12 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <div className="flex flex-col sm:flex-row gap-3 mb-4">
            <div className="flex-1 relative">
              <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Digite seu e-mail para começar"
                className="w-full pl-12 pr-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                disabled={isLoading}
              />
            </div>
            <Button
              type="submit"
              disabled={isLoading}
              className="btn-gradient px-8 py-3 rounded-lg font-semibold whitespace-nowrap"
            >
              {isLoading ? 'Processando...' : 'Ver oportunidades agora'}
            </Button>
          </div>

          {/* Error Message */}
          {error && (
            <p className="text-red-400 text-sm font-body animate-fade-in">
              {error}
            </p>
          )}
        </form>

        {/* Social Proof */}
        <div className="grid grid-cols-3 gap-4 mb-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="text-center">
            <div className="flex justify-center mb-2">
              <CheckCircle2 className="w-6 h-6 text-purple-400" />
            </div>
            <p className="text-sm text-gray-300 font-body">Acesso imediato</p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-2">
              <CheckCircle2 className="w-6 h-6 text-purple-400" />
            </div>
            <p className="text-sm text-gray-300 font-body">Pagamento único</p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-2">
              <CheckCircle2 className="w-6 h-6 text-purple-400" />
            </div>
            <p className="text-sm text-gray-300 font-body">Vagas limitadas</p>
          </div>
        </div>

        {/* Premium Content Notice */}
        <div className="card-premium p-6 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <div className="flex items-start gap-4">
            <Lock className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
            <div>
              <p className="font-headline text-lg mb-2">
                <span className="gradient-purple-pink-text">CONTEÚDO PREMIUM</span>
              </p>
              <p className="text-gray-300 font-body text-sm leading-relaxed">
                A lista de sites secretos e a estratégia personalizada são liberadas apenas após o acesso.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
