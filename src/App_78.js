import React from 'react'
import { useGlobalContext } from './context_78'

// components
import Navbar_78 from './Navbar_78'
import CartContainer_78 from './CartContainer_78'
// items

function App_78() {
  // if (loading) {
  //   return (
  //     <div className='loading'>
  //       <h1>Loading...</h1>
  //     </div>
  //   )
  // }
  return (
    <main>
      <Navbar_78 />
      <CartContainer_78 />
    </main>
  )
}

export default App_78
