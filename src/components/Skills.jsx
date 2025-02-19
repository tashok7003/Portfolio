import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaPython, FaDatabase } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiTailwindcss, SiDocker } from 'react-icons/si';

const skillsData = [
  { name: 'React', icon: FaReact, color: 'text-blue-400' },
  { name: 'Node.js', icon: FaNodeJs, color: 'text-green-500' },
  { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400' },
  { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-600' },
  { name: 'Python', icon: FaPython, color: 'text-yellow-600' },
  { name: 'TailwindCSS', icon: SiTailwindcss, color: 'text-cyan-400' },
  { name: 'Docker', icon: SiDocker, color: 'text-blue-500' },
  { name: 'Databases', icon: FaDatabase, color: 'text-gray-400' },
];

const Skills = () => {
  return (
    <section className="py-20 lg:py-32 bg-gray-100 dark:bg-gray-800 transition-colors duration-200" id="skills">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-200">Skills & Technologies</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
          {skillsData.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-700 p-6 lg:p-8 rounded-lg text-center hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors transform hover:-translate-y-1 hover:shadow-xl duration-300"
            >
              <skill.icon className={`text-4xl lg:text-5xl ${skill.color} mx-auto mb-4`} />
              <h3 className="text-lg lg:text-xl font-semibold text-gray-900 dark:text-white transition-colors duration-200">{skill.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;