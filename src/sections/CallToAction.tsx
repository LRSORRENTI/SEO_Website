'use client';

import { useRef } from "react";
import Button from "@/components/Button";
import starsBg from '@/assets/stars.png';
import gridLinesBg from '@/assets/grid-lines.png';

import { motion, useScroll, useTransform } from 'framer-motion';

export const CallToAction = () => {

  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end'],
  })

  const backgroundPositionY = useTransform(scrollYProgress, [0, 1], [-300, 300])

  return (
  <section className="py-20 md:py-24" ref={sectionRef}>
    <div className="container">
      <motion.div 
          className="border border-white/15 py-24 rounded-xl overflow-hidden relative" 
          animate={{
            backgroundPositionX: starsBg.width,
          }}
          transition={{
            repeat: Infinity,
            duration: 60,
            ease: 'linear'
          }}
          style={{
             backgroundPositionY,
             backgroundImage: `url(${starsBg.src})`

      }}>
      <div className="absolute inset-0 bg-[rgb(74,32,138)] bg-blend-overlay [mask-image:radial-gradient(50%_50%_at_50%_35%,black,transparent)]" 
          style={{
              backgroundImage: `url(${gridLinesBg.src})`
            }}>
       </div>
      <div className="relative">
      <h2 className="text-5xl md:text-6xl max-w-sm mx-auto tracking-tighter text-center font-medium">AI Driven SEO for everyone.</h2>
      <p className="text-center text-lg md:text-xl max-w-xs mx-auto text-white/70 px-4 mt-5 tracking-tight">Achieve clear, impactful results without the complexity.</p>
      <div className="flex justify-center mt-8">
      <Button>Join Waitlist</Button>
      </div>
      </div>
      </motion.div>
    </div>
  </section>
  );
};
