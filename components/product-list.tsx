import { Product } from "@/app/types";

export default function ProductList({ products }: { products: Product[] }) {
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
        {products.map(({ id, title, sku, price, stock, availabilityStatus, category }) => (
          <tr key={id}>
            <td className="grid">
              <span>{title}</span>
              <span>SKU: {sku}</span>
            </td>
            <td>{category?.name}</td>
            <td>{price}</td>
            <td>{stock}</td>
            <td>{availabilityStatus}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
