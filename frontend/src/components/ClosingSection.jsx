import React from 'react';
import { ArrowRight } from 'lucide-react';

const ClosingSection = () => {
  return (
    <section className="closing-section scroll-animate py-20 md:py-32 bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-wine-red opacity-5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Main content */}
        <div className="text-center mb-12">
          <div className="mb-8">
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold handwriting-display leading-tight mb-6">
              <span className="text-wine-light">and that's</span>
            </h2>
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold text-wine-red handwriting-display leading-none">
              a wrap.
            </h2>
          </div>

          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-cream-light text-lg md:text-xl leading-relaxed handwriting-style mb-6">
              Thank you for taking the time to explore my creative journey.
            </p>
            <p className="text-cream text-base md:text-lg leading-relaxed">
              If you're interested in collaborating, creating something amazing together, or just want to chat about visuals and storytelling, I'd love to hear from you.
            </p>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center">
            <button className="group relative bg-wine-red hover:bg-wine-dark text-cream font-medium px-8 py-4 rounded-lg transition-all duration-300 hover:shadow-2xl hover:shadow-wine-red/30 hover:scale-105 flex items-center gap-3">
              <span className="text-lg">Let's Create Together</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="flex justify-center items-center gap-8 mt-16">
          <div className="w-24 h-px bg-gradient-to-r from-transparent to-wine-dark"></div>
          <div className="text-wine-red text-2xl">•</div>
          <div className="w-24 h-px bg-gradient-to-l from-transparent to-wine-dark"></div>
        </div>
      </div>
    </section>
  );
};

export default ClosingSection;