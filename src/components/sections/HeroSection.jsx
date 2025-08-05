
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const HeroSection = ({ onLinkClick, content, sharedContent }) => {
  if (!content) return null;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <motion.section
      className="relative flex flex-col items-center justify-center px-4 py-8 gradient-bg"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #ff0080 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, #4caf50 0%, transparent 50%)`
        }}></div>
      </div>

      <motion.div
        className="floating-animation mb-4 cursor-pointer"
        variants={itemVariants}
        onClick={onLinkClick}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
      >
        <img
          alt="Avião do jogo Aviator da ElephantBet"
          className="w-56 h-56 md:w-72 md:h-72 object-contain"
          src={content.plane_image} />
      </motion.div>

      <motion.div variants={itemVariants}>
        <Button
          onClick={onLinkClick}
          className="register-button text-white font-bold py-4 px-8 rounded-full text-xl mb-4 pulse-animation glow-effect"
        >
          {content.button_text}
        </Button>
      </motion.div>

       <motion.div
        className="w-full max-w-lg mx-auto mb-4"
        variants={itemVariants}
      >
        <div className="video-container">
            <iframe
            src={`https://www.youtube.com/embed/${content.video_id}?autoplay=1&loop=1&playlist=${content.video_id}&controls=0&showinfo=0&rel=0&modestbranding=1`}
            title="Aviator Game"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
            ></iframe>
        </div>
      </motion.div>

      <motion.div
        className="arrow-down"
        variants={itemVariants}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <img src={sharedContent?.arrow_image} alt="Seta para baixo" className="w-10 h-10" />
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;
