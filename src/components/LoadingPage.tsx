import { Loader2 } from "lucide-react";

const LoadingPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-4">
        <Loader2 className="h-12 w-12 animate-spin text-ocean mx-auto" />
        <p className="text-muted-foreground">Chargement...</p>
      </div>
    </div>
  );
};

export default LoadingPage;
