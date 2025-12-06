import { Link } from "react-router-dom";
import { Wrench, Heart } from "lucide-react";

const Footer = () => {
  const toolCategories = [
    { name: "Image Tools", path: "/tools?category=image" },
    { name: "PDF Tools", path: "/tools?category=pdf" },
    { name: "Calculators", path: "/tools?category=calculator" },
    { name: "Utilities", path: "/tools?category=utility" },
  ];

  const quickLinks = [
    { name: "About Us", path: "/about" },
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms of Service", path: "/terms" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="bg-card border-t border-border mt-16">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Wrench className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold gradient-text">AllTool.tech</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Your all-in-one toolkit for everyday tasks. Fast, free, and easy to use.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Tool Categories</h3>
            <ul className="space-y-2">
              {toolCategories.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Ad Space</h3>
            <div className="ad-space h-32">
              Advertisement
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 AllTool.tech. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-destructive" /> for productivity
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
