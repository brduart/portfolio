import Link from "next/link";

export default function About() {
  return (
    <section id="sobre" className="bg-gray-900 text-white py-24 ">
      <div className="container mx-auto ">
        <div className="px-4 text-center flex items-center justify-center flex-col ">
          {/* Saudação */}
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Olá, <br /> <span className="text-2xl">me chamo Bruno</span>
          </h1>

          {/* Texto de apresentação */}
          <p className="text-[15px] md:text-[16px] md:w-[50%] text-gray-300 leading-relaxed italic p-5">
            Sou desenvolvedor Fullstack. Sou apaixonado pela área de tecnologia e estou sempre
            aprendendo mais para poder colaborar em projetos que façam a diferença na vida das
            pessoas.
            <br />
            <br />
            Meu objetivo é contribuir em grandes projetos e me tornar um desenvolvedor cada vez
            melhor.
          </p>

          {/* Informações adicionais */}
          <div className="mt-8 grid grid-cols-3 md:grid-cols-3 gap-5">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-indigo-500">10+</h2>
              <p className="text-gray-400 mt-2">Projetos Completos</p>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-indigo-500">3</h2>
              <p className="text-gray-400 mt-2">Anos de Experiência</p>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-indigo-500">∞</h2>
              <p className="text-gray-400 mt-2">Linhas de Código</p>
            </div>
          </div>

          {/* Botão de contato */}
          <div className="mt-16">
            <Link
              href="#contato"
              className="bg-indigo-500 text-white px-7 py-4 rounded-md text-base font-medium hover:bg-indigo-600 transition inline-block"
            >
              Entre em Contato
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
