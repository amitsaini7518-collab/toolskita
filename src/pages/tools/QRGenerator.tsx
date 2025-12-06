import { useState, useEffect, useRef } from "react";
import { QrCode, Download, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import ToolLayout from "@/components/tools/ToolLayout";
import { toast } from "sonner";
import QRCode from "qrcode";

const QRGenerator = () => {
  const [text, setText] = useState("");
  const [qrDataUrl, setQrDataUrl] = useState<string>("");
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const generateQR = async (inputText: string) => {
    if (!inputText.trim() || !canvasRef.current) {
      setQrDataUrl("");
      return;
    }

    try {
      await QRCode.toCanvas(canvasRef.current, inputText, {
        width: 256,
        margin: 2,
        color: {
          dark: "#000000",
          light: "#ffffff",
        },
      });
      setQrDataUrl(canvasRef.current.toDataURL("image/png"));
    } catch (error) {
      console.error("QR Code generation failed:", error);
      toast.error("Failed to generate QR Code");
    }
  };

  useEffect(() => {
    generateQR(text);
  }, [text]);

  const handleDownload = () => {
    if (!qrDataUrl) return;
    const link = document.createElement("a");
    link.download = "qrcode.png";
    link.href = qrDataUrl;
    link.click();
    toast.success("QR Code downloaded!");
  };

  const handleCopy = async () => {
    if (!canvasRef.current) return;
    try {
      const blob = await new Promise<Blob>((resolve, reject) => {
        canvasRef.current!.toBlob((blob) => {
          if (blob) resolve(blob);
          else reject(new Error("Failed to create blob"));
        }, "image/png");
      });
      await navigator.clipboard.write([
        new ClipboardItem({ "image/png": blob }),
      ]);
      toast.success("QR Code copied to clipboard!");
    } catch {
      toast.error("Failed to copy QR Code");
    }
  };

  return (
    <ToolLayout
      title="QR Code Generator"
      description="Create QR codes for any text or URL"
      icon={QrCode}
    >
      <div className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="qr-text">Enter Text or URL</Label>
          <Input
            id="qr-text"
            placeholder="https://example.com or any text..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="h-12"
          />
        </div>

        <div className="flex flex-col items-center space-y-6">
          <div className="bg-card p-6 rounded-2xl border border-border">
            <canvas ref={canvasRef} width={256} height={256} className="w-64 h-64" />
          </div>

          {text && (
            <div className="flex flex-wrap gap-4">
              <Button variant="gradient" onClick={handleDownload}>
                <Download className="w-4 h-4 mr-2" />
                Download PNG
              </Button>
              <Button variant="outline" onClick={handleCopy}>
                <Copy className="w-4 h-4 mr-2" />
                Copy to Clipboard
              </Button>
            </div>
          )}
        </div>
      </div>
    </ToolLayout>
  );
};

export default QRGenerator;
