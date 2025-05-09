
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, X, Search, User } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Button } from '@/components/ui/button';

const Navbar: React.FC = () => {
  const { cart } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-xl font-bold text-brand-blue">Soukna<span className="text-brand-orange">.tn</span></span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-brand-blue transition-colors">
              Accueil
            </Link>
            <Link to="/category/auto" className="text-gray-700 hover:text-brand-blue transition-colors">
              Auto
            </Link>
            <Link to="/category/home" className="text-gray-700 hover:text-brand-blue transition-colors">
              Maison
            </Link>
            <Link to="/category/fashion" className="text-gray-700 hover:text-brand-blue transition-colors">
              Mode
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            {/* Search Button */}
            <button onClick={toggleSearch} className="text-gray-700 hover:text-brand-blue">
              <Search size={20} />
            </button>

            {/* User Account */}
            <Link to="/account" className="text-gray-700 hover:text-brand-blue hidden md:block">
              <User size={20} />
            </Link>

            {/* Cart Button */}
            <Link to="/cart" className="relative text-gray-700 hover:text-brand-blue">
              <ShoppingCart size={20} />
              {cart.totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-brand-orange text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cart.totalItems}
                </span>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <button onClick={toggleMenu} className="md:hidden text-gray-700">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Search Bar (conditional) */}
        {isSearchOpen && (
          <div className="py-3 border-t">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Rechercher un produit..." 
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
              />
              <Button 
                variant="ghost" 
                size="icon" 
                className="absolute right-2 top-1/2 transform -translate-y-1/2"
              >
                <Search size={18} />
              </Button>
            </div>
          </div>
        )}

        {/* Mobile Menu (conditional) */}
        {isMenuOpen && (
          <nav className="md:hidden border-t py-4 space-y-4">
            <div className="flex flex-col space-y-3">
              <Link to="/" className="text-gray-700 hover:text-brand-blue px-2 py-1">
                Accueil
              </Link>
              <Link to="/category/auto" className="text-gray-700 hover:text-brand-blue px-2 py-1">
                Auto
              </Link>
              <Link to="/category/home" className="text-gray-700 hover:text-brand-blue px-2 py-1">
                Maison
              </Link>
              <Link to="/category/fashion" className="text-gray-700 hover:text-brand-blue px-2 py-1">
                Mode
              </Link>
              <Link to="/account" className="text-gray-700 hover:text-brand-blue px-2 py-1">
                Mon Compte
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
