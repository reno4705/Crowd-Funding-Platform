import React from 'react'
import './nav.css'
import logo from '../Assets/logo.png'
import {Link,useNavigate} from 'react-router-dom'



const Nav = () => {
  const isUserSignedIn = !!localStorage.getItem('token')
    const navigate = useNavigate();

    const handleSignOut = () => {
        localStorage.removeItem('token')
        navigate('/')
    }

  return (
    <nav>
      <div className='navstart'>
        <img src={logo} alt='logo' className='logo'/>
      </div>   
      <div>
        <ul className='navbar'>
          <li><Link to='/investor'>Start Investing</Link></li>
          <li><Link to='/founders'>For Founders</Link></li>
          {isUserSignedIn ? (
                <>
                <button onClick={handleSignOut} className='signup-button'><Link to=''>Sign Out</Link></button>
                </>
            ) : (
                <>
                <li><Link to='/login'>Log In</Link></li>
                <button className='signup-button'><Link to='/signup'>Sign Up</Link></button>
                </>
            )}
          
        </ul>
      </div>
    </nav>
  )
}

export default Nav