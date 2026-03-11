import { Product } from "@/app/types";

export default async function ProductList({ products }: { products: Product[] }) {
  return (
    <table>
      <tr>
        <td>Product</td>
        <td>Category</td>
        <td>Price</td>
        <td>Stock</td>
        <td>Status</td>
        <td>Edit</td>
        <td>Delete</td>
      </tr>
      {products.map(
        ({ id, title, sku, categoryId, price, stock, availabilityStatus, thumbnail }) => (
          <tr key={id}>
            <td className="grid">
              <span>{title}</span>
              <span>SKU: {sku}</span>
            </td>
            <td>{categoryId}</td>
            <td>{price}</td>
            <td>{stock}</td>
            <td>{availabilityStatus}</td>
          </tr>
        ),
      )}
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
