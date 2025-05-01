
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Button } from '@/components/ui/button';
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';

const Cart: React.FC = () => {
  const { cart, updateQuantity, removeFromCart } = useCart();

  if (cart.items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm p-8 text-center">
          <div className="flex justify-center mb-6">
            <ShoppingBag size={64} className="text-gray-300" />
          </div>
          <h1 className="text-2xl font-bold mb-2">Votre panier est vide</h1>
          <p className="text-gray-600 mb-6">Explorez notre boutique pour découvrir nos produits.</p>
          <Button asChild>
            <Link to="/">Continuer mes achats</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8">Votre Panier</h1>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Cart Items */}
        <div className="lg:flex-grow">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <ul className="divide-y divide-gray-200">
              {cart.items.map((item) => (
                <li key={item.product.id} className="p-4 md:p-6">
                  <div className="flex flex-col sm:flex-row gap-4">
                    {/* Product Image */}
                    <div className="w-full sm:w-24 h-24 bg-gray-100 rounded flex items-center justify-center">
                      <span className="text-gray-400 text-sm">Image</span>
                    </div>

                    {/* Product Details */}
                    <div className="flex-grow">
                      <h3 className="font-medium text-gray-800">
                        <Link to={`/product/${item.product.id}`} className="hover:text-brand-blue">
                          {item.product.name}
                        </Link>
                      </h3>
                      <p className="text-sm text-gray-500 mb-2">
                        Catégorie: {item.product.category === 'auto' ? 'Auto' : 
                                    item.product.category === 'home' ? 'Maison' : 'Mode'}
                      </p>
                      
                      <div className="flex flex-wrap justify-between items-center mt-3">
                        {/* Quantity Controls */}
                        <div className="flex items-center border rounded-md">
                          <button 
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            className="px-2 py-1 border-r hover:bg-gray-100"
                            disabled={item.quantity <= 1}
                          >
                            <Minus size={14} />
                          </button>
                          <span className="px-3 py-1">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="px-2 py-1 border-l hover:bg-gray-100"
                            disabled={item.quantity >= item.product.stock}
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        
                        {/* Price */}
                        <div className="flex items-center mt-2 sm:mt-0">
                          <span className="text-brand-orange font-bold mr-4">
                            {(item.product.price * item.quantity).toFixed(2)} TND
                          </span>
                          <button 
                            onClick={() => removeFromCart(item.product.id)}
                            className="text-gray-400 hover:text-red-500"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6">
            <Button variant="outline" asChild className="text-sm">
              <Link to="/">
                Continuer mes achats
              </Link>
            </Button>
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:w-80">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-bold mb-4">Résumé de la commande</h2>
            
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-gray-600">
                <span>{cart.totalItems} article(s)</span>
                <span>{cart.totalPrice.toFixed(2)} TND</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Livraison</span>
                <span>7.00 TND</span>
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-4 mb-6">
              <div className="flex justify-between font-bold">
                <span>Total</span>
                <span>{(cart.totalPrice + 7).toFixed(2)} TND</span>
              </div>
            </div>
            
            <Button className="w-full flex items-center justify-center gap-2">
              Passer à la caisse
              <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
