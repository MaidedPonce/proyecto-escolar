import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/styles/Header.scss'
import logo from '../assets/static/giphy.gif'
const Header = () => (
  <header className='header'>
    <img className='header__img' src={logo} alt='logo' />
    <ul>
      <li>
        <Link to='/'>
          Inicio
        </Link>
      </li>
      <li>
        <Link to='/miproyecto'>
          Mi proyecto
        </Link>
      </li>
      <li>
        <Link to='/fase'>
          Fase
        </Link>
      </li>
    </ul>
  </header>
)

export default Header
