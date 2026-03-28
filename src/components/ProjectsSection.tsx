"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

// 1. Pastikan file gambar ini benar-benar ada di folder src/jifot/
import Bukuavif from '../jigif/buku.avif'; 
import JoinUsGif from '../jigif/gif.gif';
import SpiderGif from '../jigif/Spider.gif';

const images = [Bukuavif, JoinUsGif, SpiderGif];

const slideVariants = {
  enter: (direction: number) => ({ x: direction > 0 ? 1000 : -1000, opacity: 0 }),
  center: { zIndex: 1, x: 0, opacity: 1 },
  exit: (direction: number) => ({ zIndex: 0, x: direction < 0 ? 1000 : -1000, opacity: 0 })
};

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'Platform e-commerce modern dengan fitur lengkap.',
    tags: ['React', 'Node.js'],
    image: 'Bukuavif, JoinUsGif, SpiderGif',
    color: 'from-blue-500/20 to-cyan-500/20',
    github: '#',
    demo: '#',
  },
  {
    title: 'Learning Management System',
    description: 'Platform pembelajaran online dengan video streaming.',
    tags: ['Next.js', 'TypeScript'],
    image: ['🔑', '⭐', '🍌'],
    color: 'from-purple-500/20 to-pink-500/20',
    github: '#',
    demo: '#',
  }
];

export default function ProjectsSection() {
  const [imageIndex, setImageIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setImageIndex((prev) => (prev + newDirection + images.length) % images.length);
  };

  return (
    <section id="projects" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        
        {/* CAROUSEL SECTION */}
        <div className="relative group/carousel flex items-center justify-center w-full max-w-4xl mx-auto h-[400px] overflow-hidden rounded-xl mb-20 shadow-2xl bg-black/5">
          <AnimatePresence initial={false} custom={direction}>
            {/* PERBAIKAN: Tag img harus self-closing (diakhiri />) dan tidak boleh punya anak */}
            <motion.img
              key={imageIndex}
              src={images[imageIndex]}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
              className="absolute w-full h-full object-cover select-none"
            />
          </AnimatePresence>
          
          {/* Navigasi ditaruh DI LUAR AnimatePresence agar tidak ikut terhapus saat ganti gambar */}
          <div className="absolute inset-0 flex items-center justify-between px-4 z-10 opacity-0 group-hover/carousel:opacity-100 transition-opacity">
            <button onClick={() => paginate(-1)} className="p-2 rounded-full bg-black/40 text-white hover:bg-black/60">
              <ChevronLeft />
            </button>
            <button onClick={() => paginate(1)} className="p-2 rounded-full bg-black/40 text-white hover:bg-black/60">
              <ChevronRight />
            </button>
          </div>
        </div>

        {/* GRID PROJECTS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full p-6 bg-background/50 backdrop-blur-sm border rounded-2xl">
                <div className={`aspect-video rounded-xl mb-4 flex items-center justify-center bg-gradient-to-br ${project.color}`}>
                  <span className="text-6xl">{project.image}</span>
                </div>
                <div className="space-y-3">
                  <h3 className="font-bold text-lg group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">{project.description}</p>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" asChild>
                      <a href={project.github}><Github className="w-4 h-4 mr-1" /> Code</a>
                    </Button>
                    <Button size="sm" asChild>
                      <a href={project.demo}><ExternalLink className="w-4 h-4 mr-1" /> Demo</a>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}