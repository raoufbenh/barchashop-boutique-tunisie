
import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../context/CartContext';
import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { toast } from "sonner";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
    toast.success(`${product.name} ajouté au panier`);
  };

  return (
    <Link to={`/product/${product.id}`} className="group">
      <div className="bg-white rounded-lg shadow-sm overflow-hidden transition-shadow hover:shadow-md">
        <div className="aspect-square bg-gray-100 relative">
          {/* Placeholder image with neutral gray background */}
          <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
            <span className="text-gray-400 text-xs">Image</span>
          </div>
          {/* Where the actual image would be */}
          {/* <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover"
          /> */}
          
          {product.stock <= 5 && (
            <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
              Stock limité
            </div>
          )}
        </div>
        
        <div className="p-4">
          <div className="flex justify-between items-start">
            <h3 className="font-medium text-gray-800 mb-1 line-clamp-2 group-hover:text-brand-blue transition-colors">
              {product.name}
            </h3>
          </div>
          
          <div className="flex justify-between items-center mt-2">
            <span className="text-brand-orange font-bold">
              {product.price.toFixed(2)} TND
            </span>
            
            <Button 
              size="sm" 
              variant="ghost"
              className="p-1 hover:bg-brand-blue hover:text-white rounded-full"
              onClick={handleAddToCart}
            >
              <ShoppingCart size={18} />
            </Button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
