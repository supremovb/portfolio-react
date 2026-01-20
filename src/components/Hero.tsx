import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { FaGithub, FaFacebook, FaEnvelope, FaChevronDown, FaLaptopCode, FaRocket, FaBolt } from 'react-icons/fa'

const Hero = () => {
  const [text, setText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const roles = [
    'Full-Stack Developer',
    'Laravel Expert',
    'React Developer',
    'Mobile App Developer',
    'UI/UX Enthusiast',
  ]

  useEffect(() => {
    const role = roles[currentIndex]
    let charIndex = 0
    let isDeleting = false

    const typeWriter = () => {
      if (!isDeleting && charIndex <= role.length) {
        setText(role.substring(0, charIndex))
        charIndex++
      } else if (isDeleting && charIndex >= 0) {
        setText(role.substring(0, charIndex))
        charIndex--
      }

      if (!isDeleting && charIndex > role.length) {
        setTimeout(() => {
          isDeleting = true
          typeWriter()
        }, 2000)
        return
      }

      if (isDeleting && charIndex < 0) {
        isDeleting = false
        setCurrentIndex((prev) => (prev + 1) % roles.length)
        return
      }

      setTimeout(typeWriter, isDeleting ? 50 : 100)
    }

    typeWriter()
  }, [currentIndex])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 sm:pt-20 px-4"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            className="text-center lg:text-left order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Greeting */}
            <motion.div
              className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 glass-card mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs sm:text-sm text-gray-400">Available for Work</span>
            </motion.div>

            {/* Name */}
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold mb-3 sm:mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className="text-white">Hi, I'm </span>
              <span className="gradient-text text-shadow-glow">Primo</span>
            </motion.h1>

            {/* Role with Typewriter */}
            <motion.div
              className="h-8 sm:h-10 md:h-12 mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-secondary font-mono">
                {text}
                <span className="animate-pulse">|</span>
              </span>
            </motion.div>

            {/* Description */}
            <motion.p
              className="text-gray-400 text-sm sm:text-base md:text-lg max-w-xl mx-auto lg:mx-0 mb-6 sm:mb-8 leading-relaxed px-2 sm:px-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              A passionate developer from the Philippines with <span className="text-primary">5+ years</span> of experience
              crafting beautiful, functional, and user-centered digital experiences.
              Currently pursuing BSIT at St. Dominic College of Asia.
            </motion.p>

            {/* Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-6 sm:mb-8 px-4 sm:px-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <motion.button
                onClick={() => scrollToSection('#projects')}
                className="btn-primary relative z-10 text-sm sm:text-base px-6 py-3 sm:px-8 sm:py-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">View My Work</span>
              </motion.button>
              <motion.button
                onClick={() => scrollToSection('#contact')}
                className="btn-secondary text-sm sm:text-base px-6 py-3 sm:px-8 sm:py-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex gap-3 sm:gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              {[
                { icon: FaGithub, href: 'https://github.com/supremovb', label: 'GitHub' },
                { icon: FaFacebook, href: 'https://facebook.com/supremovb', label: 'Facebook' },
                { icon: FaEnvelope, href: 'mailto:primokenjivelasquez@gmail.com', label: 'Email' },
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-12 sm:h-12 glass-card flex items-center justify-center text-gray-400 hover:text-white hover:border-primary/50 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                >
                  <social.icon size={18} className="sm:w-5 sm:h-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            className="relative order-1 lg:order-2 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              {/* Decorative Ring */}
              <motion.div
                className="absolute -inset-3 sm:-inset-4 rounded-full border-2 border-primary/20 hidden sm:block"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="absolute -inset-6 sm:-inset-8 rounded-full border border-secondary/10 hidden sm:block"
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              />

              {/* Floating Elements with React Icons */}
              <motion.div
                className="absolute -top-4 -right-4 sm:-top-8 sm:-right-8 w-10 h-10 sm:w-16 sm:h-16 glass-card flex items-center justify-center text-primary"
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <FaLaptopCode className="text-lg sm:text-2xl" />
              </motion.div>
              <motion.div
                className="absolute -bottom-2 -left-4 sm:-bottom-4 sm:-left-8 w-9 h-9 sm:w-14 sm:h-14 glass-card flex items-center justify-center text-secondary"
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                <FaRocket className="text-base sm:text-xl" />
              </motion.div>
              <motion.div
                className="absolute top-1/2 -right-6 sm:-right-12 w-8 h-8 sm:w-12 sm:h-12 glass-card flex items-center justify-center text-accent-pink hidden sm:flex"
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <FaBolt className="text-sm sm:text-lg" />
              </motion.div>

              {/* Profile Image Container */}
              <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                {/* Gradient Background */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-secondary to-accent-pink blur-2xl opacity-50 animate-pulse" />
                
                {/* Glass Frame */}
                <div className="relative w-full h-full rounded-full glass-card p-1.5 sm:p-2 overflow-hidden">
                  <div className="w-full h-full rounded-full overflow-hidden bg-dark-100">
                    <img
                      src="/profile.jpg"
                      alt="Primo Velasquez"
                      className="w-full h-full object-cover object-top"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.src = 'https://via.placeholder.com/400x400?text=PV'
                      }}
                    />
                  </div>
                </div>

                {/* Experience Badge */}
                <motion.div
                  className="absolute -bottom-1 sm:-bottom-2 left-1/2 -translate-x-1/2 px-4 py-2 sm:px-6 sm:py-3 glass-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                >
                  <span className="text-xs sm:text-sm font-semibold gradient-text whitespace-nowrap">5+ Years Experience</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 hidden sm:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.button
            onClick={() => scrollToSection('#about')}
            className="flex flex-col items-center gap-2 text-gray-500 hover:text-white transition-colors"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-xs font-mono">Scroll Down</span>
            <FaChevronDown />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
