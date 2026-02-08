import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const blogPosts = [
  {
    id: 7,
    slug: "top-5-pdf-tools-for-students",
    title: "Top 5 PDF Tools for Students: Ultimate Guide for 2025",
    excerpt: "Discover the best free PDF tools every student needs. From converting PDFs to images to creating PDFs from photos - complete guide with rankings and tips.",
    category: "PDF Tools",
    date: "2025-01-15",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&h=400&fit=crop"
  },
  {
    id: 1,
    slug: "how-to-compress-images-without-losing-quality",
    title: "How to Compress Images Without Losing Quality in 2024",
    excerpt: "Learn the best techniques to reduce image file size while maintaining visual quality. Perfect for websites, emails, and social media.",
    category: "Image Tools",
    date: "2024-12-15",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop"
  },
  {
    id: 2,
    slug: "complete-guide-to-qr-codes",
    title: "Complete Guide to QR Codes: Creation, Usage & Best Practices",
    excerpt: "Everything you need to know about QR codes - from creating your first code to implementing them in marketing campaigns.",
    category: "QR Tools",
    date: "2024-12-10",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1595079676339-1534801ad6cf?w=600&h=400&fit=crop"
  },
  {
    id: 3,
    slug: "remove-background-from-images-free",
    title: "How to Remove Background from Images for Free - Step by Step Guide",
    excerpt: "Discover the easiest ways to remove backgrounds from your photos without any design skills or expensive software.",
    category: "Image Tools",
    date: "2024-12-05",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&h=400&fit=crop"
  },
  {
    id: 4,
    slug: "understanding-bmi-health-guide",
    title: "Understanding BMI: A Complete Health Guide for Everyone",
    excerpt: "Learn what BMI means, how to calculate it, and what your results indicate about your overall health and fitness.",
    category: "Health Tools",
    date: "2024-11-28",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop"
  },
  {
    id: 5,
    slug: "pdf-image-conversion-tips",
    title: "PDF to Image & Image to PDF: Tips for Perfect Conversions",
    excerpt: "Master the art of converting between PDF and image formats with our expert tips and tricks.",
    category: "PDF Tools",
    date: "2024-11-20",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1586953208270-767889fa9b4e?w=600&h=400&fit=crop"
  },
  {
    id: 6,
    slug: "color-theory-web-design",
    title: "Color Theory for Web Design: Picking Perfect Color Palettes",
    excerpt: "Understand color theory basics and learn how to choose color combinations that make your website stand out.",
    category: "Design Tools",
    date: "2024-11-15",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=600&h=400&fit=crop"
  }
];

const Blog = () => {
  const blogStructuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "ToolsKit.tech Blog",
    "description": "Tips, tutorials, and guides for using free online tools effectively.",
    "url": "https://toolskit.tech/blog",
    "publisher": {
      "@type": "Organization",
      "name": "ToolsKit.tech",
      "logo": {
        "@type": "ImageObject",
        "url": "https://storage.googleapis.com/gpt-engineer-file-uploads/di7j8UAQsIVOsCbK58eG1NP3xrh2/uploads/1765097322356-mast logo.png"
      }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Blog - ToolsKit.tech | Tips & Tutorials for Free Online Tools"
        description="Read our latest articles, tips, and tutorials on using free online tools. Learn about image compression, QR codes, PDF conversion, and more."
        keywords="online tools blog, image compression tips, QR code guide, PDF converter tutorial, free tools tips"
        canonicalUrl="/blog"
        structuredData={blogStructuredData}
      />
      <Header />
      
      <main className="container py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            ToolsKit Blog
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tips, tutorials, and guides to help you get the most out of our free online tools. 
            Learn new techniques and stay updated with the latest features.
          </p>
        </div>

        {/* Featured Post */}
        <Card className="mb-12 overflow-hidden glass-card border-border/50 hover:shadow-xl transition-shadow">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="aspect-video md:aspect-auto">
              <img 
                src={blogPosts[0].image} 
                alt={blogPosts[0].title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 md:p-8 flex flex-col justify-center">
              <Badge variant="secondary" className="w-fit mb-4">
                <Tag className="w-3 h-3 mr-1" />
                {blogPosts[0].category}
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 hover:text-primary transition-colors">
                <Link to={`/blog/${blogPosts[0].slug}`}>
                  {blogPosts[0].title}
                </Link>
              </h2>
              <p className="text-muted-foreground mb-4">
                {blogPosts[0].excerpt}
              </p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {new Date(blogPosts[0].date).toLocaleDateString('en-US', { 
                    month: 'short', 
                    day: 'numeric', 
                    year: 'numeric' 
                  })}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {blogPosts[0].readTime}
                </span>
              </div>
              <Link 
                to={`/blog/${blogPosts[0].slug}`}
                className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
              >
                Read Article <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </Card>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.slice(1).map((post) => (
            <Card key={post.id} className="overflow-hidden glass-card border-border/50 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="aspect-video">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader className="pb-2">
                <Badge variant="secondary" className="w-fit mb-2">
                  <Tag className="w-3 h-3 mr-1" />
                  {post.category}
                </Badge>
                <h3 className="text-lg font-semibold line-clamp-2 hover:text-primary transition-colors">
                  <Link to={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {new Date(post.date).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric'
                    })}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="mt-16 text-center p-8 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-border/50">
          <h2 className="text-2xl font-bold mb-2">Stay Updated</h2>
          <p className="text-muted-foreground mb-6">
            New tools and tutorials coming soon! Bookmark this page to stay updated.
          </p>
          <Link 
            to="/tools" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Explore All Tools <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
