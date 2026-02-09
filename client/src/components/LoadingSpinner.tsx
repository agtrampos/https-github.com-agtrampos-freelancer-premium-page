/**
 * LoadingSpinner Component
 * Design: Minimalismo Moderno com Gradiente Roxo
 * 
 * Spinner de carregamento com animação suave
 * Exibido durante a transição entre Landing e Área Liberada
 */
export default function LoadingSpinner() {
  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50">
      {/* Spinner Container */}
      <div className="flex flex-col items-center gap-6">
        {/* Main Spinner */}
        <div className="relative w-20 h-20">
          {/* Outer Ring */}
          <div className="absolute inset-0 rounded-full border-4 border-purple-500/20"></div>

          {/* Animated Ring */}
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-purple-500 border-r-pink-500 animate-spin"></div>

          {/* Inner Dot */}
          <div className="absolute inset-2 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 opacity-20"></div>

          {/* Center Icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 animate-pulse"></div>
          </div>
        </div>

        {/* Loading Text */}
        <div className="text-center">
          <h3 className="font-headline text-lg font-semibold text-white mb-2">
            Processando seu acesso...
          </h3>
          <p className="text-gray-400 font-body text-sm">
            Carregando conteúdo premium
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-48 h-1 bg-purple-500/20 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-loading-progress"></div>
        </div>
      </div>
    </div>
  );
}
