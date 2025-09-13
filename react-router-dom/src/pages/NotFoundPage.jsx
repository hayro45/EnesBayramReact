import React from 'react'
import { Link } from 'react-router-dom'
function NotFoundPage() {
  return (
    <div>
      <h1>404 - Sayfa Bulunamadı</h1>
      <p>Aradığınız sayfa mevcut değil.</p>
      <Link to="/">Anasayfa'ya dön</Link>
    </div>
  )
}

export default NotFoundPage
