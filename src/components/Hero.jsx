import hero from '../images/hero.png'

const Hero = () => {
  return (
    <section id="hero" className="section__padding">
      <div className="hero__content">
        <h1 className="hero__content--title">
          Minum Sayuran Tiap Hari Rasakan Manfaatnya
        </h1>
        
        <p className="hero__content--para">
          Rasakan sendiri manfaat jus sayuran segar dan sehat yang kaya akan vitamin mineral alami dari Havana Juice.
        </p>

        <div className="hero__content--links">
          <a href="/products" className="hero__content--links__order">Order Now</a>
          <a href="/contact" className="hero__content--links__contact">Contact</a>
        </div>
      </div>

      <figure className="hero__bg">
        <img loading="lazy" src={hero} alt="Hero" />
      </figure>
    </section>
  )
}

export default Hero