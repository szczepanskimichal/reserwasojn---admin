import Link from "next/link";
import { withSwal } from "react-sweetalert2";

function Products({ swal }) {
  return (
    <div>
      <Link href="/products/new">
        <button className="bg-primary text-white">Add a new product</button>
      </Link>
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
