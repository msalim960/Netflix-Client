import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@mui/icons-material'
import { useRef, useState } from 'react'
import GenreMovie from '../GenreMovie/GenreMovie'
import './genrelist.scss'


const GenreLists = () => {
  const slideRef = useRef()
  const [slideNumber, setSlideNumber] = useState(0)
  const [showArrow, setShowArrow] = useState(false)

  const handleSlide = (direction) => {
      setShowArrow(true)
      let distance = slideRef.current.getBoundingClientRect().x - 50
      if (direction === 'slide-left' && slideNumber > 0){
        setSlideNumber(slideNumber - 1)
        slideRef.current.style.transform = `translateX(${ 230 + distance }px)`
      }
      if (direction === 'slide-right' && slideNumber < 5){
        setSlideNumber(slideNumber + 1)
        slideRef.current.style.transform = `translateX(${ -230 + distance }px)`
      }
  }
  
  return (
    <div className='genre--list'>
        <span className="genre--title"> Continue Watching </span>
        <div className="genrelist--container">
            <ArrowBackIosOutlined className='slide left' onClick={ () => handleSlide("slide-left")} style={{ display: !showArrow && "none" }} />
            <div className="genrelist--movies" ref={slideRef}>
                <GenreMovie index={0} />
                <GenreMovie index={1} />
                <GenreMovie index={2} />
                <GenreMovie index={3} />
                <GenreMovie index={4} />
                <GenreMovie index={5} />
                <GenreMovie index={6} />
                <GenreMovie index={7} />
                <GenreMovie index={8} />
                <GenreMovie index={9} />
            </div>
            <ArrowForwardIosOutlined className='slide right' onClick={ () => handleSlide("slide-right") } />
        </div>
    </div>
  )
}

export default GenreLists