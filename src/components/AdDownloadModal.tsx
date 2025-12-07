import { useState, useEffect, useCallback } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Download, Clock } from "lucide-react";

interface AdDownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDownload: () => void;
  fileName?: string;
}

export const AdDownloadModal = ({
  isOpen,
  onClose,
  onDownload,
  fileName = "file",
}: AdDownloadModalProps) => {
  const [countdown, setCountdown] = useState(5);
  const [isComplete, setIsComplete] = useState(false);

  const handleComplete = useCallback(() => {
    setIsComplete(true);
    onDownload();
    setTimeout(() => {
      onClose();
      setCountdown(5);
      setIsComplete(false);
    }, 500);
  }, [onDownload, onClose]);

  useEffect(() => {
    if (!isOpen) {
      setCountdown(5);
      setIsComplete(false);
      return;
    }

    if (countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (countdown === 0 && !isComplete) {
      handleComplete();
    }
  }, [isOpen, countdown, isComplete, handleComplete]);

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Download className="w-5 h-5 text-primary" />
            Preparing Download
          </DialogTitle>
        </DialogHeader>

        <div className="flex flex-col items-center gap-4 py-4">
          {/* Countdown Timer */}
          <div className="flex items-center gap-2 text-lg font-semibold">
            <Clock className="w-5 h-5 text-muted-foreground" />
            {countdown > 0 ? (
              <span>
                Your download will start in{" "}
                <span className="text-primary text-2xl">{countdown}</span>{" "}
                seconds...
              </span>
            ) : (
              <span className="text-primary">Downloading...</span>
            )}
          </div>

          {/* AdSense Placeholder */}
          <div className="w-[300px] h-[250px] bg-muted rounded-lg flex items-center justify-center border-2 border-dashed border-border">
            <span className="text-muted-foreground text-sm text-center px-4">
              Advertisement
              <br />
              <span className="text-xs">(Google AdSense 300x250)</span>
            </span>
          </div>

          {/* File name info */}
          <p className="text-sm text-muted-foreground text-center">
            Downloading: <span className="font-medium">{fileName}</span>
          </p>

          {/* Progress bar */}
          <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
            <div
              className="h-full bg-primary transition-all duration-1000 ease-linear"
              style={{ width: `${((5 - countdown) / 5) * 100}%` }}
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
