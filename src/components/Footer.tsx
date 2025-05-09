
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-10 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h2 className="text-xl font-bold mb-4">
              <span className="text-brand-blue">Soukna</span>
              <span className="text-brand-orange">.tn</span>
            </h2>
            <p className="text-gray-400 mb-4">
              Votre boutique en ligne pour accessoires auto, maison et mode en Tunisie. Livraison rapide et prix compétitifs.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="https://facebook.com" className="text-white hover:text-brand-blue transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" className="text-white hover:text-brand-blue transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" className="text-white hover:text-brand-blue transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Catégories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/category/auto" className="text-gray-400 hover:text-brand-blue transition-colors">
                  Auto
                </Link>
              </li>
              <li>
                <Link to="/category/home" className="text-gray-400 hover:text-brand-blue transition-colors">
                  Maison
                </Link>
              </li>
              <li>
                <Link to="/category/fashion" className="text-gray-400 hover:text-brand-blue transition-colors">
                  Mode
                </Link>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Information</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-brand-blue transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link to="/delivery" className="text-gray-400 hover:text-brand-blue transition-colors">
                  Livraison
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-brand-blue transition-colors">
                  Conditions générales
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-brand-blue transition-colors">
                  Politique de confidentialité
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 text-brand-orange" />
                <span className="text-gray-400">Tunis, Tunisie</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-brand-orange" />
                <span className="text-gray-400">+216 XX XXX XXX</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-brand-orange" />
                <span className="text-gray-400">contact@soukna.tn</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Soukna.tn - Tous droits réservés
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
