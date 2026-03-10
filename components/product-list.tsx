import { Product } from "@/app/types";

export default async function ProductList({ products }: { products: Product[] }) {
  return (
    <section>
      {products.map(
        ({ id, title, sku, categoryId, price, stock, availabilityStatus, thumbnail }) => (
          <div key={id} className="flex">
            <img src={thumbnail} alt="" />
            <div className="grid">
              <span>{title}</span>
              <span>SKU: {sku}</span>
            </div>
            <span>{categoryId}</span>
            <span>{price}</span>
            <span>{stock}</span>
            <span>{availabilityStatus}</span>
          </div>
        ),
      )}
    </section>
  );
}
