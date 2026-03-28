import { useState, useEffect, useRef } from 'react';
import { Code2, Server, Palette, Wrench, Zap, Database } from 'lucide-react';
import AnimatedBackground from '@/components/AnimatedBackground';

// Real SVG icons for each technology
const TechIcon = ({ name, size = 20 }: { name: string; size?: number }) => {
  const icons: Record<string, JSX.Element> = {
    'HTML5': (
      <svg viewBox="0 0 32 32" width={size} height={size}>
        <path fill="#E44D26" d="M5.902 27.201L3.655 2h24.69l-2.25 25.197L15.985 30z"/>
        <path fill="#F16529" d="M16 27.858l8.17-2.265 1.922-21.532H16z"/>
        <path fill="#EBEBEB" d="M16 13.407h-4.09l-.282-3.165H16V7.151H8.25l.074.83.759 8.517H16zm0 8.027l-.014.004-3.442-.929-.22-2.465H9.221l.433 4.852 6.332 1.758.014-.004z"/>
        <path fill="#fff" d="M15.989 13.407v3.091h3.806l-.358 4.009-3.448.93v3.216l6.337-1.757.046-.522.726-8.137.076-.83zm0-6.256v3.091h7.466l.062-.694.141-1.567.074-.83z"/>
      </svg>
    ),
    'CSS3': (
      <svg viewBox="0 0 32 32" width={size} height={size}>
        <path fill="#1572B6" d="M5.902 27.201L3.655 2h24.69l-2.25 25.197L15.985 30z"/>
        <path fill="#33A9DC" d="M16 27.858l8.17-2.265 1.922-21.532H16z"/>
        <path fill="#fff" d="M16 13.407h4.09l.282 3.165H16v3.091h4.149l-.407 4.496-3.742 1.039v3.216l6.338-1.757.046-.522.726-8.137.076-.83.62-6.956H16zm-7.75 0H16V7.151H8.25l.074.83.759 8.517H16v-3.091H9.986z"/>
        <path fill="#EBEBEB" d="M16 20.663l-3.442-.929-.22-2.465H9.221l.433 4.852 6.332 1.758.014-.004z"/>
      </svg>
    ),
    'JavaScript': (
      <svg viewBox="0 0 32 32" width={size} height={size}>
        <rect width="32" height="32" rx="4" fill="#F7DF1E"/>
        <path d="M19.573 24.208c.403.658.928 1.143 1.857 1.143.78 0 1.279-.39 1.279-.928 0-.644-.512-.872-1.371-1.247l-.471-.202c-1.359-.578-2.262-1.305-2.262-2.839 0-1.413 1.076-2.489 2.758-2.489 1.198 0 2.058.416 2.678 1.507l-1.467.941c-.322-.578-.671-.805-1.211-.805-.551 0-.9.349-.9.805 0 .564.349.792 1.157 1.14l.471.202c1.601.686 2.504 1.386 2.504 2.961 0 1.695-1.332 2.624-3.121 2.624-1.749 0-2.878-.833-3.431-1.924zm-6.477.148c.295.524.564.967 1.198.967.612 0 .997-.241.997-1.172v-6.343h1.884v6.371c0 1.93-1.131 2.809-2.785 2.809-1.493 0-2.357-.775-2.797-1.708z"/>
      </svg>
    ),
    'TypeScript': (
      <svg viewBox="0 0 32 32" width={size} height={size}>
        <rect width="32" height="32" rx="4" fill="#3178C6"/>
        <path fill="#fff" d="M17.5 17.5h3v1.5h-1.5v5h-1.5v-5H16V17.5zm-5.25 0h4.5v1.5h-1.5v6.5h-1.5v-6.5h-1.5V17.5z"/>
        <path fill="#fff" d="M6 14h20v1.5H6z"/>
      </svg>
    ),
    'React.js': (
      <svg viewBox="0 0 32 32" width={size} height={size}>
        <circle cx="16" cy="16" r="2.5" fill="#61DAFB"/>
        <g fill="none" stroke="#61DAFB" strokeWidth="1.2">
          <ellipse cx="16" cy="16" rx="12" ry="4.5"/>
          <ellipse cx="16" cy="16" rx="12" ry="4.5" transform="rotate(60 16 16)"/>
          <ellipse cx="16" cy="16" rx="12" ry="4.5" transform="rotate(120 16 16)"/>
        </g>
      </svg>
    ),
    'Node.js': (
      <svg viewBox="0 0 32 32" width={size} height={size}>
        <path fill="#8CC84B" d="M16 3L3 10.5v15L16 29l13-3.5v-15L16 3zm0 2.236l10.5 6.066V22.7L16 26.764 5.5 22.7V11.302L16 5.236z"/>
        <path fill="#8CC84B" d="M16 8.5c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5 7.5-3.358 7.5-7.5-3.358-7.5-7.5-7.5zm0 2c3.038 0 5.5 2.462 5.5 5.5s-2.462 5.5-5.5 5.5-5.5-2.462-5.5-5.5 2.462-5.5 5.5-5.5z"/>
      </svg>
    ),
    'Express.js': (
      <svg viewBox="0 0 32 32" width={size} height={size}>
        <path fill="#fff" d="M29 10.232a16.491 16.491 0 00-.442-3.894c-.62-2.3-1.993-3.308-4.064-3.308H7.476c-1.977 0-3.391.936-3.988 3.04A18.73 18.73 0 003 10.232v11.51a16.16 16.16 0 00.455 3.975c.616 2.264 2.07 3.051 4.021 3.051h17.017c2.08 0 3.432-.936 4.013-3.12A18.64 18.64 0 0029 21.742v-11.51zm-16.44 9.28H8.944V10.05h1.883v7.677h1.733v1.784zm3.912 0h-1.742l-2.483-9.463h1.925l1.578 6.666 1.558-6.666h1.912l-2.748 9.463zm6.632.172c-2.162 0-3.453-1.39-3.453-3.724V15.39c0-2.14 1.2-3.575 3.37-3.575 2.256 0 3.282 1.55 3.282 3.878v1.094h-4.8v.444c0 1.24.525 1.904 1.6 1.904.85 0 1.37-.444 1.52-1.214h1.76c-.278 1.678-1.44 2.764-3.279 2.764zm1.44-5.528v-.196c0-1.24-.464-1.884-1.496-1.884-1.05 0-1.556.71-1.556 1.98v.1h3.052z"/>
      </svg>
    ),
    'MongoDB': (
      <svg viewBox="0 0 32 32" width={size} height={size}>
        <path fill="#47A248" d="M16 2C9.924 2 5 7.924 5 14c0 4.2 2.1 7.9 5.3 10.1L16 30l5.7-5.9C24.9 21.9 27 18.2 27 14c0-6.076-4.924-12-11-12zm0 20.5c-1.1 0-2-.9-2-2V9.5c0-1.1.9-2 2-2s2 .9 2 2v11c0 1.1-.9 2-2 2z"/>
      </svg>
    ),
    'REST APIs': (
      <svg viewBox="0 0 32 32" width={size} height={size}>
        <rect width="32" height="32" rx="4" fill="#FF6C37"/>
        <path fill="#fff" d="M8 10h4v2H8zm0 5h6v2H8zm0 5h4v2H8zm8-10h8v2h-8zm0 5h6v2h-6zm0 5h8v2h-8z"/>
      </svg>
    ),
    'Tailwind CSS': (
      <svg viewBox="0 0 32 32" width={size} height={size}>
        <path fill="#06B6D4" d="M16 6c-4 0-6.5 2-7.5 6 1.5-2 3.25-2.75 5.25-2.25 1.141.285 1.957 1.113 2.857 2.026C18.05 13.273 19.658 15 23 15c4 0 6.5-2 7.5-6-1.5 2-3.25 2.75-5.25 2.25-1.141-.285-1.957-1.113-2.857-2.026C20.95 7.727 19.342 6 16 6zM9 15c-4 0-6.5 2-7.5 6 1.5-2 3.25-2.75 5.25-2.25 1.141.285 1.957 1.113 2.857 2.026C11.05 22.273 12.658 24 16 24c4 0 6.5-2 7.5-6-1.5 2-3.25 2.75-5.25 2.25-1.141-.285-1.957-1.113-2.857-2.026C13.95 16.727 12.342 15 9 15z"/>
      </svg>
    ),
    'Bootstrap': (
      <svg viewBox="0 0 32 32" width={size} height={size}>
        <rect width="32" height="32" rx="6" fill="#7952B3"/>
        <path fill="#fff" d="M10 8h7.5c3.5 0 5.5 1.8 5.5 4.5 0 1.8-1 3.2-2.5 3.8 2 .5 3.5 2 3.5 4.2 0 3-2.2 5-6 5H10V8zm3 6.5h4c1.5 0 2.5-.8 2.5-2s-.8-2-2.5-2h-4v4zm0 7h4.5c1.8 0 2.8-.9 2.8-2.3 0-1.3-1-2.2-2.8-2.2H13v4.5z"/>
      </svg>
    ),
    'Styled Components': (
      <svg viewBox="0 0 32 32" width={size} height={size}>
        <path fill="#DB7093" d="M9.5 8l3 2.5-3 2.5M14.5 13.5h5M16 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2z"/>
        <path fill="none" stroke="#DB7093" strokeWidth="1.5" strokeLinecap="round" d="M9.5 8l3 2.5-3 2.5M14.5 13.5h5M9.5 18l3 2.5-3 2.5M14.5 23.5h5"/>
      </svg>
    ),
    'Shadcn/ui': (
      <svg viewBox="0 0 32 32" width={size} height={size}>
        <rect width="32" height="32" rx="6" fill="#18181B"/>
        <path fill="#fff" d="M8 16h6M18 8v16" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
    'Supabase': (
      <svg viewBox="0 0 32 32" width={size} height={size}>
        <defs>
          <linearGradient id="sb1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3ECF8E"/>
            <stop offset="100%" stopColor="#1C7A4A"/>
          </linearGradient>
        </defs>
        <path fill="url(#sb1)" d="M17.5 3L5 19.5h9V29L29 12.5H20V3z"/>
      </svg>
    ),
    'Git & GitHub': (
      <svg viewBox="0 0 32 32" width={size} height={size}>
        <path fill="#F05032" d="M30.235 14.531L17.469 1.765a2.61 2.61 0 00-3.692 0L1.765 13.776a2.608 2.608 0 000 3.693l12.766 12.766a2.608 2.608 0 003.692 0L30.235 18.22a2.608 2.608 0 000-3.692zM14.234 25.001l-7.235-7.235 1.847-1.847 5.388 5.388 9.04-9.04 1.847 1.848-10.887 10.886z"/>
      </svg>
    ),
    'VS Code': (
      <svg viewBox="0 0 32 32" width={size} height={size}>
        <path fill="#0078D4" d="M29 5.5L22.5 2l-12 11L4 8.5 2 10v12l2 1.5 6.5-4.5 12 11 6.5-3.5V5.5zm-2 18.6l-9.5-8.1L24 9.5v14.6zM5.5 19.5L4 18.5v-5l1.5-1 5 3.5-5 3.5z"/>
      </svg>
    ),
    'Vite': (
      <svg viewBox="0 0 32 32" width={size} height={size}>
        <defs>
          <linearGradient id="vite1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#41D1FF"/>
            <stop offset="100%" stopColor="#BD34FE"/>
          </linearGradient>
          <linearGradient id="vite2" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FF3CAC"/>
            <stop offset="100%" stopColor="#784BA0"/>
          </linearGradient>
        </defs>
        <path fill="url(#vite1)" d="M29.5 6L16.5 28.5l-2-3.5L26 6z"/>
        <path fill="url(#vite2)" d="M2.5 6L16 29l2.5-4.5L8 6z"/>
        <path fill="#fff" fillOpacity=".8" d="M16 10l-5 10h10z"/>
      </svg>
    ),
    'npm / yarn': (
      <svg viewBox="0 0 32 32" width={size} height={size}>
        <rect width="32" height="32" rx="4" fill="#CB3837"/>
        <path fill="#fff" d="M5 5h22v22H18V10h-5.5v17H5V5z"/>
      </svg>
    ),
  };

  return icons[name] || (
    <svg viewBox="0 0 32 32" width={size} height={size}>
      <rect width="32" height="32" rx="6" fill="#334155"/>
      <text x="16" y="21" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="bold">
        {name.charAt(0)}
      </text>
    </svg>
  );
};

const skillCategories = [
  {
    icon: Code2,
    title: 'Frontend',
    color: 'from-blue-500 to-cyan-400',
    skills: [
      { name: 'HTML5',      level: 95 },
      { name: 'CSS3',       level: 90 },
      { name: 'JavaScript', level: 88 },
      { name: 'TypeScript', level: 82 },
      { name: 'React.js',   level: 85 },
    ],
  },
  {
    icon: Server,
    title: 'Backend',
    color: 'from-emerald-500 to-teal-400',
    skills: [
      { name: 'Node.js',      level: 79 },
      { name: 'Express.js',   level: 78 },
      { name: 'JavaScript',   level: 88 },
      { name: 'REST APIs',    level: 82 },
      { name: 'MongoDB',      level: 75 },
      { name: 'Supabase',     level: 78 },
    ],
  },
  {
    icon: Palette,
    title: 'Styling & UI',
    color: 'from-violet-500 to-purple-400',
    skills: [
      { name: 'Tailwind CSS',      level: 85 },
      { name: 'Bootstrap',         level: 80 },
      { name: 'Styled Components', level: 72 },
      { name: 'Shadcn/ui',         level: 78 },
    ],
  },
  {
    icon: Wrench,
    title: 'Tools & DevOps',
    color: 'from-orange-500 to-amber-400',
    skills: [
      { name: 'Git & GitHub', level: 85 },
      { name: 'VS Code',      level: 88 },
      { name: 'Vite',         level: 80 },
      { name: 'npm / yarn',   level: 82 },
    ],
  },
];

const techBadges = [
  { name: 'MongoDB',      color: '#47A248', bg: '#0d2b0d' },
  { name: 'Express.js',   color: '#ffffff', bg: '#1a1a1a' },
  { name: 'React.js',     color: '#61DAFB', bg: '#0d1b2a' },
  { name: 'Node.js',      color: '#8CC84B', bg: '#0d1a0d' },
  { name: 'TypeScript',   color: '#3178C6', bg: '#0d1525' },
  { name: 'Tailwind CSS', color: '#06B6D4', bg: '#0d1f24' },
  { name: 'Bootstrap',    color: '#7952B3', bg: '#150d24' },
  { name: 'JavaScript',   color: '#F7DF1E', bg: '#24210d' },
  { name: 'Supabase',     color: '#3ECF8E', bg: '#0d2420' },
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

          {/* Tech Badges with real icons */}
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