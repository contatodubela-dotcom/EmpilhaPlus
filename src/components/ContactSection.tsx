import React, { useState } from 'react';
import emailjs from "emailjs-com"; 
import { 
  Phone, Mail, MapPin, MessageCircle, Send, Clock,
  CheckCircle, User, Building
} from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs.send(
      "service_5okttm9",   // 👈 substitua pelo seu Service ID
      "template_zrpxam8",  // 👈 substitua pelo seu Template ID
      formData,
      "YGeIhFHDyJAKD9VOq"    // 👈 substitua pela sua Public Key
    )
    .then(() => {
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: ''
      });
      setTimeout(() => setIsSubmitted(false), 3000);
    })
    .catch((error) => {
      console.error("Erro ao enviar:", error);
      alert("Erro ao enviar mensagem. Tente novamente.");
    });
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      `Olá! Gostaria de saber mais sobre os treinamentos da Empilha+Plus.\n\nNome: ${formData.name}\nEmpresa: ${formData.company}\nServiço de interesse: ${formData.service}`
    );
    window.open(`https://wa.me/5521982134226?text=${message}`, '_blank');
  };

  const services = [
    'Operação de Empilhadeira',
    'NR-01 - Gerenciamento de Riscos',
    'NR-06 - EPI',
    'NR-12 - Máquinas e Equipamentos',
    'NR-18 - Construção Civil',
    'NR-33 - Espaços Confinados',
    'NR-34 - Atividades com maçarico',
    'NR-35 - Trabalho em Altura',
    'Consultoria em Segurança',
    'Outros'
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-blue-800 mb-6">
              Entre em Contato
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Pronto para dar o próximo passo na sua carreira ou melhorar a segurança da sua empresa? 
              Entre em contato conosco e descubra como podemos ajudar!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-bold text-blue-800 mb-8">Fale Conosco</h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-800 w-12 h-12 rounded-lg flex items-center justify-center">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Telefone</h4>
                    <p className="text-gray-600">(21) 98213-4226</p>
                    <p className="text-sm text-gray-500">Segunda a Sexta, 8h às 18h</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-blue-800 w-12 h-12 rounded-lg flex items-center justify-center">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">E-mail</h4>
                    <p className="text-gray-600">empilhaplustreinamentos@gmail.com</p>
                    <p className="text-sm text-gray-500">Resposta em até 24h</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-blue-800 w-12 h-12 rounded-lg flex items-center justify-center">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Endereço</h4>
                    <p className="text-gray-600">Av Brasil, 12.055</p>
                    <p className="text-gray-600">Rio de Janeiro, RJ - CEP 21012-351</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-blue-800 w-12 h-12 rounded-lg flex items-center justify-center">
                    <Clock className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Horário de Funcionamento</h4>
                    <p className="text-gray-600">Segunda a Sexta: 7h às 18h</p>
                    <p className="text-gray-600">Sábado: 7h às 12h</p>
                  </div>
                </div>
              </div>

              <button
                onClick={handleWhatsApp}
                className="w-full bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300 flex items-center justify-center space-x-2 mb-8"
              >
                <MessageCircle size={24} />
                <span>Falar no WhatsApp</span>
              </button>

              <div className="bg-blue-800 rounded-xl p-6 text-white">
                <h4 className="text-xl font-bold mb-4">Atendimento Rápido</h4>
                <ul className="space-y-2 text-blue-100">
                  <li>✓ Orçamento gratuito em 24h</li>
                  <li>✓ Consultoria sem compromisso</li>
                  <li>✓ Agendamento flexível</li>
                  <li>✓ Treinamento in-company disponível</li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-blue-800 mb-6">Solicite um Orçamento</h3>
              
              {isSubmitted && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6 flex items-center space-x-2">
                  <CheckCircle size={20} />
                  <span>Mensagem enviada com sucesso! Entraremos em contato em breve.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nome Completo *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 text-gray-400" size={20} />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Seu nome"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Empresa
                    </label>
                    <div className="relative">
                      <Building className="absolute left-3 top-3 text-gray-400" size={20} />
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Nome da empresa"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      E-mail *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Telefone *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 text-gray-400" size={20} />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="(11) 99999-9999"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Serviço de Interesse *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Selecione um serviço</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Conte-nos mais sobre sua necessidade..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-800 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300 flex items-center justify-center space-x-2"
                >
                  <Send size={20} />
                  <span>Enviar Solicitação</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
