import Layout from '../components/Layout'
import Social from '../components/Social'
import contact from '../images/contact.jpg'

const ContactPage = () => {
  return (
    <Layout>
      <article className="contact section__padding">
        <h2 className='contact__title section__title'>Kontak</h2>

        <div className='row'>
          <div className='col-sm-6 col-md-5'>
            <figure className='contact__img'>
              <img loading='lazy' src={contact} alt='Contact' />
            </figure>
          </div>

          <div className='col-sm-6 col-md-7'>
            <div className='contact__desc'>
              Get in touch with us!
            </div>

            <div className='contact__info'>
              <div>
                <div className='contact__info--title'>
                  Address:
                </div>
              
                <div className='contact__info--content'>
                  Jl. H. R. Rasuna Said, Karet Kuningan, Kecamatan Setiabudi, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12920
                </div>
              </div>
              
              <div>
                <div className='contact__info--title'>
                  Working Hours:
                </div>
              
                <div className='contact__info--content'>
                  09:00 am to 05:00 pm
                </div>
              </div>
              
              <div>
                <div className='contact__info--title'>
                  Phone:
                </div>
              
                <div className='contact__info--content'>
                  +62 812 3456 7890
                </div>
              </div>
              
              <div>
                <div className='contact__info--title'>
                  Email address:
                </div>
              
                <div className='contact__info--content'>
                  info@havanajuice.com
                </div>
              </div>
            </div>

            <div className='contact__social'>
              <Social />
            </div>
          </div>
        </div>
      </article>
    </Layout>
  )
}

export default ContactPage