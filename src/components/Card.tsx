"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
import { Button } from "./ui/button";
import toast from "react-hot-toast";

interface CardProps {
  id?: number;
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
  const starPercentage = (rating.rate / 5) * 100;
  const starPercentageRoundedlength = `${Math.round(starPercentage / 10) * 10}`;
  const TotalStarCount = Math.floor(parseInt(starPercentageRoundedlength) / 20);
  console.warn(starPercentageRoundedlength);
  const router = useRouter();

  const handleAddToCart = () => {
    let cartItems = JSON.parse(localStorage.getItem("cart") || "[]");
    const newItem = { id, title, price, image, quantity: 1 };
    cartItems.push(newItem);
    localStorage.setItem("cart", JSON.stringify(cartItems));
    toast.success("Product Added Successfully");

    router.push("/cart");
  };

  const handleToggleHeart = () => {
    setLiked(!liked);
    toast.success("Added to Favourites");
  };

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
            {Array.from({ length: TotalStarCount }).map((item) => (
              <AiFillStar className="fill-yellow-400" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
