import { SearchParams } from "./@types/Product";

export const searchProduct = async (searchParams: SearchParams) => {
  let baseUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/products`;

  if (searchParams.categories) {
    // Check if categories is a string
    if (typeof searchParams.categories === 'string') {
      // Append the single category directly
      baseUrl += `/category/${searchParams.categories}`;
    } else {
      throw new Error("Categories should be a string.");
    }
  }

  const queryParams = new URLSearchParams();

  if (searchParams.limit) {
    queryParams.append("limit", searchParams.limit.toString());
  }

  const url = `${baseUrl}?${queryParams.toString()}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Error fetching products");
  }

  return response.json();
};
