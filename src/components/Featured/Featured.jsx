import './featured.scss'
import { PlayArrow, InfoOutlined } from '@mui/icons-material'


const Featured = ({ type }) => {
  return (
    <div className='featured'>
      { type && (
           <div className="genres">
            <span>{ type === "movie" ? "Movies" : "Tv Shows" }</span>
            <select name="genres" id="genre">
                <option>Genre</option>
                <option value="">Action</option>
                <option value="">Adventure</option>
                <option value="">Comedy</option>
                <option value="">Horror</option>
                <option value="">Sci-fi</option>
            </select>
           </div>
      )}
      <img src={require("../../assets/featured.jpg")} alt="" />
      <div className="featured--details">
          <div className="featured--title">The Revengers</div>
          <div className="featured--plot">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab temporibus non quasi quod, eum architecto! Repellendus, tempora. Nobis distinctio accusamus necessitatibus minus harum, similique ipsam repudiandae ut, adipisci sit animi?
          </div>
          <div className="featured--buttons">
          <button className='featured--play'>
            <PlayArrow /><span>Play</span>
          </button>
          <button className='featured--info'>
              <InfoOutlined /> <span>More Info</span>
          </button>
          </div>
      </div>
    </div>
  )
}

export default Featured