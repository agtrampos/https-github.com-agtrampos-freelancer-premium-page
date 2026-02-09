import { useState } from 'react';
import { useAuth } from '@/_core/hooks/useAuth';
import { getLoginUrl } from '@/const';
import Landing from '@/components/Landing';
import UnlockedArea from '@/components/UnlockedArea';
import LoadingSpinner from '@/components/LoadingSpinner';

/**
 * Home Page - Freelancer Premium
 * Design: Minimalismo Moderno com Gradiente Roxo
 * 
 * Componentes principais:
 * - Landing: Página inicial com captura de email
 * - LoadingSpinner: Animação de carregamento
 * - UnlockedArea: Área de conteúdo premium (sites e estratégias)
 * - Autenticação integrada com Manus OAuth
 */
export default function Home() {
  const { user, isAuthenticated } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [userEmail, setUserEmail] = useState('');

  const handleUnlock = (email: string) => {
    setUserEmail(email);
    setIsLoading(true);
    
    // Simular delay de carregamento (2-3 segundos)
    setTimeout(() => {
      setIsLoading(false);
      // Redirecionar para login se não autenticado
      if (!isAuthenticated) {
        window.location.href = getLoginUrl();
      }
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {isLoading && <LoadingSpinner />}
      
      {isAuthenticated && user ? (
        <UnlockedArea email={user.email || userEmail} />
      ) : (
        <Landing onUnlock={handleUnlock} />
      )}
    </div>
  );
}
