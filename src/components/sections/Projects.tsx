import { ExternalLink, Github, Star } from 'lucide-react';
import AnimatedBackground from '@/components/AnimatedBackground';
import Screenshotfive from '/assets/Screenshotfive.png';
import Screenshottwo from '/assets/Screenshottwo.png';
import Screenshotfour from '/assets/Screenshotfour.png';
import Screenshotthree from '/assets/Screenshotthree.png';

const projects = [
  {
    title: 'AI Pitch Creator',
    description: 'Full-stack app with database & auth that generates business pitches, AI images, and color palettes.',
    tags: ['React', 'TypeScript', 'Tailwind', 'Supabase'],
    image: Screenshottwo,
    link: 'https://shine-wears.vercel.app/',
    github: 'https://github.com/Asad-Khan-07/Pitch-AI.git',
    featured: true,
  },
  {
    title: 'Shine-wears',
    description: 'Clean, responsive static website built with React and Tailwind CSS.',
    tags: ['React', 'TypeScript', 'Tailwind', 'Supabase'],
    image: Screenshotfive,
    link: 'https://react-yum.netlify.app/',
    github: 'https://github.com/Asad-Khan-07/Yum-react.git',
    featured: false,
  },
  {
    title: 'Weather Dashboard',
    description: 'Interactive weather dashboard with live conditions, forecasts and maps via public API.',
    tags: ['JavaScript', 'REST APIs', 'CSS3', 'HTML'],
    image: Screenshotthree,
    link: 'https://check-your-area-weather.netlify.app/',
    github: 'https://github.com/Asad-Khan-07/Weather-App-Java-script.git',
    featured: false,
  },
  {
    title: 'Guess the Number',
    description: 'Browser-based game — guess a number between 1–100 in 10 attempts.',
    tags: ['JavaScript', 'HTML', 'CSS3'],
    image: Screenshotfour,
    link: 'https://pickthenumber.netlify.app/',
    github: 'https://github.com/Asad-Khan-07/Guess-the-Number.git',
    featured: false,
  },
];

const tagColors: Record<string, string> = {
  React: 'text-cyan-400 bg-cyan-400/10 border-cyan-400/20',
  TypeScript: 'text-blue-400 bg-blue-400/10 border-blue-400/20',
  Tailwind: 'text-teal-400 bg-teal-400/10 border-teal-400/20',
  Supabase: 'text-green-400 bg-green-400/10 border-green-400/20',
  Vite: 'text-purple-400 bg-purple-400/10 border-purple-400/20',
  JavaScript: 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20',
  'REST APIs': 'text-orange-400 bg-orange-400/10 border-orange-400/20',
  HTML: 'text-red-400 bg-red-400/10 border-red-400/20',
  'CSS3': 'text-indigo-400 bg-indigo-400/10 border-indigo-400/20',
};

const Projects = () => (
  <section id="projects" className="py-28 section-alt-bg relative overflow-hidden">
    <AnimatedBackground />
    <div className="absolute top-10 right-10 w-80 h-80 rounded-full bg-primary/5 blur-3xl pointer-events-none" />

    <div className="container mx-auto px-6 relative z-10">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Star size={13} className="text-primary" />
            <span className="text-sm font-medium text-primary">Portfolio</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A selection of my recent work — from full-stack apps to interactive frontends
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <div
              key={i}
              className="group bg-card rounded-2xl border border-border/50 overflow-hidden hover:border-primary/30 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-400 animate-fade-in"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden bg-secondary">
                {project.featured && (
                  <div className="absolute top-3 left-3 z-10 px-3 py-1 rounded-full gradient-primary text-white text-xs font-bold shadow-lg">
                    ⭐ Featured
                  </div>
                )}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6 gap-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium hover:bg-white/20 transition-colors">
                    <Github size={15} /> Code
                  </a>
                  <a href={project.link} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-xl gradient-primary text-white text-sm font-medium hover:opacity-90 transition-opacity shadow-lg">
                    <ExternalLink size={15} /> Live Demo
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2" style={{ fontFamily: 'Syne, sans-serif' }}>
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, ti) => (
                    <span
                      key={ti}
                      className={`px-2.5 py-1 rounded-lg text-xs font-semibold border ${tagColors[tag] || 'text-foreground bg-secondary border-border'}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Projects;
