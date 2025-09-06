import React from 'react';
import { Star, Quote, Building, User } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'João Silva',
      position: 'Operador de Empilhadeira',
      company: 'Logística Brasil Ltda',
      rating: 5,
      text: 'O treinamento da Empilha+Plus foi fundamental para minha carreira. Saí do curso preparado para trabalhar com segurança e confiança. Os instrutores são excelentes!',
      type: 'individual'
    },
    {
      name: 'Ana Costa',
      position: 'Técnica de Segurança',
      company: 'Indústria ABC S.A.',
      rating: 5,
      text: 'Contratamos a Empilha+Plus para treinar nossa equipe em NR-35. O resultado foi excelente! Reduzimos significativamente os incidentes de trabalho em altura.',
      type: 'company'
    },
    {
      name: 'Carlos Mendes',
      position: 'Supervisor de Produção',
      company: 'Construtech Engenharia',
      rating: 5,
      text: 'Profissionais muito competentes e comprometidos. O treinamento em NR-18 foi completo e prático. Recomendo para todas as empresas do setor.',
      type: 'company'
    },
    {
      name: 'Maria Oliveira',
      position: 'Operadora Industrial',
      company: 'Metalúrgica São Paulo',
      rating: 5,
      text: 'Consegui meu emprego graças ao certificado da Empilha+Plus. O treinamento me deu toda a base teórica e prática que precisava. Muito obrigada!',
      type: 'individual'
    },
    {
      name: 'Roberto Santos',
      position: 'Gerente de RH',
      company: 'Transportes Rápidos Ltda',
      rating: 5,
      text: 'Parceria de longa data com a Empilha+Plus. Sempre prestam um serviço de qualidade e nossos funcionários ficam muito bem preparados.',
      type: 'company'
    },
    {
      name: 'Lucas Pereira',
      position: 'Almoxarife',
      company: 'Distribuidora Central',
      rating: 5,
      text: 'Fiz o curso de operação de empilhadeira e hoje trabalho em uma empresa excelente. O treinamento realmente abriu portas na minha vida profissional.',
      type: 'individual'
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={16}
        className={index < rating ? 'text-yellow-500 fill-current' : 'text-gray-300'}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-blue-800 mb-6">
              O Que Nossos Alunos Dizem
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Veja os depoimentos de profissionais que transformaram suas carreiras e empresas que 
              melhoraram sua segurança com nossos treinamentos.
            </p>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-800 mb-2">98%</div>
              <div className="text-gray-600">Satisfação dos Alunos</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-800 mb-2">500+</div>
              <div className="text-gray-600">Profissionais Formados</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-800 mb-2">150+</div>
              <div className="text-gray-600">Empresas Atendidas</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-800 mb-2">4.9</div>
              <div className="text-gray-600 flex items-center justify-center space-x-1">
                <span>Avaliação</span>
                {renderStars(5)}
              </div>
            </div>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300 relative">
                <Quote className="text-blue-200 absolute top-4 right-4" size={32} />
                
                <div className="flex items-center space-x-1 mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-800 w-12 h-12 rounded-full flex items-center justify-center">
                    {testimonial.type === 'company' ? (
                      <Building className="text-white" size={20} />
                    ) : (
                      <User className="text-white" size={20} />
                    )}
                  </div>
                  <div>
                    <div className="font-semibold text-blue-800">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.position}</div>
                    <div className="text-sm text-gray-500">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-blue-800 to-blue-900 rounded-2xl p-8 lg:p-12 text-white">
              <h3 className="text-3xl font-bold mb-4">Seja o Próximo Sucesso!</h3>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                Junte-se aos centenas de profissionais que já transformaram suas carreiras com nossos treinamentos. 
                Sua oportunidade de crescimento está aqui!
              </p>
              <button className="bg-yellow-500 hover:bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300">
                Comece Agora Seu Treinamento
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;