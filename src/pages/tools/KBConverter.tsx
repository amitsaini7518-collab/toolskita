import { useState, useRef } from "react";
import ToolLayout from "@/components/tools/ToolLayout";
import { FileDown, Upload, Download, RotateCcw, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const KBConverter = () => {
  const [originalImage, setOriginalImage] = useState<string | null>(null);
  const [convertedImage, setConvertedImage] = useState<string | null>(null);
  const [originalSize, setOriginalSize] = useState<number>(0);
  const [convertedSize, setConvertedSize] = useState<number>(0);
  const [targetSize, setTargetSize] = useState<number>(100);
  const [isProcessing, setIsProcessing] = useState(false);
  const [fileName, setFileName] = useState("converted-image");
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { toast } = useToast();

  const formatSize = (bytes: number) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(2)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setOriginalSize(file.size);
      setFileName(file.name.replace(/\.[^/.]+$/, "") + "-reduced");
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        setOriginalImage(result);
        setConvertedImage(null);
        setConvertedSize(0);
      };
      reader.readAsDataURL(file);
    }
  };

  const convertToTargetSize = async () => {
    if (!originalImage) return;
    
    setIsProcessing(true);
    
    try {
      const img = new Image();
      img.src = originalImage;
      
      await new Promise((resolve) => {
        img.onload = resolve;
      });

      const canvas = canvasRef.current;
      if (!canvas) return;
      
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const targetBytes = targetSize * 1024;
      let quality = 0.92;
      let scale = 1;
      let resultBlob: Blob | null = null;

      // Try different scales and qualities to reach target size
      for (let s = 1; s >= 0.3; s -= 0.1) {
        const newWidth = Math.floor(img.width * s);
        const newHeight = Math.floor(img.height * s);
        
        canvas.width = newWidth;
        canvas.height = newHeight;
        
        // Use high quality rendering
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = "high";
        ctx.drawImage(img, 0, 0, newWidth, newHeight);

        // Try different qualities at this scale
        for (let q = 0.92; q >= 0.5; q -= 0.05) {
          const blob = await new Promise<Blob | null>((resolve) => {
            canvas.toBlob(resolve, "image/jpeg", q);
          });

          if (blob && blob.size <= targetBytes) {
            resultBlob = blob;
            quality = q;
            scale = s;
            break;
          }
        }

        if (resultBlob) break;
      }

      // If still too large, use the smallest we got
      if (!resultBlob) {
        canvas.width = Math.floor(img.width * 0.3);
        canvas.height = Math.floor(img.height * 0.3);
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = "high";
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        
        resultBlob = await new Promise<Blob | null>((resolve) => {
          canvas.toBlob(resolve, "image/jpeg", 0.5);
        });
      }

      if (resultBlob) {
        const url = URL.createObjectURL(resultBlob);
        setConvertedImage(url);
        setConvertedSize(resultBlob.size);
        
        toast({
          title: "Conversion Complete!",
          description: `Reduced from ${formatSize(originalSize)} to ${formatSize(resultBlob.size)}`,
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to convert image",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  const handleDownload = () => {
    if (convertedImage) {
      const a = document.createElement("a");
      a.href = convertedImage;
      a.download = `${fileName}.jpg`;
      a.click();
    }
  };

  const handleReset = () => {
    setOriginalImage(null);
    setConvertedImage(null);
    setOriginalSize(0);
    setConvertedSize(0);
    setTargetSize(100);
    setFileName("converted-image");
  };

  return (
    <ToolLayout
      title="KB Converter"
      description="Reduce image size to specific KB without losing quality"
      icon={FileDown}
      toolSlug="kb-converter"
    >
      <canvas ref={canvasRef} className="hidden" />
      
      {!originalImage ? (
        <div className="border-2 border-dashed border-border rounded-xl p-12 text-center">
          <Upload className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
          <p className="text-lg font-medium mb-2">Upload an Image</p>
          <p className="text-sm text-muted-foreground mb-4">
            Supports JPG, PNG, WebP
          </p>
          <Input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="max-w-xs mx-auto"
          />
        </div>
      ) : (
        <div className="space-y-6">
          {/* Size Info */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-muted/50 rounded-xl p-4 text-center">
              <p className="text-sm text-muted-foreground">Original Size</p>
              <p className="text-2xl font-bold text-foreground">{formatSize(originalSize)}</p>
            </div>
            <div className="bg-primary/10 rounded-xl p-4 text-center">
              <p className="text-sm text-muted-foreground">Converted Size</p>
              <p className="text-2xl font-bold text-primary">
                {convertedSize ? formatSize(convertedSize) : "—"}
              </p>
            </div>
          </div>

          {/* Target Size Input */}
          <div className="space-y-2">
            <Label className="flex items-center gap-2">
              <Target className="w-4 h-4" />
              Target Size (KB)
            </Label>
            <Input
              type="number"
              value={targetSize}
              onChange={(e) => setTargetSize(Number(e.target.value))}
              min={10}
              max={5000}
              className="max-w-[200px]"
            />
            <p className="text-xs text-muted-foreground">
              Enter your desired file size in KB (minimum 10 KB)
            </p>
          </div>

          {/* Image Preview */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-muted-foreground mb-2">Original</p>
              <img
                src={originalImage}
                alt="Original"
                className="w-full rounded-lg border border-border"
              />
            </div>
            {convertedImage && (
              <div>
                <p className="text-sm text-muted-foreground mb-2">Converted</p>
                <img
                  src={convertedImage}
                  alt="Converted"
                  className="w-full rounded-lg border border-border"
                />
              </div>
            )}
          </div>

          {/* Filename Input */}
          {convertedImage && (
            <div className="space-y-2">
              <Label>File Name</Label>
              <Input
                value={fileName}
                onChange={(e) => setFileName(e.target.value)}
                placeholder="Enter file name"
              />
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3">
            {!convertedImage ? (
              <Button 
                onClick={convertToTargetSize} 
                className="flex-1"
                disabled={isProcessing}
              >
                {isProcessing ? (
                  <>
                    <RotateCcw className="w-4 h-4 mr-2 animate-spin" />
                    Converting...
                  </>
                ) : (
                  <>
                    <FileDown className="w-4 h-4 mr-2" />
                    Convert to {targetSize} KB
                  </>
                )}
              </Button>
            ) : (
              <Button onClick={handleDownload} className="flex-1">
                <Download className="w-4 h-4 mr-2" />
                Download
              </Button>
            )}
            <Button variant="outline" onClick={handleReset}>
              <RotateCcw className="w-4 h-4 mr-2" />
              Reset
            </Button>
          </div>
        </div>
      )}
    </ToolLayout>
  );
};

export default KBConverter;
