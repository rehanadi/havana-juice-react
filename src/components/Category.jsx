const Category = ({ category }) => {
  return (
    <div className="categories__container--category">
      <figure className="categories__container--category__img">
        <img loading="lazy" src={category.image} alt={category.name} />
      </figure>

      <h5 className="categories__container--category__name">{category.name}</h5>
    </div>
  )
}

export default Category