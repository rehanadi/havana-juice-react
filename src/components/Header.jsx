import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.jpg'

const Header = () => {
  const [showNav, setShowNav] = useState(false)
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')

  const setLightTheme = () => {
    const root = document.querySelector(':root')
    root.style.setProperty('--color-theme-d-1', '#ffffff')
    root.style.setProperty('--color-theme-d-3', '#12452c')
    root.style.setProperty('--color-theme-d-4', '#2f8d03')
    root.style.setProperty('--color-theme-d-7', '#fdf9ee')
    root.style.setProperty('--color-theme-d-8', '#eaf8d7')
    root.style.setProperty('--color-theme-d-9', '#db885a')
    root.style.setProperty('--color-type-d-1', '#ffffff')
    root.style.setProperty('--color-type-d-2', '#000000')
    root.style.setProperty('--color-type-d-4', '#2f8d03')
    root.style.setProperty('--color-type-d-5', '#872e47')
    root.style.setProperty('--color-type-d-6', '#05140D')
    root.style.setProperty('--color-type-d-7', '#FFDFA1')
  }

  const setDarkTheme = () => {
    const root = document.querySelector(':root')
    root.style.setProperty('--color-theme-d-1', '#12452c')
    root.style.setProperty('--color-theme-d-3', '#eaf8d7')
    root.style.setProperty('--color-theme-d-4', '#FFDFA1')
    root.style.setProperty('--color-theme-d-7', '#effdee')
    root.style.setProperty('--color-theme-d-8', '#db885a')
    root.style.setProperty('--color-theme-d-9', '#eaf8d7')
    root.style.setProperty('--color-type-d-1', '#000000')
    root.style.setProperty('--color-type-d-2', '#ffffff')
    root.style.setProperty('--color-type-d-4', '#FFDFA1')
    root.style.setProperty('--color-type-d-5', '#db885a')
    root.style.setProperty('--color-type-d-6', '#fdf9ee')
    root.style.setProperty('--color-type-d-7', '#2f8d03')
  }

  const toggleTheme = value => {
    setTheme(value)
    localStorage.setItem('theme', value)
  }

  useEffect(() => {
    if (theme === 'dark') {
      setDarkTheme()
    } else {
      setLightTheme()
    }
  }, [theme])

  return (
    <header id="header">
      <Link to="/">
        <figure className="header__logo">
          <img loading="lazy" src={logo} alt="Havana Juice" />
        </figure>
      </Link>

      <nav className={`header__nav ${showNav ? 'show__nav' : ''}`}>
        <Link to="/" className="header__nav--link active">Home</Link>
        <Link to="/products" className="header__nav--link">Belanja</Link>
        <Link to="/packages" className="header__nav--link">Berlangganan</Link>
        <Link to="/about" className="header__nav--link">Tentang Kami</Link>
        <Link to="/contact" className="header__nav--link">Kontak</Link>
      </nav>

      <span className="header__theme" onClick={() => toggleTheme(theme === 'dark' ? 'light' : 'dark')}>
        <i className={`fa-solid ${theme === 'dark' ? 'fa-sun' : 'fa-moon'} fa-lg`}></i>
      </span>

      <div className={`hamburger ${showNav ? 'hamburger__close' : ''}`} onClick={() => setShowNav(!showNav)}>
        <div className={`hamburger__line ${showNav ? 'hamburger__line-1' : ''}`}></div>
        <div className={`hamburger__line ${showNav ? 'hamburger__line-2' : ''}`}></div>
        <div className={`hamburger__line ${showNav ? 'hamburger__line-3' : ''}`}></div>
      </div>
    </header>
  )
}

export default Header