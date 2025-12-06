interface AdBannerProps {
  size?: "small" | "medium" | "large" | "leaderboard";
  className?: string;
}

const AdBanner = ({ size = "medium", className = "" }: AdBannerProps) => {
  const sizeClasses = {
    small: "h-16",
    medium: "h-24",
    large: "h-32",
    leaderboard: "h-20 md:h-24",
  };

  return (
    <div className={`ad-space ${sizeClasses[size]} w-full ${className}`}>
      <span className="text-xs">Advertisement - {size}</span>
    </div>
  );
};

export default AdBanner;
