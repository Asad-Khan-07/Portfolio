import { Github, Instagram, Heart, Linkedin } from 'lucide-react';

const Footer = () => (
  <footer className="bg-card border-t border-border/50 py-10">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <div className="text-xl font-black mb-1" style={{ fontFamily: 'Syne, sans-serif' }}>
            Asad<span className="gradient-text">.</span>
          </div>
          <p className="text-xs text-muted-foreground">MERN Stack Developer</p>
        </div>

        <div className="flex gap-4">
          {[
            { icon: Github,    href: 'https://github.com/Asad-Khan-07',                label: 'GitHub' },
            { icon: Instagram, href: 'https://www.instagram.com/ww.w.asadkhan905/',     label: 'Instagram' },
            { icon: Linkedin, href: 'https://www.linkedin.com/in/asad-hussain-55519836b',     label: 'Linkden' },
          ].map((s, i) => (
            <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-secondary border border-border/60 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-300"
            >
              <s.icon size={16} />
            </a>
          ))}
        </div>

        <p className="text-xs text-muted-foreground flex items-center gap-1">
          Built with <Heart size={20} className="text-red-500 fill-red-500" /> using React, TypeScript & Tailwind
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
