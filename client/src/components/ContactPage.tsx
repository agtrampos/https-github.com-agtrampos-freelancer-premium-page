import { Mail, MessageSquare, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

/**
 * ContactPage Component
 * Design: Minimalismo Moderno com Gradiente Roxo
 * 
 * Página de Contato com informações básicas
 */
export default function ContactPage() {
  return (
    <div className="space-y-8">
      <div className="mb-8">
        <h2 className="font-headline text-3xl font-bold mb-4 gradient-purple-pink-text">
          Contato e Suporte
        </h2>
        <p className="text-gray-300 font-body">
          Estamos aqui para ajudar! Entre em contato conosco com suas dúvidas ou sugestões.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Email Support */}
        <div className="card-premium p-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center flex-shrink-0">
              <Mail className="w-6 h-6 text-purple-400" />
            </div>
            <div className="flex-1">
              <h3 className="font-headline text-lg font-semibold text-white mb-2">
                Email de Suporte
              </h3>
              <p className="text-gray-300 font-body text-sm mb-4">
                Envie suas dúvidas, sugestões ou relatos de problemas técnicos.
              </p>
              <a
                href="mailto:agtramposof@gmail.com"
                className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-semibold transition-colors"
              >
                agtramposof@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Response Time */}
        <div className="card-premium p-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-pink-500/20 flex items-center justify-center flex-shrink-0">
              <Clock className="w-6 h-6 text-pink-400" />
            </div>
            <div className="flex-1">
              <h3 className="font-headline text-lg font-semibold text-white mb-2">
                Tempo de Resposta
              </h3>
              <p className="text-gray-300 font-body text-sm mb-4">
                Respondemos todas as mensagens em até 24 horas úteis.
              </p>
              <p className="text-purple-300 font-semibold text-sm">
                Horário: Segunda a Sexta, 9h-18h
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="card-premium p-8">
        <h3 className="font-headline text-2xl font-semibold text-white mb-6">
          Envie uma Mensagem
        </h3>
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-white mb-2">
              Nome
            </label>
            <input
              type="text"
              placeholder="Seu nome completo"
              className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-white mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="seu@email.com"
              className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-white mb-2">
              Assunto
            </label>
            <input
              type="text"
              placeholder="Qual é o assunto?"
              className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-white mb-2">
              Mensagem
            </label>
            <textarea
              placeholder="Descreva sua dúvida ou sugestão..."
              rows={6}
              className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all resize-none"
            />
          </div>

          <Button className="w-full btn-gradient py-3 rounded-lg font-semibold">
            Enviar Mensagem
          </Button>
        </form>
      </div>

      {/* FAQ Section */}
      <div className="card-premium p-6">
        <h3 className="font-headline text-xl font-semibold text-white mb-4">
          Perguntas Frequentes
        </h3>
        <div className="space-y-4">
          <div>
            <p className="text-purple-300 font-semibold mb-2">
              Como faço para renovar minha assinatura?
            </p>
            <p className="text-gray-300 font-body text-sm">
              Você receberá um email 7 dias antes do vencimento de sua assinatura com instruções para renovação.
            </p>
          </div>
          <div className="border-t border-border pt-4">
            <p className="text-purple-300 font-semibold mb-2">
              Posso compartilhar minha conta com outras pessoas?
            </p>
            <p className="text-gray-300 font-body text-sm">
              Não. Sua conta é pessoal e intransferível. Compartilhar viola nossos Termos de Uso.
            </p>
          </div>
          <div className="border-t border-border pt-4">
            <p className="text-purple-300 font-semibold mb-2">
              O conteúdo é atualizado regularmente?
            </p>
            <p className="text-gray-300 font-body text-sm">
              Sim! Adicionamos novos sites, estratégias e recursos regularmente para manter o conteúdo atualizado.
            </p>
          </div>
        </div>
      </div>

      {/* Company Info */}
      <div className="card-premium p-6 border-l-4 border-purple-500">
        <h3 className="font-headline text-lg font-semibold text-white mb-3">
          Informações da Empresa
        </h3>
        <div className="space-y-2 text-gray-300 font-body text-sm">
          <p>
            <span className="text-purple-300 font-semibold">Razão Social:</span> Agência Trampos Designer e Assessoria Inova Simples (I.S.) – ME
          </p>
          <p>
            <span className="text-purple-300 font-semibold">CNPJ:</span> 57.514.866/0001-38
          </p>
        </div>
      </div>
    </div>
  );
}
