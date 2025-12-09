import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, LucideIcon, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQ from "@/components/FAQ";
import { toolsSEO, getToolStructuredData } from "@/lib/seoData";
import donateQr from "@/assets/donate-qr.png";

interface ToolLayoutProps {
  title: string;
  description: string;
  icon: LucideIcon;
  children: ReactNode;
  toolSlug?: string;
}

const DonateBanner = () => {
  return (
    <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 border border-primary/20 rounded-2xl p-4 flex flex-col sm:flex-row items-center gap-4">
      <div className="bg-white rounded-lg p-1.5 shrink-0">
        <img src={donateQr} alt="Donate QR Code" className="w-20 h-20 rounded" />
      </div>
      <div className="text-center sm:text-left">
        <h3 className="font-semibold flex items-center justify-center sm:justify-start gap-2 text-foreground">
          <Heart className="w-4 h-4 text-destructive" />
          Love this tool? Support us!
        </h3>
        <p className="text-sm text-muted-foreground mt-1">
          Support to keep this free & secure. Scan QR to donate via UPI.
        </p>
      </div>
    </div>
  );
};

const ToolLayout = ({ title, description, icon: Icon, children, toolSlug }: ToolLayoutProps) => {
  // Get SEO data for this tool
  const slug = toolSlug || title.toLowerCase().replace(/\s+/g, "-");
  const seoData = toolsSEO[slug];
  const structuredData = getToolStructuredData(slug, title, description);

  return (
    <>
      {seoData && (
        <SEO
          title={seoData.title}
          description={seoData.description}
          keywords={seoData.keywords}
          canonicalUrl={`/tools/${slug}`}
          structuredData={structuredData}
        />
      )}
      
      <div className="min-h-screen py-8">
        <div className="container">
          {/* Breadcrumbs */}
          <Breadcrumbs />
          
          {/* Back Button */}
          <Button variant="ghost" size="sm" asChild className="mb-6">
            <Link to="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </Button>

          {/* Main Content */}
          <article className="max-w-4xl mx-auto space-y-6">
            {/* Header */}
            <header className="glass-card rounded-2xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <Icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold">{title}</h1>
                  <p className="text-muted-foreground">{description}</p>
                </div>
              </div>
            </header>

            {/* Tool Content */}
            <section className="glass-card rounded-2xl p-6">
              {children}
            </section>

            {/* FAQ Section */}
            {seoData?.faqs && seoData.faqs.length > 0 && (
              <section className="glass-card rounded-2xl p-6">
                <FAQ faqs={seoData.faqs} toolName={title} />
              </section>
            )}

            {/* Donate Banner */}
            <DonateBanner />
          </article>
        </div>
      </div>
    </>
  );
};

export default ToolLayout;
