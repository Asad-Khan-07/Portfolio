import { ArrowDown, Github, Instagram, Linkedin, Sparkles } from 'lucide-react';
import Developer from '/assets/Developer.png';
import Resume from '/assets/Resume.pdf';

const Hero = () => {
  const scrollToSection = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-bg relative overflow-hidden">
      {/* Background blobs */}
      <div className="floating-shapes">
        <div className="shape w-[500px] h-[500px] bg-primary" style={{ top: '5%', left: '-5%', animationDuration: '28s' }} />
        <div className="shape w-[400px] h-[400px] bg-accent" style={{ bottom: '10%', right: '-5%', animationDuration: '22s', animationDelay: '3s' }} />
        <div className="shape w-[300px] h-[300px] bg-blue-400" style={{ top: '50%', left: '40%', animationDuration: '35s', animationDelay: '6s' }} />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="container mx-auto px-6 py-24 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">

          {/* Text side */}
          <div className="flex-1 max-w-2xl animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-white/10 mb-6 text-sm text-muted-foreground">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Available for freelance work
              <Sparkles size={14} className="text-accent" />
            </div>

            <p className="text-muted-foreground text-lg mb-2 font-medium">Hello, I'm</p>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-3 leading-none tracking-tight" style={{ fontFamily: 'Syne, sans-serif' }}>
              Asad Khan
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              <span className="gradient-text">MERN Stack</span> Developer
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-xl">
              I craft beautiful, high-performance web experiences — from pixel-perfect frontends to robust backends. Passionate about clean code and great UX.
            </p>

            {/* Stats */}
            <div className="flex gap-8 mb-10">
              {[
                { number: '4+', label: 'Projects Built' },
                { number: '1+', label: 'Years Coding' },
                { number: '10+', label: 'Technologies' },
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-2xl font-black gradient-text" style={{ fontFamily: 'Syne, sans-serif' }}>{stat.number}</div>
                  <div className="text-xs text-muted-foreground font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <a href={Resume} download="Asad-Khan-Resume.pdf">
                <button className="gradient-primary text-white px-7 py-3.5 rounded-xl font-semibold shadow-lg hover:opacity-90 hover:-translate-y-0.5 hover:shadow-primary/30 hover:shadow-xl transition-all duration-300">
                  Download CV
                </button>
              </a>
              <button
                onClick={() => scrollToSection('#projects')}
                className="glass-card border border-white/10 text-foreground px-7 py-3.5 rounded-xl font-semibold hover:bg-white/5 hover:-translate-y-0.5 transition-all duration-300"
              >
                View Work
              </button>
            </div>

            {/* Social */}
            <div className="flex items-center gap-4">
              <span className="text-xs text-muted-foreground font-medium uppercase tracking-widest">Find me on</span>
              <div className="h-px w-8 bg-border" />
              {[
                { icon: Github, href: 'https://github.com/Asad-Khan-07', label: 'GitHub' },
                { icon: Instagram, href: 'https://www.instagram.com/ww.w.asadkhan905/', label: 'Instagram' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/asad-hussain-55519836b', label: 'Linkedin' },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl glass-card border border-white/10 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <s.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Image side */}
          <div className="flex-1 flex justify-center lg:justify-end animate-slide-up">
            <div className="relative">
              {/* Outer glow ring */}
              <div className="absolute -inset-6 rounded-full gradient-primary opacity-10 blur-2xl" />
              {/* Rotating ring */}
              <div className="absolute -inset-3 rounded-full border border-primary/20"
                style={{ animation: 'spin 20s linear infinite' }} />
              <div className="absolute -inset-6 rounded-full border border-accent/10"
                style={{ animation: 'spin 30s linear infinite reverse' }} />

              <div className="relative w-72 h-72 md:w-96 md:h-96">
                <div className="absolute inset-0 rounded-full gradient-primary opacity-20 blur-xl" />
                <img
                  src={Developer}
                  alt="Asad Khan"
                  className="relative w-full h-full rounded-full object-cover border-2 border-white/10 shadow-2xl"
                />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 glass-card border border-white/10 rounded-2xl px-4 py-3 shadow-xl">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
                  <span className="text-sm font-semibold text-foreground">Open to work</span>
                </div>
              </div>

              {/* Supabase badge */}
              <div className="absolute -top-4 -right-4 glass-card border border-white/10 rounded-2xl px-3 py-2 shadow-xl">
                <span className="text-xs font-bold text-green-400">Supabase ✓</span>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <button onClick={() => scrollToSection('#about')} className="text-muted-foreground hover:text-primary transition-colors animate-bounce">
            <ArrowDown size={28} />
          </button>
        </div>
      </div>

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </section>
  );
};

export default Hero;
