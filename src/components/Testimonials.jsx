import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTestimonials } from '../features/testimonials/testimonialsSlice'
import Testimonial from './Testimonial'

const Testimonials = () => {
  const { testimonials, status } = useSelector(state => state.testimonials)
  const dispatch = useDispatch()

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchTestimonials())
    }
  }, [dispatch, status])

  return (
    <section id="testimonials" className="section__padding">
      <h2 className="testimonials__title section__title">
        Their Stories
      </h2>

      <div className="testimonials__container">
        {status === 'pending' && <h3>Loading...</h3>}

        {status === 'success' && 
        testimonials.length > 0 && 
        testimonials.map((testimonial, index) => (
          <Testimonial testimonial={testimonial} key={index} />
        ))}
      </div>
    </section>
  )
}

export default Testimonials