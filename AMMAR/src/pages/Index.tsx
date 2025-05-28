
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, FileText, User, Book, Image } from 'lucide-react';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import PhotoGallery from '@/components/PhotoGallery';
import FloatingBackground from '@/components/FloatingBackground';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'skills', 'gallery'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-slate-900 text-white relative overflow-x-hidden">
      <FloatingBackground />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="text-xl font-bold text-gradient">
                Portfolio
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              {[
                { id: 'home', label: 'Home', icon: User },
                { id: 'about', label: 'About', icon: User },
                { id: 'projects', label: 'Projects', icon: Book },
                { id: 'skills', label: 'Skills', icon: FileText },
                { id: 'gallery', label: 'Gallery', icon: Image }
              ].map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 hover:bg-white/10 ${
                    activeSection === id ? 'bg-white/10 text-emerald-400 neon-glow' : 'text-white/80 hover:text-white'
                  }`}
                >
                  <Icon size={16} />
                  <span>{label}</span>
                </button>
              ))}
            </div>

            <Button 
              onClick={() => window.open('#', '_blank')}
              className="bg-gradient-primary hover:from-emerald-600 hover:to-teal-700 text-white border-0 neon-glow"
            >
              <FileText className="mr-2" size={16} />
              Download CV
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen relative">
        <HeroSection />
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection('about')}
            className="p-2 rounded-full glass hover:bg-white/20 transition-all duration-300 neon-glow"
          >
            <ArrowDown size={24} />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <AboutSection />
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative">
        <ProjectsSection />
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 relative">
        <SkillsSection />
      </section>

      {/* Photo Gallery Section */}
      <section id="gallery" className="py-20 relative">
        <PhotoGallery />
      </section>

      {/* Footer */}
      <footer className="glass border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-white/60">© 2024 Your Name. All rights reserved.</p>
          <p className="text-white/40 text-sm mt-2">Built with React, TypeScript, and Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
