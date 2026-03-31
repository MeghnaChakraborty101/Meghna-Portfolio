import React from 'react';
import { Monitor, Layers, Sparkles, Palette, Film, Code } from 'lucide-react';

const SkillsSection = () => {
  const skills = [
    { icon: Monitor, name: 'Premiere Pro', level: 95 },
    { icon: Palette, name: 'After Effects', level: 90 },
    { icon: Film, name: 'Final Cut Pro', level: 85 },
    { icon: Layers, name: 'Photoshop', level: 92 },
    { icon: Code, name: 'Illustrator', level: 88 },
    { icon: Sparkles, name: 'DaVinci Resolve', level: 80 }
  ];

  return (
    <section className="skills-section scroll-animate py-20 md:py-32 bg-gradient-to-b from-black to-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-16">
          <h2 className="text-5xl md:text-7xl font-bold text-wine-red handwriting-display mb-4">
            Skills
          </h2>
          <h2 className="text-4xl md:text-6xl font-bold text-wine-light handwriting-display mb-6">
            I work with
          </h2>
          <p className="text-cream-light text-lg max-w-2xl handwriting-style">
            Tools and software I use to bring ideas to life
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div key={index} className="skill-item">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-wine-dark bg-opacity-30 rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-wine-light" />
                    </div>
                    <span className="text-cream text-lg font-medium">{skill.name}</span>
                  </div>
                  <span className="text-wine-red text-sm font-bold">{skill.level}%</span>
                </div>
                
                {/* Progress bar */}
                <div className="relative h-3 bg-wine-dark bg-opacity-20 rounded-full overflow-hidden">
                  <div 
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-wine-dark to-wine-red rounded-full transition-all duration-1000 ease-out skill-bar"
                    style={{ width: `${skill.level}%` }}
                  >
                    <div className="absolute inset-0 bg-white opacity-20 animate-shimmer"></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional note */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-wine-dark bg-opacity-20 border border-wine-dark rounded-lg px-8 py-6">
            <p className="text-cream-light text-base md:text-lg handwriting-style">
              Plus a whole lot of curiosity and dedication to learning new tools
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;