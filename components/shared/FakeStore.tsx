import React from "react";
import ProductList from "./ProductList";

const FakeStore = async () => {
  const products = await fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .catch((err) => console.error(err));

  const categories = await fetch("https://fakestoreapi.com/products/categories")
    .then((res) => res.json())
    .catch((err) => console.error(err));

  return (
    <div>
      <h1 className="text-3xl font-semibold mb-4 text-center">
        Fake Store Products
      </h1>

      {products && categories ? (
        <ProductList initialProducts={products} categories={categories} />
      ) : (
        <p className="text-center">Technical Error..!</p>
      )}
    </div>
  );
};

export default FakeStore;
