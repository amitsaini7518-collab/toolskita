import { Link } from "react-router-dom";
import { Wrench, Heart, Linkedin, Github } from "lucide-react";
import donateQr from "@/assets/donate-qr.png";

const SocialLinks = () => {
  return (
    <div className="flex items-center gap-3 mt-4">
      <a 
        href="https://www.linkedin.com/in/amit-saini-779aa138a" 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#0077B5] text-white hover:opacity-80 transition-opacity"
      >
        <Linkedin className="w-5 h-5" />
      </a>
      <a 
        href="https://github.com/amit-kumar-saini" 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#333] text-white hover:opacity-80 transition-opacity"
      >
        <Github className="w-5 h-5" />
      </a>
    </div>
  );
};

const DonateSection = () => {
  return (
    <div id="donate" className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-5 border border-primary/20">
      <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
        <Heart className="w-5 h-5 text-destructive animate-pulse" /> Support Us
      </h3>
      <p className="text-sm text-muted-foreground mb-4">
        Help us keep this free & secure for everyone!
      </p>
      <div className="bg-white rounded-xl p-3 w-fit shadow-lg mx-auto md:mx-0">
        <img src={donateQr} alt="Donate QR Code" className="w-36 h-36 rounded-lg" />
      </div>
      <p className="text-xs text-muted-foreground mt-3 flex items-center gap-1">
        📱 Scan QR to donate via UPI
      </p>
      <a 
        href="#donate" 
        className="inline-flex items-center gap-2 mt-4 px-5 py-2.5 bg-primary text-primary-foreground rounded-full font-medium text-sm hover:opacity-90 transition-opacity shadow-md"
      >
        <Heart className="w-4 h-4" /> Donate Now
      </a>
      <SocialLinks />
    </div>
  );
};

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
              <span className="text-xl font-bold gradient-text">ToolsKit.tech</span>
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

          <DonateSection />
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 ToolsKit.tech. All rights reserved.
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
