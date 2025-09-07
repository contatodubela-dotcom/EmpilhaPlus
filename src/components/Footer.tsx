import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Instagram, 
  Linkedin,
  MessageCircle,
  Award,
  Shield
} from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whatsappLink = 'https://wa.me/5521982134226?text=Olá,%20quero%20saber%20mais%20sobre%20os%20treinamentos!';

  return (
    <footer className="bg-blue-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center">
                <span className="text-blue-900 font-bold text-xl">E+</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold">Empilha+Plus</h3>
                <p className="text-blue-200">Treinamentos</p>
              </div>
            </div>
            
            <p className="text-blue-100 mb-6 leading-relaxed max-w-md">
              Especializada em treinamentos de segurança do trabalho e capacitação de operadores de empilhadeira. 
              Formamos profissionais capacitados para atuar com segurança e eficiência.
            </p>

            {/* Certifications */}
            <div className="flex items-center space-x-4 mb-6">
              <div className="flex items-center space-x-2">
                <Award className="text-yellow-400" size={20} />
                <span className="text-sm text-blue-100">Certificado MTE</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="text-yellow-400" size={20} />
                <span className="text-sm text-blue-100">ISO 45001</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4">
              <a href="#" className="bg-blue-800 hover:bg-yellow-500 p-2 rounded-lg transition-colors duration-300 group">
                <Facebook className="group-hover:text-blue-900" size={20} />
              </a>
              <a href="#" className="bg-blue-800 hover:bg-yellow-500 p-2 rounded-lg transition-colors duration-300 group">
                <Instagram className="group-hover:text-blue-900" size={20} />
              </a>
              <a href="#" className="bg-blue-800 hover:bg-yellow-500 p-2 rounded-lg transition-colors duration-300 group">
                <Linkedin className="group-hover:text-blue-900" size={20} />
              </a>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="bg-green-600 hover:bg-green-700 p-2 rounded-lg transition-colors duration-300">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-blue-200 hover:text-yellow-400 transition-colors duration-300"
                >
                  Início
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-blue-200 hover:text-yellow-400 transition-colors duration-300"
                >
                  Sobre Nós
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('training')}
                  className="text-blue-200 hover:text-yellow-400 transition-colors duration-300"
                >
                  Treinamentos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('certification')}
                  className="text-blue-200 hover:text-yellow-400 transition-colors duration-300"
                >
                  Certificação
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('testimonials')}
                  className="text-blue-200 hover:text-yellow-400 transition-colors duration-300"
                >
                  Depoimentos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-blue-200 hover:text-yellow-400 transition-colors duration-300"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <Phone className="text-yellow-400 flex-shrink-0" size={18} />
                <span className="text-blue-100">(21) 98213-4226</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="text-yellow-400 flex-shrink-0" size={18} />
                <span className="text-blue-100">empilhaplustreinamentos@gmail.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="text-yellow-400 flex-shrink-0 mt-1" size={18} />
                <div className="text-blue-100">
                  <p>Av. Brasil, 12.055</p>
                  <p>Rio de Janeiro/RJ</p>
                  <p>CEP: 21012-351</p>
                </div>
              </li>
            </ul>

            {/* Business Hours */}
            <div className="mt-6 p-4 bg-blue-800 rounded-lg">
              <h5 className="font-semibold mb-2">Horário de Funcionamento</h5>
              <div className="text-sm text-blue-200 space-y-1">
                <p>Segunda a Sexta: 7h às 18h</p>
                <p>Sábado: 7h às 12h</p>
                <p>Domingo: Fechado</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services List */}
      <div className="bg-blue-800 py-8">
        <div className="container mx-auto px-4">
          <h4 className="text-center text-lg font-semibold mb-4">Nossos Treinamentos</h4>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="text-blue-200">NR-01</span>
            <span className="text-blue-300">•</span>
            <span className="text-blue-200">NR-06</span>
            <span className="text-blue-300">•</span>
            <span className="text-blue-200">NR-12</span>
            <span className="text-blue-300">•</span>
            <span className="text-blue-200">NR-18</span>
            <span className="text-blue-300">•</span>
            <span className="text-blue-200">NR-33</span>
            <span className="text-blue-200">NR-34</span>
            <span className="text-blue-300">•</span>
            <span className="text-blue-200">NR-35</span>
            <span className="text-blue-300">•</span>
            <span className="text-yellow-400 font-semibold">Operador de Empilhadeira</span>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-blue-950 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-blue-200">
            <p>© 2025 Empilha+Plus Treinamentos. Todos os direitos reservados.</p>
            <div className="flex flex-wrap gap-4 mt-2 md:mt-0">
              <a 
                href="/privacy-policy" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-yellow-400 transition-colors"
              >
                Política de Privacidade
              </a>
              <span>•</span>
              <a 
                href="/terms-of-use" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-yellow-400 transition-colors"
              >
                Termos de Uso
              </a>
              <span>•</span>
              <span>CNPJ: 35.077.899/0001-25</span>
              <span>•</span>
              <span>Av. Brasil, 12.055 - Rio de Janeiro/RJ</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
