import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import mhssccelogo from './mhssccelogo.jpg';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <img
              src={mhssccelogo}
              alt="MHSSCE Logo"
              className="w-12 h-12 object-contain rounded"
            />
            <div className="hidden md:block">
              <h1 className="text-lg font-bold text-gray-900">MHSSCE</h1>
              <p className="text-xs text-gray-600">SmartSSD 2026</p>
            </div>
          </div>

          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-green-600 font-medium transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-green-600 font-medium transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('dates')} className="text-gray-700 hover:text-green-600 font-medium transition-colors">
              Important Dates
            </button>
            <button onClick={() => scrollToSection('speakers')} className="text-gray-700 hover:text-green-600 font-medium transition-colors">
              Speakers
            </button>
            <button onClick={() => scrollToSection('registration')} className="text-gray-700 hover:text-green-600 font-medium transition-colors">
              Registration
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-green-600 font-medium transition-colors">
              Contact
            </button>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('home')} className="text-left text-gray-700 hover:text-green-600 font-medium transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="text-left text-gray-700 hover:text-green-600 font-medium transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection('dates')} className="text-left text-gray-700 hover:text-green-600 font-medium transition-colors">
                Important Dates
              </button>
              <button onClick={() => scrollToSection('speakers')} className="text-left text-gray-700 hover:text-green-600 font-medium transition-colors">
                Speakers
              </button>
              <button onClick={() => scrollToSection('registration')} className="text-left text-gray-700 hover:text-green-600 font-medium transition-colors">
                Registration
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-left text-gray-700 hover:text-green-600 font-medium transition-colors">
                Contact
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
