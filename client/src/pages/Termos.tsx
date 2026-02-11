import TermsOfUse from "@/components/TermsOfUse";

export default function Termos() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="font-display text-4xl md:text-5xl font-bold">
            <span className="gradient-purple-pink-text">Termos de Uso</span>
          </h1>
          <p className="text-gray-300 font-body mt-3">
            Condições de uso da plataforma e responsabilidades.
          </p>
        </div>
        <TermsOfUse />
      </div>
    </div>
  );
}
