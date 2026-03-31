import React from 'react';
import { Heart, Eye, Zap } from 'lucide-react';

const PhilosophySection = () => {
  return (
    <section className="philosophy-section scroll-animate py-20 md:py-32 bg-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-wine-dark opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-wine-red opacity-10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Main statement */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-cream mb-8 leading-tight">
            It's not just <span className="text-wine-red handwriting-display">editing</span>,
          </h2>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-cream leading-tight">
            it's <span className="text-wine-light handwriting-display">vibing with visuals</span>.
          </h2>
        </div>

        {/* Philosophy cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="philosophy-card bg-gradient-to-br from-wine-dark/20 to-transparent border border-wine-dark rounded-lg p-8 hover:border-wine-red transition-all duration-300">
            <div className="w-12 h-12 bg-wine-red bg-opacity-20 rounded-full flex items-center justify-center mb-6">
              <Heart className="w-6 h-6 text-wine-red" />
            </div>
            <h3 className="text-xl font-bold text-cream mb-4">Passion First</h3>
            <p className="text-cream-light text-sm leading-relaxed">
              Every project starts with understanding the heart of the story and what makes it worth telling.
            </p>
          </div>

          <div className="philosophy-card bg-gradient-to-br from-wine-dark/20 to-transparent border border-wine-dark rounded-lg p-8 hover:border-wine-red transition-all duration-300">
            <div className="w-12 h-12 bg-wine-red bg-opacity-20 rounded-full flex items-center justify-center mb-6">
              <Eye className="w-6 h-6 text-wine-red" />
            </div>
            <h3 className="text-xl font-bold text-cream mb-4">Visual Impact</h3>
            <p className="text-cream-light text-sm leading-relaxed">
              Colors, composition, and motion - every frame is crafted to capture attention and emotion.
            </p>
          </div>

          <div className="philosophy-card bg-gradient-to-br from-wine-dark/20 to-transparent border border-wine-dark rounded-lg p-8 hover:border-wine-red transition-all duration-300">
            <div className="w-12 h-12 bg-wine-red bg-opacity-20 rounded-full flex items-center justify-center mb-6">
              <Zap className="w-6 h-6 text-wine-red" />
            </div>
            <h3 className="text-xl font-bold text-cream mb-4">Energy Flow</h3>
            <p className="text-cream-light text-sm leading-relaxed">
              The right pacing, transitions, and rhythm turn good content into unforgettable experiences.
            </p>
          </div>
        </div>

        {/* Image showcase */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <img 
            src="https://images.unsplash.com/photo-1764557175375-9e2bea91530e"
            alt="Work sample 1"
            className="w-full h-48 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
          />
          <img 
            src="https://images.pexels.com/photos/29152435/pexels-photo-29152435.jpeg"
            alt="Work sample 2"
            className="w-full h-48 object-cover rounded-lg hover:scale-105 transition-transform duration-300 mt-8"
          />
          <img 
            src="https://images.unsplash.com/photo-1749322642648-217cac8af126"
            alt="Work sample 3"
            className="w-full h-48 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
          />
          <img 
            src="https://images.unsplash.com/photo-1695634365196-55e0eb4e4dee"
            alt="Work sample 4"
            className="w-full h-48 object-cover rounded-lg hover:scale-105 transition-transform duration-300 mt-8"
          />
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;