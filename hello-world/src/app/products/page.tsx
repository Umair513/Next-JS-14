import React from "react";
import Link from "next/link";

const page = () => {
  const productID = 100;
  return (
    <div>
      <h1>Product List</h1>
      <h2>
        <Link href="/products/1">Product 1</Link>
      </h2>
      <h2>
        <Link href="/products/2">Product 2</Link>
      </h2>
      <h2>
        <Link href="/products/3" replace>
          Product 3
        </Link>
      </h2>
      <h2>
        <Link href={`/products/${productID}`}>Product {productID}</Link>
      </h2>

      <br></br>
      <Link href="/">Home</Link>
    </div>
  );
};

export default page;
