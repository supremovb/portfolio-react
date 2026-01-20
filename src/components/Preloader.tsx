import { motion } from 'framer-motion'

const Preloader = () => {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-dark"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      {/* Aurora Background Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/30 rounded-full blur-3xl animate-pulse animation-delay-400" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent-pink/20 rounded-full blur-3xl animate-pulse animation-delay-800" />
      </div>

      <div className="relative z-10 flex flex-col items-center">
        {/* Logo Animation */}
        <motion.div
          className="relative"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Rotating Ring */}
          <motion.div
            className="absolute -inset-8 border-2 border-primary/30 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute -inset-12 border border-secondary/20 rounded-full"
            animate={{ rotate: -360 }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          />

          {/* Logo Text */}
          <motion.div
            className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-4xl font-display font-bold text-white shadow-neon-purple"
            animate={{
              boxShadow: [
                '0 0 20px rgba(124, 58, 237, 0.5)',
                '0 0 40px rgba(124, 58, 237, 0.8)',
                '0 0 20px rgba(124, 58, 237, 0.5)',
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            PV
          </motion.div>
        </motion.div>

        {/* Loading Text */}
        <motion.div
          className="mt-12 flex flex-col items-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <span className="text-2xl font-display font-semibold gradient-text">
            Primo Velasquez
          </span>
          <span className="text-sm text-gray-500 mt-2 font-mono">
            Loading Portfolio...
          </span>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          className="mt-8 w-48 h-1 bg-dark-100 rounded-full overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-primary via-secondary to-accent-pink"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 2, ease: 'easeInOut' }}
          />
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Preloader
