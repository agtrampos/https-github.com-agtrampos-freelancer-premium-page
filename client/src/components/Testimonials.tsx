import { Star, Quote } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  image: string;
  testimonial: string;
  earnings: string;
  time: string;
  rating: number;
  platform: string;
}

/**
 * Testimonials Component
 * Design: Minimalismo Moderno com Gradiente Roxo
 * 
 * Exibe depoimentos de freelancers bem-sucedidos
 * - Foto profissional
 * - Nome e especialidade
 * - Depoimento
 * - Ganhos e tempo
 * - Avaliação com estrelas
 * - Plataforma principal
 */
const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    name: 'João Silva',
    role: 'Desenvolvedor Web',
    image: 'https://private-us-east-1.manuscdn.com/sessionFile/faD0vI4TBw6c4gYc7CMSZa/sandbox/OPpTN5T54T0MaZgk2hyFlX-img-1_1770602419000_na1fn_dGVzdGltb25pYWwtZnJlZWxhbmNlci0x.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZmFEMHZJNFRCdzZjNGdZYzdDTVNaYS9zYW5kYm94L09QcFRONVQ1NFQwTWFaZ2syaHlGbFgtaW1nLTFfMTc3MDYwMjQxOTAwMF9uYTFmbl9kR1Z6ZEdsdGIyNXBZV3d0Wm5KbFpXeGhibU5sY2kweC5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=SOYrVfrN6mTOXvJpvxdcQThsKAjXfNt5Ho4UguQW~IYXgxesCHCN9KpYPLNrJMPyxSzzhYsFdtXGJi1vILITW7P99cGQIC06nAjpU95HH3gqzvkggh68CiFUiccPSikZ-eiQ5fqGVbl~XLSVcRCa2qX0G1QXgcgSSR4mGuofksv8zRPP6lfdDl4hS6fHnR~awa9025IpiU8WBU1D3H~iYM6ATzXiHXp5ahD-goapXFvucRBFYypGIWFU4gZODqhlxxaMbRMGh9dm8YmyhfCf4ilRfaqBA70vXpDuQVe~jxDJPgU3YHKoUi72~yN2vDHuLNyp8s2YU-gzczUe6no7rA__',
    testimonial: 'Comecei com Upwork e em 2 meses já estava ganhando R$ 5.000/mês. O segredo foi focar em qualidade e responder rápido. Agora tenho clientes recorrentes que me indicam para outros.',
    earnings: 'R$ 5.000/mês',
    time: '2 meses',
    rating: 5,
    platform: 'Upwork',
  },
  {
    id: 'testimonial-2',
    name: 'Maria Santos',
    role: 'Designer Gráfico',
    image: 'https://private-us-east-1.manuscdn.com/sessionFile/faD0vI4TBw6c4gYc7CMSZa/sandbox/OPpTN5T54T0MaZgk2hyFlX-img-2_1770602423000_na1fn_dGVzdGltb25pYWwtZnJlZWxhbmNlci0y.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZmFEMHZJNFRCdzZjNGdZYzdDTVNaYS9zYW5kYm94L09QcFRONVQ1NFQwTWFaZ2syaHlGbFgtaW1nLTJfMTc3MDYwMjQyMzAwMF9uYTFmbl9kR1Z6ZEdsdGIyNXBZV3d0Wm5KbFpXeGhibU5sY2kweS5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=f-Bt7n~0EsZr~Bx8cdCU2t8ecZgY5ptrAZQ-3xCBqPVP8rIhdbcP2xBtfUTRXdyDgFbmc7jIEZrrfgnBLkcXq803N1h8PqUUMQEngas0yq0hgWEgf5mdQZgC0eKmAuHkSzlfhsqouBlq1ZjD4m8~tgswrVeF9h410okGSNh4KImzLi~dg-FMB7VDH947lLet7ryOuNkn63NiBiWhZiZ97QB7uDQ~aPglZv~LazIQ212UOPxtu5YElKu00E7mSi4VPqpd4lskJEY7axsevIWUjPZr7yoo4zI8ScbLgYDPmGazGe0UycE1KBmXkTluhvIOMVj4XBXDqK0bAPhBJjxGIg__',
    testimonial: 'Especializei em design de marca e aumentei meus preços em 50% em 3 meses. Fiverr foi excelente para começar, mas agora trabalho principalmente com clientes diretos que me indicam.',
    earnings: 'R$ 8.000/mês',
    time: '3 meses',
    rating: 5,
    platform: 'Fiverr + Direto',
  },
  {
    id: 'testimonial-3',
    name: 'Carlos Oliveira',
    role: 'Desenvolvedor Full Stack',
    image: 'https://private-us-east-1.manuscdn.com/sessionFile/faD0vI4TBw6c4gYc7CMSZa/sandbox/OPpTN5T54T0MaZgk2hyFlX-img-3_1770602421000_na1fn_dGVzdGltb25pYWwtZnJlZWxhbmNlci0z.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZmFEMHZJNFRCdzZjNGdZYzdDTVNaYS9zYW5kYm94L09QcFRONVQ1NFQwTWFaZ2syaHlGbFgtaW1nLTNfMTc3MDYwMjQyMTAwMF9uYTFmbl9kR1Z6ZEdsdGIyNXBZV3d0Wm5KbFpXeGhibU5sY2kwei5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=ZqkJZLafwW9zrA7pdexjnhIc5LIomfs1ai82JtI-4vtE8z5gi37tBNLUSlZG3L-v2f8pxofUY~DUm6jdAkQE5OCIFwU4yi0DcVVS6tHhwRizt~5Ma3mwsAh8osNbXlAJqKmueHGHSMWK5~1AQ7vN53l744iPrUV3vOkYTu07fULkQrNFBqeZegSD~BmpQX2rG~201IJa7VssSixe8jT25CCQLefbLuNs8f16VQHbt1wXWCXaSybNvOk~nzqC5RZ7TuP78-zLpR814jcjRuZV82d5FJRqiaq-isXxqvui6CLH-1ESBwr~BO5QwqvHX6mU5SOTlrsUIxOAPJAaRuj-Rw__',
    testimonial: 'Criei um nicho em desenvolvimento de e-commerce e agora ganho R$ 12.000/mês. A chave foi criar templates reutilizáveis e automatizar processos. Toptal foi fundamental para encontrar clientes premium.',
    earnings: 'R$ 12.000/mês',
    time: '4 meses',
    rating: 5,
    platform: 'Toptal',
  },
  {
    id: 'testimonial-4',
    name: 'Ana Costa',
    role: 'Redatora e Copywriter',
    image: 'https://private-us-east-1.manuscdn.com/sessionFile/faD0vI4TBw6c4gYc7CMSZa/sandbox/OPpTN5T54T0MaZgk2hyFlX-img-4_1770602421000_na1fn_dGVzdGltb25pYWwtZnJlZWxhbmNlci00.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZmFEMHZJNFRCdzZjNGdZYzdDTVNaYS9zYW5kYm94L09QcFRONVQ1NFQwTWFaZ2syaHlGbFgtaW1nLTRfMTc3MDYwMjQyMTAwMF9uYTFmbl9kR1Z6ZEdsdGIyNXBZV3d0Wm5KbFpXeGhibU5sY2kwMC5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=iW6ui4gRYHCXElKsFCy1dqQU1YLgi5kgOpXaHhnH-t7Iy-XE9CUe9chLIw03qedd6XuxX8v3iNYiN~K2YkA4pflv7xco9lo-vQJAvIl6gD2gH3e-H6tRQFUdmrOvygu-Ce~5wt2InyYIrXaXXGim~e5H3z7r-BG8yx4awbJT~RlVQPH6frsQiv7ytB2rgwFz6lUgkXnASt6dtHvfGNiU4~SDsASAU6A6bG20aD-X~RwFER3ynk9MBw86cIh-VUGRiSPFKkPonpJ8ZsJNP3o~R~jwBoHdNPe3IAbxnUjTcUTtuhg90hGfsxfUDD4cIiqglAgTmbeT1h-ga-Lrgt8W~g__',
    testimonial: 'Comecei na 99Freelas e depois migrei para Workana. Agora ganho R$ 6.000/mês com copywriting e conteúdo. O importante é ter um portfólio sólido e ser consistente nas aplicações.',
    earnings: 'R$ 6.000/mês',
    time: '3 meses',
    rating: 5,
    platform: 'Workana',
  },
];

