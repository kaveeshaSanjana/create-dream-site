import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import NFCSection from "@/components/NFCSection";
import PackageSection from "@/components/PackageSection";
import ProductsSection from "@/components/ProductsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <NFCSection />
      <PackageSection />
      <ProductsSection />
    </div>
  );
};

export default Index;
