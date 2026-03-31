import React from 'react';

const AboutSection = () => {
  return (
    <section className="about-section scroll-animate py-20 md:py-32 bg-gradient-to-b from-black to-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Story */}
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-cream-light text-base md:text-lg leading-relaxed handwriting-style">
                <span className="text-wine-light text-xl">Hey, curious</span>, and <span className="text-wine-light text-xl">I see you</span>. 
                <span className="block mt-2">Destined for the media world.</span>
              </p>
              <p className="text-cream text-base md:text-lg leading-relaxed">
                I'm just shy of 31, also had a whole <span className="text-wine-red font-medium">YouTube channel</span> for the vibes, with <span className="text-wine-red font-medium">100k followers</span> where we shared creative stories.
              </p>
            </div>

            <div className="relative my-8">
              <div className="flex items-center gap-8">
                <img 
                  src="https://images.unsplash.com/photo-1737575655055-e3967cbefd03" 
                  alt="Early days"
                  className="w-32 h-32 rounded-lg object-cover border-4 border-wine-dark shadow-lg transform -rotate-3 hover:rotate-0 transition-transform duration-300"
                />
                <div className="flex-1">
                  <svg className="w-full h-24" viewBox="0 0 200 100">
                    <path d="M 10 50 Q 60 10, 120 50 T 190 50" stroke="#8B1538" strokeWidth="2" fill="none" strokeDasharray="5,5" />
                  </svg>
                </div>
                <img 
                  src="https://images.pexels.com/photos/906457/pexels-photo-906457.jpeg" 
                  alt="Present day"
                  className="w-32 h-32 rounded-lg object-cover border-4 border-wine-red shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300"
                />
              </div>
            </div>

            <div className="bg-wine-dark bg-opacity-20 border border-wine-dark rounded-lg p-6 space-y-3">
              <p className="text-cream-light text-sm md:text-base leading-relaxed">
                After realizing her videos garnered more audience with a little
              </p>
              <p className="text-wine-light text-lg md:text-xl font-medium">
                aesthetic flair, she proudly hit 600 followers and
              </p>
              <p className="text-cream text-base md:text-lg">
                That's when it clicked: <span className="text-wine-red font-bold">people are suckers for pretty visuals.</span>
              </p>
            </div>
          </div>

          {/* Right side - Images */}
          <div className="grid grid-cols-2 gap-4">
            <img 
              src="https://images.unsplash.com/photo-1764557175375-9e2bea91530e"
              alt="Video editing"
              className="w-full h-64 object-cover rounded-lg hover:scale-105 transition-transform duration-300 shadow-xl"
            />
            <img 
              src="https://images.unsplash.com/photo-1757845524683-611470b2d7ce"
              alt="Behind the scenes"
              className="w-full h-64 object-cover rounded-lg hover:scale-105 transition-transform duration-300 shadow-xl mt-8"
            />
            <img 
              src="https://images.pexels.com/photos/11063289/pexels-photo-11063289.jpeg"
              alt="Studio setup"
              className="w-full h-64 object-cover rounded-lg hover:scale-105 transition-transform duration-300 shadow-xl -mt-8"
            />
            <img 
              src="https://images.unsplash.com/photo-1693159682618-074078ed271e"
              alt="Workspace"
              className="w-full h-64 object-cover rounded-lg hover:scale-105 transition-transform duration-300 shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;