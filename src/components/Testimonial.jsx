const Testimonial = ({ testimonial }) => {
  return (
    <div className="testimonials__container--testimonial">
      <figure className="testimonials__container--testimonial__img">
        <img loading="lazy" src={testimonial.image} alt={testimonial.name} />
      </figure>

      <h4 className="testimonials__container--testimonial__name">
        {testimonial.name}
      </h4>

      <div className="testimonials__container--testimonial__review" dangerouslySetInnerHTML={{
        __html: testimonial.review
      }}></div>
    </div>
  )
}

export default Testimonial