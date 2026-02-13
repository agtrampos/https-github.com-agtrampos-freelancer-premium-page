import { useEffect, useState } from 'react';
import { Mail, CheckCircle2, Lock, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ShareButtons from './ShareButtons';
import { useLocation } from 'wouter';
import { useAuth } from '@/_core/hooks/useAuth';
import { trpc } from '@/lib/trpc';
import { getLoginUrl } from '@/const';

interface LandingProps {
  onUnlock?: (email: string) => void;
}

const DIRECT_PLAN_URL = "https://checkout.infinitepay.io/tramposshop/MW8BMTYtR";

/**
 * Landing Component
 * Design: Minimalismo Moderno com Gradiente Roxo
 * 
 * Seção 1: Captura de lead com headline forte
 * - Headline principal centralizada
 * - Subheadline descritiva
 * - Campo de email com validação em tempo real
 * - Botão CTA com gradiente roxo-rosa
 * - Elementos de prova social
 * - Bloco de destaque sobre conteúdo premium
 * - Mensagem de erro elegante para email inválido
 */
export default function Landing({ onUnlock }: LandingProps) {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [touched, setTouched] = useState(false);
  const [ctaLabel, setCtaLabel] = useState('Ver oportunidades agora');
  const { isAuthenticated } = useAuth();

  // Regex para validação de email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const isEmailValid = emailRegex.test(email);
  const showError = touched && email && !isEmailValid;

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    setError('');
  };

  const handleEmailBlur = () => {
    setTouched(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched(true);
    setError('');

    // Validação de email vazio
    if (!email.trim()) {
      setError('Por favor, digite seu email');
      return;
    }

    // Validação de formato de email
    if (!isEmailValid) {
      setError('Por favor, digite um email válido (ex: seu@email.com)');
      return;
    }

    setIsLoading(true);
    (async () => {
      try {
        const v = await fetch('/api/validate-access', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email }),
        });
        const vData = await v.json();
        if (v.ok && vData?.success) {
          window.location.href = '/flm/acesso';
          return;
        }
        const c = await fetch('/api/checkout', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email }),
        });
        const cData = await c.json();
        console.log('Resposta checkout:', cData);
        if (!c.ok || !cData?.checkout_url) {
          setError(cData?.message || 'Não foi possível gerar o checkout. Tente novamente.');
          return;
        }
        window.location.href = cData.checkout_url;
      } catch {
        setError('Falha de rede. Tente novamente.');
      } finally {
        setIsLoading(false);
      }
    })();
  };

  const handlePrimaryAction = () => {
    setTouched(true);
    setError('');
    if (!email.trim()) {
      setError('Por favor, digite seu email');
      return;
    }
    if (!isEmailValid) {
      setError('Por favor, digite um email válido (ex: seu@email.com)');
      return;
    }
    try {
      const g = (window as any).gtag;
      if (typeof g === 'function') {
        g('event', 'cta_click', { variant: ctaLabel, page_path: window.location.pathname });
      }
    } catch {}
    setIsLoading(true);
    (async () => {
      try {
        const v = await fetch('/api/validate-access', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email }),
        });
        const vData = await v.json();
        if (v.ok && vData?.success) {
          localStorage.setItem('fp_email', email);
          if (isAuthenticated) {
            window.location.assign('/flm/acesso');
          } else {
            window.location.assign(getLoginUrl());
          }
          return;
        }
        localStorage.setItem('fp_email', email);
        window.location.assign(DIRECT_PLAN_URL);
      } catch {
        setError('Falha de rede. Tente novamente.');
      } finally {
        setIsLoading(false);
      }
    })();
  };
  useEffect(() => {
    const saved = localStorage.getItem('fp_email');
    if (saved) setEmail(saved);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const labels = [
      'Acesse agora – Guia Freelancer 2026',
      'Comece hoje – Lista com sites + Estratégia',
      'Ganhe acesso imediato (vagas limitadas)',
      'Quero trabalhar remoto em 2026',
    ];
    const params = new URLSearchParams(window.location.search);
    const override = params.get('cta');
    let idx = -1;
    if (override) {
      const map: Record<string, number> = { a: 0, b: 1, c: 2, d: 3 };
      const key = override.toLowerCase();
      if (key in map) idx = map[key];
    }
    if (idx < 0) {
      const stored = localStorage.getItem('fp_cta_variant_idx');
      if (stored && !Number.isNaN(Number(stored))) {
        idx = Number(stored);
      } else {
        idx = Math.floor(Math.random() * labels.length);
        localStorage.setItem('fp_cta_variant_idx', String(idx));
      }
    }
    setCtaLabel(labels[idx] || labels[0]);
  }, []);

  useEffect(() => {
    if (email) localStorage.setItem('fp_email', email);
  }, [email]);
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
              Melhores Sites de Trabalho Remoto e Freelance
            </span>
            <br />
            <span className="text-white">
              em 2026
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-300 font-body mb-12 leading-relaxed">
            Sites, estratégia e caminho prático para começar.
            <br />
            <span className="font-semibold">Sem tentativa e erro.</span>
          </p>
        </div>

        {/* SEO Structure Sections */}
        <div className="space-y-8 mb-12 animate-fade-in-up" style={{ animationDelay: '0.08s' }}>
          <h2 className="font-headline text-2xl md:text-3xl font-bold text-white">
            Trabalho Remoto x Freelancer — qual a diferença
          </h2>
          <p className="text-gray-300 font-body">
            Entenda modelos, formas de contratação e quando escolher cada caminho.
          </p>

          <h2 className="font-headline text-2xl md:text-3xl font-bold text-white">
            Lista dos 50 melhores sites (com links)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="card-premium p-4">
              <h3 className="font-headline text-lg font-semibold text-white">Categoria: Freelance</h3>
              <p className="text-gray-300 font-body text-sm">Upwork, Fiverr, 99Freelas, Workana, Freelancer.com</p>
            </div>
            <div className="card-premium p-4">
              <h3 className="font-headline text-lg font-semibold text-white">Categoria: Vagas Remotas</h3>
              <p className="text-gray-300 font-body text-sm">RemoteOK, WeWorkRemotely, FlexJobs, SimplyHired</p>
            </div>
            <div className="card-premium p-4">
              <h3 className="font-headline text-lg font-semibold text-white">Categoria: Escrita e Conteúdo</h3>
              <p className="text-gray-300 font-body text-sm">ProBlogger, Contently, Textbroker, WriterAccess</p>
            </div>
          </div>
          <div className="flex justify-center">
            <a href="/recursos" className="btn-gradient px-6 py-2 rounded-lg font-semibold">Ver lista completa</a>
          </div>

          <h2 className="font-headline text-2xl md:text-3xl font-bold text-white">
            Como escolher site de freelance
          </h2>
          <p className="text-gray-300 font-body">Critérios: nicho, taxas, competição, demanda e reputação.</p>

          <h2 className="font-headline text-2xl md:text-3xl font-bold text-white">
            Estratégias para conseguir os primeiros jobs
          </h2>
          <p className="text-gray-300 font-body">Propostas personalizadas, preços iniciais competitivos e respostas rápidas.</p>
          <div>
            <a href="/estrategias" className="px-6 py-2 rounded-lg font-semibold border border-purple-500/30 text-purple-300 hover:bg-purple-500/10 transition-colors">Ver estratégias</a>
          </div>

          <h2 className="font-headline text-2xl md:text-3xl font-bold text-white">
            FAQ (SEO + intenção do usuário)
          </h2>
          <p className="text-gray-300 font-body">Principais dúvidas sobre ganhos, tempo e plataformas.</p>
          <div>
            <a href="/faq" className="px-6 py-2 rounded-lg font-semibold border border-purple-500/30 text-purple-300 hover:bg-purple-500/10 transition-colors">Ir para FAQ</a>
          </div>
        </div>

        {/* Email Capture Form */}
        <form onSubmit={(e) => { e.preventDefault(); handlePrimaryAction(); }} className="mb-12 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <div className="flex flex-col sm:flex-row gap-3 mb-4">
            <div className="flex-1 relative">
              <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                onBlur={handleEmailBlur}
                placeholder="Digite seu e-mail para começar"
                className={`w-full pl-12 pr-4 py-3 bg-card border rounded-lg text-foreground placeholder-gray-500 focus:outline-none focus:ring-2 transition-all ${
                  showError
                    ? 'border-red-500/50 focus:ring-red-500/50'
                    : 'border-border focus:ring-purple-500'
                }`}
                disabled={isLoading}
              />
              {showError && (
                <AlertCircle className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-red-400" />
              )}
            </div>
            <Button
              type="button"
              onClick={handlePrimaryAction}
              disabled={isLoading || (touched && !isEmailValid && email.length > 0)}
              className="btn-gradient px-8 py-3 rounded-lg font-semibold whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Processando...' : ctaLabel}
            </Button>
          </div>

          {/* Error Message - Elegante com ícone */}
          {error && (
            <div className="flex items-center gap-2 px-4 py-3 bg-red-500/10 border border-red-500/30 rounded-lg animate-fade-in">
              <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
              <p className="text-red-400 text-sm font-body">
                {error}
              </p>
            </div>
          )}

          {/* Real-time validation message */}
          {showError && !error && (
            <div className="flex items-center gap-2 px-4 py-3 bg-red-500/10 border border-red-500/30 rounded-lg animate-fade-in">
              <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
              <p className="text-red-400 text-sm font-body">
                Por favor, digite um email válido (ex: seu@email.com)
              </p>
            </div>
          )}

          {/* Success message when valid */}
          {touched && isEmailValid && email.length > 0 && !error && (
            <div className="flex items-center gap-2 px-4 py-3 bg-green-500/10 border border-green-500/30 rounded-lg animate-fade-in">
              <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
              <p className="text-green-400 text-sm font-body">
                Email válido! Clique em "{ctaLabel}" para continuar.
              </p>
            </div>
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

        {/* Share Section */}
        <div className="text-center mt-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <p className="text-gray-400 font-body text-sm mb-4">
            Gostou? Compartilhe com seus amigos!
          </p>
          <ShareButtons showLabel={true} variant="horizontal" />
        </div>
      </div>
    </div>
  );
}
