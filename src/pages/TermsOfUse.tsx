const TermsOfUse = () => {
  const whatsappLink = 'https://wa.me/5521982134226?text=Olá,%20quero%20saber%20mais%20sobre%20os%20treinamentos!';
  const catalogoLink = '/catalogoempilhaplus.pdf';

  return (
    <div className="container mx-auto px-4 py-20 max-w-3xl">
      <h1 className="text-3xl font-bold mb-6 text-blue-800">Termos de Uso</h1>

      <p className="mb-4">
        Ao utilizar o site da Empilha Plus, você concorda com os termos e condições abaixo. Leia atentamente antes de acessar nossos serviços.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">1. Uso do site</h2>
      <p className="mb-4">
        Você concorda em usar o site apenas para fins legais e de acordo com todas as leis aplicáveis. É proibido usar o site para qualquer atividade ilícita.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">2. Propriedade intelectual</h2>
      <p className="mb-4">
        Todo o conteúdo do site, incluindo textos, imagens, logos e gráficos, é de propriedade da Empilha Plus e protegido por direitos autorais. É proibida a reprodução sem autorização.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">3. Responsabilidades</h2>
      <p className="mb-4">
        Não nos responsabilizamos por danos diretos ou indiretos decorrentes do uso do site ou dos serviços, exceto quando exigido por lei. Você pode acessar nosso catálogo (<a href={catalogoLink} target="_blank" className="text-blue-600 underline">PDF do catálogo</a>) ou entrar em contato para informações adicionais pelo WhatsApp: <a href={whatsappLink} target="_blank" className="text-blue-600 underline">(21) 98213-4226</a>.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">4. Contato</h2>
      <ul className="list-disc list-inside mb-4">
        <li>CNPJ: 35.077.899/0001-25</li>
        <li>Endereço: Av. Brasil, 12.055 - Rio de Janeiro/RJ, CEP: 21012-351</li>
        <li>Telefone/WhatsApp: <a href={whatsappLink} target="_blank" className="text-blue-600 underline">(21) 98213-4226</a></li>
        <li>E-mail: <a href="mailto:empilhaplustreinamentos@gmail.com" className="text-blue-600 underline">empilhaplustreinamentos@gmail.com</a></li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">5. Alterações nos termos</h2>
      <p className="mb-4">
        Podemos alterar estes termos a qualquer momento. Recomendamos que consulte esta página regularmente para se manter informado.
      </p>

      <p className="mt-8 text-gray-600">
        Última atualização: Setembro de 2025
      </p>
    </div>
  );
};

export default TermsOfUse;
