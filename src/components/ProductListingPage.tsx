"use client";
import React, { useState } from "react";
import Card from "./Card"; // Assuming Card component is in a file named Card.js
import PaginationComponent from "./PaginationComponent";

import SizeAndColorFilter from "./SizeandColorFilter";
import CategoryFllter from "./CategoryFllter";
import { useQuery } from "@tanstack/react-query";
import * as ApiClient from "../api-client";
import FeaturedComponent from "./FeaturedComponent";

const ProductListingPage = () => {
  const [limit, setLimit] = useState<number>(10);
  const [flag, setFlag] = useState<number>(5);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const searchParams = {
    limit: limit.toString(),
    categories: selectedCategory,
  };
  const { data: productList } = useQuery({
    queryKey: ["product-list", searchParams],
    queryFn: () => ApiClient.searchProduct(searchParams),
  });

  if (!productList) return;

  const indexOfLastProduct = currentPage * flag;
  console.warn(indexOfLastProduct);
  const indexOfFirstProduct = indexOfLastProduct - flag;
  console.warn(indexOfFirstProduct);
  const currentProducts = productList.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleCategoryTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedCategory(e.target.value);
    setCurrentPage(1);
  };

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-5">
        <div className="borde hidden lg:block bg-white shadow-sm h-fit p-5 top-10">
          <CategoryFllter
            selectedCategoryTypes={selectedCategory}
            onChange={handleCategoryTypeChange}
          />
          <SizeAndColorFilter />
        </div>
        <div className="container mx-auto px-4 mb-20">
          <h3 className="text-2xl font-bold mb-4">
            Women’s Collection: Tops, Bottoms, Jackets + More
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-2 gap-y-6 mb-10">
            {currentProducts?.map((product: any) => (
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
          <PaginationComponent
            currentPage={currentPage}
            itemsPerPage={flag}
            totalItems={productList.length}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
      <FeaturedComponent />
    </>
  );
};

export default ProductListingPage;
