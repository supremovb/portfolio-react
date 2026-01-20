import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGraduationCap, FaMapMarkerAlt, FaCode, FaBug } from 'react-icons/fa'

const stats = [
  { number: '5+', label: 'Years Experience', icon: FaCode },
  { number: '50+', label: 'Projects Completed', icon: FaCode },
  { number: '2+', label: 'Years Reverse Eng.', icon: FaBug },
  { number: '20+', label: 'Happy Clients', icon: FaCode },
]

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="about" className="section px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          <motion.span
            className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 glass-card text-xs sm:text-sm font-mono text-primary mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            &lt;about&gt;
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
            Get To Know <span className="gradient-text">Me</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-4">
            A passionate developer dedicated to creating impactful digital solutions
          </p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Left - Profile Card */}
          <motion.div variants={itemVariants} className="relative">
            <div className="glass-card p-4 sm:p-6 lg:p-8">
              {/* Profile Image */}
              <div className="relative w-full aspect-[4/5] mb-6 sm:mb-8 rounded-xl sm:rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20" />
                <img
                  src="/profile2.png"
                  alt="Primo Velasquez"
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.src = 'https://via.placeholder.com/400x500?text=Primo'
                  }}
                />

                {/* Overlay Info */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-dark via-dark/80 to-transparent">
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-white">Primo Velasquez</h3>
                  <p className="text-primary text-sm sm:text-base font-mono">Full-Stack Developer</p>
                </div>
              </div>

              {/* Info Cards */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="glass-card p-3 sm:p-4 flex items-center gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <FaGraduationCap className="text-primary text-sm sm:text-base" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] sm:text-xs text-gray-500">Education</p>
                    <p className="text-xs sm:text-sm font-medium text-white truncate">BSIT - 4th Year</p>
                  </div>
                </div>
                <div className="glass-card p-3 sm:p-4 flex items-center gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-secondary/20 flex items-center justify-center flex-shrink-0">
                    <FaMapMarkerAlt className="text-secondary text-sm sm:text-base" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] sm:text-xs text-gray-500">Location</p>
                    <p className="text-xs sm:text-sm font-medium text-white truncate">Gen. Trias, Cavite</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements - Hidden on mobile */}
            <div className="absolute -top-4 -right-4 w-16 sm:w-24 h-16 sm:h-24 border-t-2 border-r-2 border-primary/30 rounded-tr-3xl hidden sm:block" />
            <div className="absolute -bottom-4 -left-4 w-16 sm:w-24 h-16 sm:h-24 border-b-2 border-l-2 border-secondary/30 rounded-bl-3xl hidden sm:block" />
          </motion.div>

          {/* Right - Content */}
          <motion.div variants={itemVariants} className="space-y-5 sm:space-y-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-3 sm:mb-4">
                Passionate About Building <span className="gradient-text">Digital Solutions</span>
              </h3>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-3 sm:mb-4">
                I'm a dedicated Full-Stack Developer currently in my 4th year pursuing a
                Bachelor of Science in Information Technology at St. Dominic College of Asia,
                expected to graduate in 2026.
              </p>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-3 sm:mb-4">
                With over 5 years of experience in web and mobile development, and 2+ years
                in reverse engineering, I specialize in creating robust, scalable applications
                using modern technologies like Laravel, React.js, Flutter, and more.
              </p>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                I believe in writing clean, maintainable code and creating user experiences
                that not only look great but also solve real-world problems efficiently.
              </p>
            </div>

            {/* Quick Facts */}
            <div className="glass-card p-4 sm:p-6">
              <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Quick Facts</h4>
              <ul className="space-y-2 sm:space-y-3">
                {[
                  { label: 'School', value: 'St. Dominic College of Asia' },
                  { label: 'Course', value: 'BS Information Technology' },
                  { label: 'Year', value: '4th Year (Class of 2026)' },
                  { label: 'Location', value: 'General Trias, Cavite' },
                ].map((item, index) => (
                  <li key={index} className="flex justify-between items-center gap-2">
                    <span className="text-xs sm:text-sm text-gray-500">{item.label}</span>
                    <span className="text-xs sm:text-sm text-white font-medium text-right">{item.value}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Download CV Button */}
            <motion.a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 bg-gradient-to-r from-primary to-secondary text-white text-sm sm:text-base font-semibold rounded-xl hover:shadow-neon-purple transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Download Resume</span>
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mt-12 sm:mt-16 lg:mt-20"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="glass-card p-4 sm:p-6 text-center group hover:border-primary/50 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 rounded-lg sm:rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="text-lg sm:text-xl text-primary" />
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold gradient-text mb-1 sm:mb-2">
                {stat.number}
              </h3>
              <p className="text-xs sm:text-sm text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Section Close Tag */}
        <motion.div
          className="text-center mt-12 sm:mt-16"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
        >
          <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 glass-card text-xs sm:text-sm font-mono text-primary">
            &lt;/about&gt;
          </span>
        </motion.div>
      </div>
    </section>
  )
}

export default About
