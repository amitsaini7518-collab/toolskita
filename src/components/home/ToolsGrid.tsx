import { 
  FileImage, 
  FileText, 
  Crop, 
  ImageMinus, 
  Palette,
  Calculator,
  QrCode,
  Ruler,
  FileDown,
  Type,
  Calendar,
  Hash
} from "lucide-react";
import ToolCard from "./ToolCard";

const tools = [
  {
    title: "Image to PDF",
    description: "Convert images to PDF documents instantly",
    icon: FileImage,
    path: "/tools/image-to-pdf",
    color: "#0ea5e9",
  },
  {
    title: "PDF to Image",
    description: "Extract images from PDF files",
    icon: FileText,
    path: "/tools/pdf-to-image",
    color: "#14b8a6",
  },
  {
    title: "Image Cropper",
    description: "Crop and resize your images easily",
    icon: Crop,
    path: "/tools/image-cropper",
    color: "#8b5cf6",
  },
  {
    title: "KB Converter",
    description: "Reduce to specific KB without quality loss",
    icon: FileDown,
    path: "/tools/kb-converter",
    color: "#f59e0b",
  },
  {
    title: "Image Compressor",
    description: "Reduce image size in KB/MB",
    icon: FileDown,
    path: "/tools/image-compressor",
    color: "#fb923c",
  },
  {
    title: "Remove Background",
    description: "Remove image background with AI",
    icon: ImageMinus,
    path: "/tools/remove-background",
    color: "#ec4899",
  },
  {
    title: "Age Calculator",
    description: "Calculate exact age from birthdate",
    icon: Calendar,
    path: "/tools/age-calculator",
    color: "#06b6d4",
  },
  {
    title: "QR Code Generator",
    description: "Create QR codes for any text or URL",
    icon: QrCode,
    path: "/tools/qr-generator",
    color: "#10b981",
  },
  {
    title: "Color Picker",
    description: "Pick colors and get color codes",
    icon: Palette,
    path: "/tools/color-picker",
    color: "#f43f5e",
  },
  {
    title: "Unit Converter",
    description: "Convert between different units",
    icon: Ruler,
    path: "/tools/unit-converter",
    color: "#6366f1",
  },
  {
    title: "Text on Photo",
    description: "Add text watermark to images",
    icon: Type,
    path: "/tools/text-on-photo",
    color: "#84cc16",
  },
  {
    title: "Number System",
    description: "Convert between number systems",
    icon: Hash,
    path: "/tools/number-converter",
    color: "#a855f7",
  },
  {
    title: "BMI Calculator",
    description: "Calculate your Body Mass Index",
    icon: Calculator,
    path: "/tools/bmi-calculator",
    color: "#22c55e",
  },
];

const ToolsGrid = () => {
  return (
    <section className="py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Popular <span className="gradient-text">Tools</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our most used tools. All free, fast, and easy to use.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {tools.map((tool) => (
            <ToolCard key={tool.path} {...tool} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsGrid;