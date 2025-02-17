"use client";
import { ChevronDown, Phone } from "lucide-react";

const Navbar = () => {
  return (
    <div className="shadow-lg">
      <div className="mainContainer">
        <nav className="flex justify-between items-center py-4 ">
          <ul className="flex items-center space-x-6 text-gray-700 text-sm font-medium">
            <li className="flex items-center text-lg space-x-1 text-green-600">
              <span>Home</span>
              <ChevronDown size={20} />
            </li>
            <li className="flex text-lg items-center space-x-1">
              <span>Shop</span>
              <ChevronDown size={20} />
            </li>
            <li className="flex text-lg items-center space-x-1">
              <span>Pages</span>
              <ChevronDown size={20} />
            </li>
            <li className="flex text-lg items-center space-x-1">
              <span>Blog</span>
              <ChevronDown size={20} />
            </li>
            <li className="text-lg">
              <span>About Us</span>
            </li>
            <li className="text-lg">
              <span>Contact Us</span>
            </li>
          </ul>
          <div className="flex text-lg items-center space-x-2 text-gray-700">
            <Phone size={25} />
            <span>(219) 555-0114</span>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
