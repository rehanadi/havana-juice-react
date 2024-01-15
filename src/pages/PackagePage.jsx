import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPackageBySlug } from '../features/packages/packagesSlice'
import { Link, useParams } from 'react-router-dom'
import Layout from '../components/Layout'

const PackagePage = () => {
  const { slug } = useParams()
  const { pkg, pkgStatus } = useSelector(state => state.packages)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPackageBySlug(slug))
  }, [dispatch, slug])

  return (
    <Layout>
      <article className="product section__padding">
        {pkgStatus === 'pending' && <h2 className='text-center'>Loading...</h2>}
        
        {pkgStatus === 'success' && 
        !pkg?.name ? (
          <h2 className='text-center'>Package Not Found</h2>
        ) : (
          <>
            <div className='row'>
              <div className='col-sm-5 col-md-4'>
                <figure className="product__img">
                  <img loading="lazy" src={pkg?.image} alt={pkg?.name} />
                </figure>
              </div>
              <div className='col-sm-7 col-md-8'>
                <h4 className="product__name">
                  {pkg?.name}
                </h4>
      
                <p className="product__para">
                  {pkg?.desc}
                </p>
        
                <p className="product__price">
                  <span>
                    Rp {Number(pkg?.sell_price).toLocaleString('id')}
                  </span>
                  <span>
                    Rp {Number(pkg?.sliced_price).toLocaleString('id')}
                  </span>
                </p>

                <Link to="/" className="product__purchase">
                  Beli
                </Link>
              </div>
            </div>
            <div className='row'>
              <div className='product__detail' dangerouslySetInnerHTML={{ __html: pkg?.detail }}></div>
            </div>
          </>
        )}
      </article>
    </Layout>
  )
}

export default PackagePage