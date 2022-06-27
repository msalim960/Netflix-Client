import './watch.scss'
import { ArrowBackOutlined } from '@mui/icons-material'

const Watch = () => {
  return (
    <div className='watch'>
        <div className="back--home">
            <ArrowBackOutlined /> Home
        </div>
        <video src={require('../../assets/movie.mp4')} 
        className='movie' autoPlay  progress controls/>
    </div>
  )
}

export default Watch