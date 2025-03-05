import React, { useState } from 'react';

function Navbar() {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src="./Images/logo.png" alt="Logo" className="h-12 w-12" />
          <span className="text-2xl font-semibold ml-2">GITAM</span>
        </div>

        <div className="flex items-center">
          {/* Navigation Links */}
          <ul className="flex space-x-4 text-lg font-semibold">
            <li className="hover:text-gray-300 cursor-pointer">Home</li>
            <li className="hover:text-gray-300 cursor-pointer">About Us</li>
            <li className="hover:text-gray-300 cursor-pointer">Contact</li>
            <li className="hover:text-gray-300 cursor-pointer">Login</li>
            <li className="hover:text-gray-300 cursor-pointer">SignUp</li>
          </ul>

          {/* Profile Icon */}
          <div className="relative ml-4">
            <img
              src="./Images/profile.png"
              alt="Profile"
              className="h-10 w-10 rounded-full border-2 border-white hover:border-gray-300 cursor-pointer"
              onClick={toggleDropdown}
            />
            {dropdownVisible && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded shadow-lg z-50">
                <ul>
                  <li className="px-4 py-2 bg-gray-100 text-black hover:bg-blue-500 hover:text-white cursor-pointer">Profile</li>
                  <li className="px-4 py-2 bg-gray-100 text-black hover:bg-blue-500 hover:text-white cursor-pointer">Settings</li>
                  <li className="px-4 py-2 bg-gray-100 text-black hover:bg-blue-500 hover:text-white cursor-pointer">Logout</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;