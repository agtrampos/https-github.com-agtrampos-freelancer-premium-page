import { useState } from 'react';
import Landing from '@/components/Landing';
import UnlockedArea from '@/components/UnlockedArea';

/**
 * Home Page - Freelancer Premium
 * Design: Minimalismo Moderno com Gradiente Roxo
 * 
 * Componentes principais:
 * - Landing: Página inicial com captura de email
 * - UnlockedArea: Área de conteúdo premium (sites e estratégias)
 */
export default function Home() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [userEmail, setUserEmail] = useState('');

  const handleUnlock = (email: string) => {
    setUserEmail(email);
    setIsUnlocked(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {!isUnlocked ? (
        <Landing onUnlock={handleUnlock} />
      ) : (
        <UnlockedArea email={userEmail} />
      )}
    </div>
  );
}
