import boxImage from "@/assets/box.png";
import { Plus } from "lucide-react";

const PackageSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl text-center mb-4 text-gold-gradient font-bold drop-shadow-[0_0_20px_rgba(255,215,0,0.3)]">
          WHAT'S IN OUR PACKAGE?
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mt-16">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="flex-1">
                <img 
                  src={boxImage} 
                  alt="Luxury Box" 
                  className="w-full h-auto rounded-2xl"
                />
                <p className="text-center text-foreground mt-4">
                  high quality card holing box with<br />
                  velvet interior & gold color texture.
                </p>
              </div>
            </div>
            
            <div className="flex justify-center">
              <Plus className="text-primary w-12 h-12" />
            </div>
            
            <div className="glass-gold glow-border rounded-2xl p-8 text-center hover-lift hover-glow">
              <div className="text-6xl mb-4">📱</div>
              <p className="text-foreground font-medium">
                1 x smart business card<br />
                with NFC chip inside
              </p>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="glass-gold glow-border rounded-2xl p-8 text-center hover-lift hover-glow">
              <div className="text-4xl mb-4">🛡️</div>
              <p className="text-foreground font-medium">
                1 x RFID credit / debit<br />
                card cover<br />
                (with short note)
              </p>
            </div>
            
            <div className="flex justify-center">
              <Plus className="text-primary w-12 h-12 drop-shadow-[0_0_10px_rgba(255,215,0,0.5)]" />
            </div>
            
            <div className="glass-gold glow-border rounded-2xl p-8 text-center hover-lift hover-glow">
              <div className="text-5xl mb-4">🪙🪙</div>
              <p className="text-foreground font-medium">2 x NFC coins</p>
            </div>
            
            <div className="flex justify-center">
              <Plus className="text-primary w-12 h-12 drop-shadow-[0_0_10px_rgba(255,215,0,0.5)]" />
            </div>
            
            <div className="glass-gold glow-border rounded-2xl p-8 text-center hover-lift hover-glow">
              <div className="text-4xl mb-4">📋</div>
              <p className="text-foreground font-medium">
                1 x transparent card cover<br />
                for your NFC card<br />
                (with short note)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PackageSection;
