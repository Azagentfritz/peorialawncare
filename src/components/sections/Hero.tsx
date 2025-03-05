
const Hero = () => {
  return (
    <section 
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: 'url("/lovable-uploads/efde9a2b-46bb-45e0-9ec4-b91bd6ba2045.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      
      <div className="container mx-auto px-4 relative z-20 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block text-white/90 text-sm md:text-base uppercase tracking-wider mb-4 animate-fade-in">Welcome to Peoria Lawn Care</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-6 animate-fade-in" style={{ animationDelay: "100ms" }}>
            Transform Your Outdoor Space Into Paradise
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-8 animate-fade-in" style={{ animationDelay: "200ms" }}>
            Professional landscaping services in Phoenix delivering beautiful, functional outdoor spaces designed to last
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "300ms" }}>
            <a 
              href="#contact" 
              className="bg-lawn-500 hover:bg-lawn-600 text-white px-8 py-3 rounded-full transition-all duration-300 text-lg font-medium"
            >
              Get Free Quote
            </a>
            <a 
              href="#services" 
              className="bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-sm px-8 py-3 rounded-full transition-all duration-300 text-lg font-medium"
            >
              Our Services
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-subtle">
          <a href="#about" aria-label="Scroll down">
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="text-white"
            >
              <path 
                d="M12 5V19M12 19L19 12M12 19L5 12" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
