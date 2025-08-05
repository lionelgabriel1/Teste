
import React from 'react';
import { motion } from 'framer-motion';

const PrizeSection = ({ onLinkClick, content, sharedContent }) => {
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
        whileHover={{ scale: 1.05, y: -5 }}
        whileTap={{ scale: 0.95 }}
        variants={itemVariants}
      >
        <img
          src={content.prize_image}
          alt="Banner de prémio de 50.000.000KZ"
          className="w-full max-w-[300px] md:max-w-md mx-auto"
        />
      </motion.div>

      <motion.div
        className="flex justify-center mb-4 cursor-pointer"
        onClick={onLinkClick}
        variants={itemVariants}
      >
        <motion.img
          src={content.stars_image}
          alt="Cinco estrelas de avaliação"
          className="h-10 md:h-12"
          whileHover={{ scale: 1.1, filter: 'drop-shadow(0 0 10px #ffd700)' }}
          whileTap={{ scale: 0.9 }}
        />
      </motion.div>

      <motion.div
        className="arrow-down"
        variants={itemVariants}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <img src={sharedContent?.arrow_image} alt="Seta para baixo" className="w-10 h-10 mx-auto" />
      </motion.div>
    </motion.section>
  );
};

export default PrizeSection;
