import { motion } from "framer-motion";

const Skills = () => {
  return (
    <section id="skills" className="px-6 py-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-purple-600 mb-8 text-center"
      >
        Skills
      </motion.h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        {[
          "HTML",
          "CSS",
          "JavaScript",
          "React",
          "TypeScript",
          "Redux",
          "Tailwind",
        ].map((skill, index) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="p-4 bg-purple-100 rounded-lg  text-purple-700 font-semibold shadow-xl"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
