import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className=" text-white h-[95vh] flex items-center justify-center ">
      <div className="container flex items-center justify-center ">
        <div className="flex items-center justify-center flex-col px-4 p-6 ">
          {/* Imagem */}
          <Image
            alt=""
            src={"/avatar.png"}
            width={110}
            height={110}
            quality={100}
            className="mb-5"
          />
          {/* Títulos */}
          <h1 className="text-[20px] md:text-4xl font-light">Bruno Duarte</h1>
          <h2 className="text-[40px] md:text-6xl font-bold leading-[50px] md:mt-2 text-center">
            Desenvolvedor Full-Stack
          </h2>

          {/* Descrição */}
          <p className="text-[12px] md:text-lg text-gray-300 mt-6 w-[85%] md:max-w-xl mx-auto text-center">
            Se você busca um profissional que deseja crescer na carreira e sempre aprender mais, te
            convido a se conectar comigo.
          </p>

          {/* Links para redes sociais */}
          <div className="flex justify-center space-x-6 mt-8">
            <Link
              href="https://www.linkedin.com/in/br-duarte/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white"
              aria-label="LinkedIn"
            >
              <svg
                className="h-6 w-6"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6 1.12 6 0 4.88 0 3.5 0 2.12 1.12 1 2.5 1c1.38 0 2.5 1.12 2.5 2.5zM0 23.5h5V7.99H0v15.51zM22.23 23.5h-4.77v-7.42c0-1.77-.03-4.06-2.47-4.06-2.47 0-2.85 1.93-2.85 3.93v7.55h-4.76v-15.51h4.57v2.13h.06c.63-1.2 2.17-2.47 4.46-2.47 4.76 0 5.64 3.13 5.64 7.2v8.65z" />
              </svg>
            </Link>
            <Link
              href="https://github.com/brduart"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white "
              aria-label="GitHub"
            >
              <svg
                className="h-6 w-6"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.11.793-.26.793-.577v-2.13c-3.338.724-4.043-1.41-4.043-1.41-.546-1.387-1.333-1.757-1.333-1.757-1.09-.743.083-.728.083-.728 1.204.085 1.838 1.236 1.838 1.236 1.07 1.834 2.807 1.304 3.493.997.108-.776.418-1.305.76-1.605-2.665-.303-5.466-1.333-5.466-5.933 0-1.312.467-2.383 1.236-3.222-.124-.303-.536-1.522.117-3.176 0 0 1.008-.322 3.303 1.23.957-.266 1.983-.398 3.003-.403 1.02.005 2.046.137 3.003.403 2.293-1.552 3.3-1.23 3.3-1.23.654 1.654.242 2.873.118 3.176.77.839 1.235 1.91 1.235 3.222 0 4.61-2.805 5.626-5.475 5.922.429.37.814 1.096.814 2.207v3.277c0 .319.192.692.8.576C20.565 21.8 24 17.3 24 12 24 5.37 18.63 0 12 0z" />
              </svg>
            </Link>
            <Link
              href="mailto:brunoduartdev11@gmail.com"
              className="text-gray-300 hover:text-white "
              aria-label="Email"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="currentColor"
              >
                <path d="M 4 5 C 2.9069372 5 2 5.9069372 2 7 L 2 23 C 2 24.093063 2.9069372 25 4 25 L 26 25 C 27.093063 25 28 24.093063 28 23 L 28 7 C 28 5.9069372 27.093063 5 26 5 L 4 5 z M 6.6992188 7 L 23.300781 7 L 15 13.134766 L 6.6992188 7 z M 5 9.4746094 L 15 16.865234 L 25 9.4746094 L 25 23 L 5 23 L 5 9.4746094 z"></path>
              </svg>
            </Link>
          </div>

          {/* Botão */}
          <div className="mt-12">
            <Link
              href="#contato"
              className="bg-indigo-500 text-white px-7 py-4 rounded-md text-base font-medium hover:bg-indigo-600 transition inline-block"
            >
              Fale comigo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
