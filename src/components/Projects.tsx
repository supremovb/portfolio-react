import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa'

// Project data with all 16 projects
const projects = [
  {
    id: 1,
    title: 'Barangay Incident Response',
    category: 'web',
    tags: ['Laravel', 'Vue.js', 'MySQL'],
    description: 'A comprehensive incident reporting and management system for barangay officials with real-time tracking, case management, and analytics dashboard.',
    image: '/projects/barangay-incident.jpg',
    github: '#',
    live: '#',
    features: ['Real-time Incident Tracking', 'Case Management', 'Analytics Dashboard', 'Role-based Access'],
  },
  {
    id: 2,
    title: 'CESO Mobile App',
    category: 'mobile',
    tags: ['Flutter', 'Firebase', 'Dart'],
    description: 'Community Extension Services Office mobile application for managing outreach programs, volunteer coordination, and community engagement activities.',
    image: '/projects/ceso-mobile.jpg',
    github: '#',
    live: '#',
    features: ['Program Management', 'Volunteer Portal', 'Event Calendar', 'Push Notifications'],
  },
  {
    id: 3,
    title: 'Class Scheduling System',
    category: 'web',
    tags: ['Laravel', 'Livewire', 'MySQL'],
    description: 'Automated class scheduling system for educational institutions with conflict detection, room allocation, and faculty management features.',
    image: '/projects/class-scheduling.jpg',
    github: '#',
    live: '#',
    features: ['Auto-scheduling Algorithm', 'Conflict Detection', 'Room Management', 'Faculty Dashboard'],
  },
  {
    id: 4,
    title: 'Coffee Shop Management',
    category: 'web',
    tags: ['Laravel', 'React', 'MySQL'],
    description: 'Complete point-of-sale and inventory management system for coffee shops with order tracking, sales analytics, and employee management.',
    image: '/projects/coffee-shop.jpg',
    github: '#',
    live: '#',
    features: ['POS System', 'Inventory Tracking', 'Sales Reports', 'Employee Management'],
  },
  {
    id: 5,
    title: 'Dasmariñas Tourism',
    category: 'web',
    tags: ['Laravel', 'Vue.js', 'MySQL'],
    description: 'Tourism promotion website for Dasmariñas City featuring tourist spots, events, accommodations, and interactive maps.',
    image: '/projects/dasmarinas-tourism.jpg',
    github: '#',
    live: '#',
    features: ['Interactive Maps', 'Event Calendar', 'Booking System', 'Review System'],
  },
  {
    id: 6,
    title: "Denbert's Restaurant",
    category: 'web',
    tags: ['Laravel', 'Bootstrap', 'MySQL'],
    description: 'Restaurant management system with online ordering, table reservations, menu management, and customer relationship management.',
    image: '/projects/denberts-restaurant.jpg',
    github: '#',
    live: '#',
    features: ['Online Ordering', 'Table Reservations', 'Menu Management', 'CRM'],
  },
  {
    id: 7,
    title: 'Gym Management System',
    category: 'web',
    tags: ['Laravel', 'React', 'MySQL'],
    description: 'Comprehensive gym management solution with member management, workout tracking, class scheduling, and payment processing.',
    image: '/projects/gym-management.jpg',
    github: '#',
    live: '#',
    features: ['Member Management', 'Workout Tracking', 'Class Scheduling', 'Payments'],
  },
  {
    id: 8,
    title: 'Indigo Payroll System',
    category: 'desktop',
    tags: ['C#', '.NET', 'SQL Server'],
    description: 'Desktop payroll management application with automated calculations, tax deductions, leave management, and comprehensive reporting.',
    image: '/projects/indigo-payroll.jpg',
    github: '#',
    live: '#',
    features: ['Auto Calculations', 'Tax Management', 'Leave Tracking', 'Reports'],
  },
  {
    id: 9,
    title: 'MAD Auto Care',
    category: 'web',
    tags: ['Laravel', 'Vue.js', 'MySQL'],
    description: 'Automotive service center management system with appointment scheduling, service tracking, inventory, and customer management.',
    image: '/projects/mad-autocare.jpg',
    github: '#',
    live: '#',
    features: ['Appointments', 'Service Tracking', 'Inventory', 'Customer Portal'],
  },
  {
    id: 10,
    title: 'Lucky Boba POS',
    category: 'web',
    tags: ['Laravel', 'Livewire', 'MySQL'],
    description: 'Point-of-sale system specifically designed for milk tea and boba shops with customizable orders and real-time inventory.',
    image: '/projects/lucky-boba.jpg',
    github: '#',
    live: '#',
    features: ['Custom Orders', 'Real-time Inventory', 'Sales Analytics', 'Multi-branch'],
  },
  {
    id: 11,
    title: 'RP Filmworks',
    category: 'web',
    tags: ['React', 'Node.js', 'MongoDB'],
    description: 'Portfolio and booking platform for a film production company with project showcase, client portal, and booking management.',
    image: '/projects/rpfilmworks.jpg',
    github: '#',
    live: '#',
    features: ['Project Portfolio', 'Booking System', 'Client Portal', 'Gallery'],
  },
  {
    id: 12,
    title: 'Trash-In-N-Out',
    category: 'mobile',
    tags: ['Flutter', 'Firebase', 'Maps'],
    description: 'Waste management and recycling mobile app with collection scheduling, recycling guides, and reward points system.',
    image: '/projects/trash-in-out.jpg',
    github: '#',
    live: '#',
    features: ['Collection Schedule', 'Recycling Guide', 'Rewards System', 'Location Tracking'],
  },
  {
    id: 13,
    title: 'Openg Military Supplies POS',
    category: 'laravel',
    tags: ['Laravel', 'Livewire', 'MySQL'],
    description: 'Specialized point-of-sale system for military supplies store with inventory management, sales tracking, and supplier management.',
    image: '/projects/openg.png',
    github: '#',
    live: '#',
    features: ['Inventory Control', 'Sales Tracking', 'Supplier Management', 'Reports'],
  },
  {
    id: 14,
    title: 'TindahanPOS',
    category: 'mobile',
    tags: ['Flutter', 'SQLite', 'Dart'],
    description: 'Mobile POS application for small retail stores (sari-sari stores) with offline capability and simple inventory management.',
    image: '/projects/tindahan-pos.png',
    github: '#',
    live: '#',
    features: ['Offline Mode', 'Simple Inventory', 'Sales Reports', 'Receipt Printing'],
  },
  {
    id: 15,
    title: 'Barangay Management System',
    category: 'laravel',
    tags: ['Laravel', 'Vue.js', 'MySQL'],
    description: 'Complete barangay management system for Brgy. Nalook with resident records, document requests, and official transactions.',
    image: '/projects/bms.png',
    github: '#',
    live: '#',
    features: ['Resident Database', 'Document Requests', 'Transaction Records', 'Reports'],
  },
  {
    id: 16,
    title: 'GeneralStore POS',
    category: 'desktop',
    tags: ['C#', '.NET', 'SQL Server'],
    description: 'Full-featured desktop POS system for general merchandise stores with barcode scanning, inventory, and multi-user support.',
    image: '/projects/general.png',
    github: '#',
    live: '#',
    features: ['Barcode Scanning', 'Multi-user', 'Inventory Sync', 'Sales Dashboard'],
  },
]

