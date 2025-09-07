
const PrivacyPolicy = () => {
  const whatsappLink = 'https://wa.me/5521982134226?text=Olá,%20quero%20saber%20mais%20sobre%20os%20treinamentos!';
  const catalogoLink = '/catalogoempilhaplus.pdf';

  return (
    <div className="container mx-auto px-4 py-20 max-w-3xl">
      <h1 className="text-3xl font-bold mb-6 text-blue-800">Política de Privacidade</h1>

      <p className="mb-4">
        A Empilha Plus valoriza a sua privacidade. Esta política descreve como coletamos, usamos e protegemos suas informações pessoais quando você utiliza nosso site e serviços.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">1. Coleta de informações</h2>
      <p className="mb-4">
        Podemos coletar informações pessoais, como nome, e-mail, telefone e dados de navegação, quando você utiliza nosso site, se cadastra em nossos serviços ou baixa nosso catálogo (<a href={catalogoLink} target="_blank" className="text-blue-600 underline">PDF do catálogo</a>).
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">2. Uso das informações</h2>
      <p className="mb-4">
        As informações coletadas são utilizadas para fornecer nossos serviços, melhorar sua experiência no site, enviar comunicações relevantes e cumprir obrigações legais.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">3. Compartilhamento de dados</h2>
      <p className="mb-4">
        Não compartilhamos suas informações pessoais com terceiros, exceto quando necessário para cumprir obrigações legais ou para fornecer serviços contratados.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">4. Contato</h2>
      <p className="mb-4">
        Caso tenha dúvidas sobre a nossa política de privacidade, você pode entrar em contato conosco:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>CNPJ: 35.077.899/0001-25</li>
        <li>Endereço: Av. Brasil, 12.055 - Rio de Janeiro/RJ, CEP: 21012-351</li>
        <li>Telefone/WhatsApp: <a href={whatsappLink} target="_blank" className="text-blue-600 underline">(21) 98213-4226</a></li>
        <li>E-mail: <a href="mailto:empilhaplustreinamentos@gmail.com" className="text-blue-600 underline">empilhaplustreinamentos@gmail.com</a></li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">5. Segurança</h2>
      <p className="mb-4">
        Adotamos medidas técnicas e administrativas para proteger suas informações contra acessos não autorizados, alterações, divulgações ou destruição.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">6. Alterações nesta política</h2>
      <p className="mb-4">
        Podemos atualizar esta política periodicamente. Recomendamos que revise esta página regularmente para estar ciente de quaisquer mudanças.
      </p>

      <p className="mt-8 text-gray-600">
        Última atualização: Setembro de 2025
      </p>
    </div>
  );
};

export default PrivacyPolicy;
