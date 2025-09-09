import { useState, useEffect, useRef } from 'react';
import { GraduationCap, Target, User } from 'lucide-react';
import myPhoto from "../assets/profile.jpg";



const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 neon-text">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image Placeholder */}
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'slide-in-left' : 'opacity-0'}`}>
              <div className="relative">
                <div className="w-full h-96 rounded-2xl glass-card flex items-center justify-center overflow-hidden">
                 <div className="w-full h-full bg-gradient-card flex items-center justify-center">
  <img 
    src={myPhoto} 
    alt="Kalaiselvan" 
    className="w-full h-full object-cover rounded-2xl" 
  />
</div>

                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-hero-accent/20 blur-xl floating" />
                <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-hero-primary/20 blur-xl floating" style={{ animationDelay: '2s' }} />
              </div>
            </div>

            {/* Right Column - Content */}
            <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'slide-in-right' : 'opacity-0'}`}>
              <div className="space-y-8">
                {/* Introduction */}
                <div className="glass-card p-6 rounded-xl glow-hover">
                  <div className="flex items-center mb-4">
                    <User className="h-6 w-6 text-hero-accent mr-3" />
                    <h3 className="text-xl font-semibold text-hero-accent">Who I Am</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Enthusiastic fresher passionate about technology, problem-solving, and full-stack development. 
                    I thrive on creating innovative solutions and turning complex challenges into elegant, 
                    user-friendly applications.
                  </p>
                </div>

                {/* Education */}
                <div className="glass-card p-6 rounded-xl glow-hover">
                  <div className="flex items-center mb-4">
                    <GraduationCap className="h-6 w-6 text-hero-primary mr-3" />
                    <h3 className="text-xl font-semibold text-hero-primary">Education</h3>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">B.E. Electrical and Electronics Engineering</h4>
                    <p className="text-muted-foreground">KSRIET • 2022–2026</p>
                    <div className="flex items-center">
                      <span className="text-sm text-muted-foreground mr-2">CGPA:</span>
                      <span className="px-3 py-1 bg-hero-primary/20 text-hero-primary rounded-full text-sm font-semibold">
                        7.54
                      </span>
                    </div>
                  </div>
                </div>

                {/* Career Goal */}
                <div className="glass-card p-6 rounded-xl glow-hover">
                  <div className="flex items-center mb-4">
                    <Target className="h-6 w-6 text-hero-secondary mr-3" />
                    <h3 className="text-xl font-semibold text-hero-secondary">Career Goal</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    To apply my technical skills in dynamic organizations and contribute to innovative projects 
                    that make a meaningful impact. I aim to grow as a full-stack developer while continuously 
                    learning cutting-edge technologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;