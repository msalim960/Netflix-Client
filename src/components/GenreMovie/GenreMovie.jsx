import './genremovie.scss'
import { PlayArrow, Add, ThumbUpAltOutlined, ThumbDownAltOutlined } from '@mui/icons-material'
import { useState } from 'react'

const GenreMovie = ({ index }) => {
  const [ showMovie, setShowMovie ] = useState(false)

  return (
    <div 
      className='genre--movie'
      style={{ left: showMovie && index * 230 - 50 + index * 8 }}
      onMouseOver={ () => setShowMovie(true) }
      onMouseLeave={ () => setShowMovie(false) }
    >
      <img src={require('../../assets/movie.jpg')} alt="" />
      {showMovie && (
        <>
          <video src={require('../../assets/trailer.mp4')} autoPlay={true} loop />
          <div className="movie--details">
              <div className="movie--icons">
                <PlayArrow className='icon--item' />
                <Add className='icon--item' />
                <ThumbUpAltOutlined className='icon--item' />
                <ThumbDownAltOutlined className='icon--item' />
              </div>
              <div className="movie--info">
                <span>2 hours 47 mins</span>
                <span className='rated' >18+</span>
                <span>2022</span>
              </div>
              <div className="movie--description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Ea repellendus minus totam modi aliquam quasi non nesciunt
              </div>
              <div className="movie--genres">Adventure</div>
          </div>
        </>
      )}
    </div>
  )
}

export default GenreMovie
