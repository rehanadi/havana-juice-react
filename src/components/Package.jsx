import { Link } from 'react-router-dom'

const Package = ({ pkg }) => {
  return (
    <div className="packages__container--package">
      <figure className="packages__container--package__img">
        <img loading="lazy" src={pkg.image} alt={pkg.name} />
      </figure>

      <div className="packages__container--package__info">
        <h4 className="packages__container--package__info--name">
          {pkg.name}
        </h4>

        <p className="packages__container--package__info--desc">
          {pkg.desc}
        </p>

        <div>
          <div className="packages__container--package__info--price">
            <span>Rp {pkg.sell_price.toLocaleString('id')}</span>
            <span>Rp {pkg.sliced_price.toLocaleString('id')}</span>
          </div>

          <Link to={`/packages/${pkg.slug}`} className="packages__container--package__info--choose">
            Pilih
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Package