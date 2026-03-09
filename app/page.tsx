import { Suspense } from "react";
import { getProducts } from "@/utils/fetchUtils";
import type { ProductsResponse, Category } from "./types";
import ProductList from "@/components/product-list";
import SearchBar from "@/components/search-bar";
import StockCounters from "@/components/stock-counters";

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
  const data: ProductsResponse = await getProducts("/products", query, categoryId);

  const categories: Category[] = await getProducts("/categories");

  console.log(data);

  return (
    <main>
      <div>
        <StockCounters data={data} />
        <SearchBar categories={categories} />
        <Suspense fallback={<p>Loading...</p>}>
          <ProductList products={data.products} />
        </Suspense>
      </div>
    </main>
  );
}
