import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductBySlug } from '../features/products/productsSlice'
import { Link, useParams } from 'react-router-dom'
import Layout from '../components/Layout'

const ProductPage = () => {
  const { slug } = useParams()
  const { product, productStatus } = useSelector(state => state.products)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProductBySlug(slug))
  }, [dispatch, slug])

  return (
    <Layout>
      <article className="product section__padding">
        {productStatus === 'pending' && <h2 className='text-center'>Loading...</h2>}
        
        {productStatus === 'success' && 
        !product?.name ? (
          <h2 className='text-center'>Product Not Found</h2>
        ) : (
          <>
            <div className='row'>
              <div className='col-sm-5 col-md-4'>
                <figure className="product__img">
                  <img loading="lazy" src={product?.image} alt={product?.name} />
                </figure>
              </div>
              <div className='col-sm-7 col-md-8'>
                <h4 className="product__name">
                  {product?.name}
                </h4>
      
                <p className="product__para">
                  {product?.desc}
                </p>
        
                <p className="product__price">
                  Rp {Number(product?.price).toLocaleString('id')}
                </p>

                <Link to="/" className="product__purchase">
                  Beli
                </Link>
              </div>
            </div>
            <div className='row'>
              <div className='product__detail' dangerouslySetInnerHTML={{ __html: product?.detail }}></div>
            </div>
          </>
        )}
      </article>
    </Layout>
  )
}

export default ProductPage