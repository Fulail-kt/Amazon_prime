import React from 'react';
import Image from 'next/image';
import search from '../../../public/images/search.png'
import profile from '../../../public/images/profile.svg'


const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white w-full">
      <div className=" px-4  flex items-center w-full justify-center">
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-xl font-bold px-6">prime video</span>
        </div>
        
        {/* Navigation */}
        <div className="hidden md:flex ">
          <div className="relative group">
            <button className="hover:text-gray-300 py-1 px-3 hover:bg-black">Home</button>
            <ul className="absolute left-0 mt-2 hidden group-hover:block bg-gray-800 text-sm rounded-md shadow-lg">
              <li className="block px-4 py-2 hover:bg-gray-700">Option 1</li>
              <li className="block px-4 py-2 hover:bg-gray-700">Option 2</li>
            </ul>
          </div>
          <div className="relative group">
            <button className="hover:text-gray-300 py-1 px-3 hover:bg-black">Store</button>
            <ul className="absolute left-0 mt-2 hidden group-hover:block bg-gray-800 text-sm rounded-md shadow-lg">
              <li  className="block px-4 py-2 hover:bg-gray-700">Option 1</li>
              <li  className="block px-4 py-2 hover:bg-gray-700">Option 2</li>
            </ul>
          </div>
          <div className="relative group">
            <button className="hover:text-gray-300 py-1 px-3 hover:bg-black">Live TV</button>
            <ul className="absolute left-0 mt-2 hidden group-hover:block bg-gray-800 text-sm rounded-md shadow-lg">
              <li  className="block px-4 py-2 hover:bg-gray-700">Option 1</li>
              <li  className="block px-4 py-2 hover:bg-gray-700">Option 2</li>
            </ul>
          </div>
          <div className="relative group">
            <button className="hover:text-gray-300 py-1 px-3 hover:bg-black">Categories</button>
            <ul className="absolute left-0 mt-2 hidden group-hover:block bg-gray-800 text-sm rounded-md shadow-lg">
              <li  className="block px-4 py-2 hover:bg-gray-700">Option 1</li>
              <li  className="block px-4 py-2 hover:bg-gray-700">Option 2</li>
            </ul>
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center space-x-6">
          <div>
            <button className="focus:outline-none">
              <Image src={search} width={10} height={10} alt='search'/>
            </button>
          </div>
          <div>
            <span  className="hover:text-gray-300">Try for free</span>
          </div>
          <div className="relative group">
            <button className="hover:text-gray-300">EN</button>
            <ul className="absolute right-0 mt-2 hidden group-hover:block bg-gray-800 text-sm rounded-md shadow-lg">
              <li className="block px-4 py-2 hover:bg-gray-700">English</li>
              <li className="block px-4 py-2 hover:bg-gray-700">Spanish</li>
            </ul>
          </div>
          <div>
            {/* user profile */}
            <button>
                <Image src={profile} alt='profile'/>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
