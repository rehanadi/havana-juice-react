import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCategories } from '../features/products/productsSlice'
import Category from './Category'

const Categories = () => {
  const { categories, categoriesStatus } = useSelector(state => state.products)
  const dispatch = useDispatch()

  useEffect(() => {
    if (categoriesStatus === 'idle') {
      dispatch(fetchCategories())
    }
  }, [dispatch, categoriesStatus])

  return (
    <section id="categories" className="section__padding">
      <h2 className="categories__title section__title">
        Shop by Needs
      </h2>

      <p className="categories__para section__para">
        Belanja dari kebutuhan kamu untuk mendukung kesehatan maksimal kamu.
      </p>

      <div className="categories__container">
        {categoriesStatus === 'pending' && <h3>Loading...</h3>}

        {categoriesStatus === 'success' && 
        categories.length > 0 && 
        categories.map((category, index) => (
          <Category category={category} key={index} />
        ))}
      </div>
    </section>
  )
}

export default Categories