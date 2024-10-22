import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (

       <div className=' bg-red-700'>
        <br></br>
        <div className='flex justify-between items-center'>
        <div className='text-xl mx-20 bg-yellow-500'><b> WEB DEVELOPER  </b> </div><br></br>
       <ul className='gap-15 lg:gap-8 hidden md:flex'>

       
     
           <li className='menuLink'><Link href="/"target="-blank"><b>Home</b></Link></li>
           <li className='menuLink'><Link href="/about"target="-blank"><b>About</b></Link></li>
           <li className='menuLink'><Link href="/skill"target="-blank"><b>Skill</b></Link></li>
           <li className='menuLink'><Link href="/contact"target="-blank"><b>Contact</b></Link></li>
     
       </ul>
       <br></br>
       <br></br>
       <br></br>
    
       
        </div>
    </div>
  )
}

export default Navbar
