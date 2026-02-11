import Strategies from "@/components/Strategies";

export default function Estrategias() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="font-display text-4xl md:text-5xl font-bold">
            <span className="gradient-purple-pink-text">Estratégias</span>
          </h1>
          <p className="text-gray-300 font-body mt-3">
            Táticas comprovadas para perfil, precificação, aquisição e escala.
          </p>
        </div>
        <Strategies />
      </div>
    </div>
  );
}
