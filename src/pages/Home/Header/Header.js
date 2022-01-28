import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Header = () => {
  const {user, logOut}=useAuth();
    return (
        <div className='sticky top-0'>
            {/* <!-- Nav bar  --> */}
<nav className="bg-gray-800  ">
  <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
    <div className="relative flex items-center justify-between h-16">
  
      <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
        <div className="flex-shrink-0 flex items-center">
          <h1 className='text-white font-extrabold text-2xl'>Popular Health Care</h1>
        </div>
        <div className="hidden sm:block sm:ml-6">
          <div className="flex space-x-4">

            

            <Link to="/home" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</Link>
            {/* <Link to="/home/#services" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Services</Link> */}
            <a href="/home/#feature" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Features</a>
            <a href="/home/#services" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Our Services</a>
            <a href="/home/#faq" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">FAQ</a>
            <Link to="/team" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Our team</Link>
            <Link to="/contact" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact us</Link>
            <Link to="/login" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">LogIn</Link>
            {
              user.email &&
                <span style={{color:"white"}}>Hello! {user.displayName}</span>}
                {
                user.email ?
                <button className='text-white' onClick={logOut}>Logout</button>
                :
                <div className='text-gray-800'> <NavLink to="/login">Login</NavLink></div>
                   }
          </div>
        </div>
      </div>
    </div>
  </div>

  
</nav>

        </div>
    );
};

export default Header;