import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar= () => {
  return (
    <nav>
        <ul className='flex justify-center'>
            <li className='py-4 px-4'>
                <Link className='text-white text-lg font-bold hover:opacity-60' to="/my_portfolio">Home</Link>
            </li>

            <span className='text-white py-4'>|</span>

            <li className='py-4 px-4'>
                <Link className='text-white text-lg font-bold hover:opacity-60'to="/my_portfolio/works">Works</Link>
            </li>

            <span className='text-white py-4'>|</span>

            <li className='py-4 px-4'>
                <Link className='text-white text-lg font-bold hover:opacity-60' to="/my_portfolio/blog">Blog</Link>
            </li>

            <span className='text-white py-4'>|</span>
            
            <li className='py-4 px-4'>
                <Link className='text-white text-lg font-bold hover:opacity-60' to="/my_portfolio/contact">Contact</Link>
            </li>
        </ul>
    </nav>
  )
}
