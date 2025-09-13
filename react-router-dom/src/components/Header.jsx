import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='header'>
      <Link to="/">Anasayfa</Link>
      <Link to="/about">Hakkımızda</Link>
      <Link to="/products">Ürünlerimiz</Link>
      <Link to="/contact">İletişim</Link>
    </div>
  )
}

export default Header