
import React from 'react';
import ProductCard from './ProductCard';
import { Product } from '../context/CartContext';

interface FeaturedProductsProps {
  title: string;
  products: Product[];
}

const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ title, products }) => {
  return (
    <div className="py-8 md:py-12">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">{title}</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {products.map((product) => (
          <div key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
