import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { 
  MessageCircle, 
  Bot, 
  Calendar, 
  TrendingUp, 
  Star, 
  Instagram, 
  Mail, 
  Video,
  Sun,
  Moon,
  Zap,
  Clock,
  CheckCircle,
  Heart
} from 'lucide-react';

declare global {
  interface Window {
    gsap: any;
    ScrollTrigger: any;
  }
}

const VexioLanding = () => {
  const [isDark, setIsDark] = useState(false);
  const heroRef = useRef(null);
  const cardsRef = useRef(null);
  const statsRef = useRef(null);

  const links = [
    {
      title: "Teste a IA agora",
      description: "Converse com nossa IA no WhatsApp",
      icon: MessageCircle,
      url: "https://wa.me/5583982210377?text=Olá%20Vexio!%20Quero%20automatizar%20meu%20atendimento.",
      primary: true
    },
    {
      title: "ChatVexio (demo)",
      description: "Veja nossa IA em ação",
      icon: Bot,
      url: "#"
    },
    {
      title: "Serviços e Preços",
      description: "Conheça nossos planos",
      icon: TrendingUp,
      url: "#"
    },
    {
      title: "Benefícios e Resultados",
      description: "Cases de sucesso",
      icon: CheckCircle,
      url: "#"
    },
    {
      title: "Agendar apresentação",
      description: "Google Meet gratuito",
      icon: Video,
      url: "#"
    },
    {
      title: "Instagram @vexiostudio",
      description: "Siga nosso conteúdo",
      icon: Instagram,
      url: "https://instagram.com/vexiostudio"
    },
    {
      title: "E-mail",
      description: "contato@vexiostudio.com.br",
      icon: Mail,
      url: "mailto:contato@vexiostudio.com.br"
    }
  ];

  const testimonials = [
    {
      name: "Dr. Carlos Silva",
      specialty: "Dentista",
      text: "Reduzi 70% das ligações desnecessárias. A IA resolve tudo!",
      rating: 5
    },
    {
      name: "Dra. Ana Costa",
      specialty: "Médica",
      text: "Minhas confirmações aumentaram 150%. Fantástico!",
      rating: 5
    },
    {
      name: "Dr. João Santos",
      specialty: "Odontologista",
      text: "Setup em 1 dia. Melhor investimento que já fiz.",
      rating: 5
    }
  ];

  const stats = [
    { value: "80%", label: "Menos tempo de atendimento" },
    { value: "150%", label: "Mais confirmações" },
    { value: "60%", label: "Redução de faltas" }
  ];

  useEffect(() => {
    // Apply dark mode
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  useEffect(() => {
    // Wait for GSAP to load
    const timer = setTimeout(() => {
      if (window.gsap && window.ScrollTrigger) {
        window.gsap.registerPlugin(window.ScrollTrigger);
        initAnimations();
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const initAnimations = () => {
    const gsap = window.gsap;
    const ScrollTrigger = window.ScrollTrigger;

    // Hero animations
    gsap.fromTo(heroRef.current?.querySelector('.hero-avatar'), 
      { opacity: 0, y: 30, scale: 0.8 },
      { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "back.out(1.7)" }
    );

    gsap.fromTo(heroRef.current?.querySelector('.hero-title'),
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, delay: 0.2 }
    );

    gsap.fromTo(heroRef.current?.querySelector('.hero-subtitle'),
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, delay: 0.4 }
    );

    gsap.fromTo(heroRef.current?.querySelector('.hero-buttons'),
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, delay: 0.6 }
    );

    // Stats animation
    gsap.fromTo(statsRef.current?.querySelectorAll('.stat-item'),
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.6, 
        stagger: 0.1,
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 80%",
          end: "bottom 20%"
        }
      }
    );

    // Cards animation
    gsap.fromTo(cardsRef.current?.querySelectorAll('.link-card'),
      { opacity: 0, y: 24 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.4, 
        stagger: 0.08,
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 80%",
          end: "bottom 20%"
        }
      }
    );

    // Primary CTA pulse
    const primaryCTA = heroRef.current?.querySelector('.primary-cta');
    if (primaryCTA) {
      gsap.to(primaryCTA, {
        scale: 1.02,
        duration: 2,
        yoyo: true,
        repeat: -1,
        ease: "power2.inOut",
        delay: 2
      });
    }
  };

  const toggleDarkMode = () => {
    const gsap = window.gsap;
    if (gsap) {
      gsap.to(document.documentElement, {
        duration: 0.3,
        ease: "power2.out",
        onComplete: () => setIsDark(!isDark)
      });
    } else {
      setIsDark(!isDark);
    }
  };

  return (
    <div className="min-h-screen font-system">
      {/* Header */}
      <header className="vexio-container py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="/logo-vexio.png" 
              alt="Vexio Studio - Automação com IA para clínicas" 
              className="h-8 w-auto"
              loading="eager"
            />
          </div>
          
          <div className="flex items-center gap-2">
            <Sun className={`h-4 w-4 transition-opacity ${isDark ? 'opacity-50' : 'opacity-100'}`} />
            <Switch 
              checked={isDark}
              onCheckedChange={toggleDarkMode}
              aria-label="Alternar modo escuro"
            />
            <Moon className={`h-4 w-4 transition-opacity ${isDark ? 'opacity-100' : 'opacity-50'}`} />
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section ref={heroRef} className="vexio-container py-12">
          <div className="text-center">
            <div className="hero-avatar mb-6">
              <div className="w-24 h-24 mx-auto bg-gradient-to-br from-primary to-primary-hover rounded-full flex items-center justify-center shadow-vexio">
                <Bot className="w-12 h-12 text-white" />
              </div>
            </div>
            
            <div className="hero-title mb-4">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                Automação com IA para clínicas
              </h1>
              <p className="text-lg text-muted-foreground font-medium">
                médicas e odontológicas
              </p>
            </div>
            
            <div className="hero-subtitle mb-8">
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Agendamentos automáticos via WhatsApp, confirmações e respostas 24/7.
              </p>
            </div>

            {/* Stats */}
            <div ref={statsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item text-center">
                  <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
            
            <div className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                asChild
                size="lg"
                className="primary-cta vexio-button-primary text-lg px-8 py-4 relative overflow-hidden group"
              >
                <a 
                  href="https://wa.me/5583982210377?text=Olá%20Vexio!%20Quero%20automatizar%20meu%20atendimento."
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Falar no WhatsApp - Contato direto com Vexio"
                >
                  <MessageCircle className="w-5 h-5" />
                  Falar no WhatsApp
                  <div className="absolute top-2 right-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  </div>
                </a>
              </Button>
              
              <Button 
                variant="secondary" 
                size="lg"
                className="vexio-button-secondary"
                asChild
              >
                <a href="#como-funciona">
                  <Zap className="w-5 h-5" />
                  Ver como funciona
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Benefits Banner */}
        <section className="vexio-container mb-12">
          <div className="vexio-card bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
            <div className="flex flex-wrap items-center justify-center gap-6 text-center">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                <span className="font-medium">Setup em 24h</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-primary" />
                <span className="font-medium">Suporte completo</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="font-medium">Sem fidelidade</span>
              </div>
            </div>
          </div>
        </section>

        {/* Links Section */}
        <section ref={cardsRef} className="vexio-container pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {links.map((link, index) => {
              const Icon = link.icon;
              return (
                <Card 
                  key={index} 
                  className={`link-card vexio-card cursor-pointer transition-all duration-300 hover:scale-[1.01] ${
                    link.primary ? 'ring-2 ring-primary/20 bg-gradient-to-br from-primary/5 to-primary/10' : ''
                  }`}
                >
                  <CardContent className="p-6">
                    <a 
                      href={link.url}
                      target={link.url.startsWith('http') ? '_blank' : '_self'}
                      rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-4 no-underline"
                      aria-label={`${link.title} - ${link.description}`}
                    >
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        link.primary ? 'bg-primary text-white' : 'bg-muted'
                      }`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-1">
                          {link.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {link.description}
                        </p>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Testimonials */}
        <section className="vexio-container pb-12">
          <h2 className="text-2xl font-bold text-center mb-8">O que dizem nossos clientes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="vexio-card">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 italic">
                    "{testimonial.text}"
                  </p>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.specialty}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="vexio-container py-8 border-t border-border">
        <div className="text-center text-sm text-muted-foreground space-y-2">
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#" className="hover:text-foreground transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-foreground transition-colors">Termos de Uso</a>
            <span>CNPJ: 00.000.000/0001-00</span>
          </div>
          <p>© 2024 Vexio Studio. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default VexioLanding;