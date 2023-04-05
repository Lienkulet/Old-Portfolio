import React from 'react'
import Link from 'next/link'
import { useStateContext } from '@/context/StateContext';

const NavDropDown = () => {

  const { setShowMenu } = useStateContext();

  return (
    <div className="sectionsMobile">
        <Link href='#about' className='section' onClick={() => setShowMenu(0)}>
          About
        </Link>
        <Link href='#skills' className='section' onClick={() => setShowMenu(0)}>
          Skills
        </Link>
        <Link href='#work' className='section' onClick={() => setShowMenu(0)}>
          Work
        </Link>
        <Link href='#contact' className='section' onClick={() => setShowMenu(0)}>
          Contact
        </Link>
      </div>
  )
}

export default NavDropDown