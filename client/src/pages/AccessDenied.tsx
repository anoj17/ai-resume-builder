import { AlertCircle, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface AccessDeniedProps {
  title?: string;
  message?: string;
  showBackButton?: boolean;
}

const AccessDenied = ({
  title = "Access Denied",
  message = "You do not have permission to access this page.",
  showBackButton = true,
}: AccessDeniedProps) => {
  const router = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="w-full max-w-md px-6 py-12 text-center">
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-destructive/10 rounded-full">
            <AlertCircle className="w-8 h-8 text-red-500" />
          </div>
        </div>

        <h1 className="text-3xl font-bold text-foreground mb-3">{title}</h1>

        <p className="text-muted-foreground mb-8 text-base leading-relaxed">
          {message}
        </p>

        {showBackButton && (
          <button
            onClick={() => router("/")}
            className="gap-2 px-3 py-1 flex mx-auto cursor-pointer items-center rounded-lg bg-green-500 text-white hover:bg-green-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </button>
        )}
      </div>
    </div>
  );
};

export default AccessDenied;
