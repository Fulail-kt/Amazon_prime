import React from 'react';
import Image from 'next/image';
import search from '../../../public/images/search.png'
import profile from '../../../public/images/profile.svg'
import down from '../../../public/images/down.svg'


const Navbar = () => {
  return (
    <nav className="bg-black text-white w-full">
      <div className=" px-4  flex items-center w-full justify-center">
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-lg font-semibold px-6">prime video</span>
        </div>
        
        {/* Navigation */}
        <div className="hidden md:flex ">
          <div className="relative group">
            <button className="hover:text-white text-sm py-1 px-3 hover:bg-gray-800 flex items-center">Home <span className='group-hover:rotate-180'> <Image src={down} width={15} height={15} alt='arrow'/></span></button>
            <ul className="absolute left-0  hidden group-hover:block bg-gray-800 text-sm  shadow-lg">
              <li className="block px-4 py-2 hover:bg-gray-700">Option 1</li>
              <li className="block px-4 py-2 hover:bg-gray-700">Option 2</li>
            </ul>
          </div>
          <div className="relative group">
            <button className="hover:text-white py-1 px-3 hover:bg-gray-800 flex items-center">Store <span className='group-hover:rotate-180'> <Image src={down} width={15} height={15} alt='arrow'/></span></button>
            <ul className="absolute left-0 hidden group-hover:block bg-gray-800 text-sm  shadow-lg">
              <li  className="block px-4 py-2 hover:bg-gray-700">Option 1</li>
              <li  className="block px-4 py-2 hover:bg-gray-700">Option 2</li>
            </ul>
          </div>
          <div className="relative group">
            <button className="hover:text-white py-1 px-3 hover:bg-gray-800 ">Live TV</button>
            <ul className="absolute left-0  hidden group-hover:block bg-gray-800 text-sm  shadow-lg">
              <li  className="block px-4 py-2 hover:bg-gray-700">Option 1</li>
              <li  className="block px-4 py-2 hover:bg-gray-700">Option 2</li>
            </ul>
          </div>
          <div className="relative group">
            <button className="hover:text-white py-1 px-3 hover:bg-gray-800 flex items-center">Categories <span className='group-hover:rotate-180 '> <Image src={down} width={15} height={15} alt='arrow'/></span></button>
            <ul className="absolute left-0  hidden group-hover:block bg-gray-800 text-sm  shadow-lg">
              <li  className="block px-4 py-2 hover:bg-gray-700">Option 1</li>
              <li  className="block px-4 py-2 hover:bg-gray-700">Option 2</li>
            </ul>
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center pl-5 ">
          
            <div className="flex items-center  hover:bg-gray-800 h-full">
              <Image src={search} width={15} height={15} alt='search'/>
            </div>
          
          <div>
            <span  className="hover:text-white px-3 hover:bg-gray-800">Try for free</span>
          </div>
          <div className="relative group">
            <button className="hover:text-white px-3 hover:bg-gray-800 flex items-center">EN <span className='group-hover:rotate-180'> <Image src={down} width={15} height={15} alt='arrow'/></span></button>
            <ul className="absolute right-0  hidden group-hover:block bg-gray-800 text-sm rounded-md shadow-lg">
              <li className="block px-4 py-2 hover:bg-gray-700">English</li>
              <li className="block px-4 py-2 hover:bg-gray-700">Spanish</li>
            </ul>
          </div>
          <div>
            {/* user profile */}
            <div className='flex items-center px-3  hover:bg-gray-800 h-full'>
                <Image src={profile} alt='profile'/>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
