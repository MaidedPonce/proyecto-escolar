import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/styles/Header.scss'
import logo from '../assets/static/giphy.gif'
const Header = () => (
  <header className='header'>
    <img className='header__img' src={logo} alt='logo' />
    <ul className='header__lista'>
      <li className='header__lista--element'>
        <Link to='/'>
          Inicio
        </Link>
      </li>
      <li className='header__lista--element'>
        <Link to='/miproyecto'>
          Mi proyecto
        </Link>
      </li>
      <li className='header__lista--element'>
        <Link to='/fase'>
          Estandares
        </Link>
      </li>
    </ul>
  </header>
)

export default Header
