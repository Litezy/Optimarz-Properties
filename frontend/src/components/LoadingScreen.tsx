import { useEffect, useState } from 'react';
import logo from '@/assets/logo.png';

interface LoadingScreenProps {
  isLoading: boolean;
}

const LoadingScreen = ({ isLoading }: LoadingScreenProps) => {
  const [show, setShow] = useState(isLoading);

  useEffect(() => {
    if (isLoading) {
      setShow(true);
    } else {
      const timer = setTimeout(() => setShow(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  if (!show) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-background/60 backdrop-blur-sm transition-opacity duration-300 ${
        isLoading ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="flex flex-col items-center gap-4 ">
        <img
          src={logo}
          alt="Optimarz Properties"
          className="h-16 w-auto animate-pulse"
        />
        <div className="flex gap-2">
          <div className="h-2 w-2 rounded-full bg-primary animate-bounce [animation-delay:-0.3s]"></div>
          <div className="h-2 w-2 rounded-full bg-primary animate-bounce [animation-delay:-0.15s]"></div>
          <div className="h-2 w-2 rounded-full bg-primary animate-bounce"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
