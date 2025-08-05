
import React from 'react';
import { motion } from 'framer-motion';

const RegistrationSection = ({ onLinkClick, content }) => {
  if (!content) return null;

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const textLines = [
    "Aprenda como criar a sua conta de forma correta:",
    "1 - Inserir o seu número de telefone",
    "2 - Crie a sua palavra passe",
    "3 - Confirma a sua palavra passe",
    "4 - Confirma que tens mais de 18 anos clicando no quadro a esquerda ⬅",
    "5 - Clica em inscrever-se",
    "6 - Abrirá um novo campo, onde deverá colocar o código de confirmação enviado no seu número, em seguida clica em cadastrar e a sua conta será criada com sucesso!"
  ];

  return (
    <motion.section 
      className="py-12 px-4"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-lg mx-auto">
        <motion.h2 
          className="text-3xl font-bold text-center mb-6"
          variants={itemVariants}
        >
          {content.title}
        </motion.h2>
        
        <motion.div 
          className="cursor-pointer" 
          onClick={onLinkClick}
          whileHover={{ scale: 1.02, boxShadow: '0 10px 30px rgba(255, 0, 128, 0.2)' }}
          whileTap={{ scale: 0.98 }}
          variants={itemVariants}
        >
          <img 
            src={content.form_image} 
            alt="Formulário de registo ElephantBet" 
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </motion.div>

        <motion.div 
          className="mt-6 text-sm text-gray-300 space-y-2"
          variants={sectionVariants}
        >
          {textLines.map((line, index) => (
            <motion.p key={index} variants={itemVariants}>
              {line}
            </motion.p>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default RegistrationSection;
