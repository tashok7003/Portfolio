import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 text-gray-900 dark:text-white py-16 lg:py-24 px-4 lg:px-8 transition-colors duration-200">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 lg:space-y-8"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-900 dark:text-white transition-colors duration-200">
            Hi, I'm <span className="text-blue-600 dark:text-blue-500">Ashok</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto transition-colors duration-200">
            Crafting Digital Experiences | Full-Stack Innovator | AI Enthusiast | Tech Explorer | Ready to Create Impact
          </p>
          <div className="flex justify-center gap-6 sm:gap-8">
            <motion.a
              href="https://github.com/tashok7003"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl lg:text-4xl hover:text-blue-500 transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/ashok-t-190678287/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl lg:text-4xl hover:text-blue-500 transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              <FaLinkedin />
            </motion.a>
          </div>
          <motion.button
            onClick={() => {
              document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full text-lg lg:text-xl font-semibold transition-colors shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;