import { Code2, Palette, Zap, Database } from 'lucide-react';

const About = () => {
  const highlights = [
    { icon: Code2,    title: 'Clean Code',       description: 'Maintainable, scalable code following modern best practices.' },
    { icon: Palette,  title: 'Creative Design',  description: 'Transforming ideas into beautiful, user-friendly interfaces.' },
    { icon: Zap,      title: 'Performance',      description: 'Optimizing for speed, efficiency and great user experience.' },
    { icon: Database, title: 'Full Stack',        description: 'MERN stack + Supabase — end-to-end product development.' },
  ];

  return (
    <section id="about" className="py-28 section-alt-bg relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-accent/5 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
              <span className="text-sm font-medium text-primary">Who I am</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>
              About Me
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A passionate full-stack developer dedicated to building exceptional digital experiences
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div className="space-y-5 animate-fade-in">
              <p className="text-foreground text-lg leading-relaxed">
                I'm <span className="font-semibold text-primary">Asad Khan</span>, a MERN stack developer based in Hyderabad, Sindh — passionate about building full-stack web applications that are fast, beautiful, and maintainable.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My journey started with curiosity about how websites work, and has grown into professional expertise across the entire stack — from React and TypeScript on the frontend to Node.js, Express, MongoDB, and Supabase on the backend.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I love working on projects that challenge me creatively and technically — building things like AI-powered pitch creators, weather dashboards, and more.
              </p>

              {/* Quick facts */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                {[
                  { label: 'Location', value: 'Hyderabad, Sindh' },
                  { label: 'Focus',    value: 'MERN Stack' },
                  { label: 'Backend',  value: 'Node + Supabase' },
                  { label: 'Status',   value: 'Open to work ✓' },
                ].map((fact, i) => (
                  <div key={i} className="p-4 rounded-xl bg-card border border-border/50">
                    <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-1">{fact.label}</p>
                    <p className="text-sm font-semibold text-foreground">{fact.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 animate-slide-up">
              {highlights.map((item, i) => (
                <div
                  key={i}
                  className="group p-6 bg-card rounded-2xl border border-border/50 hover:border-primary/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="text-white" size={22} />
                  </div>
                  <h3 className="font-bold text-foreground mb-2" style={{ fontFamily: 'Syne, sans-serif' }}>{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
