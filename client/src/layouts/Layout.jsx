import { Suspense } from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import ScrollProgress from '../components/common/ScrollProgress'

const Layout = ({ children }) => {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
