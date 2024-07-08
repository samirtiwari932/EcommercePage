// ProductListingPage.js

import React from "react";
import Card from "./Card"; // Assuming Card component is in a file named Card.js

const ProductListingPage = () => {
  const products = [
    {
      id: 1,
      title: "Product 1",
      price: 29.99,
      category: "Tops",
      description: "Description for Product 1",
      image: "/product1.jpg", // Replace with actual image URL
    },
    {
      id: 2,
      title: "Product 2",
      price: 39.99,
      category: "Bottoms",
      description: "Description for Product 2",
      image: "/product2.jpg", // Replace with actual image URL
    },
    {
      id: 3,
      title: "Product 3",
      price: 49.99,
      category: "Jackets",
      description: "Description for Product 3",
      image: "/product3.jpg", // Replace with actual image URL
    },
    {
      id: 4,
      title: "Product 4",
      price: 59.99,
      category: "Accessories",
      description: "Description for Product 4",
      image: "/product4.jpg", // Replace with actual image URL
    },
  ];

  return (
    <div className="container mx-auto px-4">
      <h3 className="text-2xl font-bold mb-4">
        Women’s Collection: Tops, Bottoms, Jackets + More
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <Card
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            category={product.category}
            description={product.description}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductListingPage;
