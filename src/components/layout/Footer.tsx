import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Github size={20} />, href: 'https://github.com/YUNESHKUMAR11', label: 'GitHub' },
    { icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/in/yuneshkumar-11yk/', label: 'LinkedIn' },
    { icon: <Twitter size={20} />, href: 'https://x.com/YuneshKumar_11', label: 'Twitter' },
    { icon: <Instagram size={20} />, href: 'https://www.instagram.com/the_yunesh_kumar.11/', label: 'Instagram' },
    { icon: <Mail size={20} />, href: 'mailto:zyuvneshkumar@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="relative z-10 bg-dark-900 border-t border-dark-300">
      <div className="container-section py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and tagline */}
          <div className="flex flex-col">
            <a href="#home" className="text-xl font-mono font-bold text-white flex items-center">
              <span className="text-white">&lt;</span>
               YUNESH KUMAR 
              <span className="text-white">/&gt;</span>
            </a>
            <p className="mt-4 text-gray-400 text-sm max-w-xs">
              Computer Science Engineer, Application Developer, and Machine Learning Engineer creating ML modules, performant ml experiences.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Me</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-white transition-colors">Projects</a></li>
              <li><a href="#experience" className="text-gray-400 hover:text-white transition-colors">Experience</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Social links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Me</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  aria-label={link.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-dark-300 text-gray-400 hover:text-black hover:bg-white transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-dark-300 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Yunesh. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2 md:mt-0">
            Designed & Built with 🖤
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;