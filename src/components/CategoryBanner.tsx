
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

interface CategoryBannerProps {
  title: string;
  description: string;
  category: string;
  imagePosition?: 'left' | 'right';
}

const CategoryBanner: React.FC<CategoryBannerProps> = ({
  title,
  description,
  category,
  imagePosition = 'right'
}) => {
  return (
    <div className={`flex flex-col ${imagePosition === 'left' ? 'md:flex-row-reverse' : 'md:flex-row'} bg-white rounded-lg overflow-hidden shadow-sm`}>
      {/* Text content */}
      <div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-3">{title}</h2>
        <p className="text-gray-600 mb-6 max-w-md">{description}</p>
        <div>
          <Button asChild>
            <Link to={`/category/${category}`} className="inline-flex items-center">
              Découvrir <ChevronRight className="ml-1" size={16} />
            </Link>
          </Button>
        </div>
      </div>
      
      {/* Image side */}
      <div className="flex-1 bg-gray-100 min-h-[200px] md:min-h-[300px]">
        {/* This would be replaced with an actual image */}
        <div className="w-full h-full flex items-center justify-center">
          <span className="text-gray-400 text-sm">Image {category}</span>
        </div>
      </div>
    </div>
  );
};

export default CategoryBanner;
