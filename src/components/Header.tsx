import React from 'react'

import "./Header.css"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='header'>
        <div className="logo">
            <Link to='/'>
                <img src="./logo-small.png" alt="the meal db" />
            </Link>
            

        </div>
        <div className="links">
            
            <Link to='/meal'>
                <h2>Meal</h2>
            </Link>
            
            <Link to='/about-project'>
                <h2>About the page</h2>
            </Link>
            


        </div>
    </header>
  )
}

export default Header