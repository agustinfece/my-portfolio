import React, { useState } from 'react'
import './styles.css'

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className='header'>
      <nav className='nav container'>
        <a href='index.html' className='nav__logo'>Agus</a>
        <div className={showMenu ? 'nav__menu show-menu' : 'nav__menu'}>
          <ul className='nav__list grid'>
            <li className='nav_item'>
              <a href='#home' className='nav__link active-link'>
                <i className='uil uil-estate nav__icon'></i>Home
              </a>
            </li>
          </ul>
        </div>
        <div className='nav__toggle' onClick={() => setShowMenu(_show => !_show)}>
        <i className='uil uil-apps'></i>
        </div>
      </nav>
    </header>
  )
}

export default Header;