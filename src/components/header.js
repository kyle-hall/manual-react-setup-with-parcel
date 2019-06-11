import React from 'react'
import GameboyImage from '../img/gameboy.svg'

const Header = _ => (
  <header>
    <nav className='navbar' role='navigation' aria-label='main navigation'>
      <div className='navbar-brand'>
        <a href='/' className='navbar-item'>
          <img src={GameboyImage} alt='cartoon gameboy' width='120' height='200' />
        </a>
      </div>
    </nav>
  </header>
)

export default Header
