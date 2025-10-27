import nfcPhone from "@/assets/nfc-phone.png";
import nfcDemo from "@/assets/nfc-demo.png";

const NFCSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl text-center mb-16 text-gold-gradient font-bold tracking-wide border-b-2 border-primary pb-4 inline-block mx-auto block w-fit animate-fade-up glow-border">
          SL ME NFC CARDS
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="glass-gold glow-border rounded-3xl p-8 flex flex-col justify-center hover-lift hover-glow animate-slide-in-left">
            <h3 className="text-3xl font-bold text-primary mb-6">What is NFC?</h3>
            <p className="text-foreground leading-relaxed">
              Near-field communication is a set of communication protocols that enables 
              communication between two electronic devices over a distance of 4 cm or less. 
              NFC offers a low-speed connection through a simple setup that can be used to 
              bootstrap more-capable wireless connections.
            </p>
          </div>
          
          <div className="gradient-black-gold rounded-3xl p-8 flex items-center justify-center hover-glow hover-lift animate-slide-in-right border-2 border-primary/30">
            <img 
              src={nfcPhone} 
              alt="NFC Technology" 
              className="w-full h-auto max-w-md object-contain"
            />
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="gradient-black-gold rounded-3xl p-8 flex items-center justify-center order-2 md:order-1 hover-glow hover-lift animate-slide-in-left border-2 border-primary/30">
            <img 
              src={nfcDemo} 
              alt="How NFC Works" 
              className="w-full h-auto max-w-md object-contain"
            />
          </div>
          
          <div className="glass-gold glow-border rounded-3xl p-8 flex flex-col justify-center order-1 md:order-2 hover-lift hover-glow animate-slide-in-right">
            <h3 className="text-3xl font-bold text-primary mb-6">How to work?</h3>
            <p className="text-foreground leading-relaxed mb-4">
              Tap the Our Business card on smartphone and instantly share your website, 
              contact details, social media or profile via near field communication (NFC).
            </p>
            <p className="text-sm text-muted-foreground italic">
              *If the phone doesn't have NFC feature, You can scan the QR code on the back 
              of every card we give you and open your website, contact details, social media 
              or profile.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NFCSection;
