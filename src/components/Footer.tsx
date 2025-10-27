import logo from "@/assets/slme-logo.png";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t-2 border-primary/30 py-12 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img src={logo} alt="Sl me" className="h-16 w-16 glow-gold rounded-full" />
              <h3 className="text-2xl font-bold text-gold-gradient">Sl me</h3>
            </div>
            <p className="text-white/90 mb-4">
              Think In A New Way. Premium NFC business cards with smart technology for modern professionals.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary hover:text-secondary transition-all duration-300 hover-lift hover-glow">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary hover:text-secondary transition-all duration-300 hover-lift hover-glow">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary hover:text-secondary transition-all duration-300 hover-lift hover-glow">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary hover:text-secondary transition-all duration-300 hover-lift hover-glow">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold text-primary mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-white/90 hover:text-primary transition-all duration-300 hover:translate-x-2 inline-block">
                  Home
                </a>
              </li>
              <li>
                <a href="/shop" className="text-white/90 hover:text-primary transition-all duration-300 hover:translate-x-2 inline-block">
                  Shop
                </a>
              </li>
              <li>
                <a href="#profile" className="text-white/90 hover:text-primary transition-all duration-300 hover:translate-x-2 inline-block">
                  Sl me Profile
                </a>
              </li>
              <li>
                <a href="/contact" className="text-white/90 hover:text-primary transition-all duration-300 hover:translate-x-2 inline-block">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold text-primary mb-4">Contact</h4>
            <ul className="space-y-2 text-white/90">
              <li className="hover:text-primary transition-colors cursor-pointer">(+94) 78 4896242</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Galle, Sri Lanka, 80500</li>
              <li className="hover:text-primary transition-colors cursor-pointer">info@slme.com</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary/30 pt-6 text-center">
          <p className="text-white/80">
            © 2025 <span className="text-primary font-bold">Sl me</span>. All rights reserved. | <a href="#privacy" className="hover:text-primary transition-colors">Privacy Policy</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
