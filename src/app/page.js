import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Navbar */}
      <nav className="bg-gray-900 w-full p-4 shadow-md fixed top-0 left-0 z-10">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          {/* Logo o título */}
          <Link href="/" className="text-white text-xl font-bold">
            Mi Proyecto
          </Link>
          {/* Links */}
          <div className="flex space-x-4">
            <Link href="/nextjs" className="text-gray-300 hover:text-white transition">
              Next.js
            </Link>
            <Link href="/tailwind" className="text-gray-300 hover:text-white transition">
              Tailwind CSS
            </Link>
            <Link href="/sistemas_operativos" className="text-gray-300 hover:text-white transition">
              Tema Libre
            </Link>
          </div>
        </div>
      </nav>

      {/* Contenido principal */}
      <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-700 to-pink-600 text-white p-6 pt-24">
        {/* pt-24 para que no tape el navbar */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Bienvenido a mi primer proyecto con Next.js
        </h1>
        <p className="text-lg md:text-xl mb-10 text-center max-w-2xl">
          Explora qué es Next.js, aprende sobre Tailwind CSS y descubre más sobre tecnología.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full">
          <Link href="/nextjs">
            <div className="bg-white text-gray-900 rounded-xl p-6 shadow-lg hover:scale-105 hover:shadow-2xl transition cursor-pointer text-center">
              <h2 className="text-2xl font-semibold mb-2">¿Qué es Next.js?</h2>
              <p className="text-gray-700">Conoce las características clave de este framework moderno.</p>
            </div>
          </Link>
          <Link href="/tailwind">
            <div className="bg-white text-gray-900 rounded-xl p-6 shadow-lg hover:scale-105 hover:shadow-2xl transition cursor-pointer text-center">
              <h2 className="text-2xl font-semibold mb-2">Tailwind CSS + Ejemplos</h2>
              <p className="text-gray-700">Descubre qué es Tailwind y mira ejemplos prácticos.</p>
            </div>
          </Link>
          <Link href="/Tema_libre">
            <div className="bg-white text-gray-900 rounded-xl p-6 shadow-lg hover:scale-105 hover:shadow-2xl transition cursor-pointer text-center">
              <h2 className="text-2xl font-semibold mb-2">Tema Libre</h2>
              <p className="text-gray-700">Explora información sobre Sistemas Operativos u otro tema de tecnología.</p>
            </div>
          </Link>
        </div>
      </main>
    </>
  );
}
