import { Button } from "@/components/ui/button";
import { UserCircle } from "lucide-react";
import logo from "@/assets/slme-logo.png";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-primary/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 hover-gold-shine">
            <img src={logo} alt="Sl me" className="h-12 w-12 glow-gold rounded-full" />
            <span className="font-playfair italic text-2xl text-gold-gradient font-bold">Sl me</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-foreground hover:text-primary transition-all duration-300 font-medium hover:scale-110">
              HOME
            </a>
            <a href="/shop" className="text-foreground hover:text-primary transition-all duration-300 font-medium hover:scale-110">
              SHOP
            </a>
            <a href="#profile" className="text-foreground hover:text-primary transition-all duration-300 font-medium hover:scale-110">
              SL ME PROFILE
            </a>
            <a href="/contact" className="text-foreground hover:text-primary transition-all duration-300 font-medium hover:scale-110">
              CONTACT US
            </a>
            <a href="#privacy" className="text-foreground hover:text-primary transition-all duration-300 font-medium hover:scale-110">
              PRIVACY POLICY
            </a>
          </div>

          <Button variant="ghost" size="icon" className="text-primary hover:text-primary hover:bg-primary/10 hover-gold-shine">
            <UserCircle className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
