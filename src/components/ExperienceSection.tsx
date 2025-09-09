import { useState, useEffect, useRef } from 'react';
import { Briefcase, MapPin, Calendar, Award } from 'lucide-react';

const ExperienceSection = () => {
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

  const internships = [
    {
      company: 'Code-Bind Technologies',
      location: 'Coimbatore',
      period: 'March 2023',
      description: 'Designed & developed modern user interfaces using React.js, focusing on responsive design and user experience optimization.',
      achievements: [
        'Built responsive UI components with React.js',
        'Collaborated with design team on UX improvements',
        'Implemented modern web design principles',
        'Gained hands-on experience with frontend development'
      ],
      color: 'hero-primary',
      delay: '0s'
    },
    {
      company: 'UNITED IT & CADD Division',
      location: 'Salem',
      period: 'September 2024',
      description: 'Developed responsive web applications working with SQL databases and REST API integrations.',
      achievements: [
        'Built responsive web applications',
        'Worked with SQL database management',
        'Integrated REST APIs for data communication',
        'Developed full-stack application features'
      ],
      color: 'hero-secondary',
      delay: '0.3s'
    }
  ];

  const certifications = [
    {
      title: 'Data Science Master Virtual Internship',
      issuer: 'EduSkills',
      description: 'Comprehensive program covering data analysis, machine learning fundamentals, and statistical modeling.',
      color: 'hero-primary',
      delay: '0s'
    },
    {
      title: 'AI Fundamentals',
      issuer: 'Infosys',
      description: 'Foundation course in artificial intelligence concepts, algorithms, and practical applications.',
      color: 'hero-secondary',
      delay: '0.2s'
    },
    {
      title: 'AI Workplace Proficiency',
      issuer: 'Super Human AI',
      description: 'Advanced certification in applying AI tools and techniques in professional environments.',
      color: 'hero-accent',
      delay: '0.4s'
    },
    {
      title: 'Prototype Web Development Course',
      issuer: 'Self-Paced Learning',
      description: 'Comprehensive web development course covering modern frameworks and best practices.',
      color: 'hero-primary',
      delay: '0.6s'
    }
  ];

  return (
    <section ref={sectionRef} id="experience" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 neon-text">
            Experience & Certifications
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional journey and continuous learning through internships and certifications
          </p>
          <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full mt-6" />
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Internships Section */}
          <div className="mb-20">
            <div className={`text-center mb-12 transition-all duration-1000 delay-300 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
              <h3 className="text-3xl font-bold text-hero-primary mb-4 flex items-center justify-center">
                <Briefcase className="h-8 w-8 mr-3" />
                Internship Experience
              </h3>
            </div>

            <div className="space-y-8">
              {internships.map((internship, index) => (
                <div
                  key={index}
                  className={`transition-all duration-1000 ${isVisible ? 'slide-in-left' : 'opacity-0'}`}
                  style={{ animationDelay: internship.delay }}
                >
                  <div className="glass-card p-8 rounded-2xl glow-hover">
                    <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                      {/* Company Info */}
                      <div className="lg:w-1/3">
                        <h4 className={`text-2xl font-bold text-${internship.color} mb-2`}>
                          {internship.company}
                        </h4>
                        <div className="flex items-center text-muted-foreground mb-2">
                          <MapPin className="h-4 w-4 mr-2" />
                          <span>{internship.location}</span>
                        </div>
                        <div className="flex items-center text-muted-foreground mb-4">
                          <Calendar className="h-4 w-4 mr-2" />
                          <span>{internship.period}</span>
                        </div>
                        <div className={`w-12 h-1 bg-${internship.color} rounded-full`} />
                      </div>

                      {/* Experience Details */}
                      <div className="lg:w-2/3">
                        <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                          {internship.description}
                        </p>

                        <h5 className="font-semibold text-foreground mb-3">Key Achievements:</h5>
                        <div className="grid md:grid-cols-2 gap-3">
                          {internship.achievements.map((achievement, achievementIndex) => (
                            <div
                              key={achievementIndex}
                              className={`flex items-start p-3 bg-${internship.color}/10 rounded-lg`}
                            >
                              <div className={`w-2 h-2 bg-${internship.color} rounded-full mt-2 mr-3 flex-shrink-0`} />
                              <span className="text-muted-foreground text-sm">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Section */}
          <div>
            <div className={`text-center mb-12 transition-all duration-1000 delay-600 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
              <h3 className="text-3xl font-bold text-hero-accent mb-4 flex items-center justify-center">
                <Award className="h-8 w-8 mr-3" />
                Certifications
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className={`transition-all duration-1000 ${isVisible ? 'scale-in' : 'opacity-0'}`}
                  style={{ animationDelay: cert.delay }}
                >
                  <div className="glass-card p-6 rounded-xl h-full glow-hover">
                    <div className="flex items-start mb-4">
                      <div className={`p-3 bg-${cert.color}/20 rounded-lg mr-4`}>
                        <Award className={`h-6 w-6 text-${cert.color}`} />
                      </div>
                      <div className="flex-1">
                        <h4 className={`text-lg font-bold text-${cert.color} mb-1`}>
                          {cert.title}
                        </h4>
                        <p className="text-muted-foreground text-sm font-medium">
                          {cert.issuer}
                        </p>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {cert.description}
                    </p>

                    <div className={`mt-4 w-full h-1 bg-${cert.color}/20 rounded-full`}>
                      <div className={`h-full bg-${cert.color} rounded-full w-full`} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-1000 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
          <div className="glass-card p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-hero-accent">
              Continuous Learning Journey
            </h3>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Always expanding my knowledge and skills through hands-on experience, professional internships, 
              and industry-recognized certifications. Ready to bring fresh perspectives and cutting-edge 
              technologies to your next project.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;