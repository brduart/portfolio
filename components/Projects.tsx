import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      title: "",
      description: "",
      link: "",
    },
    {
      title: "",
      description: "",
      link: "",
    },
    {
      title: "",
      description: "",
      link: "",
    },
  ];

  return (
    <section id="projetos" className=" text-white py-24 ">
      <div className="container mx-auto flex items-center justify-center ">
        <div className="max-w-6xl px-4 ">
          {/* Título da seção */}
          <h1 className="text-3xl md:text-3xl font-bold md:text-start mb-12 text-center  md:w-[20%]">
            Projetos <span className="text-indigo-500 text-5xl">inovadores</span>
          </h1>

          {/* Lista de projetos */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-10">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 p-6 cursor-pointer"
              >
                <div className="">
                  {/* <Image alt="" src={} width={350} height={350} className="mb-5" /> */}
                  {/* Título do projeto */}
                  <h2 className="text-2xl font-bold mb-2 text-indigo-500">{project.title}</h2>
                  {/* Descrição */}
                  <p className="text-gray-300 mb-4 text-base py-5">{project.description}</p>
                  {/* Link */}
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-500 hover:text-indigo-400 font-semibold"
                  >
                    Acessar Projeto &rarr;
                  </Link>
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-indigo-400 font-semibold ml-16"
                  >
                    Github &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Botão para ver todos os projetos */}
          <div className="mt-12 text-center">
            <Link
              href="https://github.com/brduart?tab=repositories"
              target="_blank"
              className="bg-indigo-500 text-white px-7 py-4 rounded-md text-base font-medium hover:bg-indigo-600 transition inline-block"
            >
              Ver todos os projetos
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