const filters = ['all', 'web', 'mobile', 'laravel', 'desktop']

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter)

  return (
    <section id="projects" className="section">
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
            className="inline-block px-4 py-2 glass-card text-sm font-mono text-accent-pink mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            &lt;projects&gt;
          </motion.span>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle mx-auto">
            A collection of projects showcasing my skills and experience
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
        >
          {filters.map((filter) => (
            <motion.button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium capitalize transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-neon-purple'
                  : 'glass-card text-gray-400 hover:text-white hover:border-primary/50'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="project-card"
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                onClick={() => setSelectedProject(project)}
              >
                {/* Project Image */}
                <div className="relative h-48 md:h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.src = `https://via.placeholder.com/400x300?text=${encodeURIComponent(project.title)}`
                    }}
                  />
                  <div className="project-overlay" />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.div
                      className="px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-xl"
                      whileHover={{ scale: 1.1 }}
                    >
                      View Details
                    </motion.div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm line-clamp-2 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs bg-primary/20 text-primary rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Backdrop */}
              <motion.div
                className="absolute inset-0 bg-dark/90 backdrop-blur-xl"
                onClick={() => setSelectedProject(null)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />

              {/* Modal Content */}
              <motion.div
                className="relative glass-card max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                initial={{ scale: 0.8, opacity: 0, y: 50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.8, opacity: 0, y: 50 }}
                transition={{ type: 'spring', damping: 25 }}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-dark-100 flex items-center justify-center text-gray-400 hover:text-white hover:bg-dark-200 transition-colors z-10"
                >
                  <FaTimes />
                </button>

                {/* Modal Image */}
                <div className="relative h-64 md:h-80">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.src = `https://via.placeholder.com/800x400?text=${encodeURIComponent(selectedProject.title)}`
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent" />
                </div>

                {/* Modal Body */}
                <div className="p-8">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {selectedProject.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-sm bg-primary/20 text-primary rounded-lg"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
                    {selectedProject.title}
                  </h3>

                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {selectedProject.description}
                  </p>

                  {/* Features */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-white mb-4">Key Features</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {selectedProject.features.map((feature, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 text-gray-400"
                        >
                          <span className="w-2 h-2 rounded-full bg-primary" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <motion.a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 glass-card text-white hover:border-primary/50 transition-all"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaGithub />
                      <span>View Code</span>
                    </motion.a>
                    <motion.a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-xl"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaExternalLinkAlt />
                      <span>Live Demo</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Section Close Tag */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <span className="inline-block px-4 py-2 glass-card text-sm font-mono text-accent-pink">
            &lt;/projects&gt;
          </span>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
