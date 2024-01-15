import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPackages } from '../features/packages/packagesSlice'
import Package from './Package'

const Packages = () => {
  const { packages, packagesStatus } = useSelector(state => state.packages)
  const dispatch = useDispatch()

  useEffect(() => {
    if (packagesStatus === 'idle') {
      dispatch(fetchPackages())
    }
  }, [dispatch, packagesStatus])

  return (
    <section id="packages" className="section__padding">
      <h2 className="packages__title section__title">
        Paket Langganan
      </h2>

      <p className="packages__para section__para">
        Lebih hemat s/d 25%, ongkir cukup bayar 1x.
      </p>

      <div className="packages__container">
        {packagesStatus === 'pending' && <h3>Loading...</h3>}

        {packagesStatus === 'success' && 
        packages.length > 0 && 
        packages.map((pkg, index) => (
          <Package pkg={pkg} key={index} />
        ))}
      </div>
    </section>
  )
}

export default Packages