import { Suspense } from "react";
import { getData } from "@/utils/fetchUtils";
import type { ProductsResponse, Category } from "./types";
import ProductList from "@/components/product-list";
import SearchBar from "@/components/search-bar";
import StockCounters from "@/components/stock-counters";
import Dashboard from "@/components/dashboard";

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
  const data: ProductsResponse = await getData("/products", query, categoryId, "6");

  const categories: Category[] = await getData("/categories");

  return (
    <main className="flex h-screen w-full">
      <Dashboard />
      <div className="flex-1 p-16">
        <StockCounters data={data} />
        <SearchBar categories={categories} />
        <Suspense fallback={<p>Loading...</p>}>
          <ProductList products={data.products} categories={categories} />
        </Suspense>
      </div>
    </main>
  );
}
