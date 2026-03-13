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

  const data: ProductsResponse = await getData("/products", query, categoryId);

  const categories = [
    ...new Map(
      data.products
        .map((product) => product.category)
        .filter((category): category is Category => category !== undefined)
        .map((category) => [category.id, category]),
    ).values(),
  ];

  return (
    <main className="flex h-screen w-full">
      <Dashboard />
      <div className="flex-1 p-16">
        <StockCounters data={data} />
        <SearchBar categories={categories} />
        <Suspense fallback={<p>Loading...</p>}>
          <ProductList products={data.products} />
        </Suspense>
      </div>
    </main>
  );
}
