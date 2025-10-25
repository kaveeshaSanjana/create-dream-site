import logo from "@/assets/slme-logo.png";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="text-center max-w-4xl mx-auto">
        <img 
          src={logo} 
          alt="Sl me" 
          className="h-64 w-64 mx-auto mb-8 drop-shadow-[0_0_40px_hsl(var(--primary)/0.5)] animate-fade-up hover:scale-105 transition-transform duration-500"
        />
        
        <h1 className="font-playfair italic text-5xl md:text-6xl lg:text-7xl text-primary mb-6 animate-fade-up" style={{ animationDelay: '0.2s' }}>
          Welcome to Sl me
        </h1>
        
        <h2 className="text-2xl md:text-3xl text-foreground tracking-[0.3em] mb-6 font-light animate-fade-up" style={{ animationDelay: '0.4s' }}>
          THINK IN A NEW WAY
        </h2>
        
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '0.6s' }}>
          Add Value To Your Business Or Anything And Design Your Infinite Ideas With Us. 
          We Will Add Great Value To Your Infinite Idea.
        </p>
        
        <Button 
          size="lg" 
          className="gradient-primary text-white hover:shadow-[0_0_40px_hsl(var(--primary)/0.6)] transition-all duration-300 px-8 py-6 text-lg hover-lift animate-fade-up border-0"
          style={{ animationDelay: '0.8s' }}
        >
          EXPLORE NOW
        </Button>
      </div>
    </section>
  );
};

export default Hero;
