import { Share2, MessageCircle, Linkedin, Twitter, Copy, Check } from 'lucide-react';
import { useState } from 'react';

interface ShareButtonsProps {
  title?: string;
  description?: string;
  url?: string;
  showLabel?: boolean;
  variant?: 'horizontal' | 'vertical';
}

/**
 * ShareButtons Component
 * Design: Minimalismo Moderno com Gradiente Roxo
 * 
 * Botões de compartilhamento social para WhatsApp, LinkedIn, Twitter e copiar link
 */
export default function ShareButtons({
  title = 'Freelancer Premium - Onde Ganhar Dinheiro em 2026',
  description = 'Descubra os melhores sites, estratégias e plano prático para começar como freelancer em 2026. Sem tentativa e erro.',
  url = typeof window !== 'undefined' ? window.location.href : 'https://freelancer-premium.com',
  showLabel = false,
  variant = 'horizontal',
}: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareLinks = [
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      onClick: () => {
        const text = `${title}\n\n${description}\n\n${url}`;
        const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(text)}`;
        window.open(whatsappUrl, '_blank');
      },
      color: 'hover:text-green-400 hover:border-green-500/50',
      bgHover: 'hover:bg-green-500/10',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      onClick: () => {
        const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
        window.open(linkedinUrl, '_blank');
      },
      color: 'hover:text-blue-400 hover:border-blue-500/50',
      bgHover: 'hover:bg-blue-500/10',
    },
    {
      name: 'Twitter',
      icon: Twitter,
      onClick: () => {
        const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`;
        window.open(twitterUrl, '_blank');
      },
      color: 'hover:text-sky-400 hover:border-sky-500/50',
      bgHover: 'hover:bg-sky-500/10',
    },
    {
      name: 'Copiar Link',
      icon: copied ? Check : Copy,
      onClick: handleCopyLink,
      color: copied ? 'text-green-400 border-green-500/50' : 'hover:text-purple-400 hover:border-purple-500/50',
      bgHover: copied ? 'bg-green-500/10' : 'hover:bg-purple-500/10',
    },
  ];

  const containerClass = variant === 'vertical' ? 'flex-col' : 'flex-row';
  const buttonSize = showLabel ? 'px-4 py-2' : 'p-2';
  const buttonClass = showLabel ? 'gap-2' : 'gap-0';

  return (
    <div className={`flex ${containerClass} gap-3`}>
      {shareLinks.map((share) => {
        const Icon = share.icon;
        return (
          <button
            key={share.name}
            onClick={share.onClick}
            title={share.name}
            className={`flex items-center justify-center ${buttonClass} ${buttonSize} rounded-lg border border-purple-500/30 text-gray-400 transition-all ${share.color} ${share.bgHover}`}
          >
            <Icon className="w-5 h-5" />
            {showLabel && <span className="text-sm font-semibold">{share.name}</span>}
          </button>
        );
      })}
    </div>
  );
}
