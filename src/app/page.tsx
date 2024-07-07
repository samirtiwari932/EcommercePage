import CategoryFllter from "@/components/CategoryFllter";
import MaxWidthWrapper from "@/components/maxWidthWrapper";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-5">
          <div className=" border  bg-white shadow-sm    p-5 h-fit  top-10  ">
            <CategoryFllter/>
          </div>
          <div className="bg-red-700">This is the 2nd div</div>
        </div>
      </MaxWidthWrapper>
    </>
  );
}
