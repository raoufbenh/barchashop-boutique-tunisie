
import { Product } from "../context/CartContext";

export const products: Product[] = [
  {
    id: "auto1",
    name: "Support de téléphone pour voiture",
    price: 29.99,
    image: "/images/phone-holder.jpg",
    description: "Support magnétique de téléphone portable pour voiture, compatible avec tous les smartphones.",
    category: "auto",
    stock: 50
  },
  {
    id: "auto2",
    name: "Chargeur voiture USB",
    price: 15.99,
    image: "/images/car-charger.jpg",
    description: "Chargeur USB double port pour voiture avec charge rapide.",
    category: "auto",
    stock: 75
  },
  {
    id: "auto3",
    name: "Organisateur de coffre",
    price: 49.99,
    image: "/images/trunk-organizer.jpg",
    description: "Organisateur pliable pour coffre de voiture avec multiples compartiments.",
    category: "auto",
    stock: 25
  },
  {
    id: "auto4",
    name: "Couvre-siège auto",
    price: 69.99,
    image: "/images/seat-cover.jpg",
    description: "Couvre-siège en cuir synthétique, résistant à l'eau et aux rayures.",
    category: "auto",
    stock: 20
  },
  {
    id: "home1",
    name: "Lampe de chevet LED",
    price: 35.50,
    image: "/images/led-lamp.jpg",
    description: "Lampe de chevet tactile avec réglage de luminosité et température de couleur.",
    category: "home",
    stock: 40
  },
  {
    id: "home2",
    name: "Ensemble de rangement cuisine",
    price: 42.99,
    image: "/images/kitchen-organizer.jpg",
    description: "Kit de rangement pour cuisine avec 6 contenants hermétiques.",
    category: "home",
    stock: 30
  },
  {
    id: "home3",
    name: "Diffuseur d'huiles essentielles",
    price: 59.99,
    image: "/images/diffuser.jpg",
    description: "Diffuseur d'arômes avec LED changeantes et arrêt automatique.",
    category: "home",
    stock: 15
  },
  {
    id: "home4",
    name: "Ensemble de draps",
    price: 89.99,
    image: "/images/bed-sheets.jpg",
    description: "Ensemble de draps 100% coton, doux et résistants, pour lit double.",
    category: "home",
    stock: 25
  },
  {
    id: "fashion1",
    name: "Lunettes de soleil polarisées",
    price: 45.00,
    image: "/images/sunglasses.jpg",
    description: "Lunettes de soleil polarisées avec protection UV400, design élégant.",
    category: "fashion",
    stock: 60
  },
  {
    id: "fashion2",
    name: "Bracelet en acier inoxydable",
    price: 25.99,
    image: "/images/bracelet.jpg",
    description: "Bracelet ajustable en acier inoxydable avec finition brillante.",
    category: "fashion",
    stock: 45
  },
  {
    id: "fashion3",
    name: "Sac à dos imperméable",
    price: 79.99,
    image: "/images/backpack.jpg",
    description: "Sac à dos imperméable avec compartiment pour ordinateur portable.",
    category: "fashion",
    stock: 20
  },
  {
    id: "fashion4",
    name: "Montre analogique",
    price: 120.00,
    image: "/images/watch.jpg",
    description: "Montre analogique classique avec bracelet en cuir véritable.",
    category: "fashion",
    stock: 15
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const getFeaturedProducts = (limit: number = 4): Product[] => {
  // This would typically be based on sales data or manually curated
  // For now, we'll just return a mix of products from different categories
  return [
    products[0], // auto
    products[4], // home
    products[8], // fashion
    products[2], // auto
  ].slice(0, limit);
};

export const getRelatedProducts = (productId: string, limit: number = 3): Product[] => {
  const product = getProductById(productId);
  if (!product) return [];
  
  return products
    .filter(p => p.category === product.category && p.id !== productId)
    .slice(0, limit);
};
