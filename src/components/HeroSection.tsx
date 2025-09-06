import React from 'react';
import { MessageCircle, Download, Award, Users, Shield } from 'lucide-react';

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/5521982134226?text=Olá! Gostaria de saber mais sobre os treinamentos da Empilha+Plus.', '_blank');
  };

  const handleDownloadCatalog = () => {
    // Simulação de download - em produção seria um link real para o PDF
    alert('Download do catálogo iniciado!');
  };

  return (
    <section id="home" className="bg-gradient-to-br from-blue-800 via-blue-700 to-blue-900 text-white py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Capacitação que gera
            <span className="block text-yellow-400 text-5xl lg:text-7xl">
              segurança, produtividade
            </span>
            <span className="block">e oportunidades!</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl lg:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Formamos profissionais capacitados para atuar com segurança e eficiência no mercado de trabalho
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 mb-12 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Users className="text-yellow-400" size={32} />
              </div>
              <div className="text-2xl font-bold">500+</div>
              <div className="text-sm text-blue-200">Alunos Formados</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Award className="text-yellow-400" size={32} />
              </div>
              <div className="text-2xl font-bold">15+</div>
              <div className="text-sm text-blue-200">Tipos de Cursos</div>
            </div>
            <div className="text-center col-span-2 lg:col-span-1">
              <div className="flex justify-center mb-2">
                <Shield className="text-yellow-400" size={32} />
              </div>
              <div className="text-2xl font-bold">100%</div>
              <div className="text-sm text-blue-200">Certificados</div>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={handleWhatsApp}
              className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 w-full sm:w-auto"
            >
              <MessageCircle size={24} />
              <span>Fale Conosco</span>
            </button>
            
            <button
              onClick={scrollToContact}
              className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 w-full sm:w-auto"
            >
              Solicitar Orçamento
            </button>

            <button
              onClick={handleDownloadCatalog}
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-6 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2 w-full sm:w-auto"
            >
              <Download size={20} />
              <span>Baixar Catálogo</span>
            </button>
          </div>

          {/* Trust Badge */}
          <div className="mt-12 pt-8 border-t border-blue-600">
            <p className="text-blue-200 text-sm">
              ⭐ Certificados reconhecidos pelo Ministério do Trabalho | NRs atualizadas | Instrutores especializados
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;