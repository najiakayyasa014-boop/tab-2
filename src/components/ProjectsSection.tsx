"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Play, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

// --- 0. IMPORT ASSETS (Pastikan path ini benar) ---
import BukuImg from '../jifot/buku.jpg'; 
import JoinUsGif from '../jifot/gif.gif';
import SpiderGif from '../jifot/Spider.gif';

const images = [BukuImg, JoinUsGif, SpiderGif];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0
  })
};

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'Platform e-commerce modern dengan fitur lengkap termasuk payment gateway.',
    tags: ['React', 'Node.js'],
    image: '✏️',
    color: 'from-blue-500/20 to-cyan-500/20',
    github: '#',
    demo: '#',
  },
  {
    title: 'Learning Management System',
    description: 'Platform pembelajaran online dengan video streaming.',
    tags: ['Next.js', 'TypeScript'],
    image: '📕',
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
    setImageIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = images.length - 1;
      if (nextIndex >= images.length) nextIndex = 0;
      return nextIndex;
    });
  };

  return (
    <section id="projects" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        
        {/* CAROUSEL SECTION */}
        <div className="relative group/carousel flex items-center justify-center w-full max-w-4xl mx-auto h-[400px] overflow-hidden rounded-xl mb-20 shadow-2xl bg-black/5">
          <AnimatePresence initial={false} custom={direction}>
            <motion.img
              key={imageIndex}
              src={images[imageIndex]}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="absolute w-full h-full object-cover select-none"
            />
          </AnimatePresence>

          <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300 z-10">
            <button onClick={() => paginate(-1)} className="p-2 rounded-full bg-black/40 text-white"><ChevronLeft /></button>
            <button onClick={() => paginate(1)} className="p-2 rounded-full bg-black/40 text-white"><ChevronRight /></button>
          </div>
        </div>

        {/* HEADER SECTION */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Projects &amp; Karya</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
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
              <div className="h-full p-6 bg-background/50 backdrop-blur-sm border border-border rounded-2xl">
                <div className={`aspect-video rounded-xl mb-4 flex items-center justify-center bg-gradient-to-br ${project.color}`}>
                  <span className="text-6xl">{project.image}</span>
                </div>
                <h3 className="font-bold text-lg mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">Code</Button>
                  <Button size="sm">Demo</Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}