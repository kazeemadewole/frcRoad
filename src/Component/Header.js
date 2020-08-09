import React from 'react'
import {Link} from 'react-router-dom'
import img from '../img/frsc.jpg'

import './Header.css'

const Header = () => {
return (
<nav className='Header__nav'>
    <div>

    <Link to="/" >
        <img className='Header__image ' src={img} alt="FRSC logo" />
    </Link>

    </div>

    <ul className='Header__list'>
         <li className='nav-item'><Link to= '/driverPage' className="nav-link" >Driver's Page</Link></li>
         <li className='nav-item'><Link to= '/passengerPage' className="nav-link" >Passenger Page</Link></li>

    </ul>

</nav>

)

}
export default Header