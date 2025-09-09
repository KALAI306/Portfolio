import { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github, Calendar, Users, Shield, Calculator, Globe, GamepadIcon, Keyboard, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

// ❌ We will remove all these direct image imports
// import hospitalProject from "../assets/hospital-project.jpg";
// ... and so on for all images

const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // ... your useEffect code remains the same
// ... existing code ...
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

  const projects = [
  {
    title: 'Momo - Personal Assistant',
    description: 'Personal assistant system with React frontend and n8n backend for workflow automation and multi-agent orchestration. Integrated with Notion, Gmail, Google Calendar, and Telegram.',
    // ✅ Use new URL() for the image path
    image: new URL('../assets/momo-project.png', import.meta.url).href,
    technologies: ['React.js', 'n8n', 'Notion API', 'Telegram Bot API', 'Gmail API', 'Google Calendar API', 'REST/Webhooks'],
// ... existing code ...
    features: [
      'To-Do & Task Management (Notion)',
      'Calendar Scheduling (Google Calendar)',
      'Email Analysis (Gmail)',
      'Telegram Bot Interface',
      'Finance Agent (Bank SMS → Notion)',
      'Multi-Agent Workflow Automation'
    ],
    liveUrl: 'https://personal-assistent-f439.vercel.app/',
    githubUrl: 'https://github.com/KALAI306/Personal--assistent',
    icon: Users,
    color: 'hero-primary',
    delay: '0s'
  },
  {
    title: 'Netflix Clone',
    description: 'Modern Netflix-style streaming platform with movie browsing, responsive design, and API-based dynamic content.',
    // ✅ Use new URL() for the image path
    image: new URL('../assets/netflix-project.png', import.meta.url).href,
    technologies: ['React.js', 'CSS', 'JavaScript', 'TMDB API', 'Responsive Design'],
// ... existing code ...
    features: [
      'Movie Browsing',
      'Search Functionality',
      'Responsive UI',
      'Netflix-style Layout',
      'Interactive Experience'
    ],
    liveUrl: 'https://netflix-main-sage.vercel.app/',
    githubUrl: 'https://github.com/KALAI306/netflix-clone',
    icon: Globe,
    color: 'hero-secondary',
    delay: '0.2s'
  },
  {
    title: 'Hospital Appointment Management System',
    description: 'Full-stack healthcare management platform with secure authentication and role-based access for doctors, patients, and receptionists.',
    // ✅ Use new URL() for the image path
    image: new URL('../assets/hospital-project.jpg', import.meta.url).href,
    technologies: ['React.js', 'Spring Boot', 'MySQL', 'JWT Authentication', 'Railway', 'Vercel'],
// ... existing code ...
    features: [
      'JWT Authentication',
      'Role-based Access (Doctor, Patient, Receptionist)',
      'Appointment Booking System',
      'Real-time Updates'
    ],
    liveUrl: 'https://hospital-appoitment-management.vercel.app',
    githubUrl: 'https://github.com/KALAI306/Hospital-Appoitment-Management',
    icon: Calendar,
    color: 'hero-accent',
    delay: '0.4s'
  },
  {
    title: 'Facebook Login Clone',
    description: 'Pixel-perfect clone of Facebook login page with responsive design and advanced form validation.',
    // ✅ Use new URL() for the image path
    image: new URL('../assets/facebook-project.jpg', import.meta.url).href,
    technologies: ['HTML', 'CSS', 'JavaScript'],
// ... existing code ...
    features: [
      'Responsive Layout',
      'Form Validation',
      'Authentication UI Logic',
      'Modern Design'
    ],
    liveUrl: 'https://facebook-ten-cyan.vercel.app/',
    githubUrl: 'https://github.com/KALAI306/FAcebook-login-clone',
    icon: Users,
    color: 'hero-primary',
    delay: '0.6s'
  },
  {
    title: 'Web-based Calculator',
    description: 'Lightweight web calculator with real-time calculations, clean interface, and keyboard support.',
    // ✅ Use new URL() for the image path
    image: new URL('../assets/calculator-project.jpg', import.meta.url).href,
    technologies: ['HTML', 'CSS', 'JavaScript'],
// ... existing code ...
    features: [
      'Real-time Calculations',
      'Keyboard Input Support',
      'Error Handling',
      'Clean Responsive UI'
    ],
    liveUrl: 'https://web-based-calculator-sage.vercel.app/',
    githubUrl: 'https://github.com/KALAI306/Web-Based-Calculator',
    icon: Calculator,
    color: 'hero-secondary',
    delay: '0.8s'
  },
  {
    title: 'RapidType - Typing Speed Test',
    description: 'Typing test app that calculates WPM and accuracy in real time with performance analytics.',
    // ✅ Use new URL() for the image path
    image: new URL('../assets/rapid-type.png', import.meta.url).href,
    technologies: ['HTML', 'CSS', 'JavaScript'],
// ... existing code ...
    features: [
      'WPM Calculation',
      'Accuracy Tracking',
      'Real-time Feedback',
      'Performance Statistics'
    ],
    liveUrl: 'https://rapid-type.vercel.app/',
    githubUrl: 'https://github.com/KALAI306/RapidType',
    icon: Zap,
    color: 'hero-accent',
    delay: '1.0s'
  },
  {
    title: 'Rock Paper Scissors',
    description: 'Interactive rock-paper-scissors game with animations and score tracking.',
    // ✅ Use new URL() for the image path
    image: new URL('../assets/rock-paper.png', import.meta.url).href,
    technologies: ['HTML', 'CSS', 'JavaScript'],
// ... existing code ...
    features: [
      'Interactive Gameplay',
      'Score Tracking',
      'Smooth Animations',
      'Responsive Design'
    ],
    liveUrl: 'https://rock-paper-scissors-pink-beta.vercel.app/',
    githubUrl: 'https://github.com/KALAI306/Rock-Paper-Scissors',
    icon: GamepadIcon,
    color: 'hero-secondary',
    delay: '1.4s'
  },
  {
    title: 'Tic-Tac-Toe Game',
    description: 'React-based Tic-Tac-Toe with AI opponent, game state management, and engaging gameplay.',
    // ✅ Use new URL() for the image path
    image: new URL('../assets/tic-tac-toe.png', import.meta.url).href,
    technologies: ['React.js', 'JavaScript', 'CSS'],
// ... existing code ...
    features: [
      'AI Opponent',
      'Game State Management',
      'Responsive UI',
      'Score Tracking'
    ],
    liveUrl: 'https://tic-tac-toe-peach-theta-29.vercel.app/',
    githubUrl: 'https://github.com/KALAI306/Tic-Tac-Toe',
    icon: GamepadIcon,
    color: 'hero-primary',
    delay: '1.2s'
  }
];


  return (
// ... rest of your JSX code remains the same
    <section ref={sectionRef} id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 neon-text">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my technical expertise through real-world applications and creative solutions
          </p>
          <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full mt-6" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            const isMainProject = index === 0; // Hospital project gets special treatment
            
            return (
              <div
                key={project.title}
                className={`transition-all duration-1000 ${isVisible ? 'scale-in' : 'opacity-0'} 
                            ${isMainProject ? 'lg:col-span-2' : ''}`}
                style={{ animationDelay: project.delay }}
              >
                <div className={`glass-card rounded-2xl overflow-hidden glow-hover group h-full 
                                  ${isMainProject ? 'lg:flex lg:items-center' : ''}`}>
                  {/* Project Image */}
                  <div className={`relative overflow-hidden ${isMainProject ? 'lg:w-1/2' : 'h-64'}`}>
                    {project.image ? (
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-card flex items-center justify-center">
                        <IconComponent className={`h-16 w-16 text-${project.color}/50`} />
                      </div>
                    )}
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                      <div className="flex space-x-4">
                        {project.liveUrl !== '#' && (
                          <Button
                            size="sm"
                            className="glass-button text-white"
                            onClick={() => window.open(project.liveUrl, '_blank')}
                          >
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Live Demo
                          </Button>
                        )}
                        <Button
                          size="sm"
                          variant="outline"
                          className={`border-${project.color}/50 text-${project.color} hover:bg-${project.color}/10`}
                          onClick={() => window.open(project.githubUrl, '_blank')}
                        >
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </Button>
                      </div>
                    </div>

                    {/* Project Type Badge */}
                    <div className="absolute top-4 left-4">
                      <div className={`px-3 py-1 bg-${project.color}/20 text-${project.color} rounded-full text-sm font-semibold backdrop-blur-sm`}>
                        <IconComponent className="inline h-4 w-4 mr-1" />
                        {index === 0 ? 'Featured' : 'Project'}
                      </div>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className={`p-6 ${isMainProject ? 'lg:w-1/2' : ''}`}>
                    <h3 className={`text-xl font-bold mb-3 text-${project.color} group-hover:neon-text transition-all duration-300`}>
                      {project.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Key Features */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-foreground mb-2">Key Features:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.features.map((feature, featureIndex) => (
                          <span
                            key={featureIndex}
                            className={`px-2 py-1 bg-${project.color}/10 text-${project.color} rounded text-xs font-medium`}
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-foreground mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-skill-bg text-muted-foreground rounded-lg text-xs font-medium 
                                      hover:bg-muted transition-colors duration-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-3">
                      {project.liveUrl !== '#' && (
                        <Button
                          size="sm"
                          className="glass-button text-white flex-1"
                          onClick={() => window.open(project.liveUrl, '_blank')}
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          View Live
                        </Button>
                      )}
                      <Button
                        size="sm"
                        variant="outline"
                        className={`border-${project.color}/50 text-${project.color} hover:bg-${project.color}/10 ${project.liveUrl === '#' ? 'flex-1' : ''}`}
                        onClick={() => window.open(project.githubUrl, '_blank')}
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Source Code
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* GitHub CTA */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-1000 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
          <div className="glass-card p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-hero-accent">
              More Projects on GitHub
            </h3>
            <p className="text-muted-foreground mb-6">
              Explore my complete collection of projects, experiments, and contributions
            </p>
            <Button
              className="glass-button text-white px-8 py-4 text-lg"
              onClick={() => window.open('https://github.com/KALAI306?tab=repositories', '_blank')}
            >
              <Github className="h-5 w-5 mr-2" />
              Visit GitHub Profile
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
