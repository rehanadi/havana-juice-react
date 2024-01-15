import Social from './Social'

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer__content">
        <div className="footer__content--info">
          <p>
            <strong>Havana Juice</strong> adalah Detox Cold Pressed Juice yang sangat bermanfaat bagi tubuh dan tinggi nutrisi dari sayur dan buah segar.
          </p>
          <p>
            Our mission is to help our customers live a happier life through delicious, healthy and honest F&B selections.
          </p>
        </div>

        <div className="footer__content--links">
          <h3 className="footer__content--links__title">
            Information
          </h3>

          <ul>
            <li>
              <a href="/">Lokasi</a>
            </li>
            <li>
              <a href="/">FAQ</a>
            </li>
            <li>
              <a href="/about">Tentang Kami</a>
            </li>
            <li>
              <a href="/contact">Kontak</a>
            </li>
          </ul>
        </div>

        <div className="footer__content--newsletter">
          <h3 className="footer__content--newsletter__title">
            Newsletter
          </h3>

          <p className="footer__content--newsletter__info">
            Subscribe for #LiveHappier Newsletter
          </p>

          <form action="/" className="footer__content--newsletter__form">
            <input type="email" placeholder="Email address" />
            <input type="submit" value="Subscribe" />
          </form>
        </div>
      </div>

      <div className="footer__author">
        <p className="footer__author--copy">
          Havana Juice &copy; 2024 
        </p>

        <div className="footer__author--social">
          <Social />
        </div>
      </div>
    </footer>
  )
}

export default Footer