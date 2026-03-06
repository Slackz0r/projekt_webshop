import { ProductsResponse } from "@/app/types";

const API_URL = "http://localhost:4000";
const defaultLimit = "6";

// Get all products
export const getProducts = async (endpoint: string, q?: string, categoryId?: string) => {
  const params = new URLSearchParams();
  if (q) {
    params.set("q", q);
  }
  if (categoryId) {
    params.set("categoryId", categoryId);
  }

  const response = await fetch(`${API_URL}${endpoint}?${params.toString()}`);
  if (!response.ok) {
    return "Error, unable to get products";
  }

  const data = await response.json();
  return data;
};

export const getProduct = async (id: string) => {
  const response = await fetch(`${API_URL}/products/${id}`);
  if (!response.ok) {
    return "Unable to get product";
  }

  const data = await response.json();
  return data;
};

// we use the fetch() method to get the products from the API
// in this fetch we sort using _sort and _order and we limit the number of products using _limit
// we also use _expand to get the relational category data
// we can use the other destructed variables like page, total and so on to create pagination or show info
const { products, total, page, pages, limit }: ProductsResponse = await fetch(
  `${API_URL}/products/?_limit=${defaultLimit}&_sort=id&_order=desc&_expand=category`,
).then((res) => res.json());
