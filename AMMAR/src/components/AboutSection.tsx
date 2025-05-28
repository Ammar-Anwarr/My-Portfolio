
import { Card, CardContent } from "@/components/ui/card";
import { User, Code, Palette, Zap } from 'lucide-react';

const AboutSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </span>
        </h2>
        <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
          I'm a passionate web designer and developer with a love for creating 
          digital experiences that are both beautiful and functional.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Profile Image */}
        <div className="relative group">
          <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-400/20 to-purple-400/20 backdrop-blur-sm border border-white/10 overflow-hidden hover-scale">
            <img 
              src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
        </div>

        {/* About Content */}
        <div className="space-y-8">
          <div className="space-y-6">
            <p className="text-lg text-white/80 leading-relaxed">
              With over 3 years of experience in web development, I specialize in creating 
              modern, responsive websites using cutting-edge technologies like React, 
              TypeScript, and Tailwind CSS.
            </p>
            <p className="text-lg text-white/80 leading-relaxed">
              I believe in the power of good design and clean code to solve real-world 
              problems. My approach combines technical expertise with creative vision to 
              deliver exceptional digital experiences.
            </p>
          </div>

          {/* Key points */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: Code, title: "Clean Code", desc: "Writing maintainable, scalable code" },
              { icon: Palette, title: "Design-First", desc: "User-centered design approach" },
              { icon: Zap, title: "Performance", desc: "Fast, optimized experiences" },
              { icon: User, title: "Collaboration", desc: "Working closely with teams" }
            ].map(({ icon: Icon, title, desc }) => (
              <Card key={title} className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 hover-scale">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20">
                      <Icon size={20} className="text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">{title}</h3>
                      <p className="text-sm text-white/60">{desc}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
