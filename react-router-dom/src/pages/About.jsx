import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function About() {
  return (
    <div>
      <h1>Hakkımızda</h1>
      <div className='about-nav'>
        <Link to="team">Takım</Link>
        <Link to="company">Şirket</Link>
      </div>

      <Outlet />
    </div>
  )
}

export default About
