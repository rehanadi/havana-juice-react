import Download from './Download'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <>
      <Download />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout