import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, LucideIcon, Heart, BookOpen, ListChecks, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQ from "@/components/FAQ";
import { toolsSEO, getToolStructuredData, ToolArticle } from "@/lib/seoData";
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

const ToolArticleSection = ({ article, toolName }: { article: ToolArticle; toolName: string }) => {
  return (
    <div className="glass-card rounded-2xl p-6 space-y-6">
      <h2 className="text-xl font-bold flex items-center gap-2">
        <BookOpen className="w-5 h-5 text-primary" />
        About {toolName}
      </h2>
      
      {/* Introduction */}
      <div>
        <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-secondary" />
          Introduction
        </h3>
        <p className="text-muted-foreground leading-relaxed">{article.introduction}</p>
      </div>
      
      {/* How to Use */}
      <div>
        <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
          <ListChecks className="w-4 h-4 text-secondary" />
          How to Use
        </h3>
        <p className="text-muted-foreground leading-relaxed">{article.howToUse}</p>
      </div>
      
      {/* Key Features */}
      <div>
        <h3 className="text-lg font-semibold mb-3">Key Features</h3>
        <ul className="grid gap-2">
          {article.keyFeatures.map((feature, index) => (
            <li key={index} className="flex items-start gap-2 text-muted-foreground">
              <span className="text-primary mt-1">✓</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
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

            {/* SEO Article Section */}
            {seoData?.article && (
              <ToolArticleSection article={seoData.article} toolName={title} />
            )}
          </article>
        </div>
      </div>
    </>
  );
};

export default ToolLayout;
