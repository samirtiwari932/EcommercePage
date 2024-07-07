import React from "react";
import MaxWidthWrapper from "./maxWidthWrapper";
import Link from "next/link";
import Image from "next/image";
import { RiArrowDownSLine } from "react-icons/ri";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import { GiHamburgerMenu } from "react-icons/gi";
import mobileMenu from "./mobileMenu";
import MobileMenu from "./mobileMenu";

const Navbar = () => {
  return (
    <nav className="bg-white ">
      <div className="max-w-screen-xl flex  items-center justify-between mx-auto p-4">
        <Link href="#" className="flex items-center space-x-3 w-40 md:w-auto  ">
          <Image src="/logo.svg" width={200} height={52} alt="Logo Image" />
        </Link>

        <div className="lg:hidden  ">
          <MobileMenu />
        </div>
        <div className="hidden lg:flex w-1/2 ">
          <ul className="flex flex-col font-normal p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-6 gap-x-6 md:flex-row md:mt-0 md:border-0 md:bg-white w-auto">
            <li className="relative">
              <span className="flex items-center space-x-2">
                Winter <RiArrowDownSLine className="text-gray-600" />
              </span>
            </li>
            <li>
              <span className="flex items-center space-x-2">
                Summer <RiArrowDownSLine className="text-gray-600" />
              </span>
            </li>
            <li>
              <Link href="/accessories">
                <span className="flex items-center space-x-2 cursor-pointer">
                  Accessories
                </span>
              </Link>
            </li>
            <li>
              <Link href="/dresses">
                <span className="flex items-center space-x-2 cursor-pointer">
                  Dresses
                </span>
              </Link>
            </li>
            <li>
              <Link href="/shoes">
                <span className="flex items-center space-x-2 cursor-pointer">
                  Shoes
                </span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="hidden lg:flex lg:w-auto ">
          <ul className="flex  flex-col items-center font-normal p-4 md:p-0 mt-4 border gap-x-6 border-gray-100 rounded-lg bg-gray-50  md:space-x-6 md:flex-row md:mt-0 md:border-0 md:bg-white">
            <li>
              <Image
                src="/icons/Search.svg"
                width={24}
                height={24}
                alt="Search Icon"
              />
            </li>
            <li>
              <Image
                src="/icons/Vector.svg"
                width={18}
                height={18}
                alt="whilist-bag"
              />
            </li>
            <li>
              <Image
                src="/icons/Fav.png"
                width={24}
                height={24}
                alt="Favourite"
              />
            </li>
            <li>
              <Image
                src="/icons/Ellipse 2.svg"
                width={48}
                height={48}
                alt="Profile"
              />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;