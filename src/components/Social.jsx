import { Link } from 'react-router-dom'

const Social = () => {
  return (
    <>
      <Link to='/'>
        <i className="fa-brands fa-facebook-f"></i>
      </Link>
      <Link to='/'>
        <i className="fa-brands fa-twitter"></i>
      </Link>
      <Link to='/'>
        <i className="fa-brands fa-instagram"></i>
      </Link>
      <Link to='/'>
        <i className="fa-brands fa-whatsapp"></i>
      </Link>
    </>
  )
}

export default Social