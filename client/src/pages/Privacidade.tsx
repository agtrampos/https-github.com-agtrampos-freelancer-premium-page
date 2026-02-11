import PrivacyPolicy from "@/components/PrivacyPolicy";

export default function Privacidade() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="font-display text-4xl md:text-5xl font-bold">
            <span className="gradient-purple-pink-text">Política de Privacidade</span>
          </h1>
          <p className="text-gray-300 font-body mt-3">
            Transparência no tratamento de dados pessoais e informações.
          </p>
        </div>
        <PrivacyPolicy />
      </div>
    </div>
  );
}
