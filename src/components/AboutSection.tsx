import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Video, Coffee, Rocket, ChevronDown } from 'lucide-react';

export default function AboutSection() {
  const [activeAccordion, setActiveAccordion] = useState(0);

  const stats = [
    { icon: Code2, value: '50+', label: 'Projects Selesai' },
    { icon: Video, value: '100+', label: 'Video Konten' },
    // { icon: Coffee, value: '1000+', label: 'Cangkir Kopi' },
    // { icon: Rocket, value: '5+', label: 'Tahun Pengalaman' },
  ];

  const accordionData = [
    {
      title: "Passionate Developer",
      content: "Saya adalah seorang Fullstack Web Developer dengan passion yang kuat dalam menciptakan solusi digital yang inovatif. saya telah membantu berbagai klien mewujudkan ide mereka."
    },
    {
      title: "Content Creator",
      content: "Selain coding, saya juga aktif sebagai Content Creator, berbagi pengetahuan tentang pemrograman dan teknologi. Saya percaya berbagi ilmu adalah cara terbaik untuk terus berkembang."
    },
    {
      title: "Visi & Misi",
      content: "Fokus utama saya adalah membangun aplikasi yang tidak hanya fungsional secara teknis, tetapi juga memberikan pengalaman pengguna (UX) yang luar biasa dan berkesan."
    }
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-2 block">Tentang Saya</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Mengenal Lebih Dekat
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Side: Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            <div className="relative group">
              <div className="aspect-square rounded-2xl overflow-hidden glass shadow-card relative z-10">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <motion.span 
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="text-8xl"
                  >
                    👨‍💻
                  </motion.span>
                </div>
              </div>
              {/* Decorative Background Elements */}
              <div className="absolute -inset-4 bg-primary/10 rounded-2xl blur-2xl -z-0 group-hover:bg-primary/20 transition-colors" />
              
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.5, type: "spring" }}
                className="absolute -bottom-6 -right-6 p-4 glass rounded-xl shadow-card z-20"
              >
                <p className="font-display font-bold text-2xl text-gradient">5+ Tahun</p>
                <p className="text-sm text-muted-foreground">Pengalaman</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side: Accordion & Stats */}
          <div className="space-y-8">
            <div className="space-y-4">
              {accordionData.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="border border-white/10 rounded-xl overflow-hidden glass"
                >
                  <button
                    onClick={() => setActiveAccordion(activeAccordion === i ? -1 : i)}
                    className="w-full p-4 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                  >
                    <span className="font-display font-bold text-lg">{item.title}</span>
                    <ChevronDown className={`transform transition-transform duration-300 ${activeAccordion === i ? 'rotate-180' : ''}`} />
                  </button>
                  
                  <AnimatePresence>
                    {activeAccordion === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="p-4 pt-0 text-muted-foreground leading-relaxed">
                          {item.content}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>

            {/* Stats Grid with Stagger Animation */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  transition={{ 
                    duration: 0.4, 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100 
                  }}
                  className="p-4 glass rounded-xl text-center shadow-sm border border-white/5"
                >
                  <stat.icon className="h-6 w-6 text-primary mx-auto mb-2" />
                  <p className="font-display text-2xl font-bold">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}