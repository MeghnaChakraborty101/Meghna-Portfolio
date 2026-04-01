import React from 'react';
import { Mail, Linkedin, Instagram, Twitter, Heart } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Mail, label: 'Email', href: 'mailto:hello@alexrivers.com' },
    { icon: Linkedin, label: 'LinkedIn', href: '#' },
    { icon: Instagram, label: 'Instagram', href: '#' },
    { icon: Twitter, label: 'Twitter', href: '#' }
  ];

  return (
    <footer className="footer bg-gradient-to-b from-[#0a0a0a] to-black border-t border-wine-dark py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-3xl font-bold text-wine-red handwriting-display mb-3">
              Meghna Chakraborty
            </h3>
            <p className="text-cream-light text-sm leading-relaxed">
              Graphic Designer & Video Editor crafting visual stories that resonate.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-cream font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-cream-light text-sm hover:text-wine-light transition-colors duration-200">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="text-cream-light text-sm hover:text-wine-light transition-colors duration-200">
                  Services
                </a>
              </li>
              <li>
                <a href="#work" className="text-cream-light text-sm hover:text-wine-light transition-colors duration-200">
                  Work
                </a>
              </li>
              <li>
                <a href="#contact" className="text-cream-light text-sm hover:text-wine-light transition-colors duration-200">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social links */}
          <div>
            <h4 className="text-cream font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-wine-dark bg-opacity-30 hover:bg-wine-red hover:bg-opacity-80 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    <Icon className="w-5 h-5 text-cream-light hover:text-cream transition-colors duration-300" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-wine-dark">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-cream-light text-sm">
              © 2025 Alex Rivers. All rights reserved.
            </p>
            <p className="text-cream-light text-sm flex items-center gap-2">
              Made with <Heart className="w-4 h-4 text-wine-red fill-wine-red" /> and creativity
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;