import React from "react";

const categories = [
  "women's clothing",
  "electronics",
  "jewelery",
  "men's clothing",
];
type Props = {
  selectedCategoryTypes: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
const CategoryFllter = ({ selectedCategoryTypes, onChange }: Props) => {
  return (
    <div>
      <div className="relative">
        <h4 className="text-md bg-white border-b font-semibold mb-2 ">
          All women’s
        </h4>
        {categories.map((category, index) => (
          <label
            key={index}
            className="flex text-sm items-center mb-2 space-x-2"
          >
            <input
              type="radio"
              className="rounded hidden"
              value={category}
              checked={selectedCategoryTypes === category}
              onChange={onChange}
            />
            <span className="hover:text-blue-500">{category}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default CategoryFllter;
