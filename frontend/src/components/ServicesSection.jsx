import React from 'react';
import { Film, Palette, Wand2, Sparkles } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Film,
      title: 'Video Editing',
      description: 'Crafting compelling stories through seamless cuts and dynamic transitions',
      skills: ['Color Grading', 'Motion Graphics', 'Sound Design']
    },
    {
      icon: Palette,
      title: 'Graphic Design',
      description: 'Creating visual identities that capture attention and communicate clearly',
      skills: ['Brand Identity', 'Print Design', 'Digital Assets']
    },
    {
      icon: Wand2,
      title: 'Creative Direction',
      description: 'Bringing concepts to life with strategic vision and artistic execution',
      skills: ['Art Direction', 'Storyboarding', 'Concept Development']
    }
  ];

  return (
    <section className="services-section scroll-animate py-20 md:py-32 bg-black relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-wine-red opacity-5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <Sparkles className="w-6 h-6 text-wine-light" />
            <h2 className="text-4xl md:text-6xl font-bold text-wine-red handwriting-display">What I Do</h2>
            <Sparkles className="w-6 h-6 text-wine-light" />
          </div>
          <p className="text-cream-light text-lg max-w-2xl mx-auto handwriting-style">
            I love content creating yay - I do video editing, storytelling, and everything that goes with it.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="service-card group bg-gradient-to-br from-[#1a0a0f] to-black border border-wine-dark rounded-lg p-8 hover:border-wine-red transition-all duration-300 hover:shadow-2xl hover:shadow-wine-red/20 hover:-translate-y-2"
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-wine-dark bg-opacity-30 rounded-lg flex items-center justify-center group-hover:bg-wine-red group-hover:bg-opacity-20 transition-all duration-300">
                    <Icon className="w-8 h-8 text-wine-light group-hover:text-wine-red transition-colors duration-300" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-cream mb-3 group-hover:text-wine-light transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-cream-light text-base leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="space-y-2">
                  {service.skills.map((skill, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-wine-red rounded-full"></div>
                      <span className="text-cream text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional info */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-wine-dark bg-opacity-20 border border-wine-dark rounded-full px-8 py-4">
            <p className="text-cream-light text-base handwriting-style">
              and yes, for aesthetics <span className="text-wine-red">✨</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;