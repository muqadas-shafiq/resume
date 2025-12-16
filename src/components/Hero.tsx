import { motion } from "framer-motion";
import heroImg from "../../assets/resmepic.jpeg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImg})` }}
      />

      {/* Dark overlay (optional but recommended) */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Glass Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="
          relative z-10
          p-10 rounded-3xl text-center
          bg-white/30 backdrop-blur-xl
        
          shadow-2xl
          max-w-md w-full
        "
      >
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-purple-400"
        >
          Hafiza Muqadas
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-lg font-medium mt-4 text-gray-200"
        >
          Front-End Developer
        </motion.p>
        <motion.div className="glass-card mt-6">
  {/* name & role */}

  <a
    href="/resume.pdf"
    download
    className="mt-6 px-6 py-3 rounded-full bg-purple-600 text-white"
  >
    Download Resume
  </a>
</motion.div>
    
      </motion.div>
      
    </section>
  );
};

export default Hero;
