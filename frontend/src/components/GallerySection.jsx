import React, { useState } from 'react';

const GallerySection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const projects = [
    {
      image: 'https://images.unsplash.com/photo-1516131206008-dd041a9764fd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NjV8MHwxfHNlYXJjaHwxfHxncmFwaGljJTIwZGVzaWduJTIwbW9ja3VwJTIwcG9ydGZvbGlvfGVufDB8fHx8MTc3NDk3NTE0NXww&ixlib=rb-4.1.0&q=85',
      title: 'Digital Branding',
      category: 'Design'
    },
    {
      image: 'https://images.unsplash.com/photo-1695634365014-7debec896789?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NjV8MHwxfHNlYXJjaHwyfHxncmFwaGljJTIwZGVzaWduJTIwbW9ja3VwJTIwcG9ydGZvbGlvfGVufDB8fHx8MTc3NDk3NTE0NXww&ixlib=rb-4.1.0&q=85',
      title: 'Print Campaign',
      category: 'Print'
    },
    {
      image: 'https://images.pexels.com/photos/6567872/pexels-photo-6567872.jpeg',
      title: 'Creative Process',
      category: 'Behind the Scenes'
    },
    {
      image: 'https://images.unsplash.com/photo-1695634364857-cbbb46c47b59?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NjV8MHwxfHNlYXJjaHwzfHxncmFwaGljJTIwZGVzaWduJTIwbW9ja3VwJTIwcG9ydGZvbGxpb3xlbnwwfHx8fDE3NzQ5NzUxNDV8MA&ixlib=rb-4.1.0&q=85',
      title: 'Brand Identity',
      category: 'Design'
    },
    {
      image: 'https://images.pexels.com/photos/7129654/pexels-photo-7129654.jpeg',
      title: 'Editorial Work',
      category: 'Photography'
    },
    {
      image: 'https://images.unsplash.com/photo-1583121182724-6f84970c0e77?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA0MTJ8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHBvcnRmb2xpb3xlbnwwfHx8fDE3NzQ5NzUxNTR8MA&ixlib=rb-4.1.0&q=85',
      title: 'Portrait Series',
      category: 'Photography'
    }
  ];

  return (
    <section className="gallery-section scroll-animate py-20 md:py-32 bg-gradient-to-b from-[#0a0a0a] to-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section title */}
        <div className="mb-16">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h2 className="text-5xl md:text-7xl font-bold text-wine-red handwriting-display mb-2">
                Recent
              </h2>
              <h2 className="text-5xl md:text-7xl font-bold text-wine-light handwriting-display">
                Works
              </h2>
            </div>
            <div className="text-right">
              <p className="text-cream-light text-base md:text-lg handwriting-style">
                Some projects I'm proud of
              </p>
              <p className="text-wine-red text-sm mt-2">• Hover to explore •</p>
            </div>
          </div>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="gallery-item group relative overflow-hidden rounded-lg cursor-pointer"
              style={{
                height: index % 3 === 0 ? '400px' : index % 2 === 0 ? '350px' : '300px'
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300"></div>
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <div className="mb-2">
                  <span className="inline-block bg-wine-red bg-opacity-80 text-cream text-xs px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-cream group-hover:text-wine-light transition-colors duration-300">
                  {project.title}
                </h3>
              </div>

              {/* Corner accent */}
              <div className={`absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-wine-red transition-all duration-300 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;