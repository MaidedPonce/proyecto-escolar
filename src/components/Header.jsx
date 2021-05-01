import React from 'react'
import '../assets/styles/Header.scss'
const Header = () => {
  return (
    <div className='container'>
      <div className='lbl-menu'>
        <label htmlFor='radio'>Inicio</label>
        <label htmlFor='radio2'>Quién soy</label>
        <label htmlFor='radio3'>Mi proyecto</label>
      </div>

      <div className='content'>

        <input type='radio' name='radio' id='radio' />
        <div className='tab1'>
          <h2>Bienvenidos!</h2>
        </div>

        <input type='radio' name='radio' id='radio2' />
        <div className='tab2'>
          <h2>Soy Maided!</h2>
        </div>

        <input type='radio' name='radio' id='radio3' />
        <div className='tab3'>
          <h2>Este proyecto...</h2>
        </div>

      </div>
    </div>
  )
}

export default Header
