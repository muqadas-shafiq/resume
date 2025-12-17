import { motion } from "framer-motion";

const educationData = [
  {
    title: "Hifz-ul-Quran",
    institute: "Minhaj Tehfeez-ul-Quran",
    description: "Completed Hifz-ul-Quran.",
    year: "2020",
  },
  {
    title: "Matric",
    institute: "The Bain Academy",
    description: "Completed Matric with 70% marks.",
    year: "2022",
  },
  {
    title: "Intermediate",
    institute: "The Bain Academy",
    description: "Completed Intermediate with 78% marks.",
    year: "2024",
  },
  {
    title: "Tarjamat-ul-Quran",
    institute: "Dar-ul-Tazkia",
    description: "Currently enrolled in Tarjamat-ul-Quran course.",
    year: "2025",
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="py-20 px-6 flex flex-col items-center"
    >
      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className=" grid gap-8 md:grid-cols-2 max-w-4xl w-full text-3xl font-bold text-purple-600 mb-12 text-center"
      >
        Education
      </motion.h2>

      {/* Education Cards */}
      <div className="flex flex-col gap-8 w-full items-center">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="
              max-w-xl w-full
              p-8 rounded-2xl text-center
              bg-purple-100 backdrop-blur-xl
              border border-white/30
              shadow-xl
            "
          >
            <h3 className="text-xl font-semibold text-purple-700">
              {edu.title}
            </h3>

            <p className="text-gray-700 mt-1">
              {edu.institute}
            </p>

            <p className="text-sm text-gray-600 mt-2">
              {edu.description}
            </p>

            <span className="inline-block mt-4 text-sm font-medium text-purple-600">
              {edu.year}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
