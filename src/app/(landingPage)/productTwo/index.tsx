"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import StarRating from "../component/StarRating";

type Product = {
  _id: number;
  name: string;
  description: string;
  category: string;
  image: string;
  price: number;
  rating: number;
};

const ProductTwp = () => {
  const [products, setProduct] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function getAllProduct() {
    setIsLoading(true);
    try {
      const res = await fetch("https://food-wine2.onrender.com/api/v1/menu");
      const data = await res.json();
      console.log(data);
      setProduct(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getAllProduct();
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen w-screen">
        <div className="text-xl font-semibold">Loading...</div>
      </div>
    );
  }

  return (
    <div className=" mx-auto px-5 md:px-20 py-20">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((prod) => (
          <div
            key={prod._id}
            className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            <div className="relative w-full h-52">
              <Image
                src={prod.image}
                alt={prod.image}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="md:p-4 p-2 ">
              <h2 className="text-center font-semibold truncate">
                {prod.name}
              </h2>
              <div className="flex justify-between  text-black">
                {/* Rating */}
                <StarRating rating={prod.rating} idPrefix={`prod-${prod._id}`} />
                {/* Price */}
                <span className="text-sm font-bold text-[#ff8f08] md:px-4 mb-1">
                  ₦{prod.price}
                </span>
              </div>
              <button className="flex px-6 py-1 w-full rounded-full mx-auto text-white self-center justify-center bg-[#ff8f08]">
                BOOK NOW
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductTwp;
