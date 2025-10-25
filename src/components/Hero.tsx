import logo from "@/assets/slme-logo.png";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden bg-secondary">
      {/* Gradient Background */}
      <div className="absolute inset-0 gradient-black-gold opacity-90" />
      
      {/* Animated Gold Particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-ping" style={{ animationDuration: '3s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-accent rounded-full animate-ping" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-primary rounded-full animate-ping" style={{ animationDuration: '5s', animationDelay: '2s' }}></div>
      </div>
      
      <div className="text-center max-w-4xl mx-auto relative z-10">
        <img 
          src={logo} 
          alt="Sl me" 
          className="h-64 w-64 mx-auto mb-8 animate-fade-up hover-gold-shine hover:scale-110 transition-transform duration-300 glow-gold rounded-full"
        />
        
        <h1 className="font-playfair italic text-5xl md:text-6xl lg:text-7xl text-gold-gradient mb-6 animate-fade-up hover-lift drop-shadow-[0_0_30px_rgba(255,215,0,0.5)]" style={{ animationDelay: '0.2s' }}>
          Welcome to Sl me
        </h1>
        
        <h2 className="text-2xl md:text-3xl text-primary tracking-[0.3em] mb-6 font-light animate-fade-up" style={{ animationDelay: '0.4s' }}>
          THINK IN A NEW WAY
        </h2>
        
        <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '0.6s' }}>
          Add Value To Your Business Or Anything And Design Your Infinite Ideas With Us. 
          We Will Add Great Value To Your Infinite Idea.
        </p>
        
        <Button 
          size="lg" 
          className="gradient-gold-shine text-secondary hover:shadow-[0_0_40px_hsl(var(--primary)/0.8)] transition-all duration-300 px-8 py-6 text-lg hover-lift animate-fade-up border-0 font-bold"
          style={{ animationDelay: '0.8s' }}
        >
          EXPLORE NOW
        </Button>
      </div>
    </section>
  );
};

export default Hero;
