import { Outlet } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import { pageTransition } from '../animations/variants'

export default function MainLayout() {
  return (
    <motion.div
      variants={pageTransition}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="min-h-screen"
    >
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </motion.div>
  )
}
