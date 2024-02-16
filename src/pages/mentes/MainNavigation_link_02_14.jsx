import React from 'react'
import { Link } from 'react-router-dom'
import saw from "../assets/saw2.png"
const MainNavigation = () => {
  return (
    <nav className="bg-gray-800 ">
    <div className="max-w-7xl mx-auto flex justify-between items-center">
      <div className="flex items-center">
        <img src={saw} className='w-24  border-lime-800'/>
        <Link to="/" className="text-white font-semibold text-lg">SOPRONI ÉS MÁRK</Link>
      </div>
      <div className="hidden  md:flex border-2 w-auto">
        <Link to="/" className="text-white mr-4 hover:text-red-600">Főoldal</Link>
        <Link to="/galery" className="text-white mr-4  hover:text-red-600">Galéria</Link>
      
      </div>
      <div className="hidden  md:flex border-2 w-auto">
        <Link to="/" className="text-white mr-4">Főoldal</Link>
        <Link to="/galery" className="text-white mr-4">Galéria</Link>
      
      </div>
      <div className="md:hidden">
     
        </div>
        </div>
      </nav>
  )
}

export default MainNavigation