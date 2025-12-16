import { motion } from "framer-motion";


const Course = () => {
  return (
    <section
      id="course"
      className="py-20 px-6 flex flex-col items-center"
    >
      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-purple-600 mb-12 text-center"
      >
        Courses
      </motion.h2>

      {/* Course Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="
          max-w-xl w-full
          p-8 rounded-2xl text-center
          bg-white/40 backdrop-blur-xl
          border border-white/30
          shadow-xl
        "
      >
        <h3 className="text-xl font-semibold text-purple-700">
          Web Development
        </h3>

        <p className="text-gray-700 mt-2">
          Theeta Institute
        </p>

        <p className="text-sm text-gray-600 mt-2">
          Completed Web Development course with practical projects.
        </p>

        <span className="inline-block mt-4 text-sm font-medium text-purple-600">
          2024
        </span>
      </motion.div>
    </section>
  );
};

export default Course;
