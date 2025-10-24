import Navigation from "@/components/Navigation";
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Shop = () => {
  const productRanges = [
    { letter: "L", gradient: "from-blue-600 to-blue-400" },
    { letter: "u", gradient: "from-yellow-700 to-yellow-500" },
    { letter: "v", gradient: "from-pink-700 to-pink-500" },
    { letter: "i", gradient: "from-teal-600 to-teal-400", dot: true },
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
    {
      name: "METAL BASIC BLACK",
      price: "Coming Soon",
      bgColor: "bg-gradient-to-br from-gray-800 to-gray-900",
      textColor: "text-gray-100",
      borderColor: "border-teal-500/50",
      available: false,
    },
    {
      name: "METAL BASIC SILVER",
      price: "Coming Soon",
      bgColor: "bg-gradient-to-br from-gray-300 to-gray-400",
      textColor: "text-gray-900",
      borderColor: "border-teal-500/50",
      available: false,
    },
  ];

  const epicProducts = [
    {
      name: "EPIC WHITE",
      price: "Rs.3,450",
      bgColor: "bg-gray-100",
      textColor: "text-gray-900",
      borderColor: "border-yellow-600/50",
      cardBg: "from-yellow-700 to-yellow-600",
      available: true,
    },
    {
      name: "EPIC BLACK",
      price: "Rs.3,650",
      bgColor: "bg-gray-900",
      textColor: "text-gray-100",
      borderColor: "border-yellow-600/50",
      cardBg: "from-yellow-700 to-yellow-600",
      available: true,
    },
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
      name: "METALEPIC SILVER",
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
      <section className="relative pt-24 pb-32 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-600 via-purple-500 to-blue-500 opacity-90" />
        
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
            alt="LuviRoyal" 
            className="h-48 w-48 mx-auto mb-8" 
          />
          <h1 className="font-playfair italic text-5xl md:text-6xl text-primary mb-4">
            Luviroyal Cards
          </h1>
          <h2 className="text-4xl font-bold text-primary tracking-wide border-b-4 border-primary pb-2 inline-block">
            SHOP
          </h2>
        </div>
      </section>

      {/* Product Range Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-4 text-foreground">
            PRODUCT RANGE
          </h2>
          <p className="text-center text-muted-foreground mb-16">
            We Have 4 Different Product Ranges And 14 Products.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
            {productRanges.map((range, index) => (
              <Card 
                key={index}
                className={`aspect-[3/4] bg-gradient-to-br ${range.gradient} border-none rounded-3xl flex items-center justify-center relative overflow-hidden`}
              >
                {range.dot && (
                  <div className="absolute top-12 right-1/2 transform translate-x-1/2 w-16 h-16 bg-primary rounded-full" />
                )}
                <span className="font-playfair italic text-9xl text-primary font-bold">
                  {range.letter}
                </span>
              </Card>
            ))}
          </div>

          {/* Basic Range Products */}
          <div className="mb-20">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {basicProducts.map((product, index) => (
                <Card 
                  key={index}
                  className={`bg-navy-light border-2 ${product.borderColor} rounded-3xl p-6 space-y-4`}
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
                    <Button className="w-full bg-foreground text-background hover:bg-foreground/90 font-bold">
                      BUY
                    </Button>
                  ) : (
                    <Button className="w-full bg-foreground text-background hover:bg-foreground/90 font-bold">
                      SEE MORE
                    </Button>
                  )}
                </Card>
              ))}
            </div>
          </div>

          {/* Epic Range Section */}
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
            EPIC RANGE
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {epicProducts.map((product, index) => (
              <Card 
                key={index}
                className={`bg-gradient-to-br ${product.cardBg} border-2 ${product.borderColor} rounded-3xl p-6 space-y-4`}
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
                  <Button className="w-full bg-foreground text-background hover:bg-foreground/90 font-bold">
                    BUY
                  </Button>
                ) : (
                  <Button className="w-full bg-foreground text-background hover:bg-foreground/90 font-bold">
                    SEE MORE
                  </Button>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;
