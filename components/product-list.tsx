"use client";

import { Product } from "@/app/types";
import { getProducts } from "@/utils/fetchUtils";

export default function ProductList({ products }: { products: Product[] }) {
  return (
    <section>
      {products.map(({ id, title }) => (
        <p key={id}>{title}</p>
      ))}
    </section>
  );
}
