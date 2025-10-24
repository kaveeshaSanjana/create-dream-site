import logo from "@/assets/slme-logo.png";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy-light border-t-2 border-gold/20 py-12 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img src={logo} alt="Sl me" className="h-16 w-16" />
              <h3 className="text-2xl font-bold text-primary">Sl me</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Think In A New Way. Premium NFC business cards with smart technology for modern professionals.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary hover:text-background transition-all duration-300 hover-lift">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary hover:text-background transition-all duration-300 hover-lift">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary hover:text-background transition-all duration-300 hover-lift">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary hover:text-background transition-all duration-300 hover-lift">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/shop" className="text-muted-foreground hover:text-primary transition-colors">
                  Shop
                </a>
              </li>
              <li>
                <a href="#profile" className="text-muted-foreground hover:text-primary transition-colors">
                  Sl me Profile
                </a>
              </li>
              <li>
                <a href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold text-foreground mb-4">Contact</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>(+94) 78 4896242</li>
              <li>Galle, Sri Lanka, 80500</li>
              <li>info@slme.com</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gold/20 pt-6 text-center">
          <p className="text-muted-foreground">
            © 2025 Sl me. All rights reserved. | <a href="#privacy" className="hover:text-primary transition-colors">Privacy Policy</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
