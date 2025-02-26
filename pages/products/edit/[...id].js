import ProductForm from "@/components/ProductForm";
import axios from "axios";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function EditProductPage() {
  const [productInfo, setProductInfo] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get("/api/products?id=" + id).then((response) => {
      setProductInfo(response.data);
    });
  }, [id]);
  return (
    <div>
      <h1>Edit Product</h1>
      {/* this line is very important!!! */}
      {productInfo && <ProductForm {...productInfo} />}
    </div>
  );
}
// This component renders a page for editing a product.
// It uses the `useRouter` hook to get the product ID from the query parameters.
// The `useEffect` hook fetches the product information from the API when the ID is available.
// The fetched product information is passed as props to the `ProductForm` component for editing.
// The page displays a header and the `ProductForm` component with the product information.
// This page allows users to edit an existing product in the application.