export default function Testimonials() {
  return (
    <div className="py-16 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-display text-5xl md:text-6xl font-bold mb-4">
            <span className="gradient-purple-pink-text">
              Histórias de Sucesso
            </span>
            <br />
            <span className="text-white">de Freelancers Reais</span>
          </h2>
          <p className="text-xl text-gray-300 font-body max-w-2xl mx-auto">
            Veja como freelancers como você estão ganhando dinheiro real em 2026 usando as estratégias certas.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="card-premium p-8 flex flex-col animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <div className="mb-6 flex-grow">
                <Quote className="w-6 h-6 text-purple-400 mb-3 opacity-50" />
                <p className="text-gray-300 font-body text-lg leading-relaxed italic">
                  "{testimonial.testimonial}"
                </p>
              </div>

              {/* Divider */}
              <div className="divider-gradient my-6"></div>

              {/* Author Info */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-purple-500/30"
                />
                <div className="flex-grow">
                  <h4 className="font-headline text-lg font-semibold text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-400 font-body mb-2">
                    {testimonial.role}
                  </p>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="badge-tag">{testimonial.platform}</span>
                  </div>
                </div>
              </div>

              {/* Results */}
              <div className="mt-6 pt-6 border-t border-border">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-gray-400 font-body uppercase tracking-wide mb-1">
                      Ganhos
                    </p>
                    <p className="text-purple-300 font-semibold text-lg">
                      {testimonial.earnings}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-body uppercase tracking-wide mb-1">
                      Tempo
                    </p>
                    <p className="text-purple-300 font-semibold text-lg">
                      {testimonial.time}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            {
              label: 'Freelancers Ativos',
              value: '1.2M+',
              description: 'usando nossas estratégias',
            },
            {
              label: 'Ganhos Médios',
              value: 'R$ 7.500/mês',
              description: 'após 3 meses',
            },
            {
              label: 'Taxa de Sucesso',
              value: '94%',
              description: 'ganham dinheiro real',
            },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="card-premium p-6 text-center animate-fade-in-up"
              style={{ animationDelay: `${0.3 + idx * 0.1}s` }}
            >
              <p className="text-4xl font-bold gradient-purple-pink-text mb-2">
                {stat.value}
              </p>
              <p className="font-headline text-lg font-semibold text-white mb-1">
                {stat.label}
              </p>
              <p className="text-sm text-gray-400 font-body">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="card-premium p-8 text-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <h3 className="font-headline text-2xl font-semibold mb-3">
            Pronto para começar sua história de sucesso?
          </h3>
          <p className="text-gray-300 font-body mb-6">
            Você tem acesso a todas as estratégias, sites e plano de ação. Comece hoje mesmo!
          </p>
          <button className="btn-gradient px-8 py-3 rounded-lg font-semibold">
            Voltar ao Plano de Ação
          </button>
        </div>
      </div>
    </div>
  );
}
