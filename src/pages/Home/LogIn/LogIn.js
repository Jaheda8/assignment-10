import React from 'react';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';





const LogIn = () => {
    const { signInWithGoogle }=useAuth();
    const location =useLocation();
    const history=useHistory();
    const rediret_url=location.state?.from || '/home';
    console.log('came from', location.state?.from);
    const handleGoogleLogin=()=>{
signInWithGoogle()
.then(result=>{
history.push(rediret_url)
})
    }
 
    return (
        <div className='h-full w-full' >
            {/* <!-- Login--> */}
<div className="w-full min-h-screen bg-gray-50 flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
  <div className="w-full sm:max-w-md p-5 mx-auto">
    <h2 className="mb-12 text-center text-5xl font-extrabold">Plase LogIn</h2>
    <form>
      <div className="mb-4">
        <label className="block mb-1" for="email">Email-Address</label>
        <input id="email" type="text" name="email" className="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full" />
      </div>
      <div className="mb-4">
        <label className="block mb-1" for="password">Password</label>
        <input id="password" type="password" name="password" className="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full" />
      </div>
      <div className="mt-6 flex items-center justify-between">
        <div className="flex items-center">
          <input id="remember_me" type="checkbox" className="border border-gray-300 text-red-600 shadow-sm focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50" />
          <label for="remember_me" className="ml-2 block text-sm leading-5 text-gray-900"> Remember me </label>
        </div>
        <a href="#" className="text-sm"> Forgot your password? </a>
      </div>
      <div className="mt-6">
        <button className="w-full inline-flex items-center justify-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold capitalize text-white hover:bg-red-700 active:bg-red-700 focus:outline-none focus:border-red-700 focus:ring focus:ring-red-200 disabled:opacity-25 transition">Sign In</button>
      </div>
    
     
    </form>
    <div className="mt-6">
        <button onClick={handleGoogleLogin} className="w-full inline-flex items-center justify-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold capitalize text-white hover:bg-gray-700 active:bg-gray-700 focus:outline-none focus:border-gary-700 focus:ring focus:ring-red-200 disabled:opacity-25 transition">Sign In With google</button>
      </div>
      <div className="mt-6 text-center">
        <Link to="/register" className="underline">Sign up for an account</Link>
      </div>
  </div>
</div>
        </div>
    );
};

export default LogIn;