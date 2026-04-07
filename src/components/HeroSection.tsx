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
      /* Masukkan ini di dalam return HeroSection */
  <div className="absolute inset-0 z-0 pointer-events-none">
  {/* Partikel Buatan (Copy-paste beberapa kali dengan posisi berbeda) */}
  <div className="absolute w-1 h-1 bg-blue-400 rounded-full blur-sm opacity-20 top-1/4 left-1/4 animate-pulse"></div>
  <div className="absolute w-2 h-2 bg-white rounded-full blur-sm opacity-10 top-1/2 left-1/3 animate-bounce"></div>
  <div className="absolute w-1 h-1 bg-blue-300 rounded-full blur-sm opacity-30 bottom-1/4 right-1/4 animate-pulse"></div>
  </div>
      {/* 1. Background Animasi 3D */}
      <ThreeScene />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24">
          
          {/* --- BAGIAN KIRI: FOTO PROFIL DENGAN EFEK GLOW --- */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex-shrink-0"
          >
            <div className="floating-effect relative">
              {/* Efek Cahaya Biru (Glow) */}
              <div className="absolute inset-0 bg-blue-500/30 rounded-full blur-[80px] -z-10"></div>
              
              {/* Bingkai Foto Bulat */}
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-900/50 shadow-[0_0_50px_rgba(30,58,138,0.5)]">
                <img 
                  src="/aji.jpg" // Ganti dengan nama file foto aslimu di folder public
                  className="w-full h-full object-cover" 
                  alt="Profile" 
                />
              </div>
            </div>
          </motion.div>

          {/* --- BAGIAN KANAN: TEKS ANIMASI --- */}
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
              className="text-slate-900 dark:text-white text-5xl md:text-7xl font-bold leading-tight mb-6"
            >
              Belajar dan Berkembang <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">di Dunia Web</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-slate-600 dark:text-slate-400 text-lg max-w-xl mb-8"
            >
              Saya membangun aplikasi web yang indah dan fungsional, 
              serta membagikan pengetahuan melalui desain yang unik dan nyaman digunakan.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap items-center gap-4 mb-10"
            >
              <Button 
                size="lg" 
                className="rounded-full px-8 shadow-glow"
                onClick={() => {
                  const element = document.querySelector('#projects');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Lihat Projects
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="rounded-full px-8"
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Hubungi Saya
              </Button>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex items-center gap-4"
            >
              <a href="https://github.com/najiakayyasa014-boop" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full glass hover:shadow-glow transition-all">
                <Github className="h-5 w-5 text-foreground" />
              </a>
              <a href="https://www.instagram.com/najiakayysaa_" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full glass hover:shadow-glow transition-all">
                <Instagram className="h-5 w-5 text-foreground" />
              </a>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Tombol Scroll Down */}
      <motion.button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 p-3 rounded-full glass cursor-pointer z-20"
        whileHover={{ scale: 1.1 }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="h-5 w-5 text-primary" />
      </motion.button>
    </section>
  );
}
<div className="relative group">
  /* 1. Efek Glow Luar (Cahaya Biru Besar) */
  <div className="absolute inset-0 bg-blue-600/20 rounded-full blur-[120px] animate-pulse"></div>
  
  /* 2. Lingkaran Border Glow (Mirip di gambar) */
  <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border border-blue-400/30 p-2">
     <div className="w-full h-full rounded-full overflow-hidden border-4 border-blue-500/50 shadow-[0_0_40px_rgba(59,130,246,0.5)]">
        <img 
          src="/foto-profil.jpg" 
          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
          alt="Profile" 
        />
     </div>
  </div>
</div>