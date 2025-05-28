
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { FileText, ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const textToType = "Creating beautiful, functional, and user-friendly digital experiences with modern web technologies.";

  useEffect(() => {
    const handleTyping = () => {
      const current = loopNum % 1;
      const fullText = textToType;

      if (isDeleting) {
        setDisplayText(fullText.substring(0, displayText.length - 1));
        setTypingSpeed(50);
      } else {
        setDisplayText(fullText.substring(0, displayText.length + 1));
        setTypingSpeed(100);
      }

      if (!isDeleting && displayText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(150);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum, typingSpeed, textToType]);

  return (
    <div className="min-h-screen flex items-center justify-center relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8 animate-fade-in">
          {/* Main heading */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Hello, I'm
              </span>
            </h1>
            <h2 className="text-4xl md:text-6xl font-bold text-white">
              Your Name
            </h2>
            <p className="text-xl md:text-2xl text-blue-300 font-light">
              Web Designer & Developer
            </p>
          </div>

          {/* Typewriter text */}
          <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-white/80 leading-relaxed min-h-[3rem] flex items-center justify-center">
              {displayText}
              <span className="ml-1 w-0.5 h-6 bg-blue-400 animate-pulse"></span>
            </p>
          </div>

          {/* Call to action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
            <Button 
              size="lg"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0 px-8 py-3 text-lg hover-scale"
            >
              View My Work
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => window.open('#', '_blank')}
              className="border-white/30 text-white hover:bg-white/10 px-8 py-3 text-lg hover-scale"
            >
              <FileText className="mr-2" size={20} />
              Download CV
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400">50+</div>
              <div className="text-white/60">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400">3+</div>
              <div className="text-white/60">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-400">100%</div>
              <div className="text-white/60">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
