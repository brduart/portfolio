export default function Services() {
  const services = [
    {
      title: "Front-end",
      description:
        "Desenvolvimento de interfaces modernas, responsivas e acessíveis com tecnologias como React, Next.js e TailwindCSS.",
      features: ["UI/UX Interativo", "Performance otimizada", "Experiência responsiva"],
    },
    {
      title: "Back-end",
      description:
        "Criação de APIs robustas, seguras e escaláveis utilizando Node.js, Java, Spring e bancos de dados como MongoDB e PostgreSQL.",
      features: ["APIs RESTful", "Autenticação segura", "Integração com sistemas"],
    },
    {
      title: "Design",
      description:
        "Design centrado no usuário com foco em criar soluções visuais atraentes e funcionais, utilizando ferramentas modernas.",
      features: ["Prototipagem rápida", "Design responsivo", "Identidade visual"],
    },
  ];

  return (
    <section id="servicos" className=" text-white py-24 ">
      <div className="max-w-6xl mx-auto px-4 ">
        {/* Título da seção */}
        <h1 className="text-3xl md:text-3xl font-bold md:text-start mb-12 text-center md:w-[20%] ">
          Serviços <span className="text-[#04C564] text-5xl">oferecidos</span>
        </h1>

        {/* Blocos de serviços */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg shadow-lg p-10 hover:shadow-2xl transition transform hover:-translate-y-1 cursor-pointer"
            >
              {/* Título do serviço */}
              <h2 className="text-2xl font-bold mb-4 text-[#04C564]">{service.title}</h2>
              {/* Descrição */}
              <p className="text-gray-300 mb-4">{service.description}</p>
              {/* Lista de recursos */}
              <ul className="text-gray-400 space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <span className="h-2 w-2 bg-[#04C564] rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Botão de contato 
        <div className="mt-12 text-center c">
          <Link
            href="#"
            className="bg-indigo-500 text-white px-7 py-4 rounded-md text-base font-medium hover:bg-indigo-600 transition"
          >
            Entre em contato
          </Link>
        </div>*/}
      </div>
    </section>
  );
}
