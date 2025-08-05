
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const FinalBonusSection = ({ onLinkClick, content }) => {
  if (!content) return null;

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, staggerChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <motion.section
      className="py-6 px-4 text-center"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      <motion.div
        className="inline-block mb-4 cursor-pointer"
        onClick={onLinkClick}
        whileHover={{ scale: 1.05, filter: 'brightness(1.1)' }}
        whileTap={{ scale: 0.95 }}
        variants={itemVariants}
      >
        <img
          src={content.bonus_image}
          alt="Banner de 300% de bónus de boas vindas"
          className="w-full max-w-[300px] md:max-w-sm mx-auto"
        />
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        variants={itemVariants}
      >
        <Button
          onClick={onLinkClick}
          className="register-button text-white font-bold py-4 px-8 rounded-full text-lg md:text-xl pulse-animation glow-effect"
        >
          {content.button_text}
        </Button>
      </motion.div>
    </motion.section>
  );
};

export default FinalBonusSection;
