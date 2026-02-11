import Testimonials from "@/components/Testimonials";

export default function Depoimentos() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="font-display text-4xl md:text-5xl font-bold">
            <span className="gradient-purple-pink-text">Depoimentos</span>
          </h1>
          <p className="text-gray-300 font-body mt-3">
            Resultados reais de freelancers que seguiram este método.
          </p>
        </div>
        <Testimonials />
      </div>
    </div>
  );
}
