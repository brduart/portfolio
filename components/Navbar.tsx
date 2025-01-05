"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [navColor, setnavColor] = useState("transparent");

  const listenScrollEvent = () => {
    return window.scrollY > 10 ? setnavColor("#080614") : setnavColor("transparent");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  return (
    <nav
      className=" text-white fixed top-0 z-50 w-full"
      style={{
        backgroundColor: navColor,
        height: "5rem",
        transition: "all 1s",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex md:justify-center items-center h-20 justify-end">
          <div className="hidden md:flex space-x-16 text-base">
            <Link href="#home" className="hover:text-gray-300">
              Home
            </Link>
            <Link href="#sobre" className="hover:text-gray-300">
              Sobre
            </Link>
            <Link href="#projetos" className="hover:text-gray-300">
              Projetos
            </Link>
            <Link href="#servicos" className="hover:text-gray-300">
              Serviços
            </Link>
            <Link href="#contato" className="hover:text-gray-300">
              Contato
            </Link>
          </div>
          {/* Botão de Menu Hamburguer */}
          <div className="md:hidden rounded-sm">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-md focus:outline-none "
            >
              <svg
                className="h-9 w-9"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menu Dropdown Mobile */}
      {menuOpen && (
        <div className="md:hidden backdrop-blur-xl text-center p-10">
          <a
            href="#home"
            className="block px-4 py-2 hover:bg-gray-600 text-xl"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="#sobre"
            className="block px-4 py-2 hover:bg-gray-600 text-xl"
            onClick={() => setMenuOpen(false)}
          >
            Sobre
          </a>
          <a
            href="#projetos"
            className="block px-4 py-2 hover:bg-gray-600 text-xl"
            onClick={() => setMenuOpen(false)}
          >
            Projetos
          </a>
          <a
            href="#servicos"
            className="block px-4 py-2 hover:bg-gray-600 text-xl"
            onClick={() => setMenuOpen(false)}
          >
            Serviços
          </a>
          <a
            href="#contato"
            className="block px-4 py-2 hover:bg-gray-600 text-xl"
            onClick={() => setMenuOpen(false)}
          >
            Contato
          </a>
        </div>
      )}
    </nav>
  );
}
