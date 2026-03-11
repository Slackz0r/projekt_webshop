import { Product, Category } from "@/app/types";

type ProductListProps = {
  products: Product[];
  categories: Category[];
};

export default function ProductList({ products, categories }: ProductListProps) {
  const categoryMap = new Map(categories.map((category) => [category.id, category.name]));

  console.log(categoryMap);

  return (
    <table>
      <thead>
        <tr>
          <th>Product</th>
          <th>Category</th>
          <th>Price</th>
          <th>Stock</th>
          <th>Status</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>

      <tbody>
        {products.map(
          ({ id, title, sku, categoryId, price, stock, availabilityStatus, thumbnail }) => (
            <tr key={id}>
              <td className="grid">
                <span>{title}</span>
                <span>SKU: {sku}</span>
              </td>
              <td>{categoryMap.get(categoryId) ?? "Unknown"}</td>
              <td>{price}</td>
              <td>{stock}</td>
              <td>{availabilityStatus}</td>
            </tr>
          ),
        )}
      </tbody>
    </table>
    // <section>
    //   {products.map(
    //     ({ id, title, sku, categoryId, price, stock, availabilityStatus, thumbnail }) => (
    //       <div key={id} className="flex">
    //         <div className="grid">
    //           <span>{title}</span>
    //           <span>SKU: {sku}</span>
    //         </div>
    //         <span>{categoryId}</span>
    //         <span>{price}</span>
    //         <span>{stock}</span>
    //         <span>{availabilityStatus}</span>
    //       </div>
    //     ),
    //   )}
    // </section>
  );
}
