import { Suspense } from "react";
import { getProducts, getProduct } from "@/utils/fetchUtils";
import type { ProductsResponse, Category } from "./types";
import ProductList from "@/components/product-list";
import SearchBar from "@/components/search-bar";

type SearchParams = {
  id?: string;
  q?: string;
  page?: string;
  categoryId?: string;
};

export default async function Home(props: { searchParams?: Promise<SearchParams> }) {
  const searchParams = await props.searchParams;
  const query = searchParams?.q || "";
  const categoryId = searchParams?.categoryId || "";
  const currentPage = Number(searchParams?.page) || 1;

  console.log(query);
  const { products, total, page, pages, limit }: ProductsResponse = await getProducts(
    "/products",
    query,
    categoryId,
  );

  const categories: Category[] = await getProducts("/categories");

  return (
    <main>
      <h1>Products</h1>
      <div>
        <SearchBar categories={categories} />
        <Suspense fallback={<p>Loading...</p>}>
          <ProductList products={products} />
        </Suspense>
      </div>
    </main>
  );
}
