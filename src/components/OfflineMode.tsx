import React from "react";
import { WifiOff, Download, Music } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface OfflineModeProps {
  title?: string;
  message?: string;
  showDownloadsButton?: boolean;
}

const OfflineMode: React.FC<OfflineModeProps> = ({
  title = "Foxy is offline",
  message = "Check your downloads to access offline music",
  showDownloadsButton = true,
}) => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-[400px]">
      <div className="text-center max-w-md mx-auto p-8">
        <div className="mb-6">
          <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-muted/50 flex items-center justify-center">
            <WifiOff className="w-10 h-10 text-muted-foreground" />
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-2">{title}</h2>
          <p className="text-muted-foreground mb-6">{message}</p>
        </div>

        {showDownloadsButton && (
          <div className="space-y-3">
            <Button
              onClick={() => navigate("/downloads/songs")}
              className="w-full"
            >
              <Download className="w-4 h-4 mr-2" />
              View Downloads
            </Button>
            <Button
              variant="outline"
              onClick={() => navigate("/downloads")}
              className="w-full"
            >
              <Music className="w-4 h-4 mr-2" />
              Browse Offline Music
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default OfflineMode;
