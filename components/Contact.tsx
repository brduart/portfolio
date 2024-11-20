export default function Contact() {
  return (
    <section id="contato" className=" text-white py-24 ">
      <div className="container mx-auto">
        <div className="md:max-w-xl mx-auto px-4 ">
          {/* Título da seção */}
          <h1 className="text-3xl md:text-3xl font-bold md:text-center mb-12 text-center md:w-full  w-[60%] mx-auto">
            Entre em <span className="text-[#FE2A56] text-5xl">contato</span>
          </h1>

          {/* Formulário */}
          <form className="rounded-lg shadow-lg p-8 space-y-6">
            {/* Campo Nome */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                Nome
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Digite seu nome"
                required
                className="w-full p-3 bg-transparent text-gray-200 border-b border-gray-700 focus:outline-none"
              />
            </div>

            {/* Campo Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Digite seu email"
                required
                className="w-full p-3 bg-transparent text-gray-200 border-b border-gray-700 focus:outline-none"
              />
            </div>

            {/* Campo Mensagem */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Escreva sua mensagem"
                rows={6}
                required
                className="w-full p-3 bg-transparent text-gray-200 border border-gray-700 focus:outline-none rounded-md"
              ></textarea>
            </div>

            {/* Botão de Enviar */}
            <div>
              <button
                type="submit"
                className="w-full bg-indigo-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-indigo-600 transition"
              >
                Enviar
              </button>
            </div>
          </form>

          {/* Informações adicionais */}
          <div className="mt-12 text-center">
            <p className="text-gray-400">Ou entre em contato diretamente pelos canais:</p>
            <div className="mt-4 flex justify-center space-x-6">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-500 hover:text-indigo-400"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-500 hover:text-indigo-400"
              >
                GitHub
              </a>
              <a href="mailto:email@exemplo.com" className="text-indigo-500 hover:text-indigo-400">
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
