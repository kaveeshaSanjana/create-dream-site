import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import logo from "@/assets/slme-logo.png";
import { Card } from "@/components/ui/card";
import { Phone, MapPin, Mail } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "PHONE NUMBER",
      details: ["(+94) 78 4896242"],
    },
    {
      icon: MapPin,
      title: "LOCATION",
      details: ["Galle,", "Sri Lanka, 80500"],
    },
    {
      icon: Mail,
      title: "EMAIL",
      details: ["info@slme.com,", "slme@gmail.com"],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section with Pink Gradient */}
      <section className="relative pt-24 pb-32 overflow-hidden">
        {/* Pink Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-pink-600 via-pink-500 to-pink-600 opacity-90" />
        
        {/* Wavy Top Border */}
        <div className="absolute top-16 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-24 rotate-180">
            <path
              fill="hsl(220, 50%, 8%)"
              d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            />
          </svg>
        </div>
        
        {/* Wavy Bottom Border */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-24">
            <path
              fill="hsl(220, 50%, 8%)"
              d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            />
          </svg>
        </div>
        
        {/* Content */}
        <div className="relative z-10 text-center px-6">
          <img 
            src={logo} 
            alt="Sl me" 
            className="h-48 w-48 mx-auto mb-8 animate-fade-up" 
          />
          <h1 className="font-playfair italic text-5xl md:text-6xl text-primary mb-4 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Sl me Cards
          </h1>
          <h2 className="text-4xl font-bold text-primary tracking-wide border-b-4 border-primary pb-2 inline-block animate-fade-up" style={{ animationDelay: '0.4s' }}>
            CONTACT US
          </h2>
        </div>
      </section>

      {/* Contact Cards Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            {contactInfo.map((contact, index) => {
              const Icon = contact.icon;
              return (
                <Card 
                  key={index}
                  className="bg-navy-light border-2 border-gold/40 rounded-3xl p-12 flex flex-col items-center text-center space-y-6 hover:border-gold/60 hover-lift animate-fade-up transition-all duration-300"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-gold to-gold-light flex items-center justify-center">
                    <Icon className="w-12 h-12 text-navy" strokeWidth={2.5} />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-foreground tracking-wide">
                    {contact.title}
                  </h3>
                  
                  <div className="text-muted-foreground space-y-1">
                    {contact.details.map((detail, idx) => (
                      <p key={idx} className="text-lg">
                        {detail}
                      </p>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
