import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetOverlay,
  SheetTrigger,
} from "./ui/sheet"; // Adjust the path as per your project structure
import { GiHamburgerMenu } from "react-icons/gi";
import { RiArrowDownSLine } from "react-icons/ri";
import Link from "next/link";

const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <GiHamburgerMenu className="h-10 w-10 text-gray-600" />
      </SheetTrigger>
      <SheetContent className="bg-main text-white border-l-0 rounded-lg">
        <div className="relative">
          <div className=" w-full flex flex-col text-2xl p-0 gap-8 relative  rounded-md ">
            <h1 className="relative">
              <span className="flex items-center space-x-2">
                Winter <RiArrowDownSLine className="text-gray-600" />
              </span>
            </h1>
            <h1>
              <span className="flex items-center space-x-2">
                Summer <RiArrowDownSLine className="text-gray-600" />
              </span>
            </h1>
            <h1>
              <Link href="/accessories">
                <span className="flex items-center space-x-2 cursor-pointer">
                  Accessories
                </span>
              </Link>
            </h1>
            <h1>
              <Link href="/dresses">
                <span className="flex items-center space-x-2 cursor-pointer">
                  Dresses
                </span>
              </Link>
            </h1>
            <h1>
              <Link href="/shoes">
                <span className="flex items-center space-x-2 cursor-pointer">
                  Shoes
                </span>
              </Link>
            </h1>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
