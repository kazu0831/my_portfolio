import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar= () => {
  return (
    <nav>
        <ul className='flex justify-center'>
            <li className='py-4 px-6'>
                <Link className='text-white text-lg font-bold hover:opacity-60' to="/">Home</Link>
            </li>

            <span className='text-white py-4'>|</span>

            <li className='py-4 px-6'>
                <Link className='text-white text-lg font-bold hover:opacity-60'to="/works">Works</Link>
            </li>

            <span className='text-white py-4'>|</span>

            <li className='py-4 px-6'>
                <Link className='text-white text-lg font-bold hover:opacity-60' to="/blog">Blog</Link>
            </li>

            <span className='text-white py-4'>|</span>
            
            <li className='py-4 px-6'>
                <Link className='text-white text-lg font-bold hover:opacity-60' to="/contact">Contact</Link>
            </li>
        </ul>
    </nav>
  )
}
