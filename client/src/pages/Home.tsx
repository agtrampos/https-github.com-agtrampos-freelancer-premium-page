import { useState } from 'react';
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
 */
export default function Home() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [userEmail, setUserEmail] = useState('');

  const handleUnlock = (email: string) => {
    setUserEmail(email);
    setIsLoading(true);
    
    // Simular delay de carregamento (2-3 segundos)
    setTimeout(() => {
      setIsLoading(false);
      setIsUnlocked(true);
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {isLoading && <LoadingSpinner />}
      
      {!isUnlocked ? (
        <Landing onUnlock={handleUnlock} />
      ) : (
        <UnlockedArea email={userEmail} />
      )}
    </div>
  );
}
