import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBestSellers } from '../features/products/productsSlice'
import Product from './Product'

const BestSellers = () => {
  const { bestSellers, bestSellersStatus } = useSelector(state => state.products)
  const dispatch = useDispatch()

  useEffect(() => {
    if (bestSellersStatus === 'idle') {
      dispatch(fetchBestSellers())
    }
  }, [dispatch, bestSellersStatus])

  return (
    <section id="products" className="section__padding">
      <h2 className="products__title section__title">
        Best Sellers Detox
      </h2>

      <div className="products__container">
        {bestSellersStatus === 'pending' && <h3>Loading...</h3>}

        {bestSellersStatus === 'success' && 
        bestSellers.length > 0 && 
        bestSellers.map((product, index) => (
          <Product product={product} key={index} />
        ))}
      </div>
    </section>
  )
}

export default BestSellers