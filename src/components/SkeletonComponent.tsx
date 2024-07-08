import React from "react";
import { Skeleton } from "./ui/skeleton";
("./ui/skeleton");

export const SkeletonCard = () => {
  return (
    <div className="border rounded-lg p-4">
      <Skeleton className="w-full h-[200px] mb-4 rounded-lg" />
      <Skeleton className="w-3/4 h-[20px] mb-2 rounded" />
      <Skeleton className="w-1/2 h-[20px] mb-2 rounded" />
      <Skeleton className="w-1/3 h-[20px] rounded" />
    </div>
  );
};

const SkeletonGrid = () => {
  const skeletonCount = 8;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-2 gap-y-6 mb-10">
      {[...Array(skeletonCount)].map((_, index) => (
        <SkeletonCard key={index} />
      ))}
    </div>
  );
};

export default SkeletonGrid;
