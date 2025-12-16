import { FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 px-6 flex flex-col items-center text-center"
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-purple-600 mb-10"
      >
        Projects
      </motion.h2>

      {/* Cards Container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid gap-8 md:grid-cols-2 max-w-4xl w-full"
      >
        {/* Project 1 */}
        <motion.div
          variants={cardVariants}
          whileHover={{ scale: 1.05 }}
          className="p-5 bg-purple-100 rounded-xl text-purple-700 font-semibold shadow-xl"
        >
          <h3 className="text-xl font-semibold text-purple-700">
            Animated Landing Page
          </h3>

          <p className="text-gray-600 mt-2">
            Built a responsive animated landing page using React and Tailwind CSS.
          </p>

          <p className="text-sm text-gray-500 mt-3">
            Tech: React, Tailwind, Animations
          </p>

          <a
            href="https://github.com/muqadas-shafiq/task-2"
            target="_blank"
            className="text-purple-600 mt-4 flex justify-center items-center gap-2"
          >
            View Project <FaArrowRight />
          </a>
        </motion.div>

        {/* Project 2 */}
        <motion.div
          variants={cardVariants}
          whileHover={{ scale: 1.05 }}
          className="p-5 bg-purple-100 rounded-xl text-purple-700 font-semibold shadow-xl"
        >
          <h3 className="text-xl font-semibold text-purple-700">
            Shopping Store
          </h3>

          <p className="text-gray-600 mt-2">
            Developed a shopping store using React, TypeScript, and Redux.
          </p>

          <p className="text-sm text-gray-500 mt-3">
            Tech: React, TypeScript, Redux
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
