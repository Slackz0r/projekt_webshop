"use client";

import type { Category } from "@/app/types";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

export default function SearchBar({ categories }: { categories: Category[] }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const setParam = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams);

    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }

    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div>
      <input
        className="border border-solid border-black-200 p-1 mt-4 mb-4"
        type="text"
        placeholder="Search products.."
        onChange={(e) => {
          setParam("q", e.target.value);
        }}
        defaultValue=""
      />
      <select
        name="category"
        id="category"
        defaultValue=""
        onChange={(e) => {
          setParam("categoryId", e.target.value);
        }}
      >
        <option value="">All categories</option>

        {categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
}
