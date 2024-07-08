// ProductListingPage.js
"use client";
import React from "react";
import Card from "./Card"; // Assuming Card component is in a file named Card.js
import { useQuery } from "@tanstack/react-query";
import * as apiClient from "../api-client";

const ProductListingPage = () => {
  const { data: productList } = useQuery({
    queryKey: ["product-list"],
    queryFn: apiClient.fetchProducts,
  });
  return (
    <div className="container mx-auto px-4">
      <h3 className="text-2xl font-bold mb-4">
        Women’s Collection: Tops, Bottoms, Jackets + More
      </h3>
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-2 gap-y-6 ">
        {productList?.map((product: any) => (
          <Card
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
            rating={product.rating}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductListingPage;
