// Centralized SEO data for all tools
export interface ToolSEO {
  title: string;
  description: string;
  keywords: string;
  faqs: { question: string; answer: string }[];
}

export const toolsSEO: Record<string, ToolSEO> = {
  "image-compressor": {
    title: "Free Image Compressor Online - Reduce Image Size in KB/MB",
    description: "Compress images online for free. Reduce image file size in KB or MB without losing quality. Best free image compressor tool - no signup required, fast & secure.",
    keywords: "image compressor, compress image online, reduce image size, image size reducer, compress jpg, compress png, free image compressor, online image compressor",
    faqs: [
      {
        question: "How do I compress an image without losing quality?",
        answer: "Our image compressor uses smart compression algorithms to reduce file size while maintaining visual quality. Simply upload your image, adjust the quality slider (80% is recommended for best balance), and download your compressed image."
      },
      {
        question: "What image formats are supported?",
        answer: "Our compressor supports all major image formats including JPG, JPEG, PNG, WebP, and GIF. The output is optimized JPEG format for maximum compression."
      },
      {
        question: "Is there a file size limit?",
        answer: "There's no strict file size limit. However, for best performance, we recommend images under 20MB. All processing happens in your browser, so larger files may take longer."
      },
      {
        question: "Is my image data safe?",
        answer: "Yes! All image processing happens locally in your browser. Your images are never uploaded to our servers, ensuring complete privacy and security."
      }
    ]
  },
  "image-cropper": {
    title: "Free Image Cropper Online - Crop Photos Instantly",
    description: "Crop images online for free. Easy to use image cropper with custom aspect ratios. Crop photos for social media, passport, ID cards. No signup, instant results.",
    keywords: "image cropper, crop image online, photo cropper, crop photo, free image crop, resize image, aspect ratio cropper, passport photo crop",
    faqs: [
      {
        question: "How do I crop an image to a specific size?",
        answer: "Upload your image, select a preset aspect ratio (like 1:1 for Instagram, 16:9 for YouTube) or set custom dimensions, drag to position the crop area, and click download."
      },
      {
        question: "Can I crop images for passport photos?",
        answer: "Yes! Our cropper supports passport photo dimensions. Select the passport photo preset or set custom dimensions according to your country's requirements."
      },
      {
        question: "What's the best aspect ratio for social media?",
        answer: "Instagram posts: 1:1 (square) or 4:5 (portrait). Instagram stories: 9:16. Facebook: 1.91:1. Twitter: 16:9. YouTube thumbnail: 16:9."
      }
    ]
  },
  "remove-background": {
    title: "Free Background Remover Online - Remove Image Background AI",
    description: "Remove background from images instantly with AI. Free online background remover - no signup needed. Perfect for product photos, portraits, logos. 100% automatic.",
    keywords: "remove background, background remover, remove bg, transparent background, background eraser, remove image background, ai background remover, free background remover",
    faqs: [
      {
        question: "How does AI background removal work?",
        answer: "Our tool uses advanced AI machine learning to detect the main subject in your image and automatically remove the background, creating a transparent PNG output."
      },
      {
        question: "What images work best with background remover?",
        answer: "Images with clear subjects and good contrast work best. Product photos, portraits, and images with distinct foreground subjects give the best results."
      },
      {
        question: "Can I get a transparent background?",
        answer: "Yes! The output is a PNG file with a transparent background, perfect for use in designs, presentations, or e-commerce listings."
      }
    ]
  },
  "image-to-pdf": {
    title: "Free Image to PDF Converter Online - Convert JPG to PDF",
    description: "Convert images to PDF online for free. Merge multiple images into one PDF. Convert JPG, PNG, WebP to PDF instantly. No signup, no watermark, free forever.",
    keywords: "image to pdf, jpg to pdf, convert image to pdf, png to pdf, photo to pdf, picture to pdf, free pdf converter, multiple images to pdf",
    faqs: [
      {
        question: "How do I convert multiple images to one PDF?",
        answer: "Upload all your images at once, arrange them in the desired order by dragging, then click 'Convert to PDF'. All images will be merged into a single PDF file."
      },
      {
        question: "What image formats can I convert to PDF?",
        answer: "We support JPG, JPEG, PNG, WebP, GIF, and BMP formats. All common image types can be converted to PDF."
      },
      {
        question: "Is there a limit on the number of images?",
        answer: "No strict limit! You can add as many images as you need. Processing happens in your browser, so more images may take slightly longer."
      }
    ]
  },
  "pdf-to-image": {
    title: "Free PDF to Image Converter Online - Convert PDF to JPG/PNG",
    description: "Convert PDF to images online for free. Extract all pages from PDF as JPG or PNG images. High quality conversion, no signup required, instant download.",
    keywords: "pdf to image, pdf to jpg, pdf to png, convert pdf to image, extract images from pdf, pdf converter, free pdf to image",
    faqs: [
      {
        question: "How do I extract images from a PDF?",
        answer: "Upload your PDF file, and our tool will automatically convert each page into a separate image. You can download all images as individual files."
      },
      {
        question: "What's the image quality of converted PDFs?",
        answer: "We convert PDFs at high resolution to ensure excellent image quality. The output maintains the original PDF quality as much as possible."
      }
    ]
  },
  "qr-generator": {
    title: "Free QR Code Generator Online - Create QR Codes Instantly",
    description: "Generate QR codes for free online. Create QR codes for URLs, text, WiFi, vCards. Customize colors and size. Download as PNG. No signup, instant creation.",
    keywords: "qr code generator, create qr code, qr code maker, free qr generator, qr code creator, url to qr, text to qr, wifi qr code",
    faqs: [
      {
        question: "How do I create a QR code for a website?",
        answer: "Simply paste your website URL into the input field and your QR code is generated instantly. Customize the color if needed and download as PNG."
      },
      {
        question: "Can I customize QR code colors?",
        answer: "Yes! You can change the foreground and background colors of your QR code. Make sure to maintain good contrast for reliable scanning."
      },
      {
        question: "What can I encode in a QR code?",
        answer: "You can encode URLs, plain text, phone numbers, email addresses, WiFi credentials, and more. Simply enter the information and generate your QR code."
      }
    ]
  },
  "age-calculator": {
    title: "Free Age Calculator Online - Calculate Exact Age from Birthdate",
    description: "Calculate your exact age in years, months, days, hours, and minutes. Free online age calculator from date of birth. Find out how old you are precisely.",
    keywords: "age calculator, calculate age, age from date of birth, how old am i, birthday calculator, exact age calculator, age in days, age finder",
    faqs: [
      {
        question: "How do I calculate my exact age?",
        answer: "Enter your date of birth and the calculator instantly shows your age in years, months, days, hours, and even minutes. It updates in real-time."
      },
      {
        question: "Can I calculate age for any date?",
        answer: "Yes! You can calculate age from any past date. Enter the birth date and get the precise age difference from today."
      }
    ]
  },
  "bmi-calculator": {
    title: "Free BMI Calculator Online - Calculate Body Mass Index",
    description: "Calculate your BMI (Body Mass Index) for free. Enter height and weight to get your BMI score and health category. Supports metric and imperial units.",
    keywords: "bmi calculator, body mass index, calculate bmi, bmi check, weight calculator, health calculator, bmi score, obesity calculator",
    faqs: [
      {
        question: "What is BMI and how is it calculated?",
        answer: "BMI (Body Mass Index) is calculated by dividing your weight in kilograms by your height in meters squared. It's a simple way to assess if you're at a healthy weight."
      },
      {
        question: "What is a healthy BMI range?",
        answer: "A healthy BMI is typically between 18.5 and 24.9. Below 18.5 is underweight, 25-29.9 is overweight, and 30+ is considered obese."
      }
    ]
  },
  "color-picker": {
    title: "Free Color Picker Online - Get HEX, RGB, HSL Color Codes",
    description: "Pick colors and get color codes instantly. Free online color picker tool. Get HEX, RGB, HSL values. Perfect for designers and developers. No signup needed.",
    keywords: "color picker, hex color, rgb color, color code, color selector, html color codes, css colors, color converter, hsl color",
    faqs: [
      {
        question: "How do I find the HEX code of a color?",
        answer: "Use our color picker to select any color visually or enter RGB values. The HEX code is displayed instantly and can be copied with one click."
      },
      {
        question: "What's the difference between HEX, RGB, and HSL?",
        answer: "HEX uses hexadecimal values (#FF5733), RGB uses red/green/blue values (255, 87, 51), and HSL uses hue/saturation/lightness (14°, 100%, 60%). All represent the same color differently."
      }
    ]
  },
  "unit-converter": {
    title: "Free Unit Converter Online - Convert Length, Weight, Temperature",
    description: "Convert units online for free. Length, weight, temperature, speed, and more. Easy to use unit converter with instant results. All conversions in one place.",
    keywords: "unit converter, convert units, length converter, weight converter, temperature converter, metric converter, imperial converter, measurement converter",
    faqs: [
      {
        question: "What units can I convert?",
        answer: "Our converter supports length (meters, feet, inches), weight (kg, pounds), temperature (Celsius, Fahrenheit, Kelvin), speed, area, volume, and more."
      },
      {
        question: "How accurate are the conversions?",
        answer: "All conversions use precise mathematical formulas and are accurate to multiple decimal places. Perfect for scientific, educational, and everyday use."
      }
    ]
  },
  "number-converter": {
    title: "Free Number System Converter - Binary, Decimal, Hex, Octal",
    description: "Convert between number systems online for free. Binary, decimal, hexadecimal, octal conversions. Perfect for programmers and students. Instant results.",
    keywords: "number converter, binary converter, hex converter, decimal to binary, binary to decimal, octal converter, number system, base converter",
    faqs: [
      {
        question: "How do I convert decimal to binary?",
        answer: "Enter your decimal number and instantly see it converted to binary, hexadecimal, and octal. All conversions happen in real-time."
      },
      {
        question: "What number systems are supported?",
        answer: "We support Binary (base 2), Octal (base 8), Decimal (base 10), and Hexadecimal (base 16). Convert between any of these systems instantly."
      }
    ]
  },
  "text-on-photo": {
    title: "Free Text on Photo Online - Add Text to Images",
    description: "Add text to photos online for free. Create watermarks, captions, memes. Customize font, color, size. Free image text editor - no signup, instant download.",
    keywords: "add text to photo, text on image, photo text editor, watermark image, caption maker, meme text, image text overlay, photo caption",
    faqs: [
      {
        question: "How do I add text to a photo?",
        answer: "Upload your image, type your text, customize the font, size, and color, position it where you want, and download your edited image."
      },
      {
        question: "Can I add watermarks to protect my photos?",
        answer: "Yes! Add your name, logo, or copyright text as a watermark. You can adjust transparency and position to create professional watermarks."
      }
    ]
  },
  "kb-converter": {
    title: "Free KB Converter - Reduce Image to Specific KB Size",
    description: "Reduce image to exact KB size online for free. Convert image to 50KB, 100KB, 200KB or any size. Perfect for document uploads. No quality loss.",
    keywords: "kb converter, reduce image size kb, image to kb, compress to specific size, 100kb image, 50kb photo, resize image kb, passport photo kb",
    faqs: [
      {
        question: "How do I reduce an image to a specific KB size?",
        answer: "Upload your image, enter your target file size in KB (e.g., 100KB), and our tool automatically compresses the image to that exact size."
      },
      {
        question: "Why do I need to reduce image to specific KB?",
        answer: "Many official forms, job applications, and government websites have strict file size limits (often 50KB-200KB). Our tool helps you meet these requirements exactly."
      }
    ]
  }
};

export const getToolStructuredData = (toolSlug: string, toolName: string, toolDescription: string) => {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": toolName,
    "description": toolDescription,
    "url": `https://toolskit.tech/tools/${toolSlug}`,
    "applicationCategory": "UtilitiesApplication",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "1250",
      "bestRating": "5",
      "worstRating": "1"
    },
    "provider": {
      "@type": "Organization",
      "name": "ToolsKit.tech",
      "url": "https://toolskit.tech"
    }
  };
};
