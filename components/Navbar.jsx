import React from 'react';
import Link from 'next/link';
import { DiCssdeck } from 'react-icons/di';
import { AiFillGithub, AiOutlineMenu } from 'react-icons/ai';
import { useStateContext } from '../context/StateContext';
import NavDropDown from './NavDropDown';

const Navbar = () => {

    const { showMenu, setShowMenu } = useStateContext();

  return (
    <div className='Navbar'>
    <div className="Container sections row">
      {showMenu==true? <NavDropDown /> : ''}
      <div>
        <Link href='/'>
          <img src="/CA_logo.png" alt="" className='logo-img'  />
        </Link>
      </div>
      <div className="sectionsDesktop row">
        <Link href='#about' className='section'>
          About
        </Link>
        <Link href='#skills' className='section'>
          Skills
        </Link>
        <Link href='#work' className='section'>
          Work
        </Link>
        <Link href='#contact' className='section'>
          Contact
        </Link>
      </div>

      <div className='row'>
        <Link href="https://github.com/Lienkulet" className='git' target='_blank'>
          <AiFillGithub size="3rem" />
        </Link>
        <button type='button'className="navMenuBtn" onClick={() => showMenu==true? setShowMenu(0) : setShowMenu(1) }>
        <AiOutlineMenu  size="3rem" />
        </button>
      </div>
    </div>
  </div>
  )
}

export default Navbar