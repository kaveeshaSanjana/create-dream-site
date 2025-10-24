import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import NFCSection from "@/components/NFCSection";
import PackageSection from "@/components/PackageSection";
import ProductsSection from "@/components/ProductsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <NFCSection />
      <PackageSection />
      <ProductsSection />
      <Footer />
    </div>
  );
};

export default Index;
