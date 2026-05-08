import React from "react";
import { Outlet, useLocation } from "react-router-dom";

const Products = () => {
  const location = useLocation();

  const products = [
    { id: 1, name: 'Basic Tee', href: '#', imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg' },
    { id: 2, name: 'Basic Tee', href: '#', imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg' },
    { id: 3, name: 'Basic Tee', href: '#', imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg' },
    { id: 4, name: 'Basic Tee', href: '#', imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg' },
  ];

  return (
    <div className="bg-white">
      
      
      {location.pathname === "/products" && (
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
            Customers also purchased
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden">
                  <img
                    src={product.imageSrc}
                    alt={product.name}
                    className="w-full h-full object-center object-cover"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <h3 className="text-sm text-gray-700">{product.name}</h3>
                  <p className="text-sm font-medium text-gray-900">$35</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ✅ Child route renders here */}
      <Outlet />
    </div>
  );
};

export default Products;