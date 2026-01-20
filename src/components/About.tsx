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
    <section id="about" className="section">
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
            className="inline-block px-4 py-2 glass-card text-sm font-mono text-primary mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            &lt;about&gt;
          </motion.span>
          <h2 className="section-title">
            Get To Know <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subtitle mx-auto">
            A passionate developer dedicated to creating impactful digital solutions
          </p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Left - Profile Card */}
          <motion.div variants={itemVariants} className="relative">
            <div className="glass-card p-8 lg:p-10">
              {/* Profile Image */}
              <div className="relative w-full aspect-[4/5] mb-8 rounded-2xl overflow-hidden">
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
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-dark via-dark/80 to-transparent">
                  <h3 className="text-2xl font-display font-bold text-white">Primo Velasquez</h3>
                  <p className="text-primary font-mono">Full-Stack Developer</p>
                </div>
              </div>

              {/* Info Cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="glass-card p-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                    <FaGraduationCap className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Education</p>
                    <p className="text-sm font-medium text-white">BSIT - 4th Year</p>
                  </div>
                </div>
                <div className="glass-card p-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-secondary/20 flex items-center justify-center">
                    <FaMapMarkerAlt className="text-secondary" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Location</p>
                    <p className="text-sm font-medium text-white">Gen. Trias, Cavite</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-primary/30 rounded-tr-3xl" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-secondary/30 rounded-bl-3xl" />
          </motion.div>

          {/* Right - Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div>
              <h3 className="text-2xl font-display font-bold text-white mb-4">
                Passionate About Building <span className="gradient-text">Digital Solutions</span>
              </h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                I'm a dedicated Full-Stack Developer currently in my 4th year pursuing a 
                Bachelor of Science in Information Technology at St. Dominic College of Asia, 
                expected to graduate in 2026.
              </p>
              <p className="text-gray-400 leading-relaxed mb-4">
                With over 5 years of experience in web and mobile development, and 2+ years 
                in reverse engineering, I specialize in creating robust, scalable applications 
                using modern technologies like Laravel, React.js, Flutter, and more.
              </p>
              <p className="text-gray-400 leading-relaxed">
                I believe in writing clean, maintainable code and creating user experiences 
                that not only look great but also solve real-world problems efficiently.
              </p>
            </div>

            {/* Quick Facts */}
            <div className="glass-card p-6">
              <h4 className="text-lg font-semibold text-white mb-4">Quick Facts</h4>
              <ul className="space-y-3">
                {[
                  { label: 'School', value: 'St. Dominic College of Asia' },
                  { label: 'Course', value: 'BS Information Technology' },
                  { label: 'Year', value: '4th Year (Class of 2026)' },
                  { label: 'Location', value: 'General Trias, Cavite, Philippines' },
                ].map((item, index) => (
                  <li key={index} className="flex justify-between items-center">
                    <span className="text-gray-500">{item.label}</span>
                    <span className="text-white font-medium">{item.value}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Download CV Button */}
            <motion.a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-xl hover:shadow-neon-purple transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Download Resume</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="glass-card p-6 text-center group hover:border-primary/50 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="text-xl text-primary" />
              </div>
              <h3 className="text-3xl md:text-4xl font-display font-bold gradient-text mb-2">
                {stat.number}
              </h3>
              <p className="text-sm text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Section Close Tag */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
        >
          <span className="inline-block px-4 py-2 glass-card text-sm font-mono text-primary">
            &lt;/about&gt;
          </span>
        </motion.div>
      </div>
    </section>
  )
}

export default About
