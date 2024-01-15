import { useState } from 'react'
import appStore from '../images/app-store.svg'
import googlePlay from '../images/google-play.svg'

const Download = () => {
  const [hideDownload, setHideDownload] = useState(localStorage.getItem('hide-download') || null)

  const toggleHideDownload = value => {
    setHideDownload(value)
    localStorage.setItem('hide-download', value)
  }

  if (hideDownload) return

  return (
    <section className="download">
      <i className="fa-solid fa-xmark fa-lg download__close" onClick={() => toggleHideDownload('true')}></i>

      <span className="download__info">
        Download Aplikasi Havana Juice
      </span>

      <div className="download__links">
        <a href="https://www.apple.com/id/app-store" target="_blank" className="download__links--link">
          <figure className="download__links--link__img">
            <img loading="lazy" src={appStore} alt="App Store" />
          </figure>

          <span className="download__links--link__title">App Store</span>
        </a>

        <a href="https://play.google.com" target="_blank" className="download__links--link">
          <figure className="download__links--link__img">
            <img loading="lazy" src={googlePlay} alt="Google Play" />
          </figure>

          <span className="download__links--link__title">Google Play</span>
        </a>
      </div>
    </section>
  )
}

export default Download