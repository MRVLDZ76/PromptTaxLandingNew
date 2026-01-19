import { useState, useEffect } from 'react'
import './ImageSlider.css'

const images = [
  '/images/marketing/crypto-1.png',
  '/images/marketing/crypto-2.png',
  '/images/marketing/crypto-3.png',
  '/images/marketing/crypto-4.png',
  '/images/marketing/crypto-5.png',
  '/images/marketing/crypto-6.png',
  '/images/marketing/crypto-7.png',
]

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 2000) // Change image every 2 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="image-slider-container">
      <div className="image-slider">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Crypto tax interface ${index + 1}`}
            className={`slider-image ${index === currentIndex ? 'active' : ''}`}
          />
        ))}
      </div>
    </div>
  )
}

export default ImageSlider
