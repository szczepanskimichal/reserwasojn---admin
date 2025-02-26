import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";

export default function ProductForm({
  title: existingTitle,
  description: existingDescription,
  price: existingPrice,
  images: existingImages,
  category: assignedCategory,
  properties: assignedProperty,
  _id,
}) {
  const [title, setTitle] = useState(existingTitle || "");
  const [description, setDescription] = useState(existingDescription || "");
  const [category, setCategory] = useState(assignedCategory || "");
  const [productProperties, setProductProperties] = useState(
    assignedProperty || {}
  );
  const [price, setPrice] = useState(existingPrice || "");
  const [categories, setCategories] = useState([]);
  const [images, setImages] = useState(existingImages || []);

  const router = useRouter();

  async function saveProduct(e) {
    e.preventDefault();
    const data = {
      title,
      description,
      price,
      images,
      category,
      properties: productProperties,
    };
    if (_id) {
      await axios.put("/api/products", { ...data, _id });
    } else {
      await axios.post("/api/products", data);
    }
    router.push("/products");
  }
  return (
    <form onSubmit={saveProduct}>
      <label>Product name</label>
      <input
        type="text"
        placeholder="Product name"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label>Category</label>
      <select></select>
      <label>Photos</label>
      {!images?.length && (
        <div className="text-slate-600">No photos for this product.</div>
      )}
      <div className="my-2 flex flex-wrap gap-2"></div>
      <label>Description</label>
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <label>Price (in USD)</label>
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button type="submit" className="btn-primary">
        Save product
      </button>
    </form>
  );
}

// This component renders a form for creating or updating a product.
// It uses the `useState` hook to manage form state for title, description, category, properties, price, and images.
// The `saveProduct` function handles form submission, sending a POST request to create a new product or a PUT request to update an existing product.
// After saving the product, it redirects the user to the "/products" page.
// The form includes input fields for the product name, category, photos, description, and price.
// The category and photos fields are placeholders for future functionality.
// The form includes a submit button to save the product.
