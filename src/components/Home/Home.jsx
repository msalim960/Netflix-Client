import NavBar from '../NavBar/NavBar'
import Featured from '../Featured/Featured'
import GenreList from '../GenreList/GenreList'
import './home.scss'

const Home = () => {
  return (
    <div className='home'>
      <NavBar />
      <Featured type="movie" />
      <GenreList />
      <GenreList />
      <GenreList />
      <GenreList />
      <GenreList />
    </div>
  )
}

export default Home;