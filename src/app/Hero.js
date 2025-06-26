// components/Hero.js
'use client';

import { dataSite } from '@/data';
import { motion } from 'framer-motion';

const Hero = () => {
  const url = dataSite.image_hero;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.5 },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className='relative h-screen w-full flex items-center justify-center text-center text-white'>
      {/* --- Imagen de Fondo --- */}
      <div
        className='absolute inset-0 bg-cover bg-center'
        style={{ backgroundImage: `url(${url})` }} // Reemplaza esta imagen
      />
      {/* --- Superposición Oscura --- */}
      <div className='absolute inset-0 bg-black/60'></div>

      {/* --- Contenido --- */}
      <motion.div
        className='relative container mx-auto px-6'
        variants={containerVariants}
        initial='hidden'
        animate='visible'
      >
        <motion.p
          variants={itemVariants}
          className='font-semibold text-white/80'
        >
          {dataSite.name}
        </motion.p>

        <motion.h1
          variants={itemVariants}
          className='mt-4 text-5xl md:text-7xl font-bold leading-tight'
        >
          {dataSite.subtitle}
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className='mt-6 max-w-2xl mx-auto text-white/90'
        >
          {dataSite.description}
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Hero;
