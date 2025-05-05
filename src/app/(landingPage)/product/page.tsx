import React from "react";
import Products from ".";

const Page = async () => {
  const res = await fetch("https://fakestoreapi.com/products");

  const products = await res.json();
  console.log(products);

  return (
    <div>
      <Products products={products} />
    </div>
  );
};

export default Page;
