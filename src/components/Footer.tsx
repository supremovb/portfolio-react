import { motion } from 'framer-motion'
import { FaHeart, FaGithub, FaFacebook, FaEnvelope, FaChevronUp } from 'react-icons/fa'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative py-12 px-4 border-t border-white/5">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark-300 to-transparent" />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo & Description */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-3 justify-center md:justify-start mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-lg font-display font-bold text-white">
                PV
              </div>
              <span className="text-xl font-display font-semibold">
                <span className="text-white">Primo</span>
                <span className="gradient-text"> Velasquez</span>
              </span>
            </div>
            <p className="text-gray-500 text-sm">
              Full-Stack Developer crafting digital experiences with passion and precision.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <div className="flex justify-center gap-6">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-gray-500 hover:text-white transition-colors text-sm"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center md:justify-end gap-3">
            {[
              { icon: FaGithub, href: 'https://github.com/supremovb' },
              { icon: FaFacebook, href: 'https://facebook.com/supremovb' },
              { icon: FaEnvelope, href: 'mailto:primokenjivelasquez@gmail.com' },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 glass-card flex items-center justify-center text-gray-400 hover:text-white hover:border-primary/50 transition-all"
                whileHover={{ scale: 1.1, y: -3 }}
              >
                <social.icon size={18} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            © {currentYear} Primo Velasquez. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm flex items-center gap-2">
            Made with <FaHeart className="text-red-500 animate-pulse" /> using React & Tailwind
          </p>
        </div>

        {/* Scroll to Top Button */}
        <motion.button
          onClick={scrollToTop}
          className="absolute right-4 -top-6 w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white shadow-neon-purple"
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <FaChevronUp />
        </motion.button>
      </div>
    </footer>
  )
}

export default Footer
