import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sections = ['home','about','skills','projects','contact'];
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id); break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled
        ? 'bg-background/80 backdrop-blur-xl border-b border-white/5 shadow-xl shadow-black/20'
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a
            href="#home"
            onClick={e => { e.preventDefault(); scrollToSection('#home'); }}
            className="group flex items-center gap-2"
          >
            <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center text-white font-bold text-sm shadow-lg">
              A
            </div>
            <span className="text-xl font-bold" style={{ fontFamily: 'Syne, sans-serif' }}>
              Asad<span className="gradient-text">.</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(link => {
              const id = link.href.replace('#', '');
              const isActive = activeSection === id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={e => { e.preventDefault(); scrollToSection(link.href); }}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                    isActive
                      ? 'text-primary'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {isActive && (
                    <span className="absolute inset-0 bg-primary/10 rounded-lg border border-primary/20" />
                  )}
                  <span className="relative">{link.name}</span>
                </a>
              );
            })}
            <button
              onClick={() => scrollToSection('#contact')}
              className="ml-4 px-5 py-2 rounded-xl gradient-primary text-white text-sm font-semibold shadow-lg hover:opacity-90 hover:shadow-primary/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
            >
              Hire Me
            </button>
          </div>

          <button
            className="md:hidden text-foreground p-2 rounded-lg hover:bg-white/5 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 p-4 bg-card/95 backdrop-blur-xl rounded-2xl border border-white/5 shadow-2xl animate-slide-up">
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                onClick={e => { e.preventDefault(); scrollToSection(link.href); }}
                className="block py-3 px-4 text-foreground hover:text-primary hover:bg-white/5 rounded-lg transition-all font-medium"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={() => scrollToSection('#contact')}
              className="w-full mt-3 gradient-primary text-white py-3 px-4 rounded-xl font-semibold"
            >
              Hire Me
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
