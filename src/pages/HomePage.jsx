import Layout from '../components/Layout'
import Hero from '../components/Hero'
import BestSellers from '../components/BestSellers'
import Categories from '../components/Categories'
import Packages from '../components/Packages'
import Testimonials from '../components/Testimonials'

const HomePage = () => {
  return (
    <Layout>
      <Hero />
      <BestSellers />
      <Categories />
      <Packages />
      <Testimonials />
    </Layout>
  )
}

export default HomePage