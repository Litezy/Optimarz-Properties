import { Loader2 } from 'lucide-react';

interface ApiLoaderProps {
  isLoading: boolean;
  message?: string;
  overlay?: boolean;
}

const ApiLoader = ({ isLoading, message = 'Loading...', overlay = true }: ApiLoaderProps) => {
  if (!isLoading) return null;

  if (overlay) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
        <div className="flex flex-col items-center gap-3 rounded-lg bg-card p-6 shadow-lg border border-border">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <p className="text-sm text-muted-foreground">{message}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center gap-2 py-8">
      <Loader2 className="h-6 w-6 animate-spin text-primary" />
      <p className="text-sm text-muted-foreground">{message}</p>
    </div>
  );
};

export default ApiLoader;
