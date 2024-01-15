import { Link } from 'react-router-dom'

const Product = ({ product }) => {
  return (
    <div className="products__container--product">
      <Link to={`/products/${product.slug}`}>
        <figure className="products__container--product__img">
          <img loading="lazy" src={product.image} alt={product.name} />
        </figure>
      </Link>

      <div className="products__container--product__info">
        <Link to={`/products/${product.slug}`}>
          <h4 className="products__container--product__info--name">
            {product.name}
          </h4>
        </Link>

        <p className="products__container--product__info--para">
          {product.desc}
        </p>
      </div>

      <p className="products__container--product__price">
        Rp {Number(product.price).toLocaleString('id')}
      </p>
    </div>
  )
}

export default Product