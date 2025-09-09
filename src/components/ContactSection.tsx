import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, Linkedin, Github, Send, Download, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { toast } = useToast();

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });

    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const handleDownloadResume = () => {
    // Create a dummy PDF download - in real app, this would be actual resume
    toast({
      title: "Resume Download",
      description: "Resume download will be available soon!",
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'kalaiselvansk001@gmail.com',
      href: 'mailto:kalaiselvansk001@gmail.com',
      color: 'hero-primary'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 8015724678',
      href: 'tel:+918015724678',
      color: 'hero-secondary'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/kalaiselvan-s',
      href: 'https://linkedin.com/in/kalaiselvan-s',
      color: 'hero-accent'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/kalaiselvansk001',
      href: 'https://github.com/kalaiselvansk001',
      color: 'hero-primary'
    }
  ];

  return (
    <section ref={sectionRef} id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 neon-text">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to collaborate on your next project or discuss opportunities? 
            I'd love to hear from you!
          </p>
          <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full mt-6" />
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'slide-in-left' : 'opacity-0'}`}>
              <div className="glass-card p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-6 text-hero-primary">
                  Get In Touch
                </h3>
                
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  I'm always open to discussing new opportunities, interesting projects, 
                  or just having a great conversation about technology and development.
                </p>

                {/* Contact Methods */}
                <div className="space-y-6 mb-8">
                  {contactInfo.map((info, index) => {
                    const IconComponent = info.icon;
                    return (
                      <a
                        key={index}
                        href={info.href}
                        target={info.href.startsWith('http') ? '_blank' : undefined}
                        rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="flex items-center p-4 bg-skill-bg rounded-lg hover:bg-muted/50 transition-all duration-300 glow-hover group"
                      >
                        <div className={`p-3 bg-${info.color}/20 rounded-lg mr-4 group-hover:bg-${info.color}/30 transition-all duration-300`}>
                          <IconComponent className={`h-5 w-5 text-${info.color}`} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">{info.label}</h4>
                          <p className="text-muted-foreground text-sm">{info.value}</p>
                        </div>
                      </a>
                    );
                  })}
                </div>

                {/* Location */}
                <div className="flex items-center p-4 bg-skill-bg rounded-lg">
                  <div className="p-3 bg-hero-accent/20 rounded-lg mr-4">
                    <MapPin className="h-5 w-5 text-hero-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Location</h4>
                    <p className="text-muted-foreground text-sm">Tamil Nadu, India</p>
                  </div>
                </div>

                {/* Resume Download */}
                <div className="mt-8">
                  <Button 
                    onClick={handleDownloadResume}
                    className="glass-button text-white w-full py-6 text-lg font-semibold"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Download Resume
                  </Button>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'slide-in-right' : 'opacity-0'}`}>
              <div className="glass-card p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-6 text-hero-secondary">
                  Send a Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-skill-bg border-glass-border focus:border-hero-primary/50 focus:ring-hero-primary/20"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-skill-bg border-glass-border focus:border-hero-primary/50 focus:ring-hero-primary/20"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="bg-skill-bg border-glass-border focus:border-hero-primary/50 focus:ring-hero-primary/20 resize-none"
                      placeholder="Tell me about your project, opportunity, or just say hello!"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="glass-button text-white w-full py-6 text-lg font-semibold"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>

                {/* Additional Info */}
                <div className="mt-8 p-4 bg-hero-primary/10 rounded-lg border border-hero-primary/20">
                  <p className="text-sm text-muted-foreground text-center">
                    <span className="text-hero-primary font-semibold">Quick Response:</span> 
                    I typically respond within 24 hours. For urgent matters, 
                    feel free to reach out via phone or LinkedIn.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-700 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
          <div className="glass-card p-6 rounded-xl max-w-2xl mx-auto">
            <p className="text-muted-foreground">
              © 2024 Kalaiselvan S. Built with React.js, TypeScript, and lots of ☕
            </p>
            <div className="flex justify-center space-x-4 mt-4">
              <a href="https://github.com/kalaiselvansk001" target="_blank" rel="noopener noreferrer" 
                 className="text-hero-primary hover:text-hero-primary/80 transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com/in/kalaiselvan-s" target="_blank" rel="noopener noreferrer"
                 className="text-hero-secondary hover:text-hero-secondary/80 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;