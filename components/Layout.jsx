import React from 'react';

import Head from 'next/head';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Alex</title>
      </Head>
      <header>
        <Navbar />
      </header>
      {/* <main className='Container'> */}
      <main>  
        {children}
      </main>
    </div>
  )
}

export default Layout