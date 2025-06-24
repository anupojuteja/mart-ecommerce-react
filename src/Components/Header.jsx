import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../assets/Images/AchieversIT.png'


const Header = ({count}) => {
  return (
    <>
    <div className='HeaderContainer'>
        <div className='HeaderLogo'>
            <img src={logo} alt="logo" />
        </div>
        <div className=' HeaderTitle'>
            <nav> 
                <ul className='Cards'>
                    <Link to={'/home'}><li>Home</li></Link>
                    <p>thebjdbj</p>
                    
                </ul>
            </nav>
        </div>
    </div>
    </>

  )
}

export default Header;
