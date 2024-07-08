"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import MaxWidthWrapper from "@/components/maxWidthWrapper";
import { Button } from "@/components/ui/button";
import FeaturedComponent from "@/components/FeaturedComponent";
import toast, { Toaster } from "react-hot-toast";

type CartItem = {
  image: string;
  title: string;
  price: number;
  quantity: number;
};

const Page = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartItems(storedCartItems);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
    index: number
  ) => {
    const newQuantity = parseInt(e.target.value, 10);
    const newCartItems = [...cartItems];
    newCartItems[index].quantity = newQuantity;
    setCartItems(newCartItems);
    localStorage.setItem("cart", JSON.stringify(newCartItems));
    toast.success("Item added successfully");
  };

  const handleRemove = (index: number) => {
    const newCartItems = [...cartItems];
    if (newCartItems[index].quantity > 1) {
      toast.success("One Item removed ");
      newCartItems[index].quantity -= 1;
    } else {
      toast.success("Item Removed Successfully");
      newCartItems.splice(index, 1);
    }
    setCartItems(newCartItems);
    localStorage.setItem("cart", JSON.stringify(newCartItems));
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const shipping = 100;
  const total = subtotal + shipping;

  return (
    <MaxWidthWrapper>
      <div className="container mx-auto sm:overflow-x-scroll py-8">
        <h1 className="md:text-3xl text-xl  font-bold mb-4">Shopping Bag</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-transparent border-y-2 text-xl md:text-3xl border-gray-100">
              <tr>
                <th className="px-6 py-3 text-right  font-semibold tracking-wider">
                  Item
                </th>
                <th className="px-6 py-3 text-right  font-semibold tracking-wider">
                  Price
                </th>
                <th className="px-6 py-3 text-right  font-semibold tracking-wider">
                  Quantity
                </th>
                <th className="px-6 py-3 text-right  font-semibold tracking-wider">
                  Total
                </th>
              </tr>
            </thead>
            <tbody className="bg-transparent">
              {cartItems.map((item: CartItem, index: number) => (
                <tr key={index} className="relative">
                  <td className="py-4 h-20  w-auto">
                    <div className="relative flex justify-between">
                      <div className="flex-1 bg-slate-50 flex justify-center items-center p-2">
                        <Image
                          src={item.image}
                          alt={item.title}
                          height={100}
                          width={100}
                          objectFit="center"
                        />
                      </div>
                      <div className="ml-4 hidden lg:flex flex-1 flex-col gap-4">
                        <div className="text-base truncate max-w-sm text-gray-900">
                          {item.title}
                        </div>
                        <div className="flex flex-row">
                          {Array.from({ length: 4 }).map((_, starIndex) => (
                            <AiFillStar
                              key={starIndex}
                              className="fill-yellow-400"
                            />
                          ))}
                        </div>
                        <div className="flex flex-row justify-between">
                          <div className="flex flex-row p-1 items-center">
                            <span className="mr-2">Color</span>
                            <span className="bg-main h-6 w-6 rounded-full" />
                          </div>
                          <div className="flex flex-row p-1 items-center">
                            <span className="mr-2">Size</span>
                            <span>L</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="text-right py-4 whitespace-nowrap">
                    ${item.price.toFixed(2)}
                  </td>
                  <td className="text-right py-4 whitespace-nowrap">
                    <select
                      value={item.quantity}
                      onChange={(e) => handleChange(e, index)}
                      className="border border-gray-300 rounded p-1"
                    >
                      {Array.from({ length: 4 }, (_, i) => i + 1).map(
                        (quantity) => (
                          <option key={quantity} value={quantity}>
                            {quantity}
                          </option>
                        )
                      )}
                    </select>
                  </td>
                  <td className="text-right py-4 whitespace-nowrap">
                    ${(item.price * item.quantity).toFixed(2)}
                  </td>
                  <td className="absolute bottom-0 right-1">
                    <Button
                      variant="outline"
                      className="bg-transparent text-red-500 border-2 border-red-500 shadow-sm items-center px-2 py-4 rounded-lg mr-2"
                      onClick={() => handleRemove(index)}
                    >
                      Remove
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 border-t pt-8">
          <div className="flex flex-col gap-4 items-end">
            <div className="flex justify-between items-center w-1/2 gap-4">
              <span className="text-xl font-semibold">Subtotal:</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center w-1/2 gap-4">
              <span className="text-xl font-semibold">Shipping:</span>
              <span>${shipping.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center w-1/2 gap-4">
              <span className="text-xl font-semibold">Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <div className="flex justify-end w-full">
              <Button
                className="bg-main rounded-xl text-white px-4 py-2"
                onClick={() => {
                  console.log("Checkout clicked");
                }}
              >
                Checkout
              </Button>
            </div>
          </div>
        </div>
      </div>
      <FeaturedComponent />
    </MaxWidthWrapper>
  );
};

export default Page;
