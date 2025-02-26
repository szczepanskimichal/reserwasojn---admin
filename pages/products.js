import React, { useEffect, useState } from "react";
import axios from "axios";

import Link from "next/link";
import { withSwal } from "react-sweetalert2";

function Products({ swal }) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchProducts();
  }, []);

  function fetchProducts() {
    axios.get("/api/products").then((response) => {
      setProducts(response.data);
    });
  }
  return (
    <div>
      <Link href="/products/new">
        <button className="bg-primary text-white">Add a new product</button>
      </Link>
      <table>
        <thead>
          <tr>Product name</tr>
          <td></td>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td>{product.title}</td>
              <td>
                <Link href={`/products/edit/${product._id}`}>
                  <button className="btn-secondary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                      />
                    </svg>
                    Edit
                  </button>
                </Link>
                <button
                  className="btn-delete"
                  onClick={() => deleteProduct(product.id)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                    />
                  </svg>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default withSwal(({ swal }, ref) => <Products swal={swal} ref={ref} />);

// This component renders a button that links to the "/products/new" page.
// The button is styled with a primary background and white text.
// The component is wrapped with the `withSwal` higher-order component from "react-sweetalert2",
// which provides SweetAlert2 functionality to the component via the `swal` prop.
// The `Products` component receives the `swal` prop and can use it to display alerts.
// The `ref` is also passed down to the `Products` component for potential use.
