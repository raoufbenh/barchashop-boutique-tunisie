
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '@/components/ProductCard';
import { getProductsByCategory } from '@/data/products';
import { Product } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { SlidersHorizontal } from 'lucide-react';

const CategoryPage: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortOption, setSortOption] = useState('default');
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState<{ min: number; max: number }>({ min: 0, max: 1000 });

  // Map for category names in French
  const categoryNames: { [key: string]: string } = {
    'auto': 'Accessoires Auto',
    'home': 'Accessoires Maison',
    'fashion': 'Accessoires Mode'
  };

  useEffect(() => {
    if (category) {
      setIsLoading(true);
      // Fetch products by category
      const fetchedProducts = getProductsByCategory(category);
      setProducts(fetchedProducts);
      setFilteredProducts(fetchedProducts);
      setIsLoading(false);
    }
  }, [category]);

  useEffect(() => {
    // Apply filters and sorting
    let result = [...products];

    // Apply price filter
    result = result.filter(product => 
      product.price >= priceRange.min && product.price <= priceRange.max
    );

    // Apply sorting
    switch (sortOption) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'name-asc':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        // Default sorting, could be by popularity or featured status
        break;
    }

    setFilteredProducts(result);
  }, [products, sortOption, priceRange]);

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  const handlePriceChange = (type: 'min' | 'max', value: string) => {
    const numValue = Number(value);
    setPriceRange(prev => ({
      ...prev,
      [type]: numValue
    }));
  };

  const categoryTitle = category ? categoryNames[category] : 'Produits';

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Category Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold">{categoryTitle}</h1>
        <p className="text-gray-600 mt-2">
          Découvrez notre sélection de produits de qualité à des prix compétitifs.
        </p>
      </div>

      {/* Filters and Sorting */}
      <div className="mb-6 bg-white rounded-lg shadow-sm p-4">
        <div className="flex items-center justify-between">
          <Button
            variant="outline"
            size="sm"
            className="flex items-center gap-2"
            onClick={toggleFilters}
          >
            <SlidersHorizontal size={16} />
            Filtres
          </Button>

          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">Trier par:</span>
            <select
              className="py-1 px-2 border rounded-md text-sm"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="default">Pertinence</option>
              <option value="price-asc">Prix: Croissant</option>
              <option value="price-desc">Prix: Décroissant</option>
              <option value="name-asc">Nom (A-Z)</option>
            </select>
          </div>
        </div>

        {/* Filters panel */}
        {showFilters && (
          <div className="mt-4 pt-4 border-t">
            <div>
              <h3 className="font-medium mb-2">Fourchette de prix</h3>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  min="0"
                  placeholder="Min"
                  className="border rounded-md p-1 w-20 text-sm"
                  value={priceRange.min}
                  onChange={(e) => handlePriceChange('min', e.target.value)}
                />
                <span>-</span>
                <input
                  type="number"
                  placeholder="Max"
                  className="border rounded-md p-1 w-20 text-sm"
                  value={priceRange.max}
                  onChange={(e) => handlePriceChange('max', e.target.value)}
                />
                <span className="text-sm text-gray-500">TND</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Products List */}
      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <p>Chargement des produits...</p>
        </div>
      ) : filteredProducts.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center p-10 bg-gray-50 rounded-lg">
          <p className="text-gray-600">Aucun produit trouvé dans cette catégorie.</p>
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
