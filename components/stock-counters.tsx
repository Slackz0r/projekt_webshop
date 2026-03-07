import { ProductsResponse } from "@/app/types";
import CounterCard from "./counter-card";

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

  const stockData = [
    {
      type: "Total",
      amount: totalStock,
    },
    {
      type: "In Stock",
      amount: inStock,
    },
    {
      type: "Low Stock",
      amount: lowStock,
    },
    {
      type: "Out of Stock",
      amount: outOfStock,
    },
  ];

  return (
    <section className="flex">
      {stockData.map(({ type, amount }) => (
        <CounterCard key={type} type={type} amount={amount} />
      ))}
    </section>
  );
}
