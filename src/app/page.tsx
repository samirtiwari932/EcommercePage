import ProductListingPage from "@/components/ProductListingPage";
import MaxWidthWrapper from "@/components/maxWidthWrapper";

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <ProductListingPage />
      </MaxWidthWrapper>
    </>
  );
}
