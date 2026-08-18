import { useState, useEffect, useRef } from 'react';
import { Code2, Server, Database, Wrench, Zap } from 'lucide-react';
import AnimatedBackground from '@/components/AnimatedBackground';

const TechIcon = ({ name, size = 20 }: { name: string; size?: number }) => {
  const iconMap: Record<string, string> = {
    'HTML5': 'html5',
    'CSS3': 'css3',
    'JavaScript': 'javascript',
    'TypeScript': 'typescript',
    'React.js': 'react',
    'React Native': 'react',
    'Node.js': 'nodedotjs',
    'Express.js': 'express',
    'PHP': 'php',
    'WordPress': 'wordpress',
    'MongoDB': 'mongodb',
    'Supabase': 'supabase',
    'Firebase': 'firebase',
    'Tailwind CSS': 'tailwindcss',
    'Bootstrap': 'bootstrap',
    'REST APIs': 'fastapi',
    'JWT': 'jsonwebtokens',
    'Git': 'git',
    'cPanel': 'cpanel',
    'Hostbay': 'cloudflare',
    'Postman': 'postman',
    'Claude AI': 'claude',
    'Cursor': 'cursor',
    'GitHub Copilot': 'githubcopilot',
    'n8n': 'n8n',
    'PostgreSQL': 'postgresql',
  };

  const lightIcons = ['express', 'claude', 'cursor', 'githubcopilot', 'mongodb', 'n8n', 'postgresql'];
  const iconSlug = iconMap[name] || name.toLowerCase().replace(/[^a-z0-9]/g, '');
  const color = lightIcons.includes(iconSlug) ? 'white' : '';
  const url = color
    ? `https://cdn.simpleicons.org/${iconSlug}/${color}`
    : `https://cdn.simpleicons.org/${iconSlug}`;

  return (
    <img
      src={url}
      alt={name}
      width={size}
      height={size}
      className="flex-shrink-0"
      onError={(e) => {
        (e.target as HTMLImageElement).style.display = 'none';
      }}
    />
  );
};

const skillCategories = [
  {
    icon: Code2,
    title: 'Frontend',
    color: 'from-blue-500 to-cyan-400',
    skills: [
      { name: 'HTML5', level: 95 },
      { name: 'CSS3', level: 90 },
      { name: 'JavaScript', level: 88 },
      { name: 'TypeScript', level: 82 },
      { name: 'React.js', level: 85 },
      { name: 'React Native', level: 75 },
      { name: 'Tailwind CSS', level: 85 },
      { name: 'Bootstrap', level: 80 },
    ],
  },
  {
    icon: Server,
    title: 'Backend',
    color: 'from-emerald-500 to-teal-400',
    skills: [
      { name: 'Node.js', level: 79 },
      { name: 'Express.js', level: 78 },
      { name: 'PHP', level: 70 },
      { name: 'WordPress', level: 72 },
      { name: 'REST APIs', level: 82 },
      { name: 'JWT', level: 78 },
    ],
  },
  {
    icon: Database,
    title: 'Databases & Services',
    color: 'from-violet-500 to-purple-400',
    skills: [
      { name: 'MongoDB', level: 75 },
      { name: 'Supabase', level: 78 },
      { name: 'Firebase', level: 76 },
      { name: 'PostgreSQL', level: 72 },
    ],
  },
  {
    icon: Wrench,
    title: 'Tools & Deployment',
    color: 'from-orange-500 to-amber-400',
    skills: [
      { name: 'Git', level: 85 },
      { name: 'cPanel', level: 80 },
      { name: 'Hostbay', level: 78 },
      { name: 'Postman', level: 82 },
      { name: 'Claude AI', level: 80 },
      { name: 'Cursor', level: 78 },
      { name: 'GitHub Copilot', level: 75 },
      { name: 'n8n', level: 72 },
    ],
  },
];

const techBadges = [
  { name: 'MongoDB', color: '#47A248', bg: '#0d2b0d' },
  { name: 'Express.js', color: '#ffffff', bg: '#1a1a1a' },
  { name: 'React.js', color: '#61DAFB', bg: '#0d1b2a' },
  { name: 'Node.js', color: '#8CC84B', bg: '#0d1a0d' },
  { name: 'TypeScript', color: '#3178C6', bg: '#0d1525' },
  { name: 'Tailwind CSS', color: '#06B6D4', bg: '#0d1f24' },
  { name: 'Supabase', color: '#3ECF8E', bg: '#0d2420' },
  { name: 'Firebase', color: '#FFCA28', bg: '#24200d' },
  { name: 'PostgreSQL', color: '#4169E1', bg: '#0d1525' },
  { name: 'PHP', color: '#777BB4', bg: '#151525' },
  { name: 'WordPress', color: '#21759B', bg: '#0d1520' },
  { name: 'n8n', color: '#EA4B71', bg: '#250d15' },
];

