import { motion } from 'framer-motion';
import { ArrowDown, Github, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ThreeScene from './ThreeScene';

export default function HeroSection() {
  
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* 1. ANIMASI 3D (Z-INDEX PALING BAWAH) */}
      <ThreeScene />

      {/* 2. ELEMEN DEKORASI: IKAN MELAYANG */}
      <img 
 
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24">
          
          {/* --- BAGIAN FOTO PROFIL (EFEK GLOW MENYALA) --- */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex-shrink-0"
          >
            <div className="floating-effect relative">
              {/* Efek Cahaya Biru di Belakang Foto */}
              <div className="absolute inset-0 bg-blue-500/30 rounded-full blur-[80px] -z-10 animate-pulse"></div>
              
              {/* Frame Foto Bulat dengan Shadow Glow */}
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-500/50 shadow-glow relative">
                <img 
                  src="/foto-profil.jpg" 
                  className="w-full h-full object-cover" 
                  alt="Profile" 
                />
              </div>
            </div>
          </motion.div>

          {/* --- BAGIAN TEKS (GRADIENT & TYPOGRAPHY) --- */}
          <div className="text-left flex flex-col items-start max-w-2xl">
            
            <motion.div 
              className="inline-block px-4 py-2 rounded-full glass text-sm font-medium text-primary mb-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              👋 hai hai Selamat datang di portfolio aku
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-foreground text-5xl md:text-7xl font-bold leading-tight mb-6"
            >
              Belajar dan <span className="block">Berkembang</span>
              <span className="text-gradient">di Dunia Web</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-muted-foreground mb-8"
            >
            you don't need to be perfect to start, but you need to start to be perfect , Mistakes are proof that you are trying.
            </motion.p>

            {/* BUTTONS DENGAN SHADOW GLOW */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap items-center gap-4 mb-10"
            >
              <Button 
                size="lg" 
                className="rounded-full px-8 shadow-glow bg-primary hover:opacity-90"
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Lihat Projects
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="rounded-full px-8 glass"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Hubungi Saya
              </Button>
            </motion.div>

            {/* SOSIAL MEDIA */}
            <div className="flex items-center gap-4">
               <a href="https://github.com/najiakayyasa014-boop" target="_blank" className="p-3 rounded-full glass hover:shadow-glow transition-all">
                  <Github className="h-5 w-5" />
               </a>
               <a href="https://instagram.com/najiakayysaa_" target="_blank" className="p-3 rounded-full glass hover:shadow-glow transition-all">
                  <Instagram className="h-5 w-5" />
               </a>
            </div>
          </div>

        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <motion.button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 p-3 rounded-full glass cursor-pointer z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="h-5 w-5 text-primary" />
      </motion.button>
    </section>
  );
}