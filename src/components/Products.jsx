import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../features/products/productsSlice'
import Product from './Product'

const Products = () => {
  const { products, productsStatus } = useSelector(state => state.products)
  const dispatch = useDispatch()

  useEffect(() => {
    if (productsStatus === 'idle') {
      dispatch(fetchProducts())
    }
  }, [dispatch, productsStatus])

  return (
    <section id="products" className="section__padding">
      <h2 className="products__title section__title">
        Products
      </h2>

      <div className="products__container">
        {productsStatus === 'pending' && <h3>Loading...</h3>}

        {productsStatus === 'success' && 
        products.length > 0 && 
        products.map((product, index) => (
          <Product product={product} key={index} />
        ))}
      </div>
    </section>
  )
}

export default Products