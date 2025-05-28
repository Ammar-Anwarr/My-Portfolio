
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend Technologies",
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 95 },
        { name: "Next.js", level: 85 },
        { name: "Vue.js", level: 80 },
        { name: "Sass/SCSS", level: 90 }
      ]
    },
    {
      title: "Backend & Database",
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Python", level: 80 },
        { name: "MongoDB", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "Firebase", level: 90 },
        { name: "GraphQL", level: 75 }
      ]
    },
    {
      title: "Tools & Design",
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "Figma", level: 90 },
        { name: "Adobe XD", level: 85 },
        { name: "Git/GitHub", level: 95 },
        { name: "Docker", level: 75 },
        { name: "AWS", level: 70 },
        { name: "Photoshop", level: 80 }
      ]
    }
  ];

  const languages = ["JavaScript", "TypeScript", "Python", "HTML5", "CSS3"];
  const frameworks = ["React", "Vue.js", "Node.js", "Express", "Next.js"];
  const tools = ["VS Code", "Git", "Docker", "Figma", "Webpack", "Vite"];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Skills & Expertise
          </span>
        </h2>
        <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
          A comprehensive overview of my technical skills and proficiency levels.
        </p>
      </div>

      {/* Skill Categories with Progress Bars */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        {skillCategories.map((category, index) => (
          <Card 
            key={category.title}
            className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 hover-scale"
          >
            <CardContent className="p-6">
              <h3 className={`text-xl font-bold mb-6 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-white/90 font-medium">{skill.name}</span>
                      <span className="text-white/60 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full bg-gradient-to-r ${category.color} transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Technology Tags */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-blue-400">Languages</h3>
          <div className="flex flex-wrap gap-2">
            {languages.map((lang) => (
              <Badge 
                key={lang}
                className="bg-blue-500/20 text-blue-300 hover:bg-blue-500/30 px-3 py-1"
              >
                {lang}
              </Badge>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-bold text-green-400">Frameworks</h3>
          <div className="flex flex-wrap gap-2">
            {frameworks.map((framework) => (
              <Badge 
                key={framework}
                className="bg-green-500/20 text-green-300 hover:bg-green-500/30 px-3 py-1"
              >
                {framework}
              </Badge>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-bold text-purple-400">Tools</h3>
          <div className="flex flex-wrap gap-2">
            {tools.map((tool) => (
              <Badge 
                key={tool}
                className="bg-purple-500/20 text-purple-300 hover:bg-purple-500/30 px-3 py-1"
              >
                {tool}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      {/* Experience Timeline */}
      <div className="mt-16">
        <h3 className="text-2xl font-bold text-center mb-8 text-white">Professional Journey</h3>
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>
            
            {[
              { year: "2024", title: "Senior Frontend Developer", company: "Tech Company", desc: "Leading frontend development with React and TypeScript" },
              { year: "2022", title: "Full Stack Developer", company: "Startup Inc.", desc: "Built scalable web applications using modern technologies" },
              { year: "2021", title: "Junior Developer", company: "Digital Agency", desc: "Started my journey in web development" }
            ].map((item, index) => (
              <div key={item.year} className="relative flex items-center mb-8">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center z-10">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <div className="ml-6 flex-1">
                  <div className="flex items-center space-x-4 mb-2">
                    <span className="text-blue-400 font-bold">{item.year}</span>
                    <h4 className="text-white font-semibold">{item.title}</h4>
                    <span className="text-white/60">{item.company}</span>
                  </div>
                  <p className="text-white/70 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
