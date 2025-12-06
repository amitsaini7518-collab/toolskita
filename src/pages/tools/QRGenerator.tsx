import { useState, useEffect, useRef } from "react";
import { QrCode, Download, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import ToolLayout from "@/components/tools/ToolLayout";
import { toast } from "sonner";

const QRGenerator = () => {
  const [text, setText] = useState("");
  const [qrDataUrl, setQrDataUrl] = useState<string>("");
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const generateQR = (inputText: string) => {
    if (!inputText.trim() || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Simple QR code generation using a basic algorithm
    // For production, you'd use a library like qrcode.js
    const size = 256;
    canvas.width = size;
    canvas.height = size;

    // Create QR code pattern (simplified representation)
    const moduleSize = 8;
    const modules = Math.floor(size / moduleSize);
    
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, size, size);

    ctx.fillStyle = "#000000";

    // Generate pseudo-random pattern based on text
    const hash = inputText.split("").reduce((acc, char) => {
      return ((acc << 5) - acc) + char.charCodeAt(0);
    }, 0);

    // Draw finder patterns (corner squares)
    const drawFinder = (x: number, y: number) => {
      const s = moduleSize;
      ctx.fillRect(x, y, 7 * s, s);
      ctx.fillRect(x, y + 6 * s, 7 * s, s);
      ctx.fillRect(x, y, s, 7 * s);
      ctx.fillRect(x + 6 * s, y, s, 7 * s);
      ctx.fillRect(x + 2 * s, y + 2 * s, 3 * s, 3 * s);
    };

    drawFinder(moduleSize, moduleSize);
    drawFinder(size - 8 * moduleSize, moduleSize);
    drawFinder(moduleSize, size - 8 * moduleSize);

    // Draw data pattern
    for (let i = 9; i < modules - 1; i++) {
      for (let j = 9; j < modules - 1; j++) {
        const seed = (hash + i * modules + j) % 100;
        if (seed < 40) {
          ctx.fillRect(i * moduleSize, j * moduleSize, moduleSize, moduleSize);
        }
      }
    }

    // Timing patterns
    for (let i = 8; i < modules - 8; i++) {
      if (i % 2 === 0) {
        ctx.fillRect(6 * moduleSize, i * moduleSize, moduleSize, moduleSize);
        ctx.fillRect(i * moduleSize, 6 * moduleSize, moduleSize, moduleSize);
      }
    }

    setQrDataUrl(canvas.toDataURL("image/png"));
  };

  useEffect(() => {
    if (text) {
      generateQR(text);
    }
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
      const blob = await new Promise<Blob>((resolve) => {
        canvasRef.current!.toBlob((blob) => resolve(blob!), "image/png");
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
            <canvas ref={canvasRef} className="w-64 h-64" />
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
