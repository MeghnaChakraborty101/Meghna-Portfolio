import React, { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#1a0a0f] to-[#0a0a0a] opacity-90"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-wine-red opacity-10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-wine-dark opacity-15 rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
        {/* Greeting text */}
        <div className={`mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-cream-light text-xl md:text-2xl font-light tracking-wide mb-4 handwriting-style">Hi. Since you're here,</p>
          <p className="text-cream-light text-lg md:text-xl font-light tracking-wide handwriting-style">let me be your guide</p>
        </div>

        {/* Large name display */}
        <div className={`mb-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <h1 className="text-7xl md:text-9xl lg:text-[12rem] font-bold text-wine-red handwriting-display leading-none mb-4">
            Alex
          </h1>
          <h1 className="text-7xl md:text-9xl lg:text-[12rem] font-bold text-wine-light handwriting-display leading-none">
            Rivers
          </h1>
        </div>

        {/* Subtitle */}
        <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-cream text-base md:text-lg tracking-wider uppercase mb-4">Graphic Designer / Video Editor</p>
          <p className="text-cream-light text-sm md:text-base max-w-2xl mx-auto handwriting-style">By Alex Rivers</p>
        </div>

        {/* Scroll indicator */}
        <div className={`mt-16 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-2 text-wine-light animate-bounce">
            <Sparkles className="w-5 h-5" />
            <span className="text-sm tracking-wide">Scroll to explore</span>
          </div>
        </div>
      </div>

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
};

export default HeroSection;