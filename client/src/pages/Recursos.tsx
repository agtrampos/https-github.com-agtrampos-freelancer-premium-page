import FreelancerSites from "@/components/FreelancerSites";
import LinksBlock from "@/components/LinksBlock";
import { freelancerSitesData } from "@/components/FreelancerSites";

export default function Recursos() {
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
        <FreelancerSites />
        <div className="mt-12">
          <LinksBlock excludeUrls={freelancerSitesData.map(s => s.url)} />
        </div>
      </div>
    </div>
  );
}
