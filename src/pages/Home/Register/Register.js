import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  

    return (
        <div >
            {/* <!-- Register part start--> */}

<form>
  <div className="flex items-center justify-center h-screen bg-gray-100">
    <div className="bg-white py-6 rounded-md px-10 max-w-lg shadow-md">
      <h1 className="text-center text-lg font-bold text-gray-500">Form Register</h1>
      <div className="space-y-4 mt-6">
        <div className="w-full">
          <input type="text" placeholder="fullname" className="px-4 py-2 bg-gray-50" />
        </div>
        <div className="w-full">
          <input type="text" placeholder="username" className="px-4 py-2 bg-gray-50" />
        </div>
        <div className="w-full">
          <input type="text" placeholder="email" className="px-4 py-2 bg-gray-50" />
        </div>
        <div className="w-full">
          <input type="text" placeholder="password" className="px-4 py-2 bg-gray-50" />
        </div>
      </div>
      <button className="w-full mt-5 bg-indigo-600 text-white py-2 rounded-md font-semibold tracking-tight">Register</button>
   
      <Link className='underline	' to='/login'> <h1 className='text-blue-800'>Already have an account?</h1> Login</Link>
    </div>
  </div>
</form>

        </div>
    );
};

export default Register;