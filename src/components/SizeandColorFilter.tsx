import React from "react";
import { RiArrowDownSLine } from "react-icons/ri";

const Color = ["Red", "Black", "Blue", "Green"];
const Size = ["XL", "L", "M", "S"];

const SizeAndColorFilter = () => {
  return (
    <div>
      <div className="relative">
        <h4 className="text-md bg-white border-b-2 border-gray-100 font-semibold mb-2">
          Filter by:
        </h4>
        <div className="flex justify-between items-center h-10">
          <span>Color</span>
          <RiArrowDownSLine className="text-gray-600" />
        </div>
        {Color.map((colorItem) => (
          <label
            key={colorItem}
            className="flex items-center text-sm mb-2 space-x-2"
          >
            <input type="checkbox" className="rounded" value={colorItem} />
            <span>{colorItem}</span>
          </label>
        ))}

        <div className="mt-4">
          {" "}
          <div className="flex justify-between items-center h-10">
            <span>Size</span>
            <RiArrowDownSLine className="text-gray-600" />
          </div>
          {Size.map((sizeItem) => (
            <label
              key={sizeItem}
              className="flex items-center text-sm mb-2 space-x-2"
            >
              <input type="checkbox" className="rounded" value={sizeItem} />
              <span>{sizeItem}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SizeAndColorFilter;
