import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Tool Pages
import ImageCropper from "./pages/tools/ImageCropper";
import ImageCompressor from "./pages/tools/ImageCompressor";
import AgeCalculator from "./pages/tools/AgeCalculator";
import QRGenerator from "./pages/tools/QRGenerator";
import ColorPicker from "./pages/tools/ColorPicker";
import UnitConverter from "./pages/tools/UnitConverter";
import BMICalculator from "./pages/tools/BMICalculator";
import TextOnPhoto from "./pages/tools/TextOnPhoto";
import NumberConverter from "./pages/tools/NumberConverter";
import ImageToPDF from "./pages/tools/ImageToPDF";
import PDFToImage from "./pages/tools/PDFToImage";
import RemoveBackground from "./pages/tools/RemoveBackground";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Tool Routes */}
          <Route path="/tools/image-cropper" element={<ImageCropper />} />
          <Route path="/tools/image-compressor" element={<ImageCompressor />} />
          <Route path="/tools/age-calculator" element={<AgeCalculator />} />
          <Route path="/tools/qr-generator" element={<QRGenerator />} />
          <Route path="/tools/color-picker" element={<ColorPicker />} />
          <Route path="/tools/unit-converter" element={<UnitConverter />} />
          <Route path="/tools/bmi-calculator" element={<BMICalculator />} />
          <Route path="/tools/text-on-photo" element={<TextOnPhoto />} />
          <Route path="/tools/number-converter" element={<NumberConverter />} />
          <Route path="/tools/image-to-pdf" element={<ImageToPDF />} />
          <Route path="/tools/pdf-to-image" element={<PDFToImage />} />
          <Route path="/tools/remove-background" element={<RemoveBackground />} />
          
          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
