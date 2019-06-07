import React from 'react'
import ParcelLogo from '../img/parcel-logo.svg'

const Header = _ => (
  <header>
    <nav className='navbar' role='navigation' aria-label='main navigation'>
      <div className='navbar-brand'>
        <a href='/' className='navbar-item'>
          <img src={ParcelLogo} alt='parcel logo' width='120' />
        </a>
      </div>
    </nav>
  </header>
)

export default Header
