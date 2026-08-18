import { Briefcase, Calendar, ChevronRight } from 'lucide-react';

const experiences = [
  {
    role: 'MERN Stack Developer',
    company: 'Israin Solution',
    period: 'Mar 2026 – Present',
    description: [
      'Build full-stack web apps using MongoDB, Express.js, React.js, and Node.js, including RESTful APIs and JWT-based authentication.',
      'Design responsive UI components with React.js and Tailwind CSS, and model MongoDB schemas for scalable data storage.',
      'Deploy and maintain client applications on cPanel/Hostbay, including WordPress and PHP-based sites.',
    ],
    color: 'from-emerald-500 to-teal-400',
  },
  {
    role: 'Frontend Developer',
    company: 'Digi Poe Agency',
    period: 'Jul 2025 – Dec 2025',
    description: [
      'Built responsive web apps with React.js (Vite) and reusable components using React Hooks.',
      'Developed and consumed RESTful APIs across the MERN stack, ensuring smooth frontend-backend integration.',
      'Optimized applications for performance and cross-browser compatibility as part of a collaborative team.',
    ],
    color: 'from-blue-500 to-cyan-400',
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-28 section-alt-bg relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full bg-accent/5 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">

          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
              <Briefcase size={14} className="text-primary" />
              <span className="text-sm font-medium text-primary">Career Path</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>
              Work Experience
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              My professional journey building real-world applications
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative group">
                  {/* Timeline dot */}
                  <div className="absolute left-6 md:left-8 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-primary bg-background group-hover:scale-125 transition-transform duration-300 z-10" />

                  <div className="ml-14 md:ml-20 p-6 md:p-8 bg-card rounded-2xl border border-border/50 hover:border-primary/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-5">
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1" style={{ fontFamily: 'Syne, sans-serif' }}>
                          {exp.role}
                        </h3>
                        <p className={`text-lg font-semibold bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}>
                          {exp.company}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-secondary/50 border border-border/50 self-start">
                        <Calendar size={14} className="text-muted-foreground" />
                        <span className="text-sm font-medium text-muted-foreground">{exp.period}</span>
                      </div>
                    </div>

                    <ul className="space-y-3">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-muted-foreground leading-relaxed">
                          <ChevronRight size={18} className="text-primary mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
