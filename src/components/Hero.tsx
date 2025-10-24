import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="text-center max-w-4xl mx-auto">
        <img 
          src={logo} 
          alt="LuviRoyal" 
          className="h-64 w-64 mx-auto mb-8 drop-shadow-[0_0_30px_rgba(212,175,55,0.3)]" 
        />
        
        <h1 className="font-playfair italic text-5xl md:text-6xl lg:text-7xl text-primary mb-6">
          Welcome to LuviRoyal
        </h1>
        
        <h2 className="text-2xl md:text-3xl text-foreground tracking-[0.3em] mb-6 font-light">
          THINK IN A NEW WAY
        </h2>
        
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Add Value To Your Business Or Anything And Design Your Infinite Ideas With Us. 
          We Will Add Great Value To Your Infinite Idea.
        </p>
        
        <Button 
          size="lg" 
          className="bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 px-8 py-6 text-lg"
        >
          EXPLORE NOW
        </Button>
      </div>
    </section>
  );
};

export default Hero;
