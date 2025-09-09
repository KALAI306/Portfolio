import { useState, useEffect, useRef } from 'react';
import { Code, Database, GitBranch, Globe, Server, Terminal, Palette, Settings } from 'lucide-react';

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      color: 'hero-primary',
      skills: ['Java', 'C', 'JavaScript'],
      delay: '0s'
    },
    {
      title: 'Web Development',
      icon: Globe,
      color: 'hero-secondary',
      skills: ['HTML', 'CSS', 'React.js', 'Bootstrap'],
      delay: '0.2s'
    },
    {
      title: 'Backend & APIs',
      icon: Server,
      color: 'hero-accent',
      skills: ['Spring Boot', 'REST APIs'],
      delay: '0.4s'
    },
    {
      title: 'Database',
      icon: Database,
      color: 'hero-primary',
      skills: ['MySQL'],
      delay: '0.6s'
    },
    {
      title: 'Version Control',
      icon: GitBranch,
      color: 'hero-secondary',
      skills: ['Git', 'GitHub'],
      delay: '0.8s'
    },
    {
      title: 'Development Tools',
      icon: Terminal,
      color: 'hero-accent',
      skills: ['VS Code', 'Notion'],
      delay: '1s'
    },
    {
      title: 'Design Tools',
      icon: Palette,
      color: 'hero-primary',
      skills: ['Canva'],
      delay: '1.2s'
    },
    {
      title: 'Office Suite',
      icon: Settings,
      color: 'hero-secondary',
      skills: ['MS Office'],
      delay: '1.4s'
    }
  ];

  return (
    <section ref={sectionRef} id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 neon-text">
            Technical Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My technical arsenal for building modern web applications
          </p>
          <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full mt-6" />
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.title}
                className={`transition-all duration-1000 ${isVisible ? 'scale-in' : 'opacity-0'}`}
                style={{ animationDelay: category.delay }}
              >
                <div className="glass-card p-6 rounded-xl h-full glow-hover group">
                  {/* Category Header */}
                  <div className="flex items-center mb-4">
                    <div className={`p-3 rounded-lg bg-${category.color}/20 group-hover:bg-${category.color}/30 transition-all duration-300`}>
                      <IconComponent className={`h-6 w-6 text-${category.color}`} />
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-4 text-foreground">
                    {category.title}
                  </h3>

                  {/* Skills List */}
                  <div className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skill}
                        className={`px-3 py-2 bg-skill-bg rounded-lg text-sm font-medium text-${category.color} 
                                   hover:bg-${category.color}/10 transition-all duration-300 transform hover:scale-105`}
                        style={{ 
                          animationDelay: `${parseFloat(category.delay) + skillIndex * 0.1}s` 
                        }}
                      >
                        {skill}
                      </div>
                    ))}
                  </div>

                  {/* Hover Effect */}
                  <div className={`absolute inset-0 rounded-xl border border-${category.color}/0 
                                  group-hover:border-${category.color}/30 transition-all duration-300 pointer-events-none`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Skills Summary */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-1000 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
          <div className="glass-card p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-hero-accent">
              Full Stack Capabilities
            </h3>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Proficient in building end-to-end web applications from database design to responsive user interfaces. 
              Experienced with modern development workflows, version control, and deployment strategies. 
              Always eager to learn new technologies and best practices in software development.
            </p>
            
            <div className="flex justify-center mt-6 space-x-4">
              <div className="px-4 py-2 bg-hero-primary/20 text-hero-primary rounded-full text-sm font-semibold">
                Frontend Development
              </div>
              <div className="px-4 py-2 bg-hero-secondary/20 text-hero-secondary rounded-full text-sm font-semibold">
                Backend Development
              </div>
              <div className="px-4 py-2 bg-hero-accent/20 text-hero-accent rounded-full text-sm font-semibold">
                Database Management
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;