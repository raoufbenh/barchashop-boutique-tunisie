
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProductById, getRelatedProducts } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Minus, Plus, ShoppingCart, Heart, ArrowLeft } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import { toast } from "sonner";

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState<any>(null);
  const [relatedProducts, setRelatedProducts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    if (id) {
      setIsLoading(true);
      const fetchedProduct = getProductById(id);
      
      if (fetchedProduct) {
        setProduct(fetchedProduct);
        const related = getRelatedProducts(id, 4);
        setRelatedProducts(related);
      }
      
      setIsLoading(false);
    }
  }, [id]);
  
  const handleAddToCart = () => {
    if (product && quantity > 0) {
      addToCart(product, quantity);
      toast.success(`${product.name} ajouté au panier`);
    }
  };
  
  const increaseQuantity = () => {
    if (product && quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };
  
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  
  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8 flex justify-center items-center h-64">
        <p>Chargement du produit...</p>
      </div>
    );
  }
  
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Produit non trouvé</h2>
          <p className="mb-6">Désolé, le produit que vous recherchez n'existe pas.</p>
          <Button asChild>
            <Link to="/">Retour à l'accueil</Link>
          </Button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Back link */}
      <div className="mb-6">
        <Button
          variant="ghost"
          size="sm"
          className="flex items-center text-gray-600"
          asChild
        >
          <Link to={`/category/${product.category}`}>
            <ArrowLeft size={16} className="mr-1" />
            Retour aux produits
          </Link>
        </Button>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="bg-gray-100 aspect-square flex items-center justify-center">
            {/* Placeholder for now */}
            <div className="text-gray-400">Image produit</div>
          </div>
          
          {/* Product Details */}
          <div className="p-6">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">{product.name}</h1>
            
            <div className="text-brand-orange text-2xl font-bold mb-4">
              {product.price.toFixed(2)} TND
            </div>
            
            <div className="space-y-4 mb-6">
              <p className="text-gray-600">{product.description}</p>
              
              <div className="flex items-center">
                <span className="text-gray-700 mr-2">Disponibilité:</span>
                {product.stock > 0 ? (
                  <span className="text-green-600 font-medium">En stock ({product.stock})</span>
                ) : (
                  <span className="text-red-600 font-medium">Rupture de stock</span>
                )}
              </div>
              
              <div className="flex items-center">
                <span className="text-gray-700 mr-2">Catégorie:</span>
                <Link 
                  to={`/category/${product.category}`} 
                  className="text-brand-blue hover:underline"
                >
                  {product.category === 'auto' ? 'Auto' : 
                   product.category === 'home' ? 'Maison' : 'Mode'}
                </Link>
              </div>
            </div>
            
            {/* Quantity Selector */}
            {product.stock > 0 && (
              <div className="flex items-center mb-6">
                <span className="text-gray-700 mr-4">Quantité:</span>
                <div className="flex items-center border rounded-md">
                  <button 
                    onClick={decreaseQuantity}
                    className="px-3 py-1 border-r hover:bg-gray-100"
                    disabled={quantity <= 1}
                  >
                    <Minus size={16} />
                  </button>
                  <span className="px-4 py-1">{quantity}</span>
                  <button 
                    onClick={increaseQuantity}
                    className="px-3 py-1 border-l hover:bg-gray-100"
                    disabled={quantity >= product.stock}
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>
            )}
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mt-6">
              <Button 
                className="flex items-center gap-2 flex-1" 
                disabled={product.stock <= 0}
                onClick={handleAddToCart}
              >
                <ShoppingCart size={18} />
                Ajouter au panier
              </Button>
              
              <Button variant="outline" className="flex items-center gap-2">
                <Heart size={18} />
                Favoris
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="mt-12">
          <h2 className="text-xl md:text-2xl font-bold mb-6">Produits similaires</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {relatedProducts.map((relatedProduct) => (
              <ProductCard key={relatedProduct.id} product={relatedProduct} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
