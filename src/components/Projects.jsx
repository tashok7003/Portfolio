import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projectsData = [
  {
    title: 'Resort Hotel Management System',
    description: 'A comprehensive hotel management system with features for room booking, staff management, and customer service. Built with modern web technologies for efficient hotel operations.',
    image: 'https://raw.githubusercontent.com/tashok7003/Resort-Hotel-Management-System/main/screenshot.png',
    technologies: ['Python', 'Django', 'HTML/CSS', 'JavaScript', 'MySQL'],
    githubLink: 'https://github.com/tashok7003/Resort-Hotel-Management-System',
    liveLink: '#'
  },
  {
    title: 'ChatBot with Gemini API',
    description: 'An intelligent chatbot application powered by Google\'s Gemini API, built using Django. Features natural language processing and real-time response capabilities.',
    image: 'https://raw.githubusercontent.com/tashok7003/ChatBot-using-django-and-Gemini-API/main/screenshot.png',
    technologies: ['Python', 'Django', 'Gemini API', 'NLP', 'REST API'],
    githubLink: 'https://github.com/tashok7003/ChatBot-using-django-and-Gemini-API',
    liveLink: '#'
  },
  {
    title: 'Software Testing Project',
    description: 'Comprehensive software testing project using Playwright, demonstrating automated testing practices, test case development, and quality assurance methodologies.',
    image: 'https://raw.githubusercontent.com/tashok7003/Software-Testing-Project-using-Playwright/main/screenshot.png',
    technologies: ['Playwright', 'JavaScript', 'Automated Testing', 'QA'],
    githubLink: 'https://github.com/tashok7003/Software-Testing-Project-using-Playwright',
    liveLink: '#'
  },
  {
    title: 'Epic Journey',
    description: 'An engaging gaming project that showcases interactive gameplay mechanics and immersive user experience design.',
    image: 'https://raw.githubusercontent.com/tashok7003/Epic-Journey/main/screenshot.png',
    technologies: ['Game Development', 'JavaScript', 'HTML5', 'CSS3'],
    githubLink: 'https://github.com/tashok7003/Epic-Journey',
    liveLink: '#'
  },
  {
    title: 'CastBallot',
    description: 'A secure and user-friendly electronic voting system that ensures transparent and efficient election processes.',
    image: 'https://raw.githubusercontent.com/tashok7003/CastBallot/main/screenshot.png',
    technologies: ['Web Development', 'Security', 'Database', 'User Authentication'],
    githubLink: 'https://github.com/tashok7003/CastBallot',
    liveLink: '#'
  }
];

const Projects = () => {
  return (
    <section className="py-16 lg:py-24 xl:py-32 bg-gray-100 dark:bg-gray-800 transition-colors duration-200" id="projects">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-200">Featured Projects</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-12">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-xl transform hover:-translate-y-2 transition-all duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 lg:h-56 xl:h-64 object-cover"
              />
              <div className="p-6 lg:p-8">
                <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white mb-3 transition-colors duration-200">{project.title}</h3>
                <p className="text-base lg:text-lg text-gray-700 dark:text-gray-300 mb-6 transition-colors duration-200">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-200 dark:bg-gray-600 text-sm lg:text-base text-gray-800 dark:text-gray-300 rounded-full transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <motion.a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-blue-500 flex items-center gap-2 text-base lg:text-lg"
                    whileHover={{ scale: 1.05 }}
                  >
                    <FaGithub /> Code
                  </motion.a>
                  <motion.a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-blue-500 flex items-center gap-2 text-base lg:text-lg"
                    whileHover={{ scale: 1.05 }}
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;