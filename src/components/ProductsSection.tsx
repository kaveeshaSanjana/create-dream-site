import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const products = [
  {
    name: "BASIC WHITE",
    price: "Rs.3,250",
    image: "white",
    available: true,
  },
  {
    name: "BASIC BLACK",
    price: "Rs.3,450",
    image: "black",
    available: true,
  },
  {
    name: "METAL BASIC BLACK",
    price: "Coming Soon",
    category: "METAL",
    image: "metal-black",
    available: false,
  },
  {
    name: "METAL BASIC SILVER",
    price: "Coming Soon",
    category: "METAL",
    image: "metal-silver",
    available: false,
  },
];

const ProductsSection = () => {
  return (
    <section id="shop" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl text-center mb-4 text-muted-foreground">
          The Basic range is 4 different products.
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {products.map((product, index) => (
            <div key={index} className="space-y-4">
              {product.category && (
                <div className="text-primary text-xl font-bold tracking-[0.3em] text-center">
                  {product.category}
                </div>
              )}
              
              <h3 className="text-2xl font-bold text-foreground text-center">
                {product.name}
              </h3>
              
              <Button 
                variant="link" 
                className="text-foreground hover:text-primary w-full"
              >
                {product.available ? "See all features 👁️" : "See some features 👁️"}
              </Button>
              
              <div className="text-3xl font-bold text-foreground text-center">
                {product.price}
              </div>
              
              <Card className={`aspect-[3/2] rounded-2xl overflow-hidden border-2 ${
                product.image === "white" 
                  ? "bg-gray-100" 
                  : product.image === "black"
                  ? "bg-gray-900"
                  : product.image === "metal-black"
                  ? "bg-gradient-to-br from-gray-800 to-gray-900"
                  : "bg-gradient-to-br from-gray-300 to-gray-400"
              } border-gold/30 flex flex-col items-center justify-center p-8`}>
                <div className={`text-2xl font-bold mb-2 ${
                  product.image === "white" ? "text-gray-900" : "text-gray-100"
                }`}>
                  YOUR NAME
                </div>
                <div className={`text-sm ${
                  product.image === "white" ? "text-gray-600" : "text-gray-300"
                }`}>
                  Company name
                </div>
              </Card>
              
              <Card className={`aspect-[3/2] rounded-2xl overflow-hidden border-2 ${
                product.image === "white" 
                  ? "bg-gray-100" 
                  : product.image === "black"
                  ? "bg-gray-900"
                  : product.image === "metal-black"
                  ? "bg-gradient-to-br from-gray-800 to-gray-900"
                  : "bg-gradient-to-br from-gray-300 to-gray-400"
              } border-gold/30 flex flex-col items-center justify-between p-8`}>
                <div className={`text-xl font-bold ${
                  product.image === "white" ? "text-gray-900" : "text-gray-100"
                }`}>
                  YOUR NAME
                </div>
                <div className="text-4xl">
                  {product.available ? "📱" : ""}
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
