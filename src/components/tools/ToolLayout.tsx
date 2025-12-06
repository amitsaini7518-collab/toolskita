import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import AdBanner from "@/components/layout/AdBanner";

interface ToolLayoutProps {
  title: string;
  description: string;
  icon: LucideIcon;
  children: ReactNode;
}

const ToolLayout = ({ title, description, icon: Icon, children }: ToolLayoutProps) => {
  return (
    <div className="min-h-screen py-8">
      <div className="container">
        {/* Back Button */}
        <Button variant="ghost" size="sm" asChild className="mb-6">
          <Link to="/">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </Button>

        <div className="grid lg:grid-cols-[1fr_300px] gap-8">
          {/* Main Content */}
          <div className="space-y-6">
            {/* Header */}
            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <Icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold">{title}</h1>
                  <p className="text-muted-foreground">{description}</p>
                </div>
              </div>
            </div>

            {/* Tool Content */}
            <div className="glass-card rounded-2xl p-6">
              {children}
            </div>

            {/* Bottom Ad */}
            <AdBanner size="leaderboard" />
          </div>

          {/* Sidebar Ads */}
          <div className="hidden lg:block space-y-6">
            <AdBanner size="large" />
            <AdBanner size="large" />
            <AdBanner size="large" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolLayout;
