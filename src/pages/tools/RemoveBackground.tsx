import { useState } from "react";
import { ImageMinus, Upload, Download, RotateCcw, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import ToolLayout from "@/components/tools/ToolLayout";
import { toast } from "sonner";

const RemoveBackground = () => {
  const [originalImage, setOriginalImage] = useState<string | null>(null);
  const [processedImage, setProcessedImage] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      setOriginalImage(e.target?.result as string);
      setProcessedImage(null);
    };
    reader.readAsDataURL(file);
  };

  const removeBackground = async () => {
    if (!originalImage) return;

    setIsProcessing(true);
    toast.info("Processing image... This may take a moment.");

    // Simulate background removal with a simple technique
    // For production, use a proper API like remove.bg or ML model
    try {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);

        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;

        // Simple background removal based on edge detection
        // This is a basic implementation - real apps use ML models
        const threshold = 230; // Adjust for white backgrounds
        
        for (let i = 0; i < data.length; i += 4) {
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];
          
          // If pixel is close to white/light, make it transparent
          if (r > threshold && g > threshold && b > threshold) {
            data[i + 3] = 0; // Set alpha to 0
          }
        }

        ctx.putImageData(imageData, 0, 0);
        setProcessedImage(canvas.toDataURL("image/png"));
        setIsProcessing(false);
        toast.success("Background removed! Note: For best results, use a solid background.");
      };
      img.src = originalImage;
    } catch (error) {
      setIsProcessing(false);
      toast.error("Failed to process image");
    }
  };

  const handleDownload = () => {
    if (!processedImage) return;
    const link = document.createElement("a");
    link.download = "removed-background.png";
    link.href = processedImage;
    link.click();
    toast.success("Image downloaded!");
  };

  const handleReset = () => {
    setOriginalImage(null);
    setProcessedImage(null);
  };

  return (
    <ToolLayout
      title="Remove Background"
      description="Remove image background instantly"
      icon={ImageMinus}
    >
      <div className="space-y-6">
        {!originalImage ? (
          <label className="flex flex-col items-center justify-center h-64 border-2 border-dashed border-border rounded-xl cursor-pointer hover:border-primary transition-colors">
            <Upload className="w-12 h-12 text-muted-foreground mb-4" />
            <span className="text-muted-foreground">Click to upload image</span>
            <span className="text-sm text-muted-foreground mt-1">Works best with solid backgrounds</span>
            <input type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
          </label>
        ) : (
          <div className="space-y-6">
            {/* Image Comparison */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <h3 className="font-medium">Original</h3>
                <img 
                  src={originalImage} 
                  alt="Original" 
                  className="w-full rounded-xl border border-border"
                />
              </div>
              <div className="space-y-2">
                <h3 className="font-medium">Processed</h3>
                {processedImage ? (
                  <div className="rounded-xl border border-border overflow-hidden" style={{ background: "repeating-conic-gradient(#80808033 0% 25%, transparent 0% 50%) 50% / 20px 20px" }}>
                    <img 
                      src={processedImage} 
                      alt="Processed" 
                      className="w-full"
                    />
                  </div>
                ) : (
                  <div className="w-full h-64 rounded-xl border border-border bg-muted/50 flex items-center justify-center">
                    <span className="text-muted-foreground">Click "Remove Background" to process</span>
                  </div>
                )}
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-4">
              {!processedImage ? (
                <Button 
                  variant="gradient" 
                  onClick={removeBackground}
                  disabled={isProcessing}
                >
                  {isProcessing ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      <ImageMinus className="w-4 h-4 mr-2" />
                      Remove Background
                    </>
                  )}
                </Button>
              ) : (
                <Button variant="gradient" onClick={handleDownload}>
                  <Download className="w-4 h-4 mr-2" />
                  Download PNG
                </Button>
              )}
              <Button variant="outline" onClick={handleReset}>
                <RotateCcw className="w-4 h-4 mr-2" />
                Reset
              </Button>
            </div>
          </div>
        )}

        <div className="bg-muted/50 rounded-xl p-4">
          <h4 className="font-medium mb-2">Tips for best results:</h4>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• Use images with solid color backgrounds (white, green, etc.)</li>
            <li>• Ensure good contrast between subject and background</li>
            <li>• Higher resolution images give better results</li>
          </ul>
        </div>
      </div>
    </ToolLayout>
  );
};

export default RemoveBackground;
