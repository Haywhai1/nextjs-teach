import Image from "next/image";
import React from "react";

type Props = {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  price: number;
  rating: {
    rate: number;
    count: number;
  };
};

const Products = ({ products }: { products: Props[] }) => {
  return (
    <div className="container mx-auto px-4 py-22">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((prod) => (
          <div
            key={prod.id}
            className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            <div className="relative w-full h-32">
              <Image
                src={prod.image}
                alt={prod.title}
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-1 truncate">{prod.title}</h2>
              <p className="text-sm text-gray-600 mb-2 line-clamp-2">{prod.description}</p>
              <p className="text-xs text-blue-600 mb-1">{prod.category}</p>
              <div className="flex justify-between items-center mt-2">
                <span className="text-xl font-bold">${prod.price}</span>
                <span className="text-sm text-yellow-500">⭐ {prod.rating.rate}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
