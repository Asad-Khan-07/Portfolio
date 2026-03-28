import { Mail, MapPin, Phone, Github, Instagram, Send, Linkedin } from 'lucide-react';
import AnimatedBackground from '@/components/AnimatedBackground';
import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

const Contact = () => {
  const [loader, setLoader] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoader(true);
    emailjs.sendForm(
      import.meta.env.VITE_SERVICE,
      import.meta.env.VITE_TEMPELATE_ID,
      formRef.current!,
      import.meta.env.VITE_PUBLIC_KEY
    ).then(() => {
      toast.success('Message sent successfully!', { position: 'top-right', style: { background: 'rgba(15,23,42,0.95)', border: '1px solid rgba(59,130,246,0.3)', color: '#fff' } });
      setLoader(false);
      
    }, (err) => {
      toast.error('Could not send message.', { position: 'top-right' });
      console.log(err);
      console.log(import.meta.env.VITE_SERVICE);
      setLoader(false);
    });
  };

  const contactInfo = [
    { icon: Mail,    label: 'Email',    value: 'asadhussain5768@gmail.com', href: 'mailto:asadhussain5768@gmail.com' },
    { icon: Phone,   label: 'Phone',    value: '+92 324 3502597',            href: 'tel:+923243502597' },
    { icon: MapPin,  label: 'Location', value: 'Hyderabad, Sindh',          href: '#' },
  ];

  const socialLinks = [
    { icon: Github,    href: 'https://github.com/Asad-Khan-07',                  label: 'GitHub' },
    { icon: Instagram, href: 'https://www.instagram.com/ww.w.asadkhan905/',       label: 'Instagram' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/asad-khan-55519836b',       label: 'Linkedin' },
  ];

  const inputClass = "w-full bg-secondary/60 border border-border/60 text-foreground placeholder:text-muted-foreground rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30 transition-all duration-300";

  return (
    <section id="contact" className="py-28 section-bg relative overflow-hidden">
      <AnimatedBackground />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-64 bg-primary/5 blur-3xl rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
              <Send size={13} className="text-primary" />
              <span className="text-sm font-medium text-primary">Contact</span>
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black text-foreground mb-4" style={{ fontFamily: 'Syne, sans-serif' }}
            >
              Get In Touch
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="text-muted-foreground text-lg max-w-2xl mx-auto"
            >
              Have a project in mind? Let's build something amazing together.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">

            {/* Left: Info */}
            <motion.div
              initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="p-6 rounded-2xl bg-card border border-border/50">
                <h3 className="text-xl font-bold text-foreground mb-6" style={{ fontFamily: 'Syne, sans-serif' }}>Contact Details</h3>
                <div className="space-y-4">
                  {contactInfo.map((item, i) => (
                    <a key={i} href={item.href}
                      className="flex items-center gap-4 p-4 rounded-xl hover:bg-secondary/60 transition-all duration-300 group"
                    >
                      <div className="w-11 h-11 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <item.icon className="text-white" size={18} />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">{item.label}</p>
                        <p className="text-sm font-semibold text-foreground">{item.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-card border border-border/50">
                <h3 className="text-sm font-bold text-foreground mb-4 uppercase tracking-wider">Social</h3>
                <div className="flex gap-3">
                  {socialLinks.map((s, i) => (
                    <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-secondary border border-border/60 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 hover:-translate-y-1 transition-all duration-300"
                      aria-label={s.label}
                    >
                      <s.icon size={18} />
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability card */}
              <div className="p-6 rounded-2xl gradient-primary text-white shadow-xl">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-white animate-pulse" />
                  <span className="text-sm font-bold">Currently Available</span>
                </div>
                <p className="text-sm text-white/80">
                  Open to freelance projects, internships, and full-time opportunities.
                </p>
              </div>
            </motion.div>

            {/* Right: Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            >
              <div className="p-8 rounded-2xl bg-card border border-border/50 shadow-xl">
                <h3 className="text-xl font-bold text-foreground mb-6" style={{ fontFamily: 'Syne, sans-serif' }}>Send a Message</h3>
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Name</label>
                    <input type="text" name="name" placeholder="Your Name" required className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Email</label>
                    <input type="email" name="email" placeholder="your@email.com" required className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Subject</label>
                    <input type="text" name="subject" placeholder="Project inquiry" required className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Message</label>
                    <textarea name="message" rows={5} placeholder="Tell me about your project..." required className={inputClass} />
                  </div>
                  <button
                    type="submit"
                    disabled={loader}
                    className="w-full gradient-primary text-white py-4 rounded-xl font-bold shadow-lg hover:opacity-90 hover:-translate-y-0.5 hover:shadow-primary/30 hover:shadow-xl transition-all duration-300 disabled:opacity-60 flex items-center justify-center gap-2"
                  >
                    {loader ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      <><Send size={16} /> Send Message</>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
