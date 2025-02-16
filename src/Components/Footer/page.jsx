"use client";

import { Facebook, Globe, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <div className="bg-[#201e1e] text-white w-full">
      <footer className="footer px-4 py-4 md:px-10 md:py-[100px] container mx-auto">
        <aside>
          <h2 className="text-[20px] md:text-[44px] md:w-[500px] md:leading-[45px]">
            End-to-end hydroponic indoor vertical farming solutions
          </h2>
        </aside>
        <nav>
          <h6 className=" text-[16px] md:text-[21px]">Address</h6>
          <a className="text-[#d4d4d4] text-[12px] md:text-[15px] md:mt-6">
            Bangladesh —
          </a>
          <a className="text-[#d4d4d4] text-[12px] md:text-[15px]">
            785 15h Street, Office 478
          </a>
          <a className="text-[#d4d4d4] text-[12px] md:text-[15px] md:mb-6">
            Dhaka, Po. 1212
          </a>
          <div className="flex items-center gap-2">
            <span className="border-[1px] border-gray-400 p-1">
              {" "}
              <Facebook className="transition-all hover:text-[#eddd5e] cursor-pointer" />
            </span>
            <span className="border-[1px] border-gray-400 p-1">
              {" "}
              <Twitter className="transition-all hover:text-[#eddd5e] cursor-pointer" />
            </span>
            <span className="border-[1px] border-gray-400 p-1">
              {" "}
              <Globe className="transition-all hover:text-[#eddd5e] cursor-pointer" />
            </span>
            <span className="border-[1px] border-gray-400 p-1">
              {" "}
              <Instagram className="transition-all hover:text-[#eddd5e] cursor-pointer" />
            </span>
          </div>
        </nav>
        <nav>
          <h6 className="text-[16px] md:text-[21px]">Say Hello</h6>
          <a className="text-[#d4d4d4] text-[12px] md:text-[15px] md:mt-6">
            afranislamabir6789@gmail.com
          </a>
          <a className="text-white text-[12px] md:text-[15px]">
            +8801306700357
          </a>
        </nav>
      </footer>
      <div className="container mx-auto">
        <div className="border-t-[1px] border-gray-600">
          <div className="flex md:flex-row flex-col justify-between items-center text-gray-400 text-[14px] md:text-[18px] py-4 md:py-8">
            <div className="space-x-10 text-gray-200">
              <span>Our Blog</span>
              <span>Services</span>
              <span>Contacts</span>
            </div>
            <div>
              <h2>Shop-Mate © 2025. All Rights Reserved.</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
