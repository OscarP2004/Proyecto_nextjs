import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 gap-6">
      <h1 className="text-3xl font-bold mb-6">Bienvenido a mi primer proyecto con Next.js</h1>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/nextjs"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          ¿Qué es Next.js?
        </Link>
        <Link
          href="/tailwind"
          className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
        >
          TailwindCSS + Ejemplos.
        </Link>

        <Link
          href="/sistemas_operativos"
          className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition"
        >
          Sistemas Operativos.
        </Link>
      </div>
    </main>
  );
}
