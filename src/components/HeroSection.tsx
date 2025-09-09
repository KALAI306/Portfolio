import { useState, useEffect } from 'react';
import { Button } from '../components/ui/button';
import { Download, Eye, Mail, Github, Linkedin } from 'lucide-react';
import heroBackground from '../assets/hero-background.jpg';
import profilePic from '../assets/profiles.jpg'; // ✅ Add your profile picture here

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleDownloadResume = () => {
    // Create a dummy PDF download - in real app, this would be actual resume
    const link = document.createElement('a');
    link.href = '#';
    link.download = 'Kalaiselvan_S_Resume.pdf';
    link.click();
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-background/80" />
        <div className="absolute inset-0 hero-gradient" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="floating absolute top-20 left-10 w-20 h-20 rounded-full bg-hero-primary/20 blur-xl" />
        <div
          className="floating absolute top-40 right-20 w-32 h-32 rounded-full bg-hero-secondary/20 blur-xl"
          style={{ animationDelay: '2s' }}
        />
        <div
          className="floating absolute bottom-20 left-20 w-24 h-24 rounded-full bg-hero-accent/20 blur-xl"
          style={{ animationDelay: '4s' }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
          {/* Profile Picture */}
          <div className="mb-8 scale-in" style={{ animationDelay: '0.2s' }}>
            <div className="w-32 h-32 mx-auto rounded-full glass-card border-2 border-hero-accent/30 overflow-hidden">
              <img
                src={profilePic}
                alt="Kalaiselvan Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Name and Title */}
          <div className="slide-in-left mb-6" style={{ animationDelay: '0.4s' }}>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 neon-text">
              Kalaiselvan S
            </h1>
            <div className="text-xl md:text-2xl text-muted-foreground mb-2">
              <span className="text-hero-primary font-semibold">Java Full Stack Developer</span>
              <span className="mx-2">|</span>
              <span className="text-hero-secondary font-semibold">Web Developer</span>
              <span className="mx-2">|</span>
              <span className="text-hero-accent font-semibold">Problem Solver</span>
            </div>
          </div>

          {/* Tagline */}
          <div className="slide-in-right mb-12" style={{ animationDelay: '0.6s' }}>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              I build <span className="text-hero-primary font-semibold">scalable web applications</span> and love solving 
              <span className="text-hero-accent font-semibold"> real-world problems</span> with code.
            </p>
          </div>

          {/* CTA Buttons */}
          <div
            className="scale-in flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            style={{ animationDelay: '0.8s' }}
          >
            <Button
              onClick={handleDownloadResume}
              className="glass-button text-white px-8 py-6 text-lg font-semibold rounded-xl"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
            <Button
              variant="outline"
              onClick={() => scrollToSection('projects')}
              className="border-hero-accent/50 text-hero-accent hover:bg-hero-accent/10 px-8 py-6 text-lg font-semibold rounded-xl"
            >
              <Eye className="mr-2 h-5 w-5" />
              View Projects
            </Button>
            <Button
              variant="outline"
              onClick={() => scrollToSection('contact')}
              className="border-hero-secondary/50 text-hero-secondary hover:bg-hero-secondary/10 px-8 py-6 text-lg font-semibold rounded-xl"
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </Button>
          </div>

          {/* Social Links */}
          <div className="fade-in flex justify-center gap-6" style={{ animationDelay: '1s' }}>
            <a
              href="https://github.com/kalaiselvansk001"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass-card hover:bg-hero-primary/20 transition-all duration-300 glow-hover"
            >
              <Github className="h-6 w-6 text-hero-primary" />
            </a>
            <a
              href="https://linkedin.com/in/kalaiselvan-s"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass-card hover:bg-hero-secondary/20 transition-all duration-300 glow-hover"
            >
              <Linkedin className="h-6 w-6 text-hero-secondary" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-hero-accent/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-hero-accent rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
