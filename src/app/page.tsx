import CategoryFllter from "@/components/CategoryFllter";
import ProductListingPage from "@/components/ProductListingPage";
import SizeAndColorFilter from "@/components/SizeandColorFilter";
import MaxWidthWrapper from "@/components/maxWidthWrapper";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-5">
          <div className=" border  bg-white shadow-sm h-auto  p-5 top-10  ">
            <CategoryFllter />
            <SizeAndColorFilter />
          </div>
          <ProductListingPage/>
        </div>
      </MaxWidthWrapper>
    </>
  );
}
