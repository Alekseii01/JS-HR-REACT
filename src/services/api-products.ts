export const fetchProducts = async () => {
  try {
    const response = await fetch('https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/meals');
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('API fetch error:', error);
    throw error;
  }
};

export const getCategoriesFromProducts = (products: any[], initialCategory = "All") => {
  if (!Array.isArray(products)) return [initialCategory];
  const uniqueCategories = [
    initialCategory,
    ...Array.from(new Set(products.map((item) => item.category))),
  ];
  return uniqueCategories;
};