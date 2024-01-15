import Layout from '../components/Layout'
import about from '../images/about.jpg'

const AboutPage = () => {
  return (
    <Layout>
      <article className="about section__padding">
        <h2 className='about__title section__title'>Tentang Kami</h2>

        <div className='row'>
          <div className='col-sm-6 col-md-5'>
            <figure className='about__img'>
              <img loading='lazy' src={about} alt='About' />
            </figure>
          </div>

          <div className='col-sm-6 col-md-7'>
            <div className='about__desc'>
              <p><strong>Havana Juice</strong> berdiri di tahun 2024 dengan tujuan menjual jus sayuran yang bermanfaat bagi kesehatan.</p>
              <p>Setelah bertemu berbagai pelanggan yang merasakan khasiat jus sayuran, terutama ketika dipadukan dengan teknik puasa, kami mulai membentuk tim riset medis internal untuk mempelajari dan mendalami metode puasa dengan cold pressed juice.</p>
              <p>Berdasarkan berbagai jurnal medis dan studi kasus pelanggan, kami telah berhasil menciptakan 4 paket signature : Detox Low Calorie, Detox Maag GERD, Detox Mens Teratur, Detox High Calorie.</p>
              <p>Ke depannya, kami akan terus berinovasi supaya makin banyak masyarakat yang merasakan manfaat produk Havana Juice.</p>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  )
}

export default AboutPage