const SkillBar = ({ name, level, color, inView }: { name: string; level: number; color: string; inView: boolean }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => setWidth(level), 200);
      return () => clearTimeout(timer);
    }
  }, [inView, level]);

  return (
    <div className="mb-4 group">
      <div className="flex justify-between items-center mb-1.5">
        <span className="flex items-center gap-2.5 text-sm font-medium text-foreground">
          <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
            <TechIcon name={name} size={22} />
          </span>
          {name}
        </span>
        <span className="text-xs font-bold text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full bg-gradient-to-r ${color} transition-all duration-1000 ease-out relative`}
          style={{ width: `${width}%` }}
        >
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white shadow-lg opacity-80" />
        </div>
      </div>
    </div>
  );
};

const Skills = () => {
  const [inView, setInView] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-24 section-bg relative overflow-hidden" ref={sectionRef}>
      <AnimatedBackground />
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-blue-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-72 h-72 rounded-full bg-violet-500/5 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
              <Zap size={14} className="text-primary" />
              <span className="text-sm font-medium text-primary">Tech Stack</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>
              Skills & Expertise
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Full-stack MERN developer with a passion for crafting beautiful, performant web experiences.
            </p>
          </div>

          {/* Tech Badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {techBadges.map((badge, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold border border-white/10 cursor-default hover:scale-110 transition-all duration-300"
                style={{ backgroundColor: badge.bg, color: badge.color, boxShadow: `0 0 0 1px ${badge.color}22` }}
              >
                <TechIcon name={badge.name} size={16} />
                {badge.name}
              </div>
            ))}
          </div>

          {/* Tab Buttons — mobile */}
          <div className="flex flex-wrap justify-center gap-2 mb-8 lg:hidden">
            {skillCategories.map((cat, i) => {
              const Icon = cat.icon;
              return (
                <button
                  key={i}
                  onClick={() => setActiveTab(i)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                    activeTab === i
                      ? `bg-gradient-to-r ${cat.color} text-white shadow-lg scale-105`
                      : 'bg-secondary text-muted-foreground hover:bg-secondary/80'
                  }`}
                >
                  <Icon size={16} />
                  {cat.title}
                </button>
              );
            })}
          </div>

          {/* Desktop: 2x2 grid */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div
                  key={index}
                  className="bg-card rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg`}>
                      <Icon className="text-white" size={22} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-foreground" style={{ fontFamily: 'Syne, sans-serif' }}>{category.title}</h3>
                      <p className="text-xs text-muted-foreground">{category.skills.length} technologies</p>
                    </div>
                  </div>
                  {category.skills.map((skill, si) => (
                    <SkillBar key={si} name={skill.name} level={skill.level} color={category.color} inView={inView} />
                  ))}
                </div>
              );
            })}
          </div>

          {/* Mobile: tabbed */}
          <div className="lg:hidden">
            {(() => {
              const category = skillCategories[activeTab];
              const Icon = category.icon;
              return (
                <div className="bg-card rounded-2xl p-6 border border-border/50 shadow-xl">
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg`}>
                      <Icon className="text-white" size={22} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-foreground">{category.title}</h3>
                      <p className="text-xs text-muted-foreground">{category.skills.length} technologies</p>
                    </div>
                  </div>
                  {category.skills.map((skill, si) => (
                    <SkillBar key={si} name={skill.name} level={skill.level} color={category.color} inView={inView} />
                  ))}
                </div>
              );
            })()}
          </div>

          {/* MERN Strip */}
          <div className="mt-12 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-5 flex flex-wrap items-center justify-center gap-6 md:gap-8">
            <div className="flex items-center gap-2">
              <Database size={18} className="text-emerald-400" />
              <span className="text-sm font-semibold text-foreground">MERN Stack Developer</span>
            </div>
            <div className="h-4 w-px bg-border hidden sm:block" />
            <div className="flex items-center gap-4 flex-wrap justify-center">
              {['MongoDB', 'Express.js', 'React.js', 'Node.js'].map((tech) => (
                <div key={tech} className="flex items-center gap-1.5">
                  <TechIcon name={tech} size={16} />
                  <span className="text-xs font-medium text-muted-foreground">{tech}</span>
                </div>
              ))}
            </div>
            <div className="h-4 w-px bg-border hidden sm:block" />
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs text-muted-foreground">Available for projects</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
