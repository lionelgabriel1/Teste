
import React from 'react';
import { motion } from 'framer-motion';

const VipClubSection = ({ onLinkClick, content, sharedContent }) => {
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  };

  return (
    <motion.section 
      className="py-12 px-4 text-center"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      <div className="flex justify-center items-center space-x-2 md:space-x-6">
        <motion.div 
          className="arrow"
          variants={itemVariants}
          animate={{ y: [0, 10, 0], x: [0, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <img src={sharedContent?.arrow_image} alt="Seta" className="w-10 h-10 transform -scale-x-100" />
        </motion.div>

        <motion.div 
          className="inline-block cursor-pointer"
          onClick={onLinkClick}
          whileHover={{ scale: 1.05, rotate: 2 }}
          whileTap={{ scale: 0.95, rotate: -2 }}
          variants={itemVariants}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <img 
            src={content.vip_image} 
            alt="Banner do Club VIP com bónus semanais" 
            className="max-w-[200px] sm:max-w-sm md:max-w-md mx-auto"
          />
        </motion.div>
        
        <motion.div 
          className="arrow"
          variants={itemVariants}
          animate={{ y: [0, 10, 0], x: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
        >
          <img src={sharedContent?.arrow_image} alt="Seta" className="w-10 h-10" />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default VipClubSection;
