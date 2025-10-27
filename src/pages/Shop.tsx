import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import logo from "@/assets/slme-logo.png";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Shop = () => {
  const productRanges = [
    { letter: "S", gradient: "from-gradient-start to-primary" },
    { letter: "L", gradient: "from-secondary to-accent" },
    { letter: "M", gradient: "from-accent to-primary" },
    { letter: "E", gradient: "from-primary to-secondary" },
  ];

  const basicProducts = [
    {
      name: "BASIC WHITE",
      price: "Rs.3,250",
      bgColor: "bg-gray-100",
      textColor: "text-gray-900",
      borderColor: "border-blue-500/50",
      available: true,
    },
    {
      name: "BASIC BLACK",
      price: "Rs.3,450",
      bgColor: "bg-gray-900",
      textColor: "text-gray-100",
      borderColor: "border-blue-500/50",
      available: true,
    },
  ];

  const epicProducts = [
    {
      name: "METAL EPIC BLACK",
      price: "Coming Soon",
      bgColor: "bg-gradient-to-br from-gray-800 to-gray-900",
      textColor: "text-gray-100",
      borderColor: "border-orange-600/50",
      cardBg: "from-orange-700 to-orange-600",
      available: false,
    },
    {
      name: "METAL EPIC SILVER",
      price: "Coming Soon",
      bgColor: "bg-gradient-to-br from-gray-300 to-gray-400",
      textColor: "text-gray-900",
      borderColor: "border-orange-600/50",
      cardBg: "from-orange-700 to-orange-600",
      available: false,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section with Gradient */}
      <section className="relative pt-24 pb-32 overflow-hidden bg-secondary">
        {/* Gradient Background */}
        <div className="absolute inset-0 gradient-black-gold opacity-90" />
        
        {/* Wavy Bottom Border */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-24">
            <path
              fill="hsl(var(--background))"
              d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            />
          </svg>
        </div>
        
        {/* Content */}
        <div className="relative z-10 text-center px-6">
          <img 
            src={logo} 
            alt="Sl me" 
            className="h-48 w-48 mx-auto mb-8 animate-fade-up hover-gold-shine glow-gold rounded-full" 
          />
          <h1 className="font-playfair italic text-5xl md:text-6xl text-gold-gradient mb-4 animate-fade-up drop-shadow-[0_0_30px_rgba(255,215,0,0.5)]" style={{ animationDelay: '0.2s' }}>
            Sl me Cards
          </h1>
          <h2 className="text-4xl font-bold text-primary tracking-wide border-b-4 border-primary pb-2 inline-block animate-fade-up glow-border" style={{ animationDelay: '0.4s' }}>
            SHOP
          </h2>
        </div>
      </section>

      {/* Product Range Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-4 text-gold-gradient drop-shadow-[0_0_20px_rgba(255,215,0,0.3)]">
            PRODUCT RANGE
          </h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">
            We Have 4 Different Product Ranges And 14 Products.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
            {productRanges.map((range, index) => (
              <Card 
                key={index}
                className="aspect-[3/4] gradient-gold-shine border-2 border-primary/30 rounded-3xl flex items-center justify-center relative overflow-hidden hover-lift hover-glow animate-fade-up glow-border"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="font-playfair text-9xl text-secondary font-bold drop-shadow-[0_0_10px_rgba(0,0,0,0.5)]">
                  {range.letter}
                </span>
              </Card>
            ))}
          </div>

          {/* Basic Range Products */}
          <div className="mb-20">
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {basicProducts.map((product, index) => (
              <Card 
                key={index}
                className="glass-gold glow-border rounded-3xl p-6 space-y-4 hover-lift hover-glow hover-gold-shine animate-fade-up border-2 border-primary/20"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                  <Card className={`aspect-[3/2] ${product.bgColor} ${product.textColor} rounded-2xl border-none flex flex-col items-center justify-center p-6`}>
                    <div className="text-xl font-bold mb-1">YOUR NAME</div>
                    <div className="text-sm opacity-80">Company Name</div>
                  </Card>
                  
                  <h3 className="text-xl font-bold text-foreground text-center">
                    {product.name}
                  </h3>
                  
                  <div className="text-2xl font-bold text-foreground text-center">
                    {product.price}
                  </div>
                  
                  {product.available ? (
                    <Button className="w-full gradient-gold-shine text-secondary hover:shadow-[0_0_40px_hsl(var(--primary)/0.8)] font-bold border-0 hover-lift">
                      BUY
                    </Button>
                  ) : (
                    <Button className="w-full bg-secondary text-primary hover:bg-secondary/80 hover:shadow-[0_0_30px_hsl(var(--primary)/0.6)] font-bold border border-primary">
                      SEE MORE
                    </Button>
                  )}
                </Card>
              ))}
            </div>
          </div>

          {/* Epic Range Section */}
          <h2 className="text-4xl font-bold text-center mb-12 text-gold-gradient drop-shadow-[0_0_20px_rgba(255,215,0,0.3)]">
            EPIC RANGE
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {epicProducts.map((product, index) => (
              <Card 
                key={index}
                className="gradient-black-gold glow-border rounded-3xl p-6 space-y-4 hover-lift hover-glow hover-gold-shine animate-fade-up border-2 border-primary"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Card className={`aspect-[3/2] ${product.bgColor} ${product.textColor} rounded-2xl border-none flex flex-col items-center justify-center p-6 relative`}>
                  <div className="absolute top-4 right-4 text-2xl">📶</div>
                  <div className="text-xl font-bold mb-1">YOUR NAME</div>
                  <div className="text-xs opacity-80">Position | Company Name</div>
                </Card>
                
                <h3 className="text-xl font-bold text-foreground text-center">
                  {product.name}
                </h3>
                
                <div className="text-2xl font-bold text-foreground text-center">
                  {product.price}
                </div>
                
                {product.available ? (
                  <Button className="w-full gradient-gold-shine text-secondary hover:shadow-[0_0_40px_hsl(var(--primary)/0.8)] font-bold border-0 hover-lift">
                    BUY
                  </Button>
                ) : (
                  <Button className="w-full bg-secondary text-primary hover:bg-secondary/80 hover:shadow-[0_0_30px_hsl(var(--primary)/0.6)] font-bold border-2 border-primary hover-lift">
                    SEE MORE
                  </Button>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Shop;
