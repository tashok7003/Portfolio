import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="py-16 lg:py-24 bg-gray-100 dark:bg-gray-900 w-full transition-colors duration-200" id="about">
      <div className="w-full px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-200">About Me</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center w-full max-w-[2000px] mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 lg:space-y-8"
          >
            <p className="text-lg lg:text-xl text-gray-700 dark:text-gray-300 transition-colors duration-200">
              I am a passionate Full Stack Developer and a third-year B.Tech student at AMC Engineering College, pursuing Information Science and Engineering. With a strong foundation in web development and problem-solving, I consistently strive for excellence in creating efficient and user-centric solutions.
            </p>
            <p className="text-lg lg:text-xl text-gray-700 dark:text-gray-300 transition-colors duration-200">
              I specialize in building modern web applications using React, Node.js, and other cutting-edge technologies. My expertise includes front-end development with React and TailwindCSS, back-end development with Node.js and Python, and database management with MySQL and MongoDB.
            </p>
            <p className="text-lg lg:text-xl text-gray-700 dark:text-gray-300 transition-colors duration-200">
              As an active problem solver on LeetCode and a tech enthusiast, I've developed strong algorithmic thinking and coding skills. I'm passionate about creating clean, maintainable code and staying current with industry best practices and emerging technologies.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 p-6 lg:p-8 rounded-lg shadow-xl transition-colors duration-200"
          >
            <h3 className="text-2xl lg:text-3xl font-semibold text-gray-900 dark:text-white mb-6 transition-colors duration-200">Quick Facts</h3>
            <ul className="space-y-4 lg:space-y-6">
              <li className="flex items-center text-gray-700 dark:text-gray-300 text-lg transition-colors duration-200">
                <span className="w-28 lg:w-32 font-semibold">Location:</span>
                <span>Bengaluru, India</span>
              </li>
              <li className="flex items-center text-gray-700 dark:text-gray-300 text-lg transition-colors duration-200">
                <span className="w-28 lg:w-32 font-semibold">Education:</span>
                <span>B.Tech Information Science and Engineering, AMC Engineering College (2021-2025)</span>
              </li>
              <li className="flex items-center text-gray-700 dark:text-gray-300 text-lg transition-colors duration-200">
                <span className="w-28 lg:w-32 font-semibold">LeetCode:</span>
                <span><a href="https://leetcode.com/u/5uzsyNLT45/" className="text-blue-500 hover:text-blue-600 transition-colors duration-200" target="_blank" rel="noopener noreferrer">View Profile</a></span>
              </li>
              <li className="flex items-center text-gray-700 dark:text-gray-300 text-lg transition-colors duration-200">
                <span className="w-28 lg:w-32 font-semibold">Focus:</span>
                <span>Full Stack Development</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;