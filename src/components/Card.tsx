"use client";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import * as apiCLient from "../api-client";
import Image from "next/image";
import { AiFillHeart, AiFillStar } from "react-icons/ai";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { Button } from "./ui/button";
import { MdOutlineShoppingBag } from "react-icons/md";
import { useRouter } from "next/navigation";

interface CardProps {
  id?: number; // Optional id
  title: string;
  price: number;
  image: string;
  rating: {
    count: number;
    rate: number;
  };
}

const Card: React.FC<CardProps> = ({ id, title, price, image, rating }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [liked, setLiked] = useState(false);
  const starRating = rating.count / rating.rate / 50;
  const router = useRouter();

  const handleAddToCart = () => {
    let cartItems = JSON.parse(localStorage.getItem("cart") || "[]");
    const newItem = { id, title, price, image, quantity: 1 };
    cartItems.push(newItem);
    localStorage.setItem("cart", JSON.stringify(cartItems));

    router.push("/cart");
  };

  const handleToggleHeart = () => {
    setLiked(!liked);
  };
  // console.log(starRating);
  return (
    <div className="rounded-sm lg:w-70 w-auto shadow-lg overflow-hidden m-4 h-[400] bg-white">
      <div className="relative flex flex-col justify-between">
        <div
          className="justify-center  items-center p-4"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative p-10 h-60 bg-slate-200">
            <Image
              src={image}
              alt="Product Image"
              objectFit="center"
              fill
              sizes="auto"
            />
            {isHovered && (
              <div className="absolute inset-0 flex  bg-gray-900 bg-opacity-30">
                <div
                  className="absolute  top-2 text-white  right-4"
                  onClick={handleToggleHeart}
                >
                  {liked ? (
                    <FaHeart className="w-6 h-6" />
                  ) : (
                    <FaRegHeart className="w-6 h-6" />
                  )}
                </div>
                <div className="absolute top-24 left-5 ">
                  <Button
                    className="h-10 w-40 rounded-lg text-center"
                    onClick={() => handleAddToCart()}
                  >
                    <span className="mr-2 ">
                      <MdOutlineShoppingBag className="h-4 w-4" />
                    </span>

                    <p>Add to Bag</p>
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="flex h-24 flex-col p-1 text-gray-700">
          <h5 className="font-bold   text-base truncate ">{title}</h5>
          <p className=" font-bold text-2xl">${price}</p>
          <div className="flex flex-row">
            {Array.from({ length: 4 }).map((item) => (
              <AiFillStar className="fill-yellow-400" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
