import { Button } from "@/components/ui/button";
import { UserCircle } from "lucide-react";
import logo from "@/assets/slme-logo.png";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-primary/30 shadow-lg">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src={logo} alt="Sl me" className="h-12 w-12" />
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-foreground hover:text-primary transition-colors font-medium">
              HOME
            </a>
            <a href="/shop" className="text-foreground hover:text-primary transition-colors font-medium">
              SHOP
            </a>
            <a href="#profile" className="text-foreground hover:text-primary transition-colors font-medium">
              SL ME PROFILE
            </a>
            <a href="/contact" className="text-foreground hover:text-primary transition-colors font-medium">
              CONTACT US
            </a>
            <a href="#privacy" className="text-foreground hover:text-primary transition-colors font-medium">
              PRIVACY POLICY
            </a>
          </div>

          <Button variant="ghost" size="icon" className="text-foreground hover:text-primary hover:bg-transparent">
            <UserCircle className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
