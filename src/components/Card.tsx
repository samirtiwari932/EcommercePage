// Card.tsx

import React from "react";

interface CardProps {
  id?: number; // Optional id
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

const Card: React.FC<CardProps> = ({
  id,
  title,
  price,
  category,
  description,
  image,
}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden m-4">
      <img src={image} alt={title} className="w-full h-64 object-cover" />
      <div className="p-4">
        <h2 className="text-gray-800 font-bold text-xl mb-2">{title}</h2>
        <p className="text-gray-600 text-sm mb-2">{category}</p>
        <p className="text-gray-700 text-base mb-2">{description}</p>
        <p className="text-gray-900 font-bold text-lg">${price}</p>
      </div>
    </div>
  );
};

export default Card;
