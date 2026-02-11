import { Mail, MapPin, Heart } from 'lucide-react';

/**
 * Footer Component
 * Design: Minimalismo Moderno com Gradiente Roxo
 * 
 * Footer com links úteis, informações e redes sociais
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Recursos',
      links: [
        { label: 'Plano de Ação', href: '/plano-de-acao' },
        { label: 'Estratégias', href: '/estrategias' },
        { label: 'Depoimentos', href: '/depoimentos' },
        { label: 'FAQ', href: '/faq' },
      ],
    },
    {
      title: 'Informações',
      links: [
        { label: 'Política de Privacidade', href: '/privacidade' },
        { label: 'Termos de Uso', href: '/termos' },
        { label: 'Devolução e Reembolso', href: '/reembolso' },
        { label: 'Contato', href: '/contato' },
      ],
    },
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: 'in',
      href: 'https://linkedin.com',
      color: 'hover:text-blue-400',
    },
    {
      name: 'Instagram',
      icon: 'ig',
      href: 'https://instagram.com',
      color: 'hover:text-pink-400',
    },
    {
      name: 'WhatsApp',
      icon: 'wa',
      href: 'https://wa.me',
      color: 'hover:text-green-400',
    },
  ];

  return (
    <footer className="bg-card border-t border-border">
      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-4">
              <h3 className="font-display text-2xl font-bold gradient-purple-pink-text">
                Freelancer
              </h3>
              <p className="text-sm text-gray-400 font-body mt-1">
                Premium 2026
              </p>
            </div>
            <p className="text-gray-400 font-body text-sm leading-relaxed">
              Seu guia completo para ganhar dinheiro como freelancer em 2026.
            </p>
          </div>

          {/* Links Columns */}
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h4 className="font-headline text-sm font-semibold text-white uppercase tracking-wide mb-4">
                {column.title}
              </h4>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-gray-400 font-body text-sm hover:text-purple-400 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="divider-gradient my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left: Contact Info */}
          <div className="flex flex-col md:flex-row gap-6 text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <Mail className="w-4 h-4 text-purple-400" />
              <a
                href="mailto:agtramposof@gmail.com"
                className="text-gray-400 font-body text-sm hover:text-purple-400 transition-colors"
              >
                agtramposof@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <MapPin className="w-4 h-4 text-purple-400" />
              <span className="text-gray-400 font-body text-sm">
                Brasil
              </span>
            </div>
          </div>

          {/* Right: Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                title={social.name}
                className={`w-10 h-10 rounded-full border border-purple-500/30 flex items-center justify-center text-gray-400 transition-all hover:border-purple-500/50 ${social.color}`}
              >
                <span className="text-xs font-bold">{social.icon.toUpperCase()}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-background/50 border-t border-border">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <p className="text-gray-500 font-body text-sm">
              © {currentYear} Freelancer Premium. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-2 text-gray-500 font-body text-sm">
              Feito com
              <Heart className="w-4 h-4 text-pink-500 fill-pink-500" />
              para freelancers
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
