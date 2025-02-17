"use client";
import * as React from "react";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Heart, Menu, Search, ShoppingCart, UserRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CalendarDays } from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Navbar from "../Navbar/page";
const Header = () => {
  const handleSearch = () => {};

  const path = usePathname();

  return (
    <div>
      <div className="border-b-2 py-3 lg:py-6">
        <div className="mainContainer lg:px-0 px-2">
          <div className="flex justify-between items-center">
            <div className="lg:flex hidden">
              <div className="flex items-center gap-2">
                <div>
                  <Image
                    src="/logo.png"
                    className="md:w-[50px] w-[30px]"
                    width={40}
                    height={40}
                    alt="logo"
                  />
                </div>
                <div>
                  <h2 className="md:text-[30px] text-[16px]">Shop-Mate</h2>
                </div>
              </div>
            </div>
            <div className="md:hidden lg:hidden flex">
              <DropdownMenu>
                <DropdownMenuTrigger asChild className="border-none">
                  <Button variant="outline">
                    <Image
                      src="/menu.png"
                      className="md:w-[50px] w-[30px]"
                      width={40}
                      height={40}
                      alt="logo"
                    />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Link href="/">Home</Link>
                  </DropdownMenuItem>

                  <DropdownMenuItem>
                    <Link href="/api/shop">Shop</Link>
                  </DropdownMenuItem>

                  <DropdownMenuItem>
                    <Link
                      href="/api/bakery"
                      className={path === "/api/pages" ? "text-[#dcfce7]" : ""}
                    >
                      <button className="text-[14px]  text-gray-700  uppercase ">
                        Pages
                      </button>
                    </Link>
                  </DropdownMenuItem>

                  <DropdownMenuItem>
                    {" "}
                    <Link
                      href="/api/beverages"
                      className={path === "/api/blog" ? "text-[#dcfce7]" : ""}
                    >
                      <button className="text-[14px]   text-gray-700 uppercase ">
                        Blog
                      </button>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link
                      href="/api/foodDrinks"
                      className={path === "/api/about" ? "text-[#dcfce7]" : ""}
                    >
                      <button className="text-[14px] text-gray-700   uppercase ">
                        About Us
                      </button>
                    </Link>
                  </DropdownMenuItem>

                  <DropdownMenuItem>
                    <Link
                      href="/api/blog"
                      className={
                        path === "/api/contact" ? "text-[#dcfce7]" : ""
                      }
                    >
                      <button className="text-[14px] text-gray-700 uppercase ">
                        Contact Us
                      </button>
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div>
              <div className="lg:flex  items-center hidden ml-8 gap-6">
                <div>
                  <div className="relative">
                    <input
                      onChange={handleSearch}
                      className="bg-[#f3f4f7] outline-none px-12 py-4 rounded-md md:w-[440px] xl:w-[600px]"
                      type="text"
                      placeholder="Search"
                    />
                    <div className="absolute left-4 cursor-pointer top-4">
                      <Search className="text-gray-600" />
                    </div>
                    <div className="absolute right-0 top-0 cursor-pointer">
                      <button className="bg-[#0694f5] text-white rounded-r-lg px-8 py-4">
                        Search
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <div className="border-r-2 border-gray-300 pr-4">
                <Heart strokeWidth={1} size={40} className="text-gray-600 " />
              </div>
              <div className="flex items-center gap-4">
                <div className="relative">
                  <ShoppingCart
                    strokeWidth={1}
                    size={40}
                    className="text-gray-600"
                  />
                  <span className="bg-[#0694f5] top-0 left-7 absolute w-[18px] h-[18px] flex justify-center items-center rounded-full text-white">
                    0
                  </span>
                </div>
                <div>
                  <h2 className="text-gray-600 text-sm">Shopping cart:</h2>
                  <h2 className="text-lg">$57.00</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:block hidden">
        <Navbar />
      </div>
    </div>
  );
};

export default Header;
