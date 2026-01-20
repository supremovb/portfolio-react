import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  SiLaravel, SiReact, SiVuedotjs, SiFlutter, SiPhp, SiJavascript,
  SiTypescript, SiHtml5, SiCss3, SiTailwindcss, SiBootstrap,
  SiMysql, SiMongodb, SiFirebase, SiSqlite, SiPython,
  SiCplusplus, SiDotnet, SiAndroidstudio, SiIonic, SiGit,
  SiGithub, SiFigma, SiPostman, SiVercel, SiCodeigniter,
  SiLivewire
} from 'react-icons/si'
import { FaCode, FaMobile, FaDatabase, FaTools } from 'react-icons/fa'

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: FaCode,
    color: 'from-blue-500 to-cyan-500',
    skills: [
      { name: 'React.js', icon: SiReact, color: '#61DAFB' },
      { name: 'Vue.js', icon: SiVuedotjs, color: '#4FC08D' },
      { name: 'Livewire', icon: SiLivewire, color: '#FB70A9' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
      { name: 'CSS3', icon: SiCss3, color: '#1572B6' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'Bootstrap', icon: SiBootstrap, color: '#7952B3' },
    ],
  },
  {
    title: 'Backend Development',
    icon: FaDatabase,
    color: 'from-purple-500 to-pink-500',
    skills: [
      { name: 'Laravel', icon: SiLaravel, color: '#FF2D20' },
      { name: 'CodeIgniter', icon: SiCodeigniter, color: '#EF4223' },
      { name: 'PHP', icon: SiPhp, color: '#777BB4' },
      { name: 'Python', icon: SiPython, color: '#3776AB' },
      { name: 'C#', icon: SiDotnet, color: '#512BD4' },
      { name: 'C++', icon: SiCplusplus, color: '#00599C' },
    ],
  },
  {
    title: 'Mobile Development',
    icon: FaMobile,
    color: 'from-green-500 to-emerald-500',
    skills: [
      { name: 'Flutter', icon: SiFlutter, color: '#02569B' },
      { name: 'Android Studio', icon: SiAndroidstudio, color: '#3DDC84' },
      { name: 'Ionic', icon: SiIonic, color: '#3880FF' },
    ],
  },
  {
    title: 'Database & Tools',
    icon: FaTools,
    color: 'from-orange-500 to-red-500',
    skills: [
      { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
      { name: 'SQLite', icon: SiSqlite, color: '#003B57' },
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'GitHub', icon: SiGithub, color: '#181717' },
      { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
      { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
      { name: 'Vercel', icon: SiVercel, color: '#000000' },
    ],
  },
]

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="skills" className="section mesh-gradient">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          <motion.span
            className="inline-block px-4 py-2 glass-card text-sm font-mono text-secondary mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            &lt;skills&gt;
          </motion.span>
          <h2 className="section-title">
            My <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="glass-card-hover p-6 lg:p-8"
              variants={itemVariants}
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                  <category.icon className="text-xl text-white" />
                </div>
                <h3 className="text-xl font-display font-semibold text-white">
                  {category.title}
                </h3>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="skill-badge group"
                    whileHover={{ scale: 1.05, y: -2 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.3 + skillIndex * 0.05 }}
                  >
                    <skill.icon 
                      className="text-lg transition-all duration-300 group-hover:scale-110" 
                      style={{ color: skill.color }} 
                    />
                    <span>{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
        >
          <h3 className="text-2xl font-display font-bold text-white text-center mb-12">
            Professional <span className="gradient-text">Experience</span>
          </h3>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent-pink" />

            {/* Timeline Items */}
            {[
              {
                year: '2021 - Present',
                title: 'Full-Stack Developer',
                description: 'Building web and mobile applications using Laravel, React, Flutter, and more.',
                skills: ['Laravel', 'React', 'Flutter', 'MySQL'],
              },
              {
                year: '2023 - Present',
                title: 'Reverse Engineering',
                description: 'Application analysis, security research, and software modification.',
                skills: ['C++', 'Python', 'Assembly', 'IDA Pro'],
              },
              {
                year: '2020 - 2021',
                title: 'Junior Developer',
                description: 'Started journey in web development with PHP and basic frontend technologies.',
                skills: ['PHP', 'HTML', 'CSS', 'JavaScript'],
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.7 + index * 0.2 }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-primary to-secondary shadow-neon-purple" />

                {/* Content */}
                <div className={`ml-20 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="glass-card p-6">
                    <span className="text-sm font-mono text-primary">{item.year}</span>
                    <h4 className="text-lg font-semibold text-white mt-2">{item.title}</h4>
                    <p className="text-gray-400 text-sm mt-2">{item.description}</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {item.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 text-xs bg-primary/20 text-primary rounded-md"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Section Close Tag */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1.2 }}
        >
          <span className="inline-block px-4 py-2 glass-card text-sm font-mono text-secondary">
            &lt;/skills&gt;
          </span>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
