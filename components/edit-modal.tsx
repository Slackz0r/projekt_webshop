"use client";

import { Product } from "@/app/types";
import Form from "next/form";

export default function EditModal({ product }: { product: Product }) {
  return (
    <dialog>
      <h2>Edit Product</h2>
      <p>Editing: {product.title}</p>
      <Form action="/">
        {/* Product name */}
        <label htmlFor="title">Product:</label>
        <input type="text" id="title" placeholder={product.title} required />

        {/* Product category */}
        <label htmlFor="category">Category:</label>
        <select name="categoryId" id="category">
          <option value="" defaultValue="" hidden disabled>
            Select category
          </option>
        </select>

        {/* Product brand */}
        <input type="text" placeholder={product.brand} required />

        {/* Product description */}
        <label htmlFor="description">Description:</label>
        <input type="text" id="description" placeholder={product.description} required />

        {/* Product price */}
        <label htmlFor="price">Price:</label>
        <input type="number" id="price" placeholder={product.price.toString()} required />

        {/* Amount in stock */}
        <label htmlFor="stock">Stock:</label>
        <input type="number" id="stock" placeholder={product.stock?.toString()} required />

        {/* Submit button */}
        <button type="submit">Save</button>
      </Form>
    </dialog>
  );
}
