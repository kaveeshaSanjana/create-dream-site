import nfcPhone from "@/assets/nfc-phone.png";
import nfcDemo from "@/assets/nfc-demo.png";

const NFCSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl text-center mb-16 text-primary font-bold tracking-wide border-b-2 border-primary pb-4 inline-block mx-auto block w-fit animate-fade-up">
          SL ME NFC CARDS
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-navy-light border-2 border-gold/30 rounded-3xl p-8 flex flex-col justify-center hover-lift animate-slide-in-left">
            <h3 className="text-3xl font-bold text-foreground mb-6">What is NFC?</h3>
            <p className="text-muted-foreground leading-relaxed">
              Near-field communication is a set of communication protocols that enables 
              communication between two electronic devices over a distance of 4 cm or less. 
              NFC offers a low-speed connection through a simple setup that can be used to 
              bootstrap more-capable wireless connections.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-3xl p-8 flex items-center justify-center hover-glow animate-slide-in-right">
            <img 
              src={nfcPhone} 
              alt="NFC Technology" 
              className="w-full h-auto max-w-md object-contain"
            />
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-3xl p-8 flex items-center justify-center order-2 md:order-1 hover-glow animate-slide-in-left">
            <img 
              src={nfcDemo} 
              alt="How NFC Works" 
              className="w-full h-auto max-w-md object-contain"
            />
          </div>
          
          <div className="bg-navy-light border-2 border-gold/30 rounded-3xl p-8 flex flex-col justify-center order-1 md:order-2 hover-lift animate-slide-in-right">
            <h3 className="text-3xl font-bold text-foreground mb-6">How to work?</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
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
