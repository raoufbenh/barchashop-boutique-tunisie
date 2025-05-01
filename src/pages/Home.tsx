
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import HeroBanner from '@/components/HeroBanner';
import CategoryBanner from '@/components/CategoryBanner';
import FeaturedProducts from '@/components/FeaturedProducts';
import { getFeaturedProducts } from '@/data/products';

const Home: React.FC = () => {
  const featuredProducts = getFeaturedProducts(8);

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-6">
        {/* Hero Banner */}
        <HeroBanner />
        
        {/* Featured Products */}
        <div className="my-10">
          <FeaturedProducts title="Produits populaires" products={featuredProducts.slice(0, 4)} />
        </div>
        
        {/* Category Banners */}
        <div className="space-y-8 my-12">
          <CategoryBanner 
            title="Accessoires Auto"
            description="Découvrez notre gamme d'accessoires pour votre voiture. Supports de téléphone, chargeurs, organisateurs et plus."
            category="auto"
            imagePosition="right"
          />
          
          <CategoryBanner 
            title="Accessoires Maison"
            description="Transformez votre espace avec nos accessoires de décoration et d'organisation pour la maison."
            category="home"
            imagePosition="left"
          />
          
          <CategoryBanner 
            title="Accessoires Mode"
            description="Complétez votre style avec notre sélection d'accessoires de mode tendance et abordables."
            category="fashion"
            imagePosition="right"
          />
        </div>
        
        {/* Call to Action */}
        <div className="bg-gray-50 rounded-lg p-8 text-center my-12">
          <h2 className="text-2xl font-bold mb-4">Vous ne trouvez pas ce que vous cherchez?</h2>
          <p className="text-gray-600 mb-6 max-w-lg mx-auto">
            Contactez-nous directement et nous ferons de notre mieux pour vous aider à trouver le produit que vous souhaitez.
          </p>
          <Button asChild>
            <Link to="/contact">Nous contacter</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
