import { ProductsResponse } from "@/app/types";

export default function StockCounters({ data }: { data: ProductsResponse }) {
  const { products, total, limit, page, pages } = data;

  console.log(products);

  const totalStock = total;
  let inStock = 0;
  let lowStock = 0;
  let outOfStock = 0;

  products.forEach((product) => {
    if (product.availabilityStatus === "In Stock") {
      inStock++;
    } else if (product.availabilityStatus === "Low Stock") {
      lowStock++;
    } else if (product.availabilityStatus === "Out of Stock") {
      outOfStock++;
    }
  });

  return (
    <section>
      <div>{totalStock}</div>
      <div>{inStock}</div>
      <div>{lowStock}</div>
      <div>{outOfStock}</div>
    </section>
  );
}
