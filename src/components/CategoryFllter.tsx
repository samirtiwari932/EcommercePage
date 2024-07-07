import React from "react";

const categories = [
    "Summer",
    "Winter",
    "Tops",
]
const CategoryFllter = () => {
  return (
    <div>
      <div className="border-b">
        <h4 className="text-md bg-white  font-semibold mb-2 ">All women’s</h4>
        {/* {hotelFacilities.map((hotelFacility) => (
          <label className="flex  items-center space-x-2">
            <input
              type="checkbox"
              className="rounded "
              value={hotelFacility}
              checked={selectedFacilities.includes(hotelFacility)}
              onChange={onChange}
            />
            <span>{hotelFacility}</span>
          </label>
        ))} */}
      </div>
    </div>
  );
};

export default CategoryFllter;
