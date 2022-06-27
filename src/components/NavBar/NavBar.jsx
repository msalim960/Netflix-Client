import './navbar.scss'
import { Search, ArrowDropDown, Notifications, CardGiftcard } from '@mui/icons-material';
import { useState } from 'react';
const NavBar = () => {
    const [pageScrolled, setPageScrolled] = useState(false)

    window.onscroll = () => {
        setPageScrolled(window.pageYOffset === 0 ? false : true )
        return () => { window.onscroll = null }
    }
  return (
    <div className={ pageScrolled ? "navbar navbar--scrolled" : "navbar"}>
        <div className="navbar--container">
            <div className="navbar--left">
                <img className='navbar--brand' src={require("../../assets/logo.png")} alt="" />
                <span>Home</span>
                <span>Tv Shows</span>
                <span>Movies</span>
                <span>Latest</span>
                <span>My List</span>
            </div>
            <div className="navbar--right">
                <Search className="navbar--icons" />
                <span>KID</span>
                <CardGiftcard className="navbar--icons" />
                <Notifications className="navbar--icons" />
                <img className="profile--img" src={require("../../assets/profile.jpg")} alt="" />
                <div className="profile--dropdown">
                    <ArrowDropDown className="navbar--icons" />
                    <div className="profile--links">
                        <span>Settings</span>
                        <span>Logout</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NavBar
