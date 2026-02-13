import FreelancerSites from "@/components/FreelancerSites";
import { useAuth } from "@/_core/hooks/useAuth";

export default function Recursos() {
  const { isAuthenticated } = useAuth();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="font-display text-4xl md:text-5xl font-bold">
            <span className="gradient-purple-pink-text">Recursos</span>
          </h1>
          <p className="text-gray-300 font-body mt-3">
            Plataformas e ferramentas para acelerar seus ganhos como freelancer.
          </p>
        </div>
        {isAuthenticated ? (
          <FreelancerSites />
        ) : (
          <div className="text-center space-y-4">
            <p className="text-gray-300 font-body">
              O conteúdo detalhado de plataformas e links diretos está disponível apenas para membros.
            </p>
            <a href="/checkout" className="btn-gradient px-6 py-2 rounded-lg font-semibold">
              Acessar conteúdo premium
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
