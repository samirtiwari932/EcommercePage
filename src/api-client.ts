export const fetchProducts = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/products`, {
    credentials: "omit",
  });

  if (!response.ok) {
    throw new Error("Error Fetching hotels ");
  }

  return response.json();
};