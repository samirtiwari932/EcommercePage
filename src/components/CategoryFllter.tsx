import React from "react";

const categories = [
  "Summer",
  "Winter",
  "Tops",
  "Buttoms",
  "Accessories",
  "Dresses",
  "Jackets",
  "Shoes",
  "New Arrivals",
  "Hot Picks",
];
const CategoryFllter = () => {
  return (
    <div>
      <div className="relative">
        <h4 className="text-md bg-white border-b font-semibold mb-2 ">
          All women’s
        </h4>
        {categories.map((category, index) => (
          <label
            key={index}
            className="flex  text-sm items-center  mb-2 space-x-2"
          >
            <span>{category}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default CategoryFllter;
