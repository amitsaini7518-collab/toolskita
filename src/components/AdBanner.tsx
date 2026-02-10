import { useEffect, useRef } from "react";

interface AdBannerProps {
  slot: string;
  format?: "auto" | "rectangle" | "horizontal" | "vertical";
  responsive?: boolean;
  className?: string;
}

const AdBanner = ({ slot, format = "auto", responsive = true, className = "" }: AdBannerProps) => {
  const adRef = useRef<HTMLModElement>(null);
  const isLoaded = useRef(false);

  useEffect(() => {
    if (isLoaded.current) return;
    
    // Wait for container to have width before pushing ad
    const timer = setTimeout(() => {
      try {
        const adsbygoogle = (window as any).adsbygoogle;
        if (adsbygoogle && adRef.current && adRef.current.offsetWidth > 0) {
          adsbygoogle.push({});
          isLoaded.current = true;
        }
      } catch (error) {
        console.error("AdSense error:", error);
      }
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`ad-container overflow-hidden ${className}`}>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-1909827564331292"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive ? "true" : "false"}
      />
    </div>
  );
};

export default AdBanner;
