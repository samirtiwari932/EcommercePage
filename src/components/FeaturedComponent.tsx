import React from "react";
import Image from "next/image";

const FeaturedComponent = () => {
  return (
    <div className="container mx-auto px-4 mb-14">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">More on Chic Seduire:</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="flex justify-center items-center  border rounded-lg overflow-hidden">
          <Image
            src="/image1.png"
            alt="Product 1"
            width={292}
            height={458}
            objectFit="center"
          />
        </div>
        <div className="flex justify-center items-center  border  rounded-lg overflow-hidden">
          <Image
            src="/image2.png"
            alt="Product 2"
            width={292}
            height={458}
            objectFit="center"
          />
        </div>
        <div className="flex justify-center items-center  border rounded-lg overflow-hidden">
          <Image
            src="/image3.png"
            alt="Product 3"
            width={292}
            height={458}
            objectFit="center "
          />
        </div>
        <div className="flex justify-center items-center  border  rounded-lg overflow-hidden">
          <Image
            src="/image4.png"
            alt="Product 4"
            width={292}
            height={458}
            objectFit="center"
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturedComponent;
