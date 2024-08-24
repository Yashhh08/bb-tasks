"use client";

import React, { useEffect, useState } from "react";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";

type Product = {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
};

type Category = string[];

const ProductList = ({
  initialProducts,
  categories,
}: {
  initialProducts: Product[];
  categories: Category;
}) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    setProducts(initialProducts);
  }, [initialProducts]);

  const filteredProducts = products
    .filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    )
    .filter(
      (product) =>
        !selectedCategory ||
        selectedCategory === "none" ||
        selectedCategory === product.category
    )
    .sort((a, b) =>
      sortOrder === "asc" ? a.price - b.price : b.price - a.price
    );

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col md:flex-row gap-5 w-11/12 m-auto">
        <Input
          type="text"
          placeholder="Search Products..."
          className="w-full p-2 border border-gray-300 rounded-md m-auto"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger className="w-[210px] m-auto">
            <SelectValue placeholder="All Categories" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="none">All categories</SelectItem>
            {categories.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Button
          className="w-fit m-auto"
          onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
          variant={"secondary"}
        >
          Sort by Price : {sortOrder === "asc" ? "Low to High" : "High to Low"}
        </Button>
      </div>

      <p className="text-center">
        Browse our complete range of products to find exactly what you need.
        From gadgets to daily essentials, we have something for everyone. Enjoy
        great deals and quality all in one place!
      </p>

      <div>
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 w-11/12 m-auto">
            {filteredProducts.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                className="flex flex-col justify-between gap-2 p-3 border-2 border-[#F9B31B] rounded-md text-center hover:shadow-2xl hover:scale-95 transition-all"
              >
                <div className="w-full h-80 relative">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-contain absolute dark:backdrop-invert"
                  />
                </div>
                <h2 className="text-lg font-semibold line-clamp-2">
                  {product.title}
                </h2>
                <p className="text-sm text-gray-500">{product.category}</p>
                <p className="text-lg font-semibold">${product.price}</p>
                <p className="text-sm line-clamp-3">{product.description}</p>
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-center text-2xl font-semibold">
            No products found..!
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductList;
