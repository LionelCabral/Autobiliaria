import React, { useState } from 'react'
import styled from 'styled-components'
import BurgerButton from './BurgerButton'
import CartWidget from './CartWidget'

function NavBar() {

  const [clicked, setClicked] = useState(false)
  const handleClick = () => {
    //cuando esta true lo pasa a false y vice versa
    setClicked(!clicked)
  }
  return (
    <>
      <NavContainer>
        <h2>Navbar <span>Responsive</span></h2>
        <div className={`links ${clicked ? 'active' : ''}`}>
          <a onClick={handleClick} href="#h">Inicio      </a>
          <a onClick={handleClick} href="#h">Inventario      </a>
          <a onClick={handleClick} href="#h">Nosotros      </a>
          <a onClick={handleClick} href="#h">Contacto      </a>
          <a onClick={handleClick} href="#h"><CartWidget/></a>
        </div>
        <div className='burger'>
          <BurgerButton clicked={clicked} handleClick={handleClick} />
        </div>
        <BgDiv className={`initial ${clicked ? ' active' : ''}`}></BgDiv>
      </NavContainer>
    </>
  )
}

export default NavBar

const NavContainer = styled.nav`
  h2{
    color: white;
    font-weight: 400;
    span{
      font-weight: bold;
    }
  }
  padding: .4rem;
  background-color: #333;  /*color de la NavBar */
  display: flex;
  align-items: center;
  justify-content: space-between;
  a{
    color: white;
    text-decoration: none;
    margin-right: 1rem;
  }
  .links{
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all .5s ease;
    a{
      color: white;
      font-size: 2rem;
      display: block;
    }
    @media(min-width: 768px){
      position: initial;
      margin: 0;
      a{
        font-size: 1rem;
        color: white;
        display: inline;
      }
      display: block;
    }
  }
  .links.active{
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 30%;
    left: 0;
    right: 0;
    text-align: center;
    a{
      font-size: 2rem;
      margin-top: 1rem;
      color: white;
    }
  }
  .burger{
    @media(min-width: 768px){
      display: none;
    }
  }
`

const BgDiv = styled.div`
  background-color: #222;
  position: absolute;
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: all .6s ease ;/*animacion*/
  
  &.active{
    border-radius: 0 0 80% 0; /*ArribaIzquierda-ArribaDerecha-AbajoDerecha-AbajoIzquierda*/
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`

//https://www.youtube.com/watch?v=jmoCo74geJQ&ab_channel=Joaqu%C3%ADnVarela

