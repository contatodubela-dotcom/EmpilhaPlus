import React, { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-blue-800 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">E+</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-blue-800">Empilha+Plus</h1>
              <p className="text-xs text-gray-600">Treinamentos</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-blue-800 transition-colors">
              Início
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-800 transition-colors">
              Sobre Nós
            </button>
            <button onClick={() => scrollToSection('training')} className="text-gray-700 hover:text-blue-800 transition-colors">
              Treinamentos
            </button>
            <button onClick={() => scrollToSection('certification')} className="text-gray-700 hover:text-blue-800 transition-colors">
              Certificação
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="text-gray-700 hover:text-blue-800 transition-colors">
              Depoimentos
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-800 transition-colors">
              Contato
            </button>
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone size={16} className="text-blue-800" />
              <span className="text-sm text-gray-700">(21) 98213-4226</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail size={16} className="text-blue-800" />
              <span className="text-sm text-gray-700">empilhaplustreinamentos@gmail.com</span>
            </div>
          </div>

          {/* Mobile menu button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 hover:text-blue-800 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('home')} className="text-left text-gray-700 hover:text-blue-800 transition-colors">
                Início
              </button>
              <button onClick={() => scrollToSection('about')} className="text-left text-gray-700 hover:text-blue-800 transition-colors">
                Sobre Nós
              </button>
              <button onClick={() => scrollToSection('training')} className="text-left text-gray-700 hover:text-blue-800 transition-colors">
                Treinamentos
              </button>
              <button onClick={() => scrollToSection('certification')} className="text-left text-gray-700 hover:text-blue-800 transition-colors">
                Certificação
              </button>
              <button onClick={() => scrollToSection('testimonials')} className="text-left text-gray-700 hover:text-blue-800 transition-colors">
                Depoimentos
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-left text-gray-700 hover:text-blue-800 transition-colors">
                Contato
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